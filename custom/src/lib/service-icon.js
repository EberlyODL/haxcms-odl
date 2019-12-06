import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";

class ServiceIcon extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        /**
       * Hide the slotted content during edit mode. This must be here to work.
       */
        :host([edit-mode]) #slot {
          display: none;
        }

        iron-icon {
          width: 70px;
          height: 70px;
          fill: #fff;
        }
      </style>
      <div id="icon-wrap">
        <div id="icon">
          <iron-icon icon="[[icon]]"></iron-icon>
        </div>
        <div id="title">[[title]]</div>
        <div id="info">[[info]]</div>
      </div>
    `;
  }
  static get tag() {
    return "service-icon";
  }
  static get properties() {
    return {
      /**
       * Icon source
       */
      icon: {
        type: String
      },
      /**
       * Title over icon
       */
      title: {
        type: String
      },
      /**
       * info text for icon
       */
      info: {
        type: String
      }
    };
  }
}
window.customElements.define(ServiceIcon.tag, ServiceIcon);
export { ServiceIcon };
