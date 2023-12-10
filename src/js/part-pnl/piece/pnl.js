export default function (elementClass, panelSwitchClass, isOpen) {
  let isOpenPanel = isOpen;
  let switchClass = panelSwitchClass;
  let element = document.querySelector(elementClass);

  function openOrClose(isOpen) {
    isOpenPanel = isOpen;
    element.classList.toggle(switchClass, !isOpen);
    return isOpenPanel;
  }

  return {
    is_open_pnl: isOpenPanel,
    el: element,
    open_or_close: openOrClose,
  };
}

