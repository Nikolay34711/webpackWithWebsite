import "swiper/css/bundle";
import "../scss/style.scss";
import Panel from "./part-pnl/panel";
import Modal from "./popup/pop-up";

let MOBILE_WIDTH = 767;

const config_panel_service = {
  swiper: {
    host: ".service-swiper",
  },

  panel: {
    host: ".services-panel .panel__elements",
    panel_switch: "panel__elements-large--close",
    button: ".services-panel>.panel__button-arrow",
    button_switch: "button-arrow--open",
  },
  place: {
    host: ".services-panel .panel__elements",
    large: ["panel__elements--large"],
    mobile: ["panel__elements", "service-swiper"],
  },
  wrapper: {
    host: ".services-panel .wrapper",
    large: ["wrapper-large"],
    mobile: ["swiper-wrapper"],
  },
  paginate: {
    host: ".services-panel .swiper-pagination",
    large: ["panel__paginator--hide"],
    mobile: ["swiper-pagination"],
  },
  slide: {
    host: ".services-panel .elements__item",
    large: [],
    mobile: ["swiper-slide"],
  },
};
const config_panel_technique = {
  swiper: {
    host: ".technique-swiper",
  },
  panel: {
    host: ".technique-panel .panel__elements",
    panel_switch: "panel__elements-large--close",
    button: ".technique-panel .panel__button-arrow",
    button_switch: "button-arrow--open",
  },
  place: {
    host: ".technique-panel .panel__elements",
    large: ["panel__elements--large"],
    mobile: ["panel__elements", "technique-swiper"],
  },
  wrapper: {
    host: ".technique-panel .wrapper",
    large: ["wrapper-large"],
    mobile: ["swiper-wrapper"],
  },
  paginate: {
    host: ".technique-panel .swiper-pagination",
    large: ["panel__paginator--hide"],
    mobile: ["swiper-pagination"],
  },
  slide: {
    host: ".technique-panel .elements__item",
    large: [],
    mobile: ["swiper-slide"],
  },
};
const config_panel_price = {
  swiper: {
    host: ".price-swiper",
  },
  panel: {
    host: ".price-panel .panel__elements",
    panel_switch: "panel__elements-large--close",
    button: null,
    button_switch: null,
  },
  place: {
    host: ".price-panel .panel__elements",
    large: ["panel__elements--large"],
    mobile: ["panel__elements", "price-swiper"],
  },
  wrapper: {
    host: ".price-panel .wrapper",
    large: [],
    mobile: ["swiper-wrapper"],
  },
  paginate: {
    host: ".price-panel .swiper-pagination",
    large: ["panel__paginator--hide"],
    mobile: ["swiper-pagination"],
  },
  slide: {
    host: ".price-panel .elements__item",
    large: [],
    mobile: ["swiper-slide"],
  },
};

let service_panel = Panel(config_panel_service);
let technique_panel = Panel(config_panel_technique);
let price_panel = Panel(config_panel_price);

function sizeReaction() {
  let is_mobile = window.innerWidth <= MOBILE_WIDTH ? true : false;
  service_panel.sizeReaction(is_mobile);
  technique_panel.sizeReaction(is_mobile);
  price_panel.sizeReaction(is_mobile);
}

document.addEventListener("DOMContentLoaded", sizeReaction);
window.addEventListener("resize", sizeReaction);

// modals

const mainContainer = document.querySelector(".main-container");
const mainContainer_height = Math.floor(
  mainContainer.getBoundingClientRect().height
);

const burger_button = document.querySelector(".up-menu__button-burger");
const modal_host = document.querySelector(".aside");
const mobile_menu_close_button = document.querySelector(
  ".mobile-menu__button-close, .burger-menu__button-close"
);

function open_modal(is_open) {
  if (is_open) {
    modal_host.style.height = `${mainContainer_height}px`;
    modal_host.classList.add("aside_open");
  } else {
    modal_host.classList.remove("aside_open");
  }
}

burger_button.addEventListener("click", () => open_modal(true));

modal_host.addEventListener("click", (e) => {
  if (e.target.classList.contains("aside")) {
    open_modal(false);
  }
});

mobile_menu_close_button.addEventListener("click", () => open_modal(false));

//modal feedback

let feedback_buttons = document.querySelectorAll(".button-chat");
let feedback_button_close = document.querySelector(".feedback-button");
let feedback_el = document.querySelector(".feedback");

let feedback_modal = new Modal(feedback_el, "modal--open", "modal--close");

feedback_buttons.forEach((bt) =>
  bt.addEventListener("click", () => {
    feedback_modal.open();
    open_modal(false);
  })
);
feedback_button_close.addEventListener("click", () => {
  feedback_modal.close();
});

// modal call

let call_buttons = document.querySelectorAll(".button-call");
let call_button_close = document.querySelector(".call-button");
let call_el = document.querySelector(".call");

let call_modal = new Modal(call_el, "modal--open", "modal--close");

call_buttons.forEach((bt) =>
  bt.addEventListener("click", () => {
    call_modal.open();
    open_modal(false);
  })
);
call_button_close.addEventListener("click", () => {
  call_modal.close();
});

// read more
const button = document.querySelector(".content__button-arrow--read-more");
const list = document.querySelector(".content__article-paragraph--read-more");

function toggleList() {
  if (list.style.maxHeight) {
    list.style.maxHeight = null;
    button.innerHTML = `
    
  <svg
  class="btn-more"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.5001 7.50008L12.0001 10.0001L9.50008 7.50008C9.22393 7.22393 8.77622 7.22393 8.50008 7.50008C8.22393 7.77622 8.22393 8.22393 8.50008 8.50008L11.293 11.293C11.6835 11.6835 12.3167 11.6835 12.7072 11.293L15.5001 8.50008C15.7762 8.22393 15.7762 7.77622 15.5001 7.50008C15.2239 7.22393 14.7762 7.22393 14.5001 7.50008ZM14.5001 13.5001L12.0001 16.0001L9.50008 13.5001C9.22393 13.2239 8.77622 13.2239 8.50008 13.5001C8.22393 13.7762 8.22393 14.2239 8.50008 14.5001L11.293 17.293C11.6835 17.6835 12.3167 17.6835 12.7072 17.293L15.5001 14.5001C15.7762 14.2239 15.7762 13.7762 15.5001 13.5001C15.2239 13.2239 14.7762 13.2239 14.5001 13.5001Z"
      fill="#41F6D7"
    /></svg
  >
    Показать все`;
  } else {
    list.style.maxHeight = list.scrollHeight + "px";
    button.innerHTML = `
    <svg
    class="btn-more"
     xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49992 16.4999L11.9999 13.9999L14.4999 16.4999C14.7761 16.7761 15.2238 16.7761 15.4999 16.4999C15.7761 16.2238 15.7761 15.7761 15.4999 15.4999L12.707 12.707C12.3165 12.3165 11.6833 12.3165 11.2928 12.707L8.49992 15.4999C8.22378 15.7761 8.22378 16.2238 8.49992 16.4999C8.77607 16.7761 9.22378 16.7761 9.49992 16.4999ZM9.49992 10.4999L11.9999 7.99992L14.4999 10.4999C14.7761 10.7761 15.2238 10.7761 15.4999 10.4999C15.7761 10.2238 15.7761 9.77607 15.4999 9.49992L12.707 6.70703C12.3165 6.31651 11.6833 6.31651 11.2928 6.70703L8.49992 9.49993C8.22378 9.77607 8.22378 10.2238 8.49992 10.4999C8.77607 10.7761 9.22378 10.7761 9.49992 10.4999Z" fill="#41F6D7"/>
  </svg>
    Скрыть`;
  }
}

button.addEventListener("click", toggleList);
