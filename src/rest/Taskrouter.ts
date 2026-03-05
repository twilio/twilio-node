import { WorkspaceListInstance } from "./taskrouter/v1/workspace.js";
import { TaskrouterBase } from "./TaskrouterBase.js";

export class Taskrouter extends TaskrouterBase {
  /**
   * @deprecated - Use v1.workspaces instead
   */
  get workspaces(): WorkspaceListInstance {
    console.warn("workspaces is deprecated. Use v1.workspaces instead.");
    return this.v1.workspaces;
  }
}
