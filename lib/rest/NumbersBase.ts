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
import V2 from './numbers/V2';

export default class NumbersBase extends Domain {
    _v2: V2;

    /**
     * Initialize numbers domain
     *
     * @param twilio - The twilio client
     */
    constructor(twilio: any) {
        super(twilio, 'https://numbers.twilio.com');
    }

    get v2(): V2 {
        this._v2 = this._v2 || new V2(this);
        return this._v2;
    }
}
