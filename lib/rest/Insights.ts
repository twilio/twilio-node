import {CallListInstance} from "./insights/v1/call";
import {CallSummariesListInstance} from "./insights/v1/callSummaries";
import {ConferenceListInstance} from "./insights/v1/conference";
import {RoomListInstance} from "./insights/v1/room";
import {SettingListInstance} from "./insights/v1/setting";
import InsightsBase from "./InsightsBase";

class Insights extends InsightsBase {
    /**
     * @deprecated - Use v1.settings instead
     */
    get settings(): SettingListInstance {
        console.warn('settings is deprecated. Use v1.settings instead.');
        return this.v1.settings;
    }

    /**
     * @deprecated - Use v1.calls instead
     */
    get calls(): CallListInstance {
        console.warn('calls is deprecated. Use v1.calls instead.');
        return this.v1.calls;
    }

    /**
     * @deprecated - Use v1.callSummaries instead
     */
    get callSummaries(): CallSummariesListInstance {
        console.warn('callSummaries is deprecated. Use v1.callSummaries instead.');
        return this.v1.callSummaries;
    }

    /**
     * @deprecated - Use v1.conferences instead
     */
    get conferences(): ConferenceListInstance {
        console.warn('conferences is deprecated. Use v1.conferences instead.');
        return this.v1.conferences;
    }

    /**
     * @deprecated - Use v1.rooms instead
     */
    get rooms(): RoomListInstance {
        console.warn('rooms is deprecated. Use v1.rooms instead.');
        return this.v1.rooms;
    }
}

export = Insights;
