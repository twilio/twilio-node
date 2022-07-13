import {WorkspaceListInstance} from "./taskrouter/v1/workspace";
import TaskrouterBase from "./TaskrouterBase";

class Taskrouter extends TaskrouterBase {
    /**
     * @deprecated - Use v1.workspaces instead
     */
    get workspaces(): WorkspaceListInstance {
        console.warn('workspaces is deprecated. Use v1.workspaces instead.');
        return this.v1.workspaces;
    }
}

export = Taskrouter;
