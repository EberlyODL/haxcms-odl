import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";

class PageBanner extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --page-banner-text-transform: none;
        }

        #banner_wrap {
          display: var(--haxtheme-page-banner-banner-wrap-display, block);
          overflow: var(--haxtheme-page-banner-banner-wrap-overflow, hidden);
          height: var(--haxtheme-page-banner-banner-wrap-height, 28vw);
          max-height: var(--haxtheme-page-banner-banner-wrap-max-height, 420px);
          position: var(--haxtheme-page-banner-banner-wrap-position, relative);
        }

        .image_wrap {
          background-repeat: var(
            --haxtheme-page-banner-image-wrap-background-repeat,
            no-repeat
          );
          background-size: var(
            --haxtheme-page-banner-image-wrap-background-size,
            cover
          );
          background-position: var(
            --haxtheme-page-banner-image-wrap-background-position,
            right center
          );
          width: var(--haxtheme-page-banner-image-wrap-width, 100%);
          height: var(--haxtheme-page-banner-image-wrap-height, 100%);
          position: var(--haxtheme-page-banner-image-wrap-position, absolute);
          display: var(--haxtheme-page-banner-image-wrap-display, flex);
          justify-content: var(
            --haxtheme-page-banner-image-wrap-justify-content,
            flex-end
          );
          align-items: var(
            --haxtheme-page-banner-image-wrap-align-items,
            center
          );
          flex: var(--haxtheme-page-banner-image-wrap-flex, 1 1 auto);
          margin: var(--haxtheme-page-banner-image-wrap-margin, 0);
          padding: var(--haxtheme-page-banner-image-wrap-padding, 0);
          @apply --haxtheme-page-banner-image-wrap;
        }

        .image_text {
          background: var(
            --haxtheme-page-banner-image-text-background,
            rgba(0, 0, 0, 0.5)
          );
          width: var(
            --haxtheme-page-banner-image-text-width,
            calc(150px + (355 - 28) * ((100vw - 300px) / (1600 - 300)))
          );
          margin: var(--haxtheme-page-banner-image-text-margin, 5vw);
          padding: var(--haxtheme-page-banner-image-text-padding, 2vw);
          text-align: var(--haxtheme-page-banner-image-text-text-align, center);
          text-transform: var(--page-banner-text-transform);
          text-transform: var(--page-banner-text-transform);
          @apply --haxtheme-page-banner-image-text;
        }

        .image_text h1 {
          color: var(--haxtheme-page-banner-image-text-h1-color);
          width: var(--haxtheme-page-banner-image-text-h1-width, 100%);
          font-weight: var(--haxtheme-page-banner-image-text-h1-font-weight);
          margin: var(--haxtheme-page-banner-image-text-h1-margin, 0);
          padding: var(--haxtheme-page-banner-image-text-h1-padding, 0);
          font-size: var(
            --haxtheme-page-banner-image-text-h1-font-size,
            calc(23px + (72 - 28) * ((100vw - 300px) / (1600 - 300)))
          );
          @apply --haxtheme-page-banner-image-text-h1;
        }

        @media (min-width: 1200px) {
          .image_text h1 {
            font-size: 46px;
          }
        }
      </style>
      <div id="banner_wrap">
        <div class="image_wrap" style$="background-image:url([[image]])">
          <div class="banner_image"></div>
          <div class="image_text_container">
            <div class="image_text">
              <h1>[[text]]</h1>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "page-banner";
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
       * Text over image
       */
      text: {
        type: String
      },
      /**
       * Alt text for image
       */
      alt: {
        type: String
      }
    };
  }
}
window.customElements.define(PageBanner.tag, PageBanner);
export { PageBanner };
