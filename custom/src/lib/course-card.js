import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";

class CourseCard extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        a {
          text-decoration: var(--haxtheme-course-card-a-text-decoration);
          color: var(--haxtheme-course-card-a-color);
          display: var(--haxtheme-course-card-a-display, block);
          width: var(--haxtheme-course-card-a-width, 100%);
          @apply --haxtheme-course-card-a;
        }
        #card_wrap {
          display: var(--haxtheme-course-card-card-wrap-display, flex);
          flex-direction: var(
            --haxtheme-course-card-card-wrap-flex-direction,
            column
          );
          align-items: var(
            --haxtheme-course-card-card-wrap-align-items,
            center
          );
          @apply --haxtheme-course-card-card-wrap;
        }
        #course_number {
          font-size: var(--haxtheme-course-card-course-number-font-size, 28px);
          text-transform: var(
            --haxtheme-course-card-course-number-text-transform
          );
          line-height: 1.4;
          @apply --haxtheme-course-card-course-number;
        }
        #course_name {
          font-size: var(--haxtheme-course-card-course-name-font-size);
          text-align: var(
            --haxtheme-course-card-course-name-text-align,
            center
          );
          width: var(--haxtheme-course-card-course-name-width, 90%);
          margin: var(--haxtheme-course-card-course-name-margin, 0 0 15px 0);
          line-height: 1.2;
          @apply --haxtheme-course-card-course-name;
        }
        #course_icon {
          background-color: var(
            --haxtheme-course-card-course-icon-background-color
          );
          border-radius: var(
            --haxtheme-course-card-course-icon-border-radius,
            50%
          );
          position: var(--haxtheme-course-card-course-icon-position, relative);
          bottom: var(--haxtheme-course-card-course-icon-position-bottom, 50px);
          border: var(--haxtheme-course-card-course-icon-border, solid);
          border-color: var(--haxtheme-course-card-course-icon-border-color);
          border-width: var(
            --haxtheme-course-card-course-icon-border-width,
            5px
          );
          margin: var(--haxtheme-course-card-course-icon-margin, 0 0 -40px 0);
          @apply --haxtheme-course-card-course-icon;
        }
        iron-icon {
          width: var(--haxtheme-course-card-iron-icon-width, 70px);
          height: var(--haxtheme-course-card-iron-icon-height, 70px);
          fill: var(--haxtheme-course-card-iron-icon-color);
          @apply --haxtheme-course-card-course-iron-icon;
        }

        #course_image {
          background-repeat: var(
            --haxtheme-course-card-course-image-background-repeat,
            no-repeat
          );
          background-size: var(
            --haxtheme-course-card-course-image-background-size,
            cover
          );
          background-position: var(
            --haxtheme-course-card-course-image-background-position,
            right center
          );
          width: var(--haxtheme-course-card-course-image-width, 100%);
          height: var(--haxtheme-course-card-course-image-height, 150px);
          @apply --haxtheme-course-card-course-image;
        }
      </style>
      <a href$="[[url]]">
        <div id="card_wrap">
          <div
            id="course_image"
            style$="background-image:url([[image]])"
            alt="[[alt]]"
          ></div>
          <div id="course_icon">
            <iron-icon icon="[[icon]]"></iron-icon>
          </div>
          <div id="course_number">[[number]]</div>
          <div id="course_name">[[name]]</div>
        </div>
      </a>
    `;
  }
  static get tag() {
    return "course-card";
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
       * Course Number
       */
      number: {
        type: String
      },
      /**
       * Course Icon
       */
      icon: {
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
window.customElements.define(CourseCard.tag, CourseCard);
export { CourseCard };
