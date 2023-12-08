import { pluginManager } from "../src/plugin";
import { sc_send } from "./serverPush";
const registerAll = () => {
  pluginManager.register({
    name: "push",
    method: sc_send
  })
}
export { registerAll }