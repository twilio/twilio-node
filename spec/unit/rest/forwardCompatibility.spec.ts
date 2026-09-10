import { MessageInstance } from "../../../src/rest/api/v2010/account/message";
import {
  ChannelsSenderInstance,
  MessagingV2ChannelsSenderConfiguration,
  MessagingV2ChannelsSenderWebhook,
  MessagingV2ChannelsSenderProfileGenericResponse,
  MessagingV2ChannelsSenderProperties,
  MessagingV2ChannelsSenderOfflineReasonsItems,
  MessagingV2RcsComplianceResponse,
} from "../../../src/rest/messaging/v2/channelsSender";
import {
  RecallInstance,
  RecallObservationInfo,
  RecallSummaryInfo,
  Communication,
  MemoryRetrievalResponseMeta,
} from "../../../src/rest/memory/v1/recall";

function buildBaseMessagePayload(): Record<string, any> {
  return {
    body: "Hello, World!",
    num_segments: "1",
    direction: "outbound-api",
    from: "+15558881111",
    to: "+15559992222",
    date_updated: "Thu, 30 Jul 2015 20:00:00 +0000",
    price: "-0.00750",
    error_message: null,
    uri: "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json",
    account_sid: "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    num_media: "0",
    status: "sent",
    messaging_service_sid: "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    sid: "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    date_sent: "Thu, 30 Jul 2015 20:00:00 +0000",
    date_created: "Thu, 30 Jul 2015 20:00:00 +0000",
    error_code: null,
    price_unit: "USD",
    api_version: "2010-04-01",
    subresource_uris: {
      media:
        "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Media.json",
    },
  };
}

function buildBaseChannelsSenderPayload(): Record<string, any> {
  return {
    sid: "XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    status: "ONLINE",
    sender_id: "whatsapp:+15558881111",
    friendly_name: "My WhatsApp Sender",
    configuration: {
      waba_id: "WABA123",
      verification_method: "sms",
      verification_code: null,
      voice_application_sid: null,
      account_type: null,
    },
    webhook: {
      callback_url: "https://example.com/callback",
      callback_method: "POST",
      fallback_url: "https://example.com/fallback",
      fallback_method: "POST",
      status_callback_url: "https://example.com/status",
      status_callback_method: "POST",
    },
    profile: {
      name: "My Business",
      about: "We sell things",
      address: "123 Main St",
      description: "A business",
      logo_url: "https://example.com/logo.png",
      banner_url: null,
      privacy_url: "https://example.com/privacy",
      terms_of_service_url: null,
      accent_color: "#FF0000",
      use_case: "TRANSACTIONAL",
      vertical: "Shopping and Retail",
      websites: [{ website: "https://example.com", label: "Main" }],
      emails: [{ email: "info@example.com", label: "Info" }],
      phone_numbers: [{ phone_number: "+15558881111", label: "Support" }],
    },
    properties: {
      quality_rating: "GREEN",
      messaging_limit: "1000",
    },
    offline_reasons: [
      {
        code: "12345",
        message: "Some offline reason",
        more_info: "https://example.com/error",
      },
    ],
    compliance: {
      registration_sid: "CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      countries: [
        {
          country: "US",
          registration_sid: "CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
          status: "APPROVED",
          carriers: [{ name: "Verizon", status: "APPROVED" }],
        },
      ],
    },
    url: "https://messaging.twilio.com/v2/Channels/Senders/XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  };
}

function buildBaseRecallPayload(): Record<string, any> {
  return {
    observations: [
      {
        content: "User prefers email communication",
        occurredAt: "2025-01-15T10:30:00Z",
        source: "conversation-analysis",
        conversationIds: ["conv_123"],
        id: "obs_001",
        createdAt: "2025-01-15T10:30:00Z",
        updatedAt: "2025-01-15T10:30:00Z",
        score: 0.95,
      },
    ],
    summaries: [
      {
        source: "auto-summarizer",
        content: "Customer discussed billing concerns",
        occurredAt: "2025-01-14T09:00:00Z",
        conversationId: "conv_456",
        id: "sum_001",
        createdAt: "2025-01-14T09:00:00Z",
        updatedAt: "2025-01-14T09:00:00Z",
        score: 0.88,
      },
    ],
    communications: [
      {
        id: "comm_001",
        channelId: "CH123",
        content: { text: "Hello, how can I help?" },
        createdAt: "2025-01-15T10:00:00Z",
        updatedAt: "2025-01-15T10:00:00Z",
        author: {
          id: "agent_001",
          name: "Agent Smith",
          type: "HUMAN_AGENT",
          profileId: "prof_001",
          address: "+15558881111",
          channel: "sms",
        },
        recipients: [
          {
            id: "cust_001",
            name: "John Doe",
            type: "CUSTOMER",
            profileId: "prof_002",
            address: "+15559992222",
            channel: "sms",
            deliveryStatus: "delivered",
          },
        ],
      },
    ],
    meta: {
      queryTime: 42,
    },
  };
}

const mockVersion: any = {};

describe("Forward Compatibility Tests", () => {
  // ─────────────────────────────────────────────────────────────────────
  // MessageResource (flat)
  // ─────────────────────────────────────────────────────────────────────
  describe("MessageResource (flat)", () => {
    it("should deserialize with an extra field at the parent level", () => {
      const payload = {
        ...buildBaseMessagePayload(),
        new_unknown_field: "some-value",
        another_future_field: 12345,
      };

      const instance = new MessageInstance(
        mockVersion,
        payload,
        "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      );

      expect(instance.body).toBe("Hello, World!");
      expect(instance.sid).toBe("SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
      expect(instance.status).toBe("sent");
      expect(instance.direction).toBe("outbound-api");
      expect(instance.from).toBe("+15558881111");
      expect(instance.to).toBe("+15559992222");
      expect(instance.numSegments).toBe("1");
      expect(instance.price).toBe("-0.00750");
      expect(instance.priceUnit).toBe("USD");
    });

    it("should deserialize with a removed field at the parent level", () => {
      const payload = buildBaseMessagePayload();
      delete payload.error_message;
      delete payload.price;
      delete payload.num_media;

      const instance = new MessageInstance(
        mockVersion,
        payload,
        "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      );

      expect(instance.body).toBe("Hello, World!");
      expect(instance.sid).toBe("SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
      expect(instance.errorMessage).toBeUndefined();
      expect(instance.price).toBeUndefined();
      expect(instance.numMedia).toBeUndefined();
      expect(instance.status).toBe("sent");
    });

    it("should deserialize with an unknown enum value at the parent level", () => {
      const payload = {
        ...buildBaseMessagePayload(),
        status: "future_unknown_status",
        direction: "outbound-future",
      };

      const instance = new MessageInstance(
        mockVersion,
        payload,
        "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      );

      expect(instance.status).toBe("future_unknown_status");
      expect(instance.direction).toBe("outbound-future");
      expect(instance.body).toBe("Hello, World!");
      expect(instance.sid).toBe("SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    });

    it("should handle an empty response body", () => {
      const payload: Record<string, any> = {};

      const instance = new MessageInstance(
        mockVersion,
        payload as any,
        "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      );

      expect(instance.body).toBeUndefined();
      expect(instance.sid).toBeUndefined();
      expect(instance.status).toBeUndefined();
      expect(instance.direction).toBeUndefined();
      expect(instance.from).toBeUndefined();
      expect(instance.to).toBeUndefined();

      const json = instance.toJSON();
      expect(json).toBeDefined();
    });
  });

  // ─────────────────────────────────────────────────────────────────────
  // ChannelsSenderResource (nested, top-level)
  // ─────────────────────────────────────────────────────────────────────
  describe("ChannelsSenderResource (nested)", () => {
    it("should deserialize with an extra field at a nested level", () => {
      const payload = buildBaseChannelsSenderPayload();
      payload.configuration.future_config_field = "new-value";
      payload.profile.future_profile_field = "new-profile-value";
      payload.webhook.future_webhook_field = true;
      payload.properties.future_properties_field = 999;
      payload.offline_reasons[0].future_offline_field = "extra";
      payload.compliance.future_compliance_field = "extra";
      payload.compliance.countries[0].future_country_field = "extra";

      const instance = new ChannelsSenderInstance(
        mockVersion,
        payload as any,
        "XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      );

      expect(instance.sid).toBe("XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
      expect(instance.status).toBe("ONLINE");
      expect(instance.configuration).toBeInstanceOf(
        MessagingV2ChannelsSenderConfiguration
      );
      expect(instance.configuration.wabaId).toBe("WABA123");
      expect(instance.webhook.callbackUrl).toBe(
        "https://example.com/callback"
      );
      expect(instance.profile.name).toBe("My Business");
      expect(instance.properties.qualityRating).toBe("GREEN");
      expect(instance.offlineReasons).toHaveLength(1);
      expect(instance.offlineReasons[0].code).toBe("12345");
    });

    it("should deserialize with a removed field inside a nested object (2 levels deep)", () => {
      const payload = buildBaseChannelsSenderPayload();
      delete payload.configuration.waba_id;
      delete payload.configuration.verification_method;
      delete payload.profile.logo_url;
      delete payload.profile.accent_color;
      delete payload.webhook.fallback_url;
      delete payload.webhook.fallback_method;

      const instance = new ChannelsSenderInstance(
        mockVersion,
        payload as any,
        "XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      );

      expect(instance.sid).toBe("XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
      expect(instance.configuration).toBeInstanceOf(
        MessagingV2ChannelsSenderConfiguration
      );
      expect(instance.configuration.wabaId).toBeUndefined();
      expect(instance.configuration.verificationMethod).toBeUndefined();
      expect(instance.profile.logoUrl).toBeUndefined();
      expect(instance.profile.accentColor).toBeUndefined();
      expect(instance.webhook.fallbackUrl).toBeUndefined();
      expect(instance.webhook.fallbackMethod).toBeUndefined();
      expect(instance.webhook.callbackUrl).toBe(
        "https://example.com/callback"
      );
    });

    it("should deserialize with a whole nested object removed", () => {
      const payload = buildBaseChannelsSenderPayload();
      payload.configuration = null;
      payload.webhook = null;
      payload.profile = null;
      payload.properties = null;
      payload.offline_reasons = null;
      payload.compliance = null;

      const instance = new ChannelsSenderInstance(
        mockVersion,
        payload as any,
        "XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      );

      expect(instance.sid).toBe("XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
      expect(instance.status).toBe("ONLINE");
      expect(instance.configuration).toBeNull();
      expect(instance.webhook).toBeNull();
      expect(instance.profile).toBeNull();
      expect(instance.properties).toBeNull();
      expect(instance.offlineReasons).toBeNull();
      expect(instance.compliance).toBeNull();

      const json = instance.toJSON();
      expect(json).toBeDefined();
      expect(json.sid).toBe("XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    });

    it("should deserialize with a new item appended to a nested list", () => {
      const payload = buildBaseChannelsSenderPayload();
      payload.offline_reasons.push({
        code: "67890",
        message: "Another reason",
        more_info: "https://example.com/error2",
        brand_new_field: "surprise",
      });
      payload.profile.websites.push({
        website: "https://other.example.com",
        label: "Other",
        future_field: "unexpected",
      });
      payload.compliance.countries.push({
        country: "GB",
        registration_sid: "CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        status: "APPROVED",
        carriers: [
          { name: "EE", status: "APPROVED" },
          { name: "Three", status: "CARRIER_REVIEW" },
        ],
      });

      const instance = new ChannelsSenderInstance(
        mockVersion,
        payload as any,
        "XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      );

      expect(instance.offlineReasons).toHaveLength(2);
      expect(instance.offlineReasons[0].code).toBe("12345");
      expect(instance.offlineReasons[1].code).toBe("67890");
      expect(instance.offlineReasons[1].message).toBe("Another reason");

      expect(instance.profile.websites).toHaveLength(2);
      expect(instance.profile.websites[0].website).toBe(
        "https://example.com"
      );
      expect(instance.profile.websites[1].website).toBe(
        "https://other.example.com"
      );
    });

    it("should deserialize with unknown enum values at nested level and inside list items", () => {
      const payload = buildBaseChannelsSenderPayload();
      payload.status = "FUTURE_UNKNOWN_STATUS";
      payload.compliance.countries[0].status = "FUTURE_COUNTRY_STATUS";
      payload.compliance.countries[0].carriers[0].status =
        "FUTURE_CARRIER_STATUS";

      const instance = new ChannelsSenderInstance(
        mockVersion,
        payload as any,
        "XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      );

      expect(instance.status).toBe("FUTURE_UNKNOWN_STATUS");
      expect(instance.sid).toBe("XEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
      expect(instance.senderId).toBe("whatsapp:+15558881111");
      expect(instance.configuration.wabaId).toBe("WABA123");
    });
  });

  // ─────────────────────────────────────────────────────────────────────
  // RecallCreateResource (nested, operation-specific)
  // ─────────────────────────────────────────────────────────────────────
  describe("RecallCreateResource (nested)", () => {
    it("should deserialize with extra fields at parent and nested levels including inside list items", () => {
      const payload = buildBaseRecallPayload();
      payload.future_top_level_field = "extra-top";
      payload.observations[0].future_obs_field = "extra-obs";
      payload.summaries[0].future_sum_field = "extra-sum";
      payload.communications[0].future_comm_field = "extra-comm";
      payload.communications[0].author.future_author_field = "extra-author";
      payload.communications[0].recipients[0].future_recipient_field =
        "extra-recipient";
      payload.communications[0].content.future_content_field =
        "extra-content";
      payload.meta.future_meta_field = 999;

      const instance = new RecallInstance(
        mockVersion,
        payload as any,
        "store_001",
        "prof_001"
      );

      expect(instance.observations).toHaveLength(1);
      expect(instance.observations[0]).toBeInstanceOf(RecallObservationInfo);
      expect(instance.observations[0].content).toBe(
        "User prefers email communication"
      );
      expect(instance.observations[0].score).toBe(0.95);

      expect(instance.summaries).toHaveLength(1);
      expect(instance.summaries[0]).toBeInstanceOf(RecallSummaryInfo);
      expect(instance.summaries[0].content).toBe(
        "Customer discussed billing concerns"
      );

      expect(instance.communications).toHaveLength(1);
      expect(instance.communications[0]).toBeInstanceOf(Communication);
      expect(instance.communications[0].id).toBe("comm_001");
      expect(instance.communications[0].author.name).toBe("Agent Smith");
      expect(instance.communications[0].recipients[0].name).toBe("John Doe");

      expect(instance.meta).toBeInstanceOf(MemoryRetrievalResponseMeta);
      expect(instance.meta.queryTime).toBe(42);
    });

    it("should deserialize with removed fields at parent and inside nested objects (2 levels deep)", () => {
      const payload = buildBaseRecallPayload();
      delete payload.observations[0].score;
      delete payload.observations[0].conversationIds;
      delete payload.summaries[0].source;
      delete payload.summaries[0].score;
      delete payload.communications[0].channelId;
      delete payload.communications[0].updatedAt;
      delete payload.communications[0].author.profileId;
      delete payload.communications[0].recipients[0].deliveryStatus;
      delete payload.communications[0].recipients[0].profileId;
      delete payload.communications[0].content.text;

      const instance = new RecallInstance(
        mockVersion,
        payload as any,
        "store_001",
        "prof_001"
      );

      expect(instance.observations).toHaveLength(1);
      expect(instance.observations[0].content).toBe(
        "User prefers email communication"
      );
      expect(instance.observations[0].score).toBeUndefined();
      expect(instance.observations[0].conversationIds).toBeUndefined();

      expect(instance.summaries).toHaveLength(1);
      expect(instance.summaries[0].content).toBe(
        "Customer discussed billing concerns"
      );
      expect(instance.summaries[0].source).toBeUndefined();
      expect(instance.summaries[0].score).toBeUndefined();

      expect(instance.communications).toHaveLength(1);
      expect(instance.communications[0].channelId).toBeUndefined();
      expect(instance.communications[0].updatedAt).toBeUndefined();
      expect(instance.communications[0].author.profileId).toBeUndefined();
      expect(instance.communications[0].recipients[0].deliveryStatus).toBeUndefined();
      expect(instance.communications[0].recipients[0].profileId).toBeUndefined();
      expect(instance.communications[0].content.text).toBeUndefined();

      const json = instance.toJSON();
      expect(json).toBeDefined();
      expect(json.observations).toHaveLength(1);
    });

    it("should deserialize with unknown enum values inside nested list items", () => {
      const payload = buildBaseRecallPayload();
      payload.communications[0].author.type = "FUTURE_AGENT_TYPE";
      payload.communications[0].recipients[0].type = "FUTURE_RECIPIENT_TYPE";

      const instance = new RecallInstance(
        mockVersion,
        payload as any,
        "store_001",
        "prof_001"
      );

      expect(instance.communications).toHaveLength(1);
      expect(instance.communications[0].author.type).toBe(
        "FUTURE_AGENT_TYPE"
      );
      expect(instance.communications[0].recipients[0].type).toBe(
        "FUTURE_RECIPIENT_TYPE"
      );
      expect(instance.communications[0].author.name).toBe("Agent Smith");
      expect(instance.communications[0].recipients[0].name).toBe("John Doe");
      expect(instance.communications[0].id).toBe("comm_001");
    });
  });
});
