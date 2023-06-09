// type ClickHandler = (event: Event) => void

// interface IButton {
//   onclick: ClickHandler
// }

// export class Button implements IButton {
//   onclick: ClickHandler

//   constructor(
//     private className: string,
//     private id: string,
//     private innerHTML: string,
//     onclick: ClickHandler
//   ) {
//     this.onclick = onclick
//   }

interface IButton {
  className: string
  id: string
  innerHTML: string
  init(): void
}
export class Button implements IButton {
  className: string
  id: string
  innerHTML: string
  constructor(className: string, id: string, innerHTML: string) {
    ;(this.className = className),
      (this.id = id),
      (this.innerHTML = innerHTML),
      this.init()
  }

  init(): void {
    const element = document.createElement("button")
    const buttons = document.querySelector(".buttons")
    element.className = this.className
    element.id = this.id
    element.innerHTML = this.innerHTML
    buttons.appendChild(element)
  }
}
