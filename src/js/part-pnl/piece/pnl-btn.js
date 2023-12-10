export default function ( class_element, switch_button_class, panel, is_hide, is_open) {
  let is_open_bt = is_open; 
  let is_hide_bt = is_hide; 
  let panel_control = panel; 
  let switch_button = switch_button_class; 
  let dom_el = document.querySelectorAll(class_element)[0]; 
  (function init() {
    open_or_close(is_open_bt);
  })();

  function show_or_hide(is_hide) {
    is_hide_bt = is_hide;
    if (is_hide) {
      dom_el.style.display = "none";
    } else {
      dom_el.style.display = "block";
    }
    return is_hide_bt;
  }

  function open_or_close(is_open) {
    is_open_bt = is_open;
    if (is_open) {
      dom_el.classList.add(switch_button);
      dom_el.textContent = "Скрыть";
    } else {
      dom_el.classList.remove(switch_button);
      dom_el.textContent = "Показать всё";
    }
    panel_control.open_or_close(is_open);
    return is_open_bt;
  }
  
  function click_handler() {
    is_open_bt = is_open_bt ? false : true;
    open_or_close(is_open_bt);
  }
  dom_el.addEventListener("click", click_handler);
  return {
    is_open: is_open_bt,
    is_hide: is_hide_bt,
    el: dom_el,
    click_handler: click_handler,
    show_or_hide: show_or_hide,
    open_or_close: open_or_close,
  };
}
