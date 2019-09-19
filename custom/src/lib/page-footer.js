import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "./haxtheme-icons.js";

class PageFooter extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        #social_wrap {
          background-color: var(
            --haxtheme-page-footer-social-wrap-background-color
          );
          height: var(--haxtheme-page-footer-social-wrap-height, 80px);
          padding: var(
            --haxtheme-page-footer-social-wrap-padding,
            25px 0 25px 0
          );
          display: var(--haxtheme-page-footer-social-wrap-display, flex);
          justify-content: var(
            --haxtheme-page-footer-social-wrap-justify-content,
            center
          );
          align-items: var(
            --haxtheme-page-footer-social-wrap-align-items,
            center
          );
          @apply --haxtheme-page-footer-social-wrap;
        }

        @media screen and (max-width: 768px) {
          #social_wrap {
            height: var(--haxtheme-page-footer-social-wrap-height-mobile, 20px);
            @apply --haxtheme-page-footer-social-wrap-mobile;
          }
        }

        #icons {
          display: var(--haxtheme-page-footer-icons-display, flex);
          @apply --haxtheme-page-footer-icons;
        }

        iron-icon {
          width: var(--haxtheme-page-footer-iron-icon-width, 40px);
          height: var(--haxtheme-page-footer-iron-icon-height, 40px);
          fill: var(--haxtheme-page-footer-iron-icon-fill);
          @apply --haxtheme-page-footer-iron-icon;
        }

        @media screen and (max-width: 768px) {
          iron-icon {
            width: var(--haxtheme-page-footer-iron-icon-width-mobile, 30px);
            height: var(--haxtheme-page-footer-iron-icon-height-mobile, 30px);
            @apply --haxtheme-page-footer-iron-icon-mobile;
          }
        }

        paper-button {
          min-width: var(--haxtheme-page-footer-paper-button-min-width, 4em);
          padding: var(--haxtheme-page-footer-paper-button-padding, 0);
          margin: var(--haxtheme-page-footer-paper-button-margin, 0);
          @apply --haxtheme-page-footer-paper-button;
        }

        @media screen and (max-width: 768px) {
          paper-button {
            min-width: var(
              --haxtheme-page-footer-paper-button-min-width-mobile,
              3em
            );
            @apply --haxtheme-page-footer-paper-button-mobile;
          }
        }

        #info_wrap {
          display: var(--haxtheme-page-footer-info-wrap-display, flex);
          flex-direction: var(
            --haxtheme-page-footer-info-wrap-flex-direction,
            column
          );
          justify-content: var(
            --haxtheme-page-footer-info-wrap-justify-content,
            center
          );
          align-items: var(
            --haxtheme-page-footer-info-wrap-align-items,
            center
          );
          background-color: var(
            --haxtheme-page-footer-info-wrap-background-color
          );
          height: var(--haxtheme-page-footer-info-wrap-height, 200px);
          @apply --haxtheme-page-footer-info-wrap;
        }

        .address {
          color: var(--haxtheme-page-footer-address-color);
          font-weight: var(--haxtheme-page-footer-address-font-weight);
          font-size: var(--haxtheme-page-footer-address-font-size);
          line-height: var(--haxtheme-page-footer-address-line-height, 1.2);
          text-align: var(--haxtheme-page-footer-address-text-align, center);
          margin: var(--haxtheme-page-footer-address-margin, 25px 0 0 0);
          @apply --haxtheme-page-footer-address;
        }

        @media screen and (max-width: 768px) {
          .address {
            font-size: var(
              --haxtheme-page-footer-address-font-size-mobile,
              12px
            );
            line-height: var(--haxtheme-page-footer-address-line-height, 0);
            margin: var(--haxtheme-page-footer-address-margin, 10px 0 0 0);
            @apply --haxtheme-page-footer-address-mobile;
          }
        }

        #basement {
          font-size: var(--haxtheme-page-footer-basement-font-size);
          font-weight: var(--haxtheme-page-footer-basement-font-weight);
          line-height: var(--haxtheme-page-footer-basement-line-height, 1.2);
          @apply --haxtheme-page-footer-basement;
        }

        .legal_statement {
          display: var(--haxtheme-page-footer-legal-statement-display, flex);
          padding: var(
            --haxtheme-page-footer-legal-statement-padding,
            10px 0 0 0
          );
          @apply --haxtheme-page-footer-legal-statement;
        }

        .legal_item {
          color: var(--haxtheme-page-footer-legal-item-color);
          padding: var(
            --haxtheme-page-footer-legal-item-padding,
            0 5px 25px 5px
          );
          border-right: var(
            --haxtheme-page-footer-legal-item-border-right,
            solid
          );
          border-right-width: var(
            --haxtheme-page-footer-legal-item-border-right-width,
            2px
          );
          border-right-color: var(
            --haxtheme-page-footer-legal-item-border-right-color
          );
          height: var(--haxtheme-page-footer-legal-item-height, 0);
          @apply --haxtheme-page-footer-legal-item;
        }

        @media screen and (max-width: 768px) {
          .legal_item {
            border: var(--haxtheme-page-footer-legal-item-border-mobile, none);
            margin: var(
              --haxtheme-page-footer-legal-item-margin-mobile,
              5px 0 25px 0
            );
            padding: var(--haxtheme-page-footer-legal-item-padding-mobile, 2px);
            font-size: var(
              --haxtheme-page-footer-legal-item-font-size-mobile,
              12px
            );
            @apply --haxtheme-page-footer-legal-item-mobile;
          }
        }

        .legal_item a {
          text-decoration: var(
            --haxtheme-page-footer-legal-item-a-text-decoration
          );
          color: var(--haxtheme-page-footer-legal-item-a-color);
          @apply --haxtheme-page-footer-legal-item-a;
        }

        .legal_item a:hover {
          color: var(--haxtheme-page-footer-legal-item-a-hover-color, #000000);
          @apply --haxtheme-page-footer-legal-item-a-hover;
        }

        .legal_item:last-child {
          border: var(
            --haxtheme-page-footer-legal-item-last-child-border,
            none
          );
          @apply --haxtheme-page-footer-legal-item-last-child;
        }

        #odl_mark {
          margin: var(--haxtheme-page-footer-odl-mark-margin, 25px 0 15px 0);
          @apply --haxtheme-page-footer-odl-mark;
        }

        #odl_mark a {
          display: var(--haxtheme-page-footer-odl-mark-a-display, flex);
          background-color: var(
            --haxtheme-page-footer-odl-mark-a-background-color
          );
          border: var(--haxtheme-page-footer-odl-mark-a-border, solid);
          border-width: var(
            --haxtheme-page-footer-odl-mark-a-border-width,
            2px
          );
          border-color: var(
            --haxtheme-page-footer-odl-mark-a-border-color,
            #ffffff
          );
          border-radius: var(
            --haxtheme-page-footer-odl-mark-a-border-radius,
            50%
          );
          padding: var(--haxtheme-page-footer-odl-mark-a-padding, 8px);
          opacity: var(--haxtheme-page-footer-odl-mark-a-opacity, 0.4);
          @apply --haxtheme-page-footer-odl-mark-a;
        }
      </style>
      <div id="footer_wrap">
        <div id="social_wrap">
          <div id="icons">
            <div class="icon">
              <a href="https://twitter.com/Eberly_ODL" target="_blank">
                <paper-button id="twitter" aria-label="twitter" noink="">
                  <iron-icon
                    icon="haxthemeicons:twitter"
                    role="img"
                  ></iron-icon>
                </paper-button>
              </a>
            </div>
            <div class="icon">
              <a href="https://vimeo.com/user38447507" target="_blank">
                <paper-button id="vimeo" aria-label="vimeo" noink="">
                  <iron-icon icon="haxthemeicons:vimeo" role="img"></iron-icon>
                </paper-button>
              </a>
            </div>
            <div class="icon">
              <a href="https://www.pinterest.com/ecosodl/" target="_blank">
                <paper-button id="pinterest" aria-label="pinterest" noink="">
                  <iron-icon
                    icon="haxthemeicons:pinterest"
                    role="img"
                  ></iron-icon>
                </paper-button>
              </a>
            </div>
            <div class="icon">
              <a href="https://www.flickr.com/photos/ecosodl" target="_blank">
                <paper-button id="flikr" aria-label="flikr" noink="">
                  <iron-icon icon="haxthemeicons:flikr" role="img"></iron-icon>
                </paper-button>
              </a>
            </div>
            <div class="icon">
              <a
                href="https://www.youtube.com/user/EberlySciOnline"
                target="_blank"
              >
                <paper-button id="youtube" aria-label="youtube" noink="">
                  <iron-icon
                    icon="haxthemeicons:youtube"
                    role="img"
                  ></iron-icon>
                </paper-button>
              </a>
            </div>
            <div class="icon">
              <a href="mailto:odl@science.psu.edu" target="_blank">
                <paper-button id="email" aria-label="email" noink="">
                  <iron-icon icon="haxthemeicons:email" role="img"></iron-icon>
                </paper-button>
              </a>
            </div>
          </div>
        </div>
        <div id="info_wrap">
          <div class="address">
            221 Ritenour | University Park, PA 16802 | (814) 867-1391
          </div>
          <div id="basement">
            <div class="legal_statement">
              <div class="legal_item">
                <a
                  href="https://www.psu.edu/web-privacy-statement"
                  target="_blank"
                  >Privacy</a
                >
              </div>
              <div class="legal_item">
                <a href="https://policy.psu.edu/policies" target="_blank"
                  >Non Discrimination</a
                >
              </div>
              <div class="legal_item">
                <a href="https://policy.psu.edu/policies" target="_blank"
                  >Equal Opportunity</a
                >
              </div>
              <div class="legal_item">
                <a
                  href="https://www.psu.edu/accessibilitystatement"
                  target="_blank"
                  >Accessibility</a
                >
              </div>
              <div class="legal_item">
                <a
                  href="https://www.psu.edu/copyright-information"
                  target="_blank"
                  >Copyright</a
                >
              </div>
            </div>
          </div>
          <div id="odl_mark">
            <a href="http://haxcms.ddev.local/_sites/odl/index.html">
              <iron-image
                style="width:60px; height:60px;"
                alt="Office of Digital Learning, Eberly College of Science"
                sizing="cover"
                src="files/theme-images/logos/odl-logo.png"
              ></iron-image>
            </a>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "page-footer";
  }
  constructor() {
    super();
    import("@polymer/paper-button/paper-button.js");
    import("@polymer/iron-icon/iron-icon.js");
  }
}
window.customElements.define(PageFooter.tag, PageFooter);
export { PageFooter };
