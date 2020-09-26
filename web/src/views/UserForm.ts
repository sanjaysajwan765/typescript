export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log("Button Clicked");
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input/>
        <button>Click</Button>
      </div>
    `;
  }
  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.parent.append(templateElement.content);
  }
}