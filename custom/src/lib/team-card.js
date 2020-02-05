import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "./haxtheme-icons.js";
class TeamCard extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
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
          max-width: 300px;
          height: auto;
          margin: 40px 10px;
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
          text-align: center;;
        }
        
        #position {
          color: #e2801e;
          font-size: 16px;
          margin-top: -20px;
        }


   
      </style>
      <a href="[[url]]">
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
      </a>
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
