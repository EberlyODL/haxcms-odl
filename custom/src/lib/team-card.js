import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "./haxtheme-icons.js";
class TeamCard extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --paper-button: {
            border-radius: none;
            text-decoration: none;
          }
        }

        a {
          text-decoration: none;
        }

        #card_wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          border: solid;
          border-width: 2px;
          border-color: #dcdcdc;
          border-bottom: none;
          max-width: 300px;
          height: 480px;
          margin: 50px 10px;
        }

        .image {
          background-position: top center;
          background-repeat: no-repeat;
          background-size: cover;
          width: 100%;
          height: 100%;
        }

        #card_image {
          width: 275px;
          height: 275px;
          margin-top: -30px;
          box-shadow: 4px 5px 6px #a9a9a9;
        }

        #name {
          position: relative;
          bottom: 44px;
          padding: 8px;
          color: #fff;
          font-size: 20px;
          background: rgba(0, 0, 0, 0.5);
          text-shadow: 1px 2px #000;
          text-align: center;
        }

        #info_wrap {
          padding: 20px;
        }
        
        #position {
          color: #e2801e;
          font-size: 18px;
          margin: -45px 0 5px 0;
          text-align: center;
        }

        #info {
          font-size: 16px;
          text-align: center;
          color: #000;
        }

        .action_button {
          display: flex;
          justify-content: center;
          border: solid;
          border-width: 2px;
          border-color: #dcdcdc;
          border-top: none;
          max-width: 300px;
          margin: -100px auto 0 auto;
        }

        paper-button#connect {
          text-transform: none;
          background-color: #e2801e;
          color: #fff;
          margin: 0 0 15px 0;
        }
   
      </style>
      
        <div id="card_wrap">
          <div id="image_wrap">
            <div id="card_image" class="image" style$="background-image:url([[image]])"></div>
            <div id="name">[[name]]</div>
          </div>   
          <div id="info_wrap">
            <div id="position">[[position]]</div>
            <div id="info">[[info]]</div>
          </div>
        </div>
        <div class="action_button">
          <a href\$="[[url]]">
            <paper-button noink id="connect">
              <div class="title">Connect</div>
              <iron-icon icon="chevron-right"></iron-icon>
            </paper-button>
          </a>
        </div>
    
    `;
  }
  static get tag() {
    return "team-card";
  }
  static get properties() {
    return {
      /**
       * image
       */
      image: {
        type: String
      },
      /**
       * name
       */
      name: {
        type: String
      },
      /**
       * position
       */
      position: {
        type: String
      },
      /**
       * info
       */
      info: {
        type: String
      },
      /**
       * url
       */
      url: {
        type: String
      }
    };
  }
  constructor() {
    super();
    import("@polymer/iron-image/iron-image.js");
  }
}
window.customElements.define(TeamCard.tag, TeamCard);
export { TeamCard };
