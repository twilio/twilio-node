import {ExportListInstance} from "./preview/bulk_exports/export";
import {ExportConfigurationListInstance} from "./preview/bulk_exports/exportConfiguration";
import {FleetListInstance} from "./preview/deployed_devices/fleet";
import {AuthorizationDocumentListInstance} from "./preview/hosted_numbers/authorizationDocument";
import {HostedNumberOrderListInstance} from "./preview/hosted_numbers/hostedNumberOrder";
import {AvailableAddOnListInstance} from "./preview/marketplace/availableAddOn";
import {InstalledAddOnListInstance} from "./preview/marketplace/installedAddOn";
import {ServiceListInstance} from "./preview/sync/service";
import {BrandedChannelListInstance} from "./preview/trusted_comms/brandedChannel";
import {BrandsInformationListInstance} from "./preview/trusted_comms/brandsInformation";
import {CurrentCallListInstance} from "./preview/trusted_comms/currentCall";
import {AssistantListInstance} from "./preview/understand/assistant";
import {CommandListInstance} from "./preview/wireless/command";
import {RatePlanListInstance} from "./preview/wireless/ratePlan";
import {SimListInstance} from "./preview/wireless/sim";
import PreviewBase from "./PreviewBase";

export default class Preview extends PreviewBase {
    /**
     * @deprecated - Use bulk_exports.exports instead
     */
    get exports(): ExportListInstance {
        console.warn('exports is deprecated. Use bulk_exports.exports instead.');
        return this.bulk_exports.exports;
    }

    /**
     * @deprecated - Use bulk_exports.exportConfiguration instead
     */
    get exportConfiguration(): ExportConfigurationListInstance {
        console.warn('exportConfiguration is deprecated. Use bulk_exports.exportConfiguration instead.');
        return this.bulk_exports.exportConfiguration;
    }

    /**
     * @deprecated - Use deployed_devices.fleets instead
     */
    get fleets(): FleetListInstance {
        console.warn('fleets is deprecated. Use deployed_devices.fleets instead.');
        return this.deployed_devices.fleets;
    }

    /**
     * @deprecated - Use hosted_numbers.authorizationDocuments instead
     */
    get authorizationDocuments(): AuthorizationDocumentListInstance {
        console.warn('authorizationDocuments is deprecated. Use hosted_numbers.authorizationDocuments instead.');
        return this.hosted_numbers.authorizationDocuments;
    }

    /**
     * @deprecated - Use hosted_numbers.hostedNumberOrders instead
     */
    get hostedNumberOrders(): HostedNumberOrderListInstance {
        console.warn('hostedNumberOrders is deprecated. Use hosted_numbers.hostedNumberOrders instead.');
        return this.hosted_numbers.hostedNumberOrders;
    }

    /**
     * @deprecated - Use marketplace.availableAddOns instead
     */
    get availableAddOns(): AvailableAddOnListInstance {
        console.warn('availableAddOns is deprecated. Use marketplace.availableAddOns instead.');
        return this.marketplace.availableAddOns;
    }

    /**
     * @deprecated - Use marketplace.installedAddOns instead
     */
    get installedAddOns(): InstalledAddOnListInstance {
        console.warn('installedAddOns is deprecated. Use marketplace.installedAddOns instead.');
        return this.marketplace.installedAddOns;
    }

    /**
     * @deprecated - Use sync.services instead
     */
    get services(): ServiceListInstance {
        console.warn('services is deprecated. Use sync.services instead.');
        return this.sync.services;
    }

    /**
     * @deprecated - Use understand.assistants instead
     */
    get assistants(): AssistantListInstance {
        console.warn('assistants is deprecated. Use understand.assistants instead.');
        return this.understand.assistants;
    }

    /**
     * @deprecated - Use wireless.commands instead
     */
    get commands(): CommandListInstance {
        console.warn('commands is deprecated. Use wireless.commands instead.');
        return this.wireless.commands;
    }

    /**
     * @deprecated - Use wireless.ratePlans instead
     */
    get ratePlans(): RatePlanListInstance {
        console.warn('ratePlans is deprecated. Use wireless.ratePlans instead.');
        return this.wireless.ratePlans;
    }

    /**
     * @deprecated - Use wireless.sims instead
     */
    get sims(): SimListInstance {
        console.warn('sims is deprecated. Use wireless.sims instead.');
        return this.wireless.sims;
    }

    /**
     * @deprecated - Use trusted_comms.brandedChannels instead
     */
    get brandedChannels(): BrandedChannelListInstance {
        console.warn('brandedChannels is deprecated. Use trusted_comms.brandedChannels instead.');
        return this.trusted_comms.brandedChannels;
    }

    /**
     * @deprecated - Use trusted_comms.brandsInformation instead
     */
    get brandsInformation(): BrandsInformationListInstance {
        console.warn('brandsInformation is deprecated. Use trusted_comms.brandsInformation instead.');
        return this.trusted_comms.brandsInformation;
    }

    /**
     * @deprecated - Use trusted_comms.cps instead
     */
    get cps(): CpListInstance {
        console.warn('cps is deprecated. Use trusted_comms.cps instead.');
        return this.trusted_comms.cps;
    }

    /**
     * @deprecated - Use trusted_comms.currentCalls instead
     */
    get currentCalls(): CurrentCallListInstance {
        console.warn('currentCalls is deprecated. Use trusted_comms.currentCalls instead.');
        return this.trusted_comms.currentCalls;
    }
}
