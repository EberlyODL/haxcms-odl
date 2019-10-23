import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";

class CourseTile extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        a {
          text-decoration: none;
          text-transform: uppercase;
          color: #000;
          font-size: 12px;
        }

        a:hover {
          color: #fff;
        }
        
        #card_wrap {
          display: flex;
          align-items: center;
          background-color: #dcdcdc;
        }
        
        #card_wrap:hover {
          background-color: #e2801e;
        }

        #course_image {
          background-repeat: no-repeat;
          background-size: cover;
          background-position: right center;
          width: 75px;
          height: 50px;
        }
        #course_name {
          padding: 0 0 0 5px;
        }
      </style>
      <a href$="[[url]]">
        <div id="card_wrap">
          <div
            id="course_image"
            style$="background-image:url([[image]])"
            alt="[[alt]]"
          ></div>
          <div id="course_name">[[name]]</div>
        </div>
      </a>
    `;
  }
  static get tag() {
    return "course-tile";
  }
  static get properties() {
    return {
      /**
       * Course Image
       */
      image: {
        type: String
      },
      /**
       * Image Alt Text
       */
      alt: {
        type: String
      },
      /**
       * Course Name
       */
      name: {
        type: String
      },
      /**
       * Course URL
       */
      url: {
        type: String
      }
    };
  }
}
window.customElements.define(CourseTile.tag, CourseTile);
export { CourseTile };
