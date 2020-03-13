import { LitElement, html, css } from "lit-element/lit-element.js";
class ResourceDisplay extends LitElement {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
       
      `
    ];
  }
  render() {
    return html`
      <div id="container">
        Resource Display is working!
      </div>
    `;
  }
  

  static get tag() {
    return "resource-display";
  }
  static get properties() {
    return {
     
    };
  }
  constructor() {
    super();
   
  }
}
window.customElements.define(ResourceDisplay.tag, ResourceDisplay);
export { ResourceDisplay };
