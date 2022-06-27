import {UserListInstance} from "./frontlineApi/v1/user";
import FrontlineApiBase from "./FrontlineApiBase";

export default class FrontlineApi extends FrontlineApiBase {
    /**
     * @deprecated - Use v1.users instead
     */
    get users(): UserListInstance {
        console.warn('users is deprecated. Use v1.users instead.');
        return this.v1.users;
    }
}
