import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
class ResourceDisplay extends PolymerElement {
  static get template() {
    return html`
      <style>
       
      </style>
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
}
window.customElements.define(ResourceDisplay.tag, ResourceDisplay);
export { ResourceDisplay };
