import PanelButton from "./piece/pnl-btn.js";
import Panel from "./piece/pnl.js";

export default class PanelModule {
  is_mobile_state;
  panel;
  panel_button;
  wswiper;

  constructor(panelClass, switchPanelClass, buttonClass, switchButtonClass) {
    this.panel = Panel(panelClass, switchPanelClass, false);
    this.panel_button = buttonClass ? PanelButton(buttonClass, switchButtonClass, this.panel, true, false) : null;
  }

  setWorkSwiper = (wswiper) => (this.wswiper = wswiper);

  sizeReaction = (isMobile) => {
    if (isMobile !== this.is_mobile_state) {
      this.wswiper.toggleSwiperClass(isMobile);
      this.panel_button && this.panel_button.show_or_hide(isMobile);
      this.is_mobile_state = isMobile;
      isMobile ? this.wswiper.init() : this.wswiper.clear();
    }
  };
}

