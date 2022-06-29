/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
'use strict'

import Domain from '../base/Domain';
import V1 from './voice/V1';

export default class VoiceBase extends Domain {
    _v1: V1;

    /**
     * Initialize voice domain
     *
     * @param twilio - The twilio client
     */
    constructor(twilio: any) {
        super(twilio, 'https://voice.twilio.com');
    }

    get v1(): V1 {
        this._v1 = this._v1 || new V1(this);
        return this._v1;
    }
}
