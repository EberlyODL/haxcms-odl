import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { PromoTile } from "@lrnwebcomponents/promo-tile/promo-tile.js"
class ODLPromoTile extends PromoTile {
  constructor() {
    super()
  }
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        a {
          text-decoration: var(--promo-tile-a-text-decoration, none);
        }

        #container {
          width: var(--promo-tile-container-width, 100%);
          height: var(--promo-tile-container-height, auto);
        }

        .back_card {
          background-color: var(
            --promo-tile-back-card-background-color,
            #e2801e
          );
          height: var(--promo-tile-back-card-height, 460px);
          opacity: var(--promo-tile-back-card-opacity, 0);
          display: var(--promo-tile-back-card-display, flex);
          flex-direction: var(--promo-tile-back-card-flex-direction, column);
        }

        :host([hover]) #container .back_card {
          opacity: var(--promo-tile-container-back-card-hover-opacity, 0.9);
          transition: var(
            --promo-tile-container-back-card-hover-transition,
            all 0.3s ease-in-out
          );
        }

        :host([hover]) #container .front_card .front_title {
          opacity: var(
            --promo-tile-container-front-card-front-title-hover-opacity,
            0
          );
          transition: var(
            --promo-tile-container-front-card-front-title-hover-transition,
            all 0.3s ease-in-out
          );
        }

        .image {
          display: var(--promo-tile-image-display, flex);
          justify-content: var(--promo-tile-image-justify-content, center);
          background-position: var(
            --promo-tile-image-background-position,
            top center
          );
          background-repeat: var(
            --promo-tile-image-background-repeat,
            no-repeat
          );
          background-size: var(--promo-tile-image-background-size, cover);
          width: var(--promo-tile-image-width, 100%);
          height: var(--promo-tile-image-height, 100%);
        }

        .front_title {
          opacity: var(--promo-tile-front-title-opacity, 1);
          position: var(--promo-tile-front-title-position, absolute);
          display: var(--promo-tile-front-title-display, flex);
          align-self: var(--promo-tile-front-title-align-self, flex-end);
          padding: var(--promo-tile-front-title-padding, 0 0 25px 0);
        }

        .front_title h1 {
          color: var(--promo-tile-front-title-h1-color, #ffffff);
          font-size: var(--promo-tile-front-title-h1-font-size, 36px);
          font-weight: var(--promo-tile-front-title-h1-font-weight, 400);
          text-shadow: var(
            --promo-tile-front-title-h1-text-shadow,
            1px 1px 3px
              var(--promo-tile-front-title-h1-text-shadow-color, #363533)
          );
        }

        .back_title {
          opacity: var(--promo-tile-back-title-opacity, 1);
          display: var(--promo-tile-back-title-display, flex);
          justify-content: var(--promo-tile-back-title-justify-content, center);
          padding: var(--promo-tile-back-title-padding, 20px 0 0 0);
        }

        .back_title h1 {
          color: var(--promo-tile-back-title-h1-color, #ffffff);
          font-size: var(--promo-tile-back-title-h1-font-size, 36px);
          font-weight: var(--promo-tile-back-title-h1-font-weight, 400);
        }

        .back_content {
          color: var(--promo-tile-back-content-font-color, #ffffff);
          font-size: var(--promo-tile-back-content-font-size, 18px);
          font-weight: var(--promo-tile-back-content-font-weight, 300);
          line-height: var(--promo-tile-back-content-line-height, 1.4);
          padding: var(--promo-title-back-content-padding, 0 20px 0 20px);
          text-align: justify;
        }

        paper-button#learn {
          display: var(--promo-tile-paper-button-learn-display, flex);
          margin: var(
            --promo-tile-paper-button-learn-margin,
            140px auto 0 auto
          );
          font-size: var(--promo-tile-paper-button-learn-font-size, 18px);
          color: var(--promo-tile-paper-button-learn-font-color, #ffffff);
          border: var(--promo-tile-paper-button-learn-border, solid);
          border-width: var(--promo-tile-paper-button-learn-border-width, 1px);
          border-color: var(
            --promo-tile-paper-button-learn-border-color,
            #ffffff
          );
          border-radius: var(--promo-tile-paper-button-learn-border-radius, 0);
          width: var(--promo-tile-paper-button-learn-width, 50%);
        }

        paper-button#learn:hover,
        paper-button#learn:focus {
          background-color: var(
            --promo-tile-paper-button-learn-background-color-active,
            #363533
          );
        }
      </style>
      <div id="container">
        <div class="front_card">
          <div
            id="front_image"
            class="image"
            alt="[[alt]]"
            style$="background-image:url([[image]])"
          >
            <div class="front_title">
              <h1>[[title]]</h1>
            </div>
            <div class="back_card" id="cardBack" on-click="activateBtn">
              <div class="back_title">
                <h1>[[title]]</h1>
              </div>
              <div class="back_content">
                <slot></slot>
              </div>
              <!-- <div class="learn_more">
                <a
                  tabindex="-1"
                  href="[[url]]"
                  id="link"
                  target$="[[_urlTarget(url)]]"
                >
                  <paper-button id="learn" no-ink
                    >[[label]]
                    <iron-icon icon="chevron-right"></iron-icon>
                  </paper-button>
                </a>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "odl-promo-tile";
  }
  static get haxProperties() {
    return {
      canScale: !0,
      canPosition: !0,
      canEditSource: !1,
      gizmo: {
        title: "ODL-Promo-Tile",
        description: "A tile element for promoting content.",
        icon: "icons:dashboard",
        color: "orange",
        groups: ["Content", "Media"],
        handles: [
          { type: "content", source: "image", title: "citation", url: "source" }
        ],
        meta: { author: "ELMS:LN" }
      },
      settings: {
        quick: [
          {
            property: "title",
            title: "Title",
            description: "The title of the tile",
            inputMethod: "textfield",
            icon: "editor:title"
          },
          {
            property: "image",
            title: "Image",
            description: "The image of the tile",
            inputMethod: "textfield",
            icon: "editor:insert-photo"
          },
          {
            property: "url",
            title: "Link",
            description: "The link of the tile",
            inputMethod: "textfield",
            icon: "editor:insert-link"
          }
        ],
        configure: [
          {
            property: "title",
            title: "Title",
            description: "The title of the tile",
            inputMethod: "textfield",
            icon: "editor:title"
          },
          {
            property: "image",
            title: "Image",
            description: "The image of the tile",
            inputMethod: "textfield",
            icon: "editor:insert-photo"
          },
          {
            property: "alt",
            title: "Alt",
            description: "The alt text for the image",
            inputMethod: "textfield",
            icon: "editor:mode-edit"
          },
          {
            property: "url",
            title: "Link",
            description: "The link of the tile",
            inputMethod: "textfield",
            icon: "editor:insert-link"
          },
          {
            property: "label",
            title: "Label",
            description: "The label for the button",
            inputMethod: "textfield",
            icon: "editor:title"
          }
        ],
        advanced: []
      }
    };
  }
}
window.customElements.define(ODLPromoTile.tag, ODLPromoTile);
export { ODLPromoTile };
