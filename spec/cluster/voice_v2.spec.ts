jest.setTimeout(30000);

import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const testClient = twilio(accountSid, authToken);

let transcriptionId: string;
let recordingId: string;

describe("Voice V2 Recording and Transcription Configurations", () => {
  test("Should create a Transcription Configuration", async () => {
    const transcription = await testClient.voice.v2.transcription.create({
      uniqueName: "cluster-test-transcription",
      description: "Cluster test transcription configuration",
      configuration: {
        configurationType: "Transcription",
        transcriptionEngine: "deepgram",
        speechModel: "nova-3",
        language: "en-US",
        transcriptionStatusCallback: {
          url: "https://example.com/transcription-status",
          method: "POST",
        },
        participantDefaults: [
          {
            audioChannelIndex: 1,
            type: "CUSTOMER",
          },
          {
            audioChannelIndex: 2,
            type: "HUMAN_AGENT",
          },
        ],
      },
    } as any);

    expect(transcription).not.toBeNull();
    expect(transcription.id).toBeDefined();
    expect(transcription.description).toBe(
      "Cluster test transcription configuration",
    );
    expect(transcription.configuration).not.toBeNull();
    expect(transcription.configuration.configurationType).toBe(
      "Transcription",
    );
    expect(transcription.configuration.transcriptionEngine).toBe("deepgram");
    expect(transcription.configuration.speechModel).toBe("nova-3");
    expect(transcription.configuration.language).toBe("en-US");

    transcriptionId = transcription.id;
  });

  test("Should create a Recording Configuration", async () => {
    const recording = await testClient.voice.v2.recording.create({
      uniqueName: "cluster-test-recording",
      description: "Cluster test recording configuration",
      configuration: {
        configurationType: "Recording",
        compositionPolicy: {
          channels: "dual",
          trim: "trim-silence",
          track: "both",
        },
        callRecordingStatusCallback: {
          url: "https://example.com/recording-status",
          method: "POST",
          events: ["completed", "failed"],
        },
        conferenceRecordingStatusCallback: {
          url: "https://example.com/conference-recording-status",
          method: "POST",
          events: ["completed"],
        },
        features: [
          {
            type: "transcriptionConfiguration",
            featureId: transcriptionId,
            description: "Automatic transcription for recordings",
          },
        ],
      },
    } as any);

    expect(recording).not.toBeNull();
    expect(recording.id).toBeDefined();
    expect(recording.description).toBe(
      "Cluster test recording configuration",
    );
    expect(recording.configuration).not.toBeNull();
    expect(recording.configuration.configurationType).toBe("Recording");
    expect(recording.configuration.compositionPolicy?.channels).toBe("dual");
    expect(recording.configuration.features!).toHaveLength(1);
    expect(recording.configuration.features![0].featureId).toBe(
      transcriptionId,
    );

    recordingId = recording.id;
  });

  test("Should fetch a Recording Configuration by ID", async () => {
    const recording = await testClient.voice.v2
      .recording(recordingId)
      .fetch();

    expect(recording).not.toBeNull();
    expect(recording.id).toBe(recordingId);
    expect(recording.description).toBe(
      "Cluster test recording configuration",
    );
    expect(recording.dateCreated).toBeDefined();
    expect(recording.dateUpdated).toBeDefined();
    expect(recording.configuration).not.toBeNull();
    expect(recording.configuration.configurationType).toBe("Recording");
  });

  test("Should list Recording Configurations", async () => {
    const recordings = await testClient.voice.v2.recording.list({
      pageSize: 10,
    });

    expect(recordings).not.toBeNull();
    expect(recordings.length).toBeGreaterThanOrEqual(1);

    const found = recordings.find((r: any) => r.id === recordingId);
    expect(found).toBeDefined();
  });

  test("Should list Transcription Configurations", async () => {
    const transcriptions = await testClient.voice.v2.transcription.list({
      pageSize: 10,
    });

    expect(transcriptions).not.toBeNull();
    expect(transcriptions.length).toBeGreaterThanOrEqual(1);

    const found = transcriptions.find((t: any) => t.id === transcriptionId);
    expect(found).toBeDefined();
  });

  test("Should list Configurations by Type (parent resource)", async () => {
    const configPage = await testClient.voice.v2
      .configurations("Recording")
      .page({ pageSize: 10 });

    expect(configPage).not.toBeNull();
  });

  test("Should set and fetch Default Recording Configuration", async () => {
    // POST /v2/Configurations/{Type}/Default (child of /Configurations/{Type})
    try {
      await testClient.voice.v2.configurations("Recording").default.create({
        configuration_id: recordingId,
      } as any);
    } catch (e: any) {
      // API returns 204 No Content; SDK may throw on empty body parse
      if (e.status && e.status !== 204) throw e;
    }

    // GET /v2/Configurations/{Type}/Default
    const defaultConfig = await testClient.voice.v2
      .configurations("Recording")
      .default.fetch();

    expect(defaultConfig).not.toBeNull();
    expect(defaultConfig.id).toBe(recordingId);
    expect(defaultConfig.configuration).not.toBeNull();
  });

  test("Should set and fetch Default Transcription Configuration", async () => {
    // POST /v2/Configurations/{Type}/Default
    try {
      await testClient.voice.v2
        .configurations("Transcription")
        .default.create({
          configuration_id: transcriptionId,
        } as any);
    } catch (e: any) {
      if (e.status && e.status !== 204) throw e;
    }

    // GET /v2/Configurations/Transcription/Default
    const defaultConfig = await testClient.voice.v2
      .configurations("Transcription")
      .default.fetch();

    expect(defaultConfig).not.toBeNull();
    expect(defaultConfig.id).toBe(transcriptionId);
    expect(defaultConfig.configuration).not.toBeNull();
  });

  test("Should delete Recording and Transcription Configurations that are not defaults", async () => {
    // Create configs specifically for deletion (not set as default)
    const deleteTranscription = await testClient.voice.v2.transcription.create({
      description: "Config to delete",
      configuration: {
        configurationType: "Transcription",
        transcriptionEngine: "deepgram",
        speechModel: "nova-3",
        language: "en-US",
        transcriptionStatusCallback: {
          url: "https://example.com/status",
          method: "POST",
        },
        participantDefaults: [
          { audioChannelIndex: 1, type: "CUSTOMER" },
          { audioChannelIndex: 2, type: "HUMAN_AGENT" },
        ],
      },
    } as any);

    const deleteRecording = await testClient.voice.v2.recording.create({
      description: "Config to delete",
      configuration: {
        configurationType: "Recording",
        compositionPolicy: { channels: "dual", trim: "trim-silence", track: "both" },
        callRecordingStatusCallback: { url: "https://example.com/status", method: "POST", events: ["completed"] },
        features: [
          { type: "transcriptionConfiguration", featureId: deleteTranscription.id, description: "temp" },
        ],
      },
    } as any);

    const removedRecording = await testClient.voice.v2
      .recording(deleteRecording.id)
      .remove();
    expect(removedRecording).toBeTruthy();

    const removedTranscription = await testClient.voice.v2
      .transcription(deleteTranscription.id)
      .remove();
    expect(removedTranscription).toBeTruthy();
  });
});
