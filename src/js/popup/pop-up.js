export default class {
  constructor(el, openClass, closeClass) {
    this.el = el;
    this.openClass = openClass;
    this.closeClass = closeClass;
    this.el.addEventListener(
      "click",
      (e) => e.currentTarget === e.target && this.close()
    );
  }

  open() {
    const mainContainerHeight = Math.floor(
      document.querySelector(".main-container").getBoundingClientRect().height
    );
    this.el.style.display = "flex";
    this.el.style.height = `${mainContainerHeight}px`;
    setTimeout(() => {
      this.el.classList.remove(this.closeClass);
      this.el.classList.add(this.openClass);
    }, 100);
  }

  close() {
    this.el.classList.remove(this.openClass);
    this.el.classList.add(this.closeClass);
    setTimeout(() => (this.el.style.display = "none"), 1000);
  }
}
