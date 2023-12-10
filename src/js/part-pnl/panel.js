import { WorkerSwiper } from "./piece/slip.js";
import PanelModule from "./pnl-md.js";

export default function (config) {
  const panel = new PanelModule(
    config.panel.host,
    config.panel.panel_switch,
    config.panel.button,
    config.panel.button_switch,
    config.swiper
  );

  const swiper = new WorkerSwiper(config.swiper);

  swiper.setHost(config.place.host, config.place.large, config.place.mobile);
  swiper.setWrapper(config.wrapper.host, config.wrapper.large, config.wrapper.mobile);
  swiper.setPaginator(config.paginate.host, config.paginate.large, config.paginate.mobile);
  swiper.setSliderList(config.slide.host, config.slide.large, config.slide.mobile);

  panel.setWorkSwiper(swiper);

  return panel;
}

