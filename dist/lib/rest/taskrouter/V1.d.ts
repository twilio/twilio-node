import TaskrouterBase from "../TaskrouterBase";
import Version from "../../base/Version";
import { WorkspaceListInstance } from "./v1/workspace";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Taskrouter
     *
     * @property { Twilio.Taskrouter.V1.WorkspaceListInstance } workspaces - workspaces resource
     *
     * @param { Twilio.Taskrouter } domain - The Twilio domain
     */
    constructor(domain: TaskrouterBase);
    protected _workspaces?: WorkspaceListInstance;
    get workspaces(): WorkspaceListInstance;
}
