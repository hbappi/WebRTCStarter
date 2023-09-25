import { HbType } from "../types/types";

const splashHTML = require("./html/splash.html").default;
const joiningHTML = require("./html/joining.html").default;

export default class UIManager {
  private static inst: UIManager | null = null;
  private uiRoot: HTMLElement;

  private uiState: HbType.UiStateType = "splash";

  constructor(rootId: string) {
    this.uiRoot = document.getElementById(rootId);
    this.onUiStateChanged();
  }

  public static init(rootId: string) {
    this.inst = new UIManager(rootId);
  }
  public static get() {
    return this.inst;
  }

  public setUiState(uiState: HbType.UiStateType) {
    this.uiState = uiState;
    this.onUiStateChanged();
  }

  private async onUiStateChanged() {
    console.log("splash: ", splashHTML);
    console.log("joining: ", joiningHTML);

    switch (this.uiState) {
      case "splash":
        this.uiRoot.innerHTML = splashHTML;
        break;
      case "joining":
        this.uiRoot.innerHTML = joiningHTML;
        break;
      case "joined":
        break;
      case "failed":
        break;
      default:
    }
  }
}
