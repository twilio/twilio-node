import {ServiceListInstance} from "./serverless/v1/service";
import ServerlessBase from "./ServerlessBase";

class Serverless extends ServerlessBase {
    /**
     * @deprecated - Use v1.services instead
     */
    get services(): ServiceListInstance {
        console.warn('services is deprecated. Use v1.services instead.');
        return this.v1.services;
    }
}

export = Serverless;
