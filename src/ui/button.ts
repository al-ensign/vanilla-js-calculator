type ClickHandler = (event: Event) => void
interface IButton {
  onclick: ClickHandler
}

export class Button implements IButton {
  onclick: ClickHandler

  constructor(
    private className: string,
    private id: string,
    private innerHTML: string,
    onclick: ClickHandler
  ) {
    this.onclick = onclick
  }
}
