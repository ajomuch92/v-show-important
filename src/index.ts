import type { App } from "vue";
import { vShowImportant } from "./directive";

export { vShowImportant };

export default {
  install(app: App) {
    app.directive("show-important", vShowImportant);
  }
};