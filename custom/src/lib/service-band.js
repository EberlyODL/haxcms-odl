import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
class ServiceBand extends PolymerElement {
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

        :host([align="right"]) #image {
          display: flex;
          order: 2;
          margin: 0 0 0 25px;
        }

        :host([align="right"]) #card_info {
          text-align: left;
        }

        @media screen and (max-width: 768px) {
          :host([align="right"]) #image {
            margin: 0 0 25px 0; 
          }
        }

        #container {
          display: flex;
          margin: 15px;
        }

        @media screen and (min-width: 768px) {
          :host([align="right"]) #container {
            margin: 0 0 15px 0; 
          }
        }

        @media screen and (max-width: 768px) {
          #container {
            flex-direction: column;
            margin: 0
          }
        }

        #image {
          background-repeat: no-repeat;
          background-size: cover;
          background-position: right center;
          width: 40%;
          min-height: 300px;
          margin: 0 20px 0 0;
        }

        @media screen and (max-width: 768px) {
          #image {
            width: 100%;
          }
        }


        #title {
          font-size: 24px;
          font-weight: 400;
          border-left: solid;
          border-left-width: 4px;
          border-left-color: #e2801e;
          padding-left: 15px;
          margin: 0 0 25px 0;
        }
        
        #info {
          font-weight: 300;
          line-height: 1.4;
          margin: 15px 0 0;
        }

        #card_info {
          flex: 1 1 auto;
          margin: 25px 0 0 15px;
          width: 50%;
        }

        @media screen and (max-width: 768px) {
          #card_info{
            width: 100%;
            margin: 20px 0 20px;
          }
        }

      </style>
      <div id="container">
        <div id="image" style$="background-image:url([[image]])"></div>
        <div id="card_info">
          <div id="title">[[title]]</div>
          <div id="info">
            <slot>[[info]]</slot>
          </div>
        </div>

      </div>
    `;
  }
  static get tag() {
    return "service-band";
  }
  static get properties() {
    return {
      /**
       * Image source
       */
      image: {
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
      },
      /**
       * align image
       */
      align: {
        type: String,
        value: "left",
        reflectToAttribute: true
      }
    };
  }
}
window.customElements.define(ServiceBand.tag, ServiceBand);
export { ServiceBand };
