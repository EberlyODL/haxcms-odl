import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
class InfoBox extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        a {
          text-decoration: var(--haxtheme-info-box-a-text-decoration);
          @apply --haxtheme-info-box-a;
        }
        h1 {
          font-size: var(--haxtheme-info-box-h1-font-size);
          font-weight: var(--haxtheme-info-box-h1-font-weight);
          margin: var(--haxtheme-info-box-h1-margin, -11px 0 0 0);
          @apply --haxtheme-info-box-h1;
        }
        #box_wrap {
          display: var(--haxtheme-info-box-box-wrap-display, flex);
          flex-direction: var(
            --haxtheme-info-box-box-wrap-flex-direction,
            column
          );
          align-items: var(--haxtheme-info-box-box-wrap-align-items, center);
          @apply --haxtheme-info-box-box-wrap;
        }

        #inner_wrap {
          border-left: var(--haxtheme-info-box-inner-wrap-border-left);
          border-left-width: var(
            --haxtheme-info-box-inner-wrap-border-left-width
          );
          border-left-color: var(
            --haxtheme-info-box-inner-wrap-border-left-color
          );
          padding: var(--haxtheme-info-box-inner-wrap-padding, 0 0 0 15px);
          width: var(--haxtheme-info-box-inner-wrap-width, 85%);
          @apply --haxtheme-info-box-inner-wrap;
        }

        .action_text {
          font-size: var(--haxtheme-info-box-action-text-font-size, 22px);
          font-weight: var(--haxtheme-info-box-action-text-font-weight);
          line-height: var(--haxtheme-info-box-action-text-line-height);
          @apply --haxtheme-info-box-action-text;
        }

        @media screen and (max-width: 700px) {
          .action_text {
            font-size: var(
              --haxtheme-info-box-action-text-font-size-mobile,
              18px
            );
            width: var(--haxtheme-info-box-action-text-width-mobile, 90%);
            @apply --haxtheme-info-box-action-text-mobile;
          }
        }

        .action_button {
          margin: var(--haxtheme-info-box-action-button-margin, 12px 0 0 0);
          @apply --haxtheme-info-box-action-button;
        }

        paper-button#learn {
          color: var(--haxtheme-info-box-paper-button-color);
          @apply --haxtheme-info-box-paper-button;
        }

        paper-button#learn:hover,
        paper-button#learn:focus {
          color: var(--haxtheme-info-box-paper-button-color-active);
          @apply --haxtheme-info-box-paper-button-active;
        }
      </style>
      <div id="box_wrap">
        <div id="inner_wrap">
          <div class="action_title">
            <h1>[[title]]</h1>
          </div>
          <div class="action_text">
            <slot name="action_text"></slot>
          </div>
        </div>
        <div class="action_button">
          <a href\$="[[url]]">
            <paper-button noink id="learn">
              <div class="title">Learn More</div>
              <iron-icon icon="chevron-right"></iron-icon>
            </paper-button>
          </a>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "info-box";
  }
  static get properties() {
    return {
      /**
       * Title
       */
      title: {
        type: String
      },
      /**
       * Url
       */
      url: {
        type: String
      }
    };
  }
  constructor() {
    super();
    import("@polymer/iron-icons/iron-icons.js");
    import("@polymer/paper-button/paper-button.js");
  }
}
window.customElements.define(InfoBox.tag, InfoBox);
export { InfoBox };
