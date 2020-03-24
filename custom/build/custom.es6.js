import { PolymerElement, html } from '../../build/es6/node_modules/@polymer/polymer/polymer-element.js';
import { HAXCMSPolymerElementTheme } from '../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSPolymerElementTheme.js';
import { store } from '../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js';
import { autorun, toJS } from '../../build/es6/node_modules/mobx/lib/mobx.module.js';
import { dom } from '../../build/es6/node_modules/@polymer/polymer/lib/legacy/polymer.dom.js';
import { varGet, wipeSlot } from '../../build/es6/node_modules/@lrnwebcomponents/hax-body/lib/haxutils.js';
import '../../build/es6/node_modules/@polymer/iron-pages/iron-pages.js';
import '../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/query/site-query.js';
import '../../build/es6/node_modules/@polymer/polymer/lib/elements/dom-repeat.js';
import { LitElement, css, html as html$1 } from '../../build/es6/node_modules/lit-element/lit-element.js';
import { SimplePicker } from '../../build/es6/node_modules/@lrnwebcomponents/simple-picker/simple-picker.js';
import { PromoTile } from '../../build/es6/node_modules/@lrnwebcomponents/promo-tile/promo-tile.js';
import '../../build/es6/node_modules/@lrnwebcomponents/person-testimonial/person-testimonial.js';
import '../../build/es6/node_modules/@polymer/iron-icon/iron-icon.js';
import '../../build/es6/node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js';
import '../../build/es6/node_modules/@polymer/polymer/lib/elements/dom-if.js';
import '../../build/es6/node_modules/@polymer/paper-button/paper-button.js';
import { SiteTopMenu } from '../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-top-menu.js';
import '../../build/es6/node_modules/@polymer/paper-input/paper-input.js';

class HomePageBanner extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        .image_wrap {
          background-repeat: var(
            --haxtheme-homepage-banner-image-wrap-background-repeat,
            no-repeat
          );
          background-size: var(
            --haxtheme-homepage-banner-image-wrap-background-size,
            cover
          );
          background-position: var(
            --haxtheme-homepage-banner-image-wrap-background-position,
            right center
          );
          width: var(--haxtheme-homepage-banner-image-wrap-width, 100%);
          min-height: var(
            --haxtheme-homepage-banner-image-wrap-min-height,
            32vw
          );
          display: var(--haxtheme-homepage-banner-image-wrap-display, flex);
          justify-content: var(
            --haxtheme-homepage-banner-image-wrap-justify-content,
            flex-end
          );
          align-items: var(
            --haxtheme-homepage-banner-image-wrap-align-items,
            center
          );
          flex: var(--haxtheme-homepage-banner-image-wrap-flex, 1 1 auto);
          margin: var(--haxtheme-homepage-banner-image-wrap-margin, 0);
          padding: var(--haxtheme-homepage-banner-image-wrap-padding, 0);
          @apply --haxtheme-homepage-banner-image-wrap;
        }

        @media screen and (max-width: 700px) {
          .image_wrap {
            height: var(
              --haxtheme-homepage-banner-image-wrap-height-mobile,
              55vw
            );
            @apply --haxtheme-homepage-banner-image-wrap-mobile;
          }
        }

        .image_text {
          background: var(
            --haxtheme-homepage-banner-image-text-background,
            rgba(0, 0, 0, 0.5)
          );
          width: var(
            --haxtheme-homepage-banner-image-text-width,
            calc(150px + (355 - 28) * ((100vw - 300px) / (1600 - 300)))
          );
          margin: var(--haxtheme-homepage-banner-image-text-margin, 0 5vw);
          padding: var(--haxtheme-homepage-banner-image-text-padding, 2vw);
          @apply --haxtheme-homepage-banner-image-text;
        }

        .image_text h1 {
          font-size: var(
            --haxtheme-homepage-banner-image-text-h1-font-size,
            calc(23px + (72 - 28) * ((100vw - 300px) / (1600 - 300)))
          );
          color: var(--haxtheme-homepage-banner-image-text-h1-color);
          font-weight: var(
            --haxtheme-homepage-banner-image-text-h1-font-weight
          );
          line-height: var(
            --haxtheme-homepage-banner-image-text-h1-line-height,
            1.1
          );
          margin: var(--haxtheme-homepage-banner-image-text-h1-margin, 0);
          padding: var(--haxtheme-homepage-banner-image-text-h1-padding, 0);
          width: var(--haxtheme-homepage-banner-image-text-h1-width, 100%);
          @apply --haxtheme-homepage-banner-image-text-h1;
        }

        .branding_wrap {
          display: var(--haxtheme-homepage-banner-branding-wrap-display, flex);
          align-items: var(
            --haxtheme-homepage-banner-branding-wrap-align-items,
            center
          );
          background-color: var(
            --haxtheme-homepage-banner-branding-wrap-background-color
          );
          border-top: var(
            --haxtheme-homepage-banner-branding-wrap-border-top,
            solid
          );
          border-top-width: var(
            --haxtheme-homepage-banner-branding-wrap-border-top-width,
            4px
          );
          border-top-color: var(
            --haxtheme-homepage-banner-branding-wrap-border-top-color
          );
          @apply --haxtheme-homepage-banner-branding-wrap;
        }
        
        .logo {
          position: var(--haxtheme-homepage-banner-logo-position, absolute);
          width: var(--haxtheme-homepage-banner-logo-width, 40%);
          @apply --haxtheme-homepage-banner-logo;
        }

        .logo img {
          width: var(--haxtheme-homepage-banner-logo-image-width, 48%);
          border: var(--haxtheme-homepage-banner-logo-image-border, solid);
          border-width: var(
            --haxtheme-homepage-banner-logo-image-border-width,
            4px
          );
          border-color: var(--haxtheme-homepage-banner-logo-image-border-color);
          border-radius: var(
            --haxtheme-homepage-banner-logo-image-border-radius,
            50%
          );
          background-color: var(
            --haxtheme-homepage-banner-logo-image-background-color
          );
          margin: var(
            --haxtheme-homepage-banner-logo-image-margin,
            -52px 0 0 25px
          );
          @apply --haxtheme-homepage-banner-logo-image;
        }

        @media screen and (max-width: 700px) {
          .logo img {
            margin: 0 0 0 5px;
          }
        }

        .company_name {
          width: var(--haxtheme-homepage-banner-company-name-width, 76%);
          margin: var(
            --haxtheme-homepage-banner-company-name-margin,
            0 0 0 auto
          );
          @apply --haxtheme-homepage-banner-company-name;
        }

        .company_name h2 {
          font-size: var(
            --haxtheme-homepage-banner-company-name-h2-font-size,
            calc(18px + (72 - 28) * ((100vw - 300px) / (1600 - 300)))
          );
          font-weight: var(
            --haxtheme-homepage-banner-company-name-h2-font-weight,
            400
          );
          color: var(--haxtheme-homepage-banner-company-name-h2-color);
          margin: var(
            --haxtheme-homepage-banner-company-name-h2-margin,
            5px 0 5px 0
          );
          @apply --haxtheme-homepage-banner-company-name-h2;
        }
      </style>
      <div id="banner_wrap">
        <div class="image_wrap" style$="background-image:url([[image]])">
          <div class="image"></div>
          <div class="image_text">
            <h1>[[text]]</h1>
          </div>
        </div>
        <div class="branding_wrap">
          <div class="logo">
            <img
              src="files/theme-images/logos/odl-logo.png"
              alt="Office of Digital Learning"
            />
          </div>
          <div class="company_name">
            <h2>Office of Digital Learning</h2>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "homepage-banner";
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
       * Alt text for image
       */
      alt: {
        type: String
      },
      /**
       * Text over image
       */
      text: {
        type: String
      }
    };
  }
}
window.customElements.define(HomePageBanner.tag, HomePageBanner);

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

        @media screen and (min-width: 1550px) {
          #box_wrap {
           margin-top: 150px;
          }
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
    import('../../build/es6/node_modules/@polymer/iron-icons/iron-icons.js');
    import('../../build/es6/node_modules/@polymer/paper-button/paper-button.js');
  }
}
window.customElements.define(InfoBox.tag, InfoBox);

class NewsFeed extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
      }

      .feed_header {
        display: var(--haxtheme-news-feed-feed-header-display, flex);
        justify-content: var(--haxtheme-news-feed-feed-header-justify-content, center);
        margin: var(--haxtheme-news-feed-feed-header-margin, -50px 0 0 0);
        @apply --haxtheme-news-feed-feed-header;
      }

      @media screen and (max-width: 768px) {
        .feed_header {
          margin: var(--haxtheme-news-feed-feed-header-margin-mobile, 0);
          @apply --haxtheme-news-feed-feed-header-mobile;
        }
      }

      .feed_header h2 {
        margin: var(--haxtheme-news-feed-feed-header-h2-margin, 0 0 20px 0);
        font-size: var(--haxtheme-news-feed-feed-header-h2-font-size, 34px);
        font-weight: var(--haxtheme-news-feed-feed-header-h2-font-weight, 400);
        background-color: var(--haxtheme-news-feed-feed-header-h2-background-color);
        color: var(--haxtheme-news-feed-feed-header-h2-color);
        padding: var(--haxtheme-news-feed-feed-header-h2-padding, 15px);
        @apply --haxtheme-news-feed-feed-header-h2;
      }

      @media screen and (max-width: 768px) {
        .feed_header h2 {
          display: var(--haxtheme-news-feed-feed-header-h2-display-mobile, flex);
          justify-content: var(--haxtheme-news-feed-feed-header-h2-justify-content-mobile, center);
          width: var(--haxtheme-news-feed-feed-header-h2-width-mobile, 100%);
          font-size: var(--haxtheme-news-feed-feed-header-h2-font-size-mobile, 28px);
          margin: var(--haxtheme-news-feed-feed-header-h2-margin-mobile, 0 0 15px 0);
          @apply --haxtheme-news-feed-feed-header-h2-mobile;
        }
      }

      #news_feed {
        display: var(--haxtheme-news-feed-news-feed-display, flex);
        flex-wrap: var(--haxtheme-news-feed-news-feed-flex-wrap, wrap);
        @apply --haxtheme-news-feed-news-feed;
      }

      @media screen and (min-width: 1124px) {
        #news_feed {
          flex-wrap: var(--haxtheme-news-feed-news-feed-flex-wrap-mobile, nowrap);
          @apply --haxtheme-news-feed-news-feed-mobile;
        }
      }

      #news_feed > *:not(site-query) {
        width: var(--haxtheme-news-feed-news-feed-width, 100%);
        @apply --haxtheme-news-feed-news-feed-width;
      }

      #news_feed_wrap {
        margin: var(--haxtheme-news-feed-news-feed-wrap-margin, 20px);
        @apply --haxtheme-news-feed-news-feed-wrap;
      }

      #card_wrap {
        display: var(--haxtheme-news-feed-card-wrap-display, flex);
        flex-direction: var(--haxtheme-news-feed-card-wrap-flex-direction, column);
        justify-content: var(--haxtheme-news-feed-card-wrap-justify-content, space-evenly);
        border-right: var(--haxtheme-news-feed-card-wrap-border, solid);
        border-right-width: var(--haxtheme-news-feed-card-wrap-border-width, 2px);
        border-right-color: var(--haxtheme-news-feed-card-wrap-border-color);
        padding: var(--haxtheme-news-feed-card-wrap-padding, 0 40px);
        @apply --haxtheme-news-feed-card-wrap;
      }

      #card_wrap:last-of-type {
        border-right: var(--haxtheme-news-feed-card-wrap-last-of-border, none);
        @apply --haxtheme-news-feed-card-wrap-last-of-border;
      }

      @media screen and (max-width: 768px) {
        #card_wrap {
          border-right: var(--haxtheme-news-feed-card-wrap-border-right-mobile, none);
          border-bottom: var(--haxtheme-news-feed-card-wrap-border-bottom-mobile, solid);
          border-bottom-width: var(--haxtheme-news-feed-card-wrap-border-bottom-width-mobile, 2px);
          border-bottom-color: var(--haxtheme-news-feed-card-wrap-border-bottom-color-mobile);
          margin: var(--haxtheme-news-feed-card-wrap-margin-mobile, 0 0 25px 0);
          padding: var(--haxtheme-news-feed-card-wrap-padding-mobile, 0);
          @apply --haxtheme-news-feed-card-wrap-mobile;
        }
      }

      #card_image iron-image {
        height: var(--haxtheme-news-feed-card-image-height, 200px);
        width: var(--haxtheme-news-feed-card-image-width, 100%);
        @apply --haxtheme-news-feed-card-image;
      }

      @media screen and (max-width: 1123px) {
        #card_image iron-image {
          height: 300px;
        }
      }

      #card_heading_wrap {
        border-left: var(--haxtheme-news-feed-card-heading-wrap-border-left);
        border-left-width: var(--haxtheme-news-feed-card-heading-wrap-border-left-width);
        border-left-color: var(--haxtheme-news-feed-card-heading-wrap-border-left-color);
        padding: var(--haxtheme-news-feed-card-heading-wrap-padding, 0 0 0 15px);
        margin: var(--haxtheme-news-feed-card-heading-wrap-margin, 15px 0 0 0);
        @apply --haxtheme-news-feed-card-heading-wrap;
      }

      #card_heading h1 {
        color: var(--haxtheme-news-feed-card-heading-h1-color);
        margin: var(--haxtheme-news-feed-card-heading-h1-margin, 0);
        font-weight: var(--haxtheme-news-feed-card-heading-h1-font-weight);
        font-size: var(--haxtheme-news-feed-card-heading-h1-font-size, 28px);
        line-height: var(--haxtheme-news-feed-card-heading-h1-line-height, 1.2);
        @apply --haxtheme-news-feed-card-heading-h1;
      }
      #card_heading h1:hover {
        color: var(--haxtheme-news-feed-card-heading-h1-hover-color);
        @apply --haxtheme-news-feed-card-heading-h1-hover;
      }

      #card_heading a {
        text-decoration: var(--haxtheme-news-feed-card-heading-a-text-decoration);
        @apply --haxtheme-news-feed-card-heading-a;
      }

      #card_footer {
        display: var(--haxtheme-news-feed-card-footer-display, flex);
        align-items: var(--haxtheme-news-feed-card-footer-align-items, center);
        margin: var(--haxtheme-news-feed-card-footer-margin, -5px 0 0 0);
        @apply --haxtheme-news-feed-card-footer
      }

      #author_name {
        margin: var(--haxtheme-news-feed-author-name-margin, 15px 0 0 0);
        font-size: 18px;
        font-weight: 400;
        @apply --haxtheme-news-feed-author-name
      }

      #card_description {
        font-size: var(--haxtheme-news-feed-card-description-font-size);
        font-weight: var(--haxtheme-news-feed-card-description-font-weight);
        line-height: var(--haxtheme-news-feed-card-description-line-height);
        padding: var(--haxtheme-news-feed-card-description-padding, 15px 0 0 0);
        @apply --haxtheme-news-feed-card-description
      }

      iron-image#author_image {
        border-radius: var(--haxtheme-news-feed-author-image-border-radius, 50%);
        margin: var(--haxtheme-news-feed-author-image-margin, 15px 10px 0 0);
        @apply --haxtheme-news-feed-author-image
      }

      #action_button {
        display: var(--haxtheme-news-feed-action-button-display, flex);
        justify-content: var(--haxtheme-news-feed-action-justify-content, center);
        margin: var(--haxtheme-news-feed-action-button-margin, 5px 0 0 0);
        @apply --haxtheme-news-feed-action-button
      }

      #action_button a {
        text-decoration: var(--haxtheme-news-feed-action-button-a-text-decoration);
        @apply --haxtheme-news-feed-action-button-a
      }

      paper-button#news {
        color: var(--haxtheme-news-feed-paper-button-color);
        @apply --haxtheme-news-feed-paper-button
      }

      paper-button#news:hover,
      paper-button#news:focus {
        color: var(--haxtheme-news-feed-paper-button-color-active);
        @apply --haxtheme-news-feed-paper-button-active
      }
    </style>
    <div id="news_feed_wrap">
      <div class="feed_header">
        <h2>Recent News</h2>
      </div>
    <div id="news_feed">
      <site-query
        result="{{__items}}"
        conditions='{
          "metadata.type": "news"
        }'
        limit="3"
        start-index="1"
        sort
      ></site-query>
      <dom-repeat items="[[__items]]" mutable-data>
        <template>
          <div id="card_wrap">
            <div id="card_image">
              <iron-image
                sizing="cover"
                src="[[item.metadata.fields.image]]"
              ></iron-image>
            </div>
            <div id="card_heading_wrap">
              <div id="card_heading">
                <a href\$="[[item.location]]">
                  <h1>[[item.title]]</h1>
                </a>
              </div>
              <div id="card_footer">
                <iron-image
                  id="author_image"
                  style="width:50px; height:50px;"
                  sizing="cover"
                  src="[[item.metadata.authorImage]]"
                ></iron-image>
                <div id="author_name">[[item.metadata.author]]</div>
              </div>
            </div>
            <div id="card_description">[[_trimDescription(item.description)]]</div>
            <div id="action_button">
              <a href\$="[[item.location]]">
                <paper-button noink id="news">
                  <div class="title">Read More</div>
                  <iron-icon icon="chevron-right"></iron-icon>
                </paper-button>
              </a>
            </div>
          </div>
        </template>
    </div>
  </div>
  `;
  }
  constructor() {
    super();
    import('../../build/es6/node_modules/@polymer/iron-image/iron-image.js');
    import('../../build/es6/node_modules/@polymer/paper-button/paper-button.js');
    import('../../build/es6/node_modules/@polymer/iron-icons/iron-icons.js');
  }
  static get tag() {
    return "news-feed";
  }
  _trimDescription(description) {
    const trim = description.substring(0, 175) + "...";
    return trim;
  }
}
window.customElements.define(NewsFeed.tag, NewsFeed);

class VideosFeed extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          --theme-color-1: #363533;
          --theme-color-2: #e2801e;
          --theme-color-4: #fff;
        }

        h2 {
          margin: 0;
        }

        .feed_header {
          display: flex;
          justify-content: center;
          margin-top: -50px;
        }

        @media screen and (max-width: 768px) {
          .feed_header {
            margin-top: 0;
          }
        }

        .feed_header h2 {
          margin: 0 0 20px 0;
          font-weight: 400;
          font-size: 34px;
          background-color: var(--theme-color-2);
          color: #fff;
          padding: 15px;
        }

        @media screen and (max-width: 768px) {
          .feed_header h2 {
            display: flex;
            justify-content: center;
            width: 100%;
            font-size: 28px;
            margin: 0 0 15px 0;
          }
        }

        #video_feed {
          display: flex;
          flex-wrap: wrap;
        }

        @media screen and (min-width: 768px) {
          #video_feed {
            flex-wrap: nowrap;
          }
        }

        #video_feed_wrap {
          margin: 20px;
        }

        #card_wrap {
          height: 500px;
          display: flex;
          flex: 1 1 auto;
          flex-direction: column;
          justify-content: space-evenly;
          border-right: solid 2px #dcdcdc;
          padding: 0 40px;
        }

        #card_wrap:last-of-type {
          border-right: none;
        }

        @media screen and (max-width: 768px) {
          #card_wrap {
            padding: 0 0 15px 0;
            border-right: none;
            border-bottom: solid 2px #dcdcdc;
            margin-bottom: 25px;
          }
        }
      `
    ];
  }
  render() {
    return html$1`
      <div id="video_feed_wrap">
        <div class="feed_header">
          <h2>Videos</h2>
        </div>
        <div id="video_feed">
          <div id="card_wrap">
            <iframe
              width="100%"
              height="415"
              src="https://www.youtube.com/embed/zPwe8nMYCq0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div id="card_wrap">
            <iframe
              width="100%"
              height="415"
              src="https://www.youtube.com/embed/5n7WCeHXc4A"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "videos-feed";
  }
}
window.customElements.define(VideosFeed.tag, VideosFeed);

class TestimonialsFeed extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          --theme-color-1: #363533;
          --theme-color-2: #e2801e;
          --theme-color-3: #f5f5f5;
          --theme-color-4: #fff;
        }
        h2 {
          margin: 0;
          color: var(--theme-color-4);
          font-size: 40px;
          font-weight: normal;
        }
        #highlights_feed_wrap {
          margin: 20px;
        }
        .feed_header {
          background-color: var(--theme-color-2);
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
          padding: 5px;
        }
      `
    ];
  }
  render() {
    return html$1`
      <div id="highlights_feed_wrap">
        <div class="feed_header">
          <h2>Testimonials</h2>
        </div>
        <slot></slot>
      </div>
    `;
  }
  static get tag() {
    return "testimonials-feed";
  }
}
window.customElements.define(TestimonialsFeed.tag, TestimonialsFeed);

class PageFeature extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        a {
          text-decoration: var(--haxtheme-page-feature-a-text-decoration);
          @apply --haxtheme-page-feature-a;
        }

        h1 {
          font-size: var(--haxtheme-page-feature-h1-font-size);
          margin: var(--haxtheme-page-feature-h1-margin, 0);
          line-height: var(--haxtheme-page-feature-h1-line-height, 1);
          font-weight: var(--haxtheme-page-feature-h1-font-weight);
          @apply --haxtheme-page-feature-h1;
        }

        @media screen and (max-width: 768px) {
          h1 {
            font-size: var(--haxtheme-page-feature-h1-font-size-mobile, 28px);
            @apply --haxtheme-page-feature-h1-mobile;
          }
        }

        h2 {
          font-size: var(--haxtheme-page-feature-h2-font-size, 32px);
          margin: var(--haxtheme-page-feature-h2-margin, 0);
          font-weight: var(--haxtheme-page-feature-h2-font-weight);
          @apply --haxtheme-page-feature-h2;
        }

        @media screen and (max-width: 768px) {
          h2 {
            font-size: var(--haxtheme-page-feature-h2-font-size-mobile, 24px);
            @apply --haxtheme-page-feature-h2-mobile;
          }
        }

        #feature_wrap {
          background-color: var(--haxtheme-page-feature-wrap-background-color);
          padding: var(--haxtheme-page-feature-wrap-padding, 40px 0 55px 0);
          @apply --haxtheme-page-feature-feature-wrap;
        }

        @media screen and (max-width: 1012px) {
          #feature_wrap {
            flex-direction: var(
              --haxtheme-page-feature-feature-wrap-flex-direction-mobile,
              column
            );
            height: var(
              --haxtheme-page-feature-feature-wrap-height-mobile,
              auto
            );
            padding: var(
              --haxtheme-page-feature-feature-wrap-padding-mobile,
              0
            );
            background-color: var(
              --haxtheme-page-feature-feature-wrap-background-color-mobile,
              transparent
            );
            @apply --haxtheme-page-feature-feature-wrap-mobile;
          }
        }

        #border {
          display: var(--haxtheme-page-feature-border-display, flex);
          justify-content: var(
            --haxtheme-page-feature-border-justify-content,
            center
          );
          align-items: var(--haxtheme-page-feature-border-align-items, center);
          padding: var(--haxtheme-page-feature-border-padding, 40px 0 0 0);
          width: var(--haxtheme-page-feature-border-width, 94%);
          border-top: var(--haxtheme-page-feature-border-border-top, dashed);
          border-top-width: var(
            --haxtheme-page-feature-border-border-top-width,
            4px
          );
          border-top-color: var(
            --haxtheme-page-feature-border-border-top-color
          );
          margin: var(--haxtheme-page-feature-border-margin, 0 auto 0 auto);
          @apply --haxtheme-page-feature-border;
        }

        @media screen and (max-width: 1012px) {
          #border {
            flex-direction: var(
              --haxtheme-page-feature-border-flex-direction-mobile,
              column
            );
            height: var(--haxtheme-page-feature-border-height-mobile, auto);
            border: var(--haxtheme-page-feature-border-border-mobile, none);
            padding: var(
              --haxtheme-page-feature-border-padding-mobile,
              5px 0 0 0
            );
            width: var(--haxtheme-page-feature-border-width, 100%);
            @apply --haxtheme-page-feature-border-mobile;
          }
        }

        #feature_image {
          background-repeat: var(
            --haxtheme-page-feature-feature-image-background-repeat,
            no-repeat
          );
          background-size: var(
            --haxtheme-page-feature-feature-image-background-size,
            cover
          );
          background-position: var(
            --haxtheme-page-feature-feature-image-background-position,
            center
          );
          width: var(--haxtheme-page-feature-feature-image-width, 50%);
          height: var(--haxtheme-page-feature-feature-image-height, 400px);
          @apply --haxtheme-page-feature-feature-image;
        }

        @media screen and (max-width: 1012px) {
          #feature_image {
            height: var(
              --haxtheme-page-feature-feature-image-height-mobile,
              300px
            );
            margin: var(
              --haxtheme-page-feature-feature-image-margin-mobile,
              15px 0 0 0
            );
            width: var(
              --haxtheme-page-feature-feature-image-width-mobile,
              100%
            );
            @apply --haxtheme-page-feature-feature-image-mobile;
          }
        }

        #feature_description_wrap {
          background-color: var(
            --haxtheme-page-feature-feature-description-wrap-background-color
          );
          height: var(
            --haxtheme-page-feature-feature-description-wrap-height,
            auto
          );
          width: var(
            --haxtheme-page-feature-feature-description-wrap-width,
            780px
          );
          z-index: var(
            --haxtheme-page-feature-feature-description-wrap-z-index,
            1
          );
          margin: var(
            --haxtheme-page-feature-feature-description-wrap-margin,
            0 25px 0 -30px
          );
          box-shadow: var(
            --haxtheme-page-feature-feature-description-wrap-box-shadow,
            1px 2px 7px
              var(
                --haxtheme-page-feature-feature-description-wrap-box-shadow-color
              )
          );
          @apply --haxtheme-page-feature-feature-description-wrap;
        }

        @media screen and (max-width: 1124px) {
          #feature_description_wrap {
            width: var(
              --haxtheme-page-feature-feature-description-wrap-width-mobile,
              100%
            );
            z-index: var(
              --haxtheme-page-feature-feature-description-wrap-z-index-mobile,
              0
            );
            box-shadow: var(
              --haxtheme-page-feature-feature-description-wrap-box-shadow,
              none
            );
            margin: var(
              --haxtheme-page-feature-feature-description-wrap-margin,
              0
            );
            @apply --haxtheme-page-feature-feature-description-wrap-mobile;
          }
        }

        #title_wrap {
          display: var(--haxtheme-page-feature-title-wrap-display, flex);
          flex-direction: var(
            --haxtheme-page-feature-title-wrap-flex-direction,
            column
          );
          border-left: var(--haxtheme-page-feature-title-wrap-border-left);
          border-left-width: var(
            --haxtheme-page-feature-title-wrap-border-left-width
          );
          border-left-color: var(
            --haxtheme-page-feature-title-wrap-border-left-color
          );
          padding: var(--haxtheme-page-feature-title-wrap-padding, 0 0 0 15px);
          margin: var(--haxtheme-page-feature-title-wrap-margin, 20px 0 0 20px);
          @apply --haxtheme-page-feature-title-wrap;
        }

        @media screen and (max-width: 768px) {
          #title_wrap {
            margin: var(
              --haxtheme-page-feature-title-wrap-margin-mobile,
              20px 0 0 0
            );
            @apply --haxtheme-page-feature-title-wrap-mobile;
          }
        }

        #description {
          font-size: var(--haxtheme-page-feature-description-font-size);
          font-weight: var(--haxtheme-page-feature-description-font-weight);
          line-height: var(--haxtheme-page-feature-description-line-height);
          padding: var(
            --haxtheme-page-feature-description-padding,
            25px 25px 15px
          );
          @apply --haxtheme-page-feature-description;
        }

        @media screen and (max-width: 768px) {
          #description {
            padding: var(
              --haxtheme-page-feature-description-padding-mobile,
              25px 0 0 0
            );
            margin: var(
              --haxtheme-page-feature-description-margin-mobile,
              0 0 25px 0
            );
            @apply --haxtheme-page-feature-description-mobile;
          }
        }

        #sub_info {
          font-size: var(--haxtheme-page-feature-sub-info-font-size, 20px);
          font-weight: var(--haxtheme-page-feature-sub-info-font-weight);
          @apply --haxtheme-page-feature-sub-info;
        }

        #action_button {
          display: var(--haxtheme-page-feature-action-button-display, flex);
          justify-content: var(
            --haxtheme-page-feature-action-button-justify-content,
            flex-end
          );
          margin: var(
            --haxtheme-page-feature-action-button-margin,
            0 25px 25px 0
          );
          @apply --haxtheme-page-feature-action-button;
        }

        @media screen and (max-width: 768px) {
          #action_button {
            justify-content: var(
              --haxtheme-page-feature-action-button-justify-content-mobile,
              center
            );
            margin: var(--haxtheme-page-feature-action-button-margin-mobile, 0);
            @apply --haxtheme-page-feature-action-button-mobile;
          }
        }

        paper-button#feature {
          color: var(--haxtheme-page-feature-paper-button-feature-color);
          @apply --haxtheme-page-feature-paper-button-feature;
        }

        paper-button#feature:hover,
        paper-button#feature:focus {
          color: var(--haxtheme-page-feature-paper-button-feature-color-active);
          @apply --haxtheme-page-feature-paper-button-feature-active;
        }
      </style>
      <div id="feature_wrap">
        <div id="border">
          <div
            id="feature_image"
            style$="background-image:url([[image]])"
            alt="[[alt]]"
          ></div>
          <div id="feature_description_wrap">
            <div id="title_wrap">
              <div id="title">
                <h1>[[title]]</h1>
              </div>
              <div id="sub_title">
                <h2>[[subtitle]]</h2>
              </div>
              <div id="sub_info">[[info]]</div>
            </div>
            <div id="description">
              <slot></slot>
            </div>
            <div id="action_button">
              <a href\$="[[url]]">
                <paper-button noink id="feature">
                  <div class="title">Read More</div>
                  <iron-icon icon="chevron-right"></iron-icon>
                </paper-button>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "page-feature";
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
       * Alt text for image
       */
      alt: {
        type: String
      },
      /**
       * Title for feature
       */
      title: {
        type: String
      },
      /**
       * Subtitle for feature
       */
      subtitle: {
        type: String
      },
      /**
       * Sub info for feature
       */
      info: {
        type: String
      },
      /**
       * Url for feature
       */
      url: {
        type: String
      }
    };
  }
  constructor() {
    super();
    import('../../build/es6/node_modules/@polymer/iron-image/iron-image.js');
    import('../../build/es6/node_modules/@polymer/iron-icons/iron-icons.js');
    import('../../build/es6/node_modules/@polymer/paper-button/paper-button.js');
  }
}
window.customElements.define(PageFeature.tag, PageFeature);

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

/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */

class OdlSimplePicker extends SimplePicker {
  static get styles() {
    return [
      super.styles,
      css`
        .row {
          display: flex;
          flex-direction: column;
        }
    `];
  }
  static get tag() {
    return "odl-simple-picker";
  }
  constructor() {
    super();
  }
}
window.customElements.define(OdlSimplePicker.tag, OdlSimplePicker);

class ContentListing extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          }

        a {
          text-decoration: var(--haxtheme-page-feature-a-text-decoration);
        }

        h1 {
          font-size: var(--haxtheme-page-feature-h1-font-size);
          margin: 0;
          line-height: 1;
          font-weight: var(--haxtheme-page-feature-h1-font-weight);
        }

        @media screen and (max-width: 768px) {
          h1 {
            font-size: 28px;
          }
        }

        h2 {
          font-size: 32px;
          margin: 0;
          font-weight: var(--haxtheme-page-feature-h2-font-weight);
        }

        @media screen and (max-width: 768px) {
          h2 {
            font-size: 24px;
          }
        }

        #feature_wrap {
          background-color: var(--haxtheme-page-feature-wrap-background-color);
          padding: 40px 0 55px 0;
        }

        @media screen and (max-width: 1012px) {
          #feature_wrap {
            flex-direction: column;
            height: auto;
            padding: 0 15px;
            background-color: transparent;
          }
        }

        #border {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 0 0 0;
          width: 94%;
          border-top: dashed;
          border-top-width: 4px;
          border-top-color: var(
            --haxtheme-page-feature-border-border-top-color
          );
          margin: 0 auto 0 auto;
        }

        @media screen and (max-width: 1012px) {
          #border {
            flex-direction: column;
            height: auto;
            border: none;
            padding: 5px 0 0 0;
            width: 100%;
          }
        }

        #feature_image {
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          width: 50%;
          height: 400px;
        }

        @media screen and (max-width: 1012px) {
          #feature_image {
            height: 300px;
            margin: 15px 0 0 0;
            width: 100%;
          }
        }

        #feature_description_wrap {
          background-color: var(
            --haxtheme-page-feature-feature-description-wrap-background-color
          );
          height: auto;
          width: 780px;
          z-index: 1;
          margin: 0 25px 0 -30px;
          box-shadow: 1px 2px 7px
            var(
              --haxtheme-page-feature-feature-description-wrap-box-shadow-color
            );
        }

        @media screen and (max-width: 1124px) {
          #feature_description_wrap {
            width: 100%;
            z-index: 0;
            box-shadow: none;
            margin: 0;
          }
        }

        #title_wrap {
          display: flex;
          flex-direction: column;
          border-left: var(--haxtheme-page-feature-title-wrap-border-left);
          border-left-width: var(
            --haxtheme-page-feature-title-wrap-border-left-width
          );
          border-left-color: var(
            --haxtheme-page-feature-title-wrap-border-left-color
          );
          padding: 0 0 0 15px;
          margin: 20px 0 0 20px;
        }

        @media screen and (max-width: 768px) {
          #title_wrap {
            margin: 20px 0 0 0;
          }
        }

        #title {
          margin: 0 0 10px 0;
        }

        #description {
          font-size: var(--haxtheme-page-feature-description-font-size);
          font-weight: var(--haxtheme-page-feature-description-font-weight);
          line-height: var(--haxtheme-page-feature-description-line-height);
          height: auto;
        }

        @media screen and (max-width: 768px) {
          #description {
            padding: 25px 0 0 0;
            margin: 0 0 25px 0;
          }
        }

        #results {
          display: flex;
          flex-wrap: wrap;
          border: solid 2px #dcdcdc;
          height: auto;
          margin: 20px;
          display: grid;
          grid-template-columns: repeat(var(--content-listing-grid-count, 3), 1fr [col-start]);
        }

        @media screen and (max-width: 768px) {
          #results {
            margin: 0;
          }
        }

        odl-simple-picker {
          width: 55%;
          --simple-picker-row: {
            display: block;
          }
        }

        @media screen and (max-width: 768px) {
          simple-picker {
            width: 100%;
          }
        }

        course-tile {
          margin: 1px;
          flex-grow: 1;
        }
      </style>
      <div id="feature_wrap">
        <div id="border">
          <div
            id="feature_image"
            style$="background-image:url([[image]])"
            alt="[[alt]]"
          ></div>
          <div id="feature_description_wrap">
            <div id="title_wrap">
              <div id="title">
                <h1>[[title]]</h1>
              </div>
              <site-query
                result="{{__courseitems}}"
                conditions="[[condition]]"
              ></site-query>
              <odl-simple-picker
                id="courseselect"
                label="Select a Subject"
                value="{{__selectedCourse}}"
                position=""
                options="[[__courselist(__courseitems)]]"
              >
              </odl-simple-picker>
            </div>

            <div id="description">
              
              <div id="results">
              <dom-repeat items="[[__selectedCourses(__selectedCourse, __courseitems)]]">
                <template>
                  <course-tile
                    name="[[item.title]]"
                    image="[[item.metadata.fields.image]]"
                    url="[[item.location]]"
                  ></course-tile>
                </template>
              </dom-repeat>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "content-listing";
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
       * Alt text for image
       */
      alt: {
        type: String
      },
      /**
       * Title for feature
       */
      title: {
        type: String
      },
      /**
       * Condition
       */
      condition: {
        type: Object
      },
      /**
       * Location
       */
      location: {
        type: String
      },
    };
  }

  constructor() {
    super();
    this.__disposer = [];
    this.__defaultGridCount = getComputedStyle(this).getPropertyValue('--content-listing-grid-count');
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }

  __filteredCourselist(items) {
    let filterIndex = [];
    const filtered = items.filter(item => {
      if (filterIndex.includes(varGet(item, this.location, false))) {
        return false;
      } else {
        filterIndex.push(varGet(item, this.location, false));
        return true;
      }
    });
    return filtered;
  }
  __courselist(items) {
    const filtered = this.__filteredCourselist(items);
    const courses = filtered.map(item => {
      return {
        value: varGet(item, this.location, false),
        alt: varGet(item, this.location, false)
      };
    });
    return [courses];
  }
  __courseItemsDuped(items) {
    const filtered = this.__filteredCourselist(items);
    const subjects = filtered.map(item => varGet(item, this.location, false));
    return subjects;
  }

  __selectedCourses(selected, courses) {
    const filtered = courses.filter(course => {
      if (course.metadata.fields.subject === selected) {
        return true;
      }
      else {
        return false;
      }
    });

    // update the grid column size
    this.__updateResultsGridCount(filtered.length);
      
    return filtered;  
  }

  __updateResultsGridCount(gridItems) {
    const hostComputedStyle = getComputedStyle(this);
    const mq = hostComputedStyle.getPropertyValue('--content-listing-results-medium-breakpoint') || 900;
    const currentGridCount = hostComputedStyle.getPropertyValue('--content-listing-grid-count');
    let newGridCount;
    // dynamically set grid width
    if (this.offsetWidth > mq) {
      if (gridItems === 2) {
        newGridCount = 2;
      }
      else if (gridItems === 1) {
        newGridCount = 1;
      }
      else {
        newGridCount = this.__defaultGridCount;
      }
    }
    else {
      newGridCount = this.__defaultGridCount;
    }

    if (newGridCount !== currentGridCount) {
      this.style.setProperty('--content-listing-grid-count', newGridCount);
    }
  }
}




window.customElements.define(ContentListing.tag, ContentListing);

class ODLPromoTile extends PromoTile {
  constructor() {
    super();
  }
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        a {
          text-decoration: var(--promo-tile-a-text-decoration, none);
          @apply --promo-tile-a;
        }

        #container {
          width: var(--promo-tile-container-width, 100%);
          height: var(--promo-tile-container-height, auto);
          @apply --promo-tile-container;
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
          @apply --promo-tile-back-card;
        }

        :host([hover]) #container .back_card {
          opacity: var(--promo-tile-container-back-card-hover-opacity, 0.9);
          transition: var(
            --promo-tile-container-back-card-hover-transition,
            all 0.3s ease-in-out
          );
          @apply --promo-tile-container-back-card-hover;
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
          @apply --promo-tile-container-front-card-hover;
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
          @apply --promo-tile-image;
        }

        .front_title {
          opacity: var(--promo-tile-front-title-opacity, 1);
          position: var(--promo-tile-front-title-position, absolute);
          display: var(--promo-tile-front-title-display, flex);
          align-self: var(--promo-tile-front-title-align-self, flex-end);
          padding: var(--promo-tile-front-title-padding, 0 0 25px 0);
          @apply --promo-tile-front-title;
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
          @apply --promo-title-front-title-h1;
        }

        .back_title {
          opacity: var(--promo-tile-back-title-opacity, 1);
          display: var(--promo-tile-back-title-display, flex);
          justify-content: var(--promo-tile-back-title-justify-content, center);
          padding: var(--promo-tile-back-title-padding, 20px 0 0 0);
          @apply --promo-tile-back-title;
        }

        .back_title h1 {
          color: var(--promo-tile-back-title-h1-color, #ffffff);
          font-size: var(--promo-tile-back-title-h1-font-size, 36px);
          font-weight: var(--promo-tile-back-title-h1-font-weight, 400);
          @apply --promo-tile-back-title-h1;
        }

        .back_content {
          color: var(--promo-tile-back-content-font-color, #ffffff);
          font-size: var(--promo-tile-back-content-font-size, 18px);
          font-weight: var(--promo-tile-back-content-font-weight, 300);
          line-height: var(--promo-tile-back-content-line-height, 1.4);
          padding: var(--promo-title-back-content-padding, 0 20px 0 20px);
          text-align: justify;
          @apply --promo-tile-back-content;
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
          @apply --promo-tile-paper-button-learn;
        }

        paper-button#learn:hover,
        paper-button#learn:focus {
          background-color: var(
            --promo-tile-paper-button-learn-background-color-active,
            #363533
          );
          @apply --promo-tile-paper-button-learn-active;
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
              <div class="learn_more">
                <!-- <a
                  tabindex="-1"
                  href="[[url]]"
                  id="link"
                  target$="[[_urlTarget(url)]]"
                >
                  <paper-button id="learn" no-ink
                    >[[label]]
                    <iron-icon icon="chevron-right"></iron-icon>
                  </paper-button>
                </a> -->
              </div>
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

class HaxThemeHome extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --theme-color-1: #363533;
          --theme-color-2: #e2801e;
          --theme-color-3: #f5f5f5;
          --theme-color-4: #fff;
        }
        /**
       * Hide the slotted content during edit mode. This must be here to work.
       */
        :host([edit-mode]) #slot {
          display: none;
        }
        info-box#about {
          margin: 80px 0 15px 0;
        }

        @media screen and (max-width: 768px) {
          info-box#about {
            margin: 40px 0 0 0;
          }
        }

        odl-promo-tile {
          --button-hover-color: none;
        }

        #promo_tile_wrap {
          display: grid;
          grid-template-columns: repeat(5, auto);
          border-top: solid;
          border-top-width: 20px;
          border-top-color: var(--theme-color-1);
        }

        @media screen and (max-width: 768px) {
          #promo_tile_wrap {
            border-top: none;
          }
        }

        @media screen and (max-width: 1330px) {
          #promo_tile_wrap {
            grid-template-columns: repeat(2, auto);
          }
        }

        @media screen and (max-width: 768px) {
          #promo_tile_wrap {
            grid-template-columns: repeat(1, auto);
          }
        }

        @media screen and (max-width: 1124px) {
          #promo_tile_wrap {
            padding: 0;
          }
        }

        @media screen and (max-width: 1124px) {
          page-feature {
            width: 100%;
            border-bottom: solid 2px #dcdcdc;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media screen and (max-width: 768px) {
          page-feature {
            width: 94%;
          }
        }
      </style>
      <homepage-banner
        image="files/theme-images/page-banners/odl_homepage_banner.jpg"
        alt="students receiving instruction in classroom"
        text="A creative studio for your classroom"
      ></homepage-banner>
      <info-box id="about" title="What We Do" url="about">
        <span slot="action_text">
          The Office of Digital Learning (ODL) helps faculty and students make
          the most of digital learning technology. We collaboratively design and
          build tools for any pedagogy; dream it and we will build it.
        </span>
      </info-box>
      <div id="promo_tile_wrap">
        <div class="promo_tile">
          <odl-promo-tile
            title="Course Management"
            label="Create"
            image="files/theme-images/promo-tiles/icontest5.jpg"
            alt="NGDLE stands for: Next Generation Learning Environment."
            url="coursemanagement"
          >
            Create and deliver course content using systems designed to empower instructors.
          </odl-promo-tile>
        </div>
        <div class="promo_tile">
          <odl-promo-tile
            title="Innovation Lab"
            label="Explore"
            image="files/theme-images/promo-tiles/icontest4.jpg"
            alt=""
            url="lab"
          >
            We're always exploring, testing, and sharing new
            technologies; step into our innovation lab and see
            what we've been up to.
          </odl-promo-tile>
        </div>
        <div class="promo_tile">
          <odl-promo-tile
            title="Pedagogy"
            label="Learn"
            image="files/theme-images/promo-tiles/icontest8.jpg"
            alt=""
            url="pedagogy"
          >
            Instructional methods used to convey learning objectives. Work with
            us to discover creative ways to implement pedagogy into your
            instruction.
          </odl-promo-tile>
        </div>
        <div class="promo_tile">
          <odl-promo-tile
            title="Multimedia"
            label="Create"
            image="files/theme-images/promo-tiles/icontest10.jpg"
            alt=""
            url="multimedia"
          >
            Work with experts to create instructional videos, high-fidelity
            graphics, virtual reality assets, and more.
          </odl-promo-tile>
        </div>
      </div>
      <div id="page_feature">
        <site-query
          result="{{__newsitems}}"
          conditions='{
          "metadata.type": "news"
        }'
          limit="1"
          sort='{ "order": "ASC" }'
        ></site-query>
        <dom-repeat items="[[__newsitems]]" mutable-data>
          <template>
            <page-feature
              title="Top News"
              subtitle="[[item.title]]"
              info="[[item.metadata.author]]"
              url="[[item.location]]"
              image="[[item.metadata.fields.image]]"
              alt="[[item.metadata.fields.imageAlt]]"
            >
              [[item.description]]</page-feature
            >
          </template>
        </dom-repeat>
      </div>
      <div id="news_feed">
        <news-feed></news-feed>
      </div>
      <div id="page_feature">
        <site-query
          result="{{__spotlightitems}}"
          conditions='{ "metadata.type": "spotlight" }'
          limit="1"
          sort='{ "order": "DES" }'
        ></site-query>
        <dom-repeat items="[[__spotlightitems]]" mutable-data>
          <template>
            <page-feature
              title="Faculty Spotlight"
              subtitle="[[item.metadata.fields.name]]"
              info="[[item.metadata.fields.jobTitle]]"
              url="[[item.location]]"
              image="[[item.metadata.fields.image]]"
              alt="[[item.metadata.fields.imageAlt]]"
            >
              [[item.description]]</page-feature
            >
          </template>
        </dom-repeat>
      </div>
      <div id="videos_feed">
        <videos-feed></videos-feed>
      </div>
      <div id="courses">
        <content-listing
          title="Courses"
          image="files/feature-images/course-select.jpg"
          alt="Student with a question raising hand in class surrounded by other students."
          condition='{"metadata.type": "course"}'
          location="metadata.fields.subject"
        ></content-listing>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-home";
  }

  constructor() {
    super();
    import('../../build/es6/node_modules/@polymer/paper-button/paper-button.js');
  }
}
window.customElements.define(HaxThemeHome.tag, HaxThemeHome);

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

class HaxThemeAbout extends PolymerElement {
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

        h1 {
          font-size: 36px;
          font-weight: 400;
        }
        #content-wrap {
          width: 80%;
          margin: 0 auto 0 auto;
        }

        #contentcontainer {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.4;
        }

        #about_header {
          border-left: solid;
          border-left-width: 4px;
          border-left-color:  #e2801e;
          padding-left: 15px;
        }
      </style>
      <page-banner
        image="files/theme-images/page-banners/about-banner.jpg"
        text="About"
        alt="Gateway to the Sciences"
      ></page-banner>
      <div id="content-wrap">
        <div id="about_header">
          <div id="title">
            <h1>What We Do</h1>
          </div>
        </div>
        <div id="contentcontainer">
          <div id="slot">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-about";
  }
  connectedCallback() {
    super.connectedCallback();
    this.__disposer = [];
    autorun(reaction => {
      this.manifest = toJS(store.routerManifest);
      this.__disposer.push(reaction);
    });
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
}
window.customElements.define(HaxThemeAbout.tag, HaxThemeAbout);

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

        #container {
          margin: 15px;
          padding: 5px;
        }

        #icon-wrap {
          border: solid 4px #e2801e;
          border-radius: 50%;
          padding: 25px;
          margin: 25px auto 0 auto;
          width: 100px;
        }

        iron-icon {
          width: 100px;
          height: 100px;
          fill: #e2801e;
        }

        #info-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 15px;
        }

        #title {
          text-transform: uppercase;
          text-align: center;
          font-size: 24px;
          margin: 0 0 5px 0;
          font-weight: 400;
        }

        #info {
          font-size: 16px;
          text-align: center;
          font-weight: 300;
          line-height: 1.4;
        }
      </style>
      <div id="container">
        <div id="icon-wrap">
          <div id="icon">
            <iron-icon icon="[[icon]]"></iron-icon>
          </div>
        </div>
        <div id="info-wrap">
          <div id="title">[[title]]</div>
          <div id="info">[[info]]</div>
        </div>
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

class ServiceBand extends LitElement {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }

        :host([align="right"]) #video {
          display: flex;
          order: 2;
          margin: 0 0 0 25px;
        }

        @media screen and (max-width: 768px) {
          :host([align="right"]) #video {
            margin: 0 0 25px 0;
            order: 0;
          }
        }

        :host([align="right"]) video-player {
          width: 100%;
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
            order: 0;
          }
        }

        #container {
          display: flex;
          align-items: center;
          margin: 0 0 25px 0;
        }

        @media screen and (min-width: 768px) {
          :host([align="right"]) #container {
            margin: 0 0 25px 0;
          }
        }

        @media screen and (max-width: 768px) {
          #container {
            flex-direction: column;
            margin: 0;
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

        #video {
          background-repeat: no-repeat;
          background-size: cover;
          background-position: right center;
          width: 40%;
          min-height: 300px;
          margin: 0 20px 0 0;
        }

        @media screen and (max-width: 768px) {
          #video {
            width: 100%;
          }
        }

        #title h2 {
          font-size: 28px;
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
          #card_info {
            width: 100%;
            margin: 20px 0 20px;
          }
        }

        paper-button {
          padding: 0;
          margin: 0;
        }

        .action_button {
          margin: 20px 0 0 0;
        }

        .action_button a {
          text-decoration: none;
        }

        paper-button#learn {
          color: #e2801e;
        }

        paper-button#learn:hover,
        paper-button#learn:focus {
          color: var(--haxtheme-info-box-paper-button-color-active);
          @apply --haxtheme-info-box-paper-button-active;
        }
      `
    ];
  }
  render() {
    return html$1`
      <div id="container">
        ${this.renderSource(this.type)}
        <div id="card_info">
          <div id="title">
            <h2>${this.title}</h2>
          </div>
          <div id="info">
            <slot>${this.info}</slot>
            <div id="url">
              ${this.url ? this.renderUrl() : html$1`` }
            </div>
          </div>
        </div>
      </div>
    `;
  }
  renderSource(type) {
    switch (type) {
      case "video":
        return this.renderVideo();
        break;
      case "icon":
        return this.renderIcon();
        break;
    }
    return this.renderImage();
  }
  renderIcon() {
    import('../../build/es6/node_modules/@polymer/iron-icon/iron-icon.js');
    return html$1`
      <iron-icon icon="${this.source}"></iron-icon>
    `;
  }
  renderImage() {
    return html$1`
      <div id="image" style="background-image:url(${this.source})"></div>
    `;
  }
  renderVideo() {
    import('../../build/es6/node_modules/@lrnwebcomponents/video-player/video-player.js');
    return html$1`
      <div id="video">
        <video-player source="${this.source}"></video-player>
      </div>
    `;
  }
  renderUrl() {
    return html$1`
    <div class="action_button">
      <a href="${this.url}">
        <paper-button noink id="learn">
          <div class="title">Read More</div>
          <iron-icon icon="chevron-right"></iron-icon>
        </paper-button>
      </a>
    </div>
    `
  }
  static get tag() {
    return "service-band";
  }
  static get properties() {
    return {
      /**
       * Media Source
       */
      source: {
        type: String
      },
      /**
       * Media Type
       */
      type: {
        type: String
      },
      /**
       * Image Alt
       */
      alt: {
        type: String
      },
      /**
       * Title Over Icon
       */
      title: {
        type: String
      },
      /**
       * Info Text for Icon
       */
      info: {
        type: String
      },
      /**
       * Align Media
       */
      align: {
        type: String,
        reflect: true
      },
      /**
       * Optional Url 
       */
      url: {
        type: String
      },
    };
  }
  constructor() {
    super();
    this.type = "image";
    this.align = "left";
    this.url = null;
  }
}
window.customElements.define(ServiceBand.tag, ServiceBand);

var $_documentContainer = document.createElement("div");
$_documentContainer.setAttribute("style", "display: none;");

$_documentContainer.innerHTML = `<iron-iconset-svg name="courseicons" size="100">
  <svg>
    <defs>
		<g id="astro001">
			<circle cx="49.24" cy="50.46" r="29.33" style="fill:none;stroke:#363533;stroke-miterlimit:10;stroke-width:5px" />
			<ellipse cx="45.88" cy="37.01" rx="4.92" ry="4.15" />
			<ellipse cx="55.39" cy="46.46" rx="3.69" ry="4.81" transform="translate(-12.32 21.13) rotate(-19.48)"/>
			<ellipse cx="64.19" cy="37.74" rx="2.32" ry="3.19" transform="translate(-7.35 58.41) rotate(-46.57)" />
			<ellipse cx="30.15" cy="59.52" rx="2.72" ry="2.32" transform="translate(-32.43 82.69) rotate(-83.46)" />
			<ellipse cx="66.15" cy="48.72" rx="3.14" ry="4.19" transform="translate(-10.34 18.73) rotate(-14.96)" />
			<ellipse cx="61.91" cy="57.42" rx="2" ry="2.69" transform="translate(-17.6 85.86) rotate(-62.53)" />
			<ellipse cx="36.12" cy="67.77" rx="2.55" ry="3.37" transform="translate(-39.69 79.99) rotate(-71.1)" />
			<ellipse cx="37.77" cy="60.25" rx="1.43" ry="2.28" transform="translate(-29.52 83.22) rotate(-76.76)" />
		</g>
    </defs>
    <defs>
    	<g id="astro011">
        <style type="text/css">
					.st0{display:none;}
					.st1{display:inline;fill:none;stroke:#000000;stroke-width:5;stroke-miterlimit:10;}
					.st2{display:inline;}
        </style>
      	<g id="icons" class="st0">
			<circle class="st1" cx="49.2" cy="50.5" r="29.3"/>
			<ellipse class="st2" cx="45.9" cy="37" rx="4.9" ry="4.1"/>
			<ellipse transform="matrix(0.9427 -0.3335 0.3335 0.9427 -12.3241 21.1337)" class="st2" cx="55.4" cy="46.5" rx="3.7" ry="4.8"/>
			<ellipse transform="matrix(0.6875 -0.7262 0.7262 0.6875 -7.3489 58.4104)" class="st2" cx="64.2" cy="37.7" rx="2.3" ry="3.2"/>
			<ellipse transform="matrix(0.1139 -0.9935 0.9935 0.1139 -32.4254 82.6946)" class="st2" cx="30.1" cy="59.5" rx="2.7" ry="2.3"/>
			<ellipse transform="matrix(0.9661 -0.2582 0.2582 0.9661 -10.3366 18.7314)" class="st2" cx="66.1" cy="48.7" rx="3.1" ry="4.2"/>
			<ellipse transform="matrix(0.4613 -0.8872 0.8872 0.4613 -17.5953 85.8573)" class="st2" cx="61.9" cy="57.4" rx="2" ry="2.7"/>
			<ellipse transform="matrix(0.3239 -0.9461 0.9461 0.3239 -39.6937 79.9897)" class="st2" cx="36.1" cy="67.8" rx="2.6" ry="3.4"/>
			<ellipse transform="matrix(0.229 -0.9734 0.9734 0.229 -29.5205 83.2197)" class="st2" cx="37.8" cy="60.2" rx="1.4" ry="2.3"/>
      </g>
      <g id="Layer_2">
        <polygon points="49.9,85.9 39.1,64.2 15.1,60.7 32.5,43.7 28.4,19.8 49.9,31.1 71.4,19.8 67.3,43.7 84.7,60.7 60.6,64.2 	"/>
      </g>
      </g>
    </defs>
    <defs>
      <g id="astro120" viewBox="0 0 249 249">
				<path d="M98.048,98.911c0,0-30.417-0.641-36.829,19.467c-5.772,18.102,3.773,44.546,40.239,55.302
				c36.466,10.756,98.118,14.691,126.976-25.185c0,0-26.497,25.972-75.031,23.874c-48.534-2.099-77.393-23.611-78.967-46.173
				C72.863,103.633,98.048,98.911,98.048,98.911z"/>
				<path d="M150.952,145.631c0,0,30.417,0.641,36.829-19.467c5.772-18.102-3.773-44.546-40.239-55.302S49.423,56.17,20.565,96.047
					c0,0,26.497-25.972,75.031-23.874c48.534,2.099,77.393,23.611,78.967,46.173S150.952,145.631,150.952,145.631z"/>
				<circle cx="127.797" cy="116.335" r="11.728"/>
      </g>
    </defs>
    <defs>
			<g id="astro130" viewBox="0 0 249 249">
				<circle cx="126" cy="125.382" r="67"/>
			</g>
    </defs>
    <defs>
			<g id="astro140">
				<path fill="none" d="M77.195,35.942c-0.304-0.625-1.523-0.983-3.346-0.983c-2.88,0-7.027,0.88-11.769,2.418
					c2.5,2.532,4.177,5.871,4.623,9.59c1.871-1.256,3.586-2.51,5.069-3.734C76.496,39.335,77.646,36.87,77.195,35.942z"/>
				<path fill="none" d="M24.771,61.425c0.304,0.625,1.523,0.983,3.346,0.983c2.606,0,6.25-0.721,10.431-1.997
					c-2.382-2.454-3.995-5.646-4.485-9.2C27.289,55.945,24.027,59.896,24.771,61.425z"/>
				<path fill="none" d="M28.117,64.408c-2.734,0-4.465-0.709-5.145-2.109c-1.557-3.204,3.405-8.341,10.92-13.405
					c0.001-0.279,0.027-0.551,0.042-0.827c-3.867,2.408-7.3,4.857-10.111,7.229c-6.051,5.108-7.478,8.43-6.794,9.835
					c0.495,1.017,2.247,1.578,4.934,1.578c4.608,0,11.331-1.575,18.898-4.322c-0.19-0.135-0.375-0.276-0.56-0.419
					C35.44,63.531,31.185,64.408,28.117,64.408z"/>
				<path fill="none" d="M83.793,32.678c-0.495-1.017-2.247-1.578-4.934-1.578c-4.636,0-11.415,1.596-19.039,4.374
					c0.168,0.118,0.331,0.245,0.494,0.37c5.423-1.843,10.184-2.884,13.534-2.884c2.734,0,4.465,0.709,5.145,2.109
					c1.104,2.272-0.897,5.539-5.949,9.707c-1.795,1.481-3.901,3.002-6.229,4.518c-0.004,0.172-0.017,0.341-0.026,0.511
					C78.67,42.43,85.161,35.493,83.793,32.678z"/>
				<path d="M85.592,31.804C84.72,30.01,82.455,29.1,78.859,29.1c-5.156,0-12.783,1.856-21.26,5.067
					c-2.187-1.073-4.637-1.693-7.238-1.693c-7.925,0-14.538,5.598-16.112,13.054c-4.512,2.728-8.507,5.53-11.716,8.24
					c-4.286,3.619-9.033,8.679-7.303,12.237c0.872,1.794,3.137,2.704,6.732,2.704c5.124,0,12.691-1.834,21.107-5.009
					c2.201,1.09,4.67,1.719,7.293,1.719c7.943,0,14.571-5.623,16.125-13.106C78.665,44.947,87.929,36.612,85.592,31.804z
						M66.703,46.967c-0.446-3.719-2.123-7.058-4.623-9.59c4.742-1.538,8.889-2.418,11.769-2.418c1.823,0,3.042,0.358,3.346,0.983
					c0.451,0.927-0.699,3.393-5.423,7.291C70.289,44.457,68.574,45.711,66.703,46.967z M34.063,51.211
					c0.49,3.555,2.103,6.747,4.485,9.2c-4.181,1.275-7.826,1.997-10.431,1.997c-1.823,0-3.042-0.358-3.346-0.983
					C24.027,59.896,27.289,55.945,34.063,51.211z M21.962,66.709c-2.687,0-4.439-0.561-4.934-1.578
					c-0.683-1.405,0.743-4.727,6.794-9.835c2.811-2.373,6.244-4.821,10.111-7.229c-0.015,0.276-0.041,0.548-0.042,0.827
					c-7.515,5.064-12.477,10.201-10.92,13.405c0.68,1.399,2.411,2.109,5.145,2.109c3.068,0,7.324-0.877,12.183-2.44
					c0.184,0.143,0.369,0.284,0.56,0.419C33.293,65.134,26.57,66.709,21.962,66.709z M66.79,49.805c0.009-0.17,0.022-0.34,0.026-0.511
					c2.328-1.516,4.434-3.037,6.229-4.518c5.052-4.168,7.054-7.435,5.949-9.707c-0.68-1.399-2.411-2.109-5.145-2.109
					c-3.35,0-8.111,1.041-13.534,2.884c-0.164-0.125-0.326-0.251-0.494-0.37c7.624-2.778,14.402-4.374,19.039-4.374
					c2.687,0,4.439,0.561,4.934,1.578C85.161,35.493,78.67,42.43,66.79,49.805z"/>
				<path d="M57.946,35.275l2.093,1.535l5.999-1.604c0,0,8.65-1.046,8.929-1.046c0.279,0,3,0.488,3,0.488l0.209,1.674l-0.977,2.232
					l-1.116,2.511L65.62,48.529l-0.558,3.209l11.161-6.767l6.487-6.348l2.023-4.534l-0.488-2.86l-3.558-0.558l-4.255-0.279l-5.092,0.14
					l-13.533,4.744"/>
				<path d="M34.92,46.744l-0.5,3.331l-7.41,5.162l-3.164,4.829l0.083,2.248l2.248,0.999l4.829-0.333l5.579-0.666l4.246-2.415
					l2.498,1.082l-0.666,1.998L39.5,63.813c0,0-10.741,3.081-10.991,3.081s-7.077,0.833-7.077,0.833l-3.331-0.416l-2.415-1.998V62.98
					l4.33-4.746l3.331-3.747l6.495-4.663L34.92,46.744z"/>
			</g>
    </defs>
    <defs>
			<g id="bisc001">
				<g id="icons" class="st0">
					<circle class="st1" cx="49.2" cy="50.5" r="29.3"/>
					<ellipse class="st2" cx="45.9" cy="37" rx="4.9" ry="4.1"/>
					<ellipse transform="matrix(0.9427 -0.3335 0.3335 0.9427 -12.3241 21.1337)" class="st2" cx="55.4" cy="46.5" rx="3.7" ry="4.8"/>
					<ellipse transform="matrix(0.6875 -0.7262 0.7262 0.6875 -7.3489 58.4104)" class="st2" cx="64.2" cy="37.7" rx="2.3" ry="3.2"/>
					<ellipse transform="matrix(0.1139 -0.9935 0.9935 0.1139 -32.4254 82.6946)" class="st2" cx="30.1" cy="59.5" rx="2.7" ry="2.3"/>
					<ellipse transform="matrix(0.9661 -0.2582 0.2582 0.9661 -10.3366 18.7314)" class="st2" cx="66.1" cy="48.7" rx="3.1" ry="4.2"/>
					<ellipse transform="matrix(0.4613 -0.8872 0.8872 0.4613 -17.5953 85.8573)" class="st2" cx="61.9" cy="57.4" rx="2" ry="2.7"/>
					<ellipse transform="matrix(0.3239 -0.9461 0.9461 0.3239 -39.6937 79.9897)" class="st2" cx="36.1" cy="67.8" rx="2.6" ry="3.4"/>
					<ellipse transform="matrix(0.229 -0.9734 0.9734 0.229 -29.5205 83.2197)" class="st2" cx="37.8" cy="60.2" rx="1.4" ry="2.3"/>
				</g>
				<g id="Layer_2">
					<ellipse cx="74.3" cy="58" rx="5.4" ry="5"/>
					<ellipse cx="53.7" cy="75.2" rx="5.4" ry="5"/>
					<ellipse cx="48.4" cy="53" rx="14.5" ry="13.3"/>
					<ellipse cx="32.5" cy="34.3" rx="9.1" ry="8.4"/>
					<rect x="34.8" y="25.8" transform="matrix(0.7844 -0.6203 0.6203 0.7844 -15.8848 30.7205)" width="2.8" height="24.8"/>
					<rect x="63.6" y="44.4" transform="matrix(0.173 -0.9849 0.9849 0.173 -2.1829 110.9778)" width="2.8" height="24.8"/>
					<rect x="49" y="52" transform="matrix(0.973 -0.2309 0.2309 0.973 -13.5047 13.3691)" width="2.8" height="24.8"/>
				</g>
				<g id="Layer_3">
					<circle class="st3" cx="39.7" cy="49.5" r="2.5"/>
					<path class="st3" d="M40.5,56.7c-0.1,1.5,2.2,4.7,0.7,4.6c-1.6-0.1-3.6-3.6-3.6-5c0-1.7-0.8-4.2,1.9-3.1
						C40.8,53.7,40.6,55.4,40.5,56.7z"/>
				</g>
				</g>
    </defs>
    <defs>
			<g id="bisc002">
				<path class="st0" d="M44.5,61.2c-1,1.6-1.6,3.2-2.1,4.6l18.1,11.3v-5.9L44.5,61.2z" fill="#fff"/>
				<path class="st0" d="M39.5,33.1V34c0.2,1.5,2,12.3,11.6,14.8c2-0.5,3.6-1.4,4.8-2.5L39.5,33.1z" fill="#fff"/>
				<path class="st0" d="M57.8,44c1.2-1.8,1.9-3.8,2.2-5.5L39.5,21.7v7.8c0.2,0,0.4,0.1,0.6,0.3L57.8,44z" fill="#fff"/>
				<path class="st0" d="M52.2,55c-2.5,0.8-4.4,2.2-5.9,3.8l14.2,8.8C60.3,64.4,59.1,57.3,52.2,55z" fill="#fff"/>
				<path d="M58.7,51.7c6.3-4.7,7.9-12.9,7.8-17.5V19.5c0-1.7-1.3-3-3-3s-3,1.3-3,3v14.7c0,0,0,0.1,0,0.1c0,0.1,0,0.3,0,0.7L38.6,17.1
					c-0.2-0.2-0.5-0.3-0.8-0.3c-0.4-0.2-0.8-0.3-1.3-0.3c-1.7,0-3,1.3-3,3v14.7c0,0.1,0,0.2,0,0.3c0.1,0.6,1.5,12.3,10.9,17.9
					c-2.6,2-4.7,4.7-6.3,8.1c-2.1,4.5-2.5,8.5-2.5,8.7c0,0.1,0,0.2,0,0.3v11c0,1.7,1.3,3,3,3s3-1.3,3-3V69.7c0-0.1,0.1-0.4,0.1-0.8
					l18.9,11.8c0.1,1.6,1.4,2.8,3,2.8c0.5,0,0.9-0.1,1.3-0.3c0.8-0.4,1.4-1.1,1.6-2c0.1-0.2,0.1-0.4,0.1-0.7V69.6
					C66.8,64.8,65.3,56.4,58.7,51.7z M60.5,67.6l-14.2-8.8c1.5-1.6,3.4-3,5.9-3.8C59.1,57.3,60.3,64.4,60.5,67.6z M39.5,21.7l20.6,16.8
					c-0.4,1.7-1,3.7-2.2,5.5L40.1,29.8c-0.2-0.2-0.4-0.2-0.6-0.3V21.7z M39.5,34v-0.9l16.4,13.1c-1.2,1.1-2.8,2-4.8,2.5
					C41.5,46.3,39.7,35.5,39.5,34z M60.5,77.1L42.4,65.8c0.5-1.4,1.1-3,2.1-4.6l16,9.9V77.1z"/>
			</g>
		</defs>
		<defs>
			<g id="bisc003">
				<path d="M60.086,33.364c-0.065,0.184-0.092,0.258-0.116,0.291c-0.089,0.118-0.153,0.25-0.189,0.393
					c-0.013,0.055-0.041,0.102-0.105,0.132h-0.006c0,0.001-0.038,0.334-0.035,0.37c0.005,0.076,0.049,0.148,0.023,0.227
					c-0.023,0.068-0.117,0.052-0.141,0.119c0,0.001-0.001,0.002-0.001,0.003c-0.039,0.112,0.009,0.282,0.036,0.397
					c0.002,0.01-0.002,0.02-0.011,0.026c-0.009,0.005-0.02,0.003-0.027-0.005l-0.001-0.001c-0.048-0.046-0.072-0.031-0.084-0.01
					c-0.009,0.015-0.008,0.034,0.002,0.048l0,0l0.138,0.193c0.138,0.194,0.325,0.344,0.544,0.437h0c0.12,0.052,0.234-0.028,0.353-0.015
					c0.132,0.015,0.263-0.008,0.395-0.008c0.045,0,0.136-0.013,0.193-0.038c0.047-0.02,0.051-0.054,0.055-0.092
					c0-0.003,0.001-0.007,0.001-0.01c0.003-0.034,0.008-0.038,0.155-0.154c0.105-0.083,0.235-0.128,0.342-0.211
					c0.18-0.141,0.41,0,0.606-0.06c0.045-0.014,0.657,0.217,0.698,0.237l0.002,0.001c0.18,0.075,0.663,0.079,0.779,0.112
					c0.047,0.013,0.118,0.029,0.186,0.027c0.004-0.002,0.009-0.004,0.013-0.006c0.096-0.045,0.156-0.195,0.289-0.128
					c0.232,0.117,0.885,0.015,0.725-0.526c-0.086-0.293-0.473-0.453-0.589-0.495c-0.35-0.127-0.579-0.427-0.887-0.617
					c-0.136-0.083-0.296-0.009-0.436-0.065c-0.316-0.126-0.316-0.126-0.333-0.217c-0.001-0.007,0.002-0.014,0.006-0.021
					c0.085-0.12,0.149-0.251,0.189-0.393c0-0.001,0.001-0.003,0.001-0.004c0.015-0.05,0.034-0.075-0.021-0.11
					c-0.072-0.046-0.211-0.002-0.225-0.12c-0.011-0.094,0.193-0.2,0.276-0.248c0.07-0.04,0.1-0.093,0.112-0.127
					c0.019-0.052-0.045-0.122-0.073-0.118c-0.097,0.011-0.363,0.17-0.402,0.174l-0.001,0c-0.012,0.001-0.024,0.005-0.034,0.011
					l-0.001,0l-0.609,0.352l-0.002,0.001c-0.108,0.079-0.168,0.209-0.158,0.343c0.01,0.134,0.087,0.254,0.206,0.317
					c0.05,0.027,0.122,0.041,0.098,0.092l0,0c-0.012,0.025-0.345,0.341-0.38,0.345c-0.09,0.01-0.12-0.033-0.127-0.047
					c-0.003-0.006-0.006-0.011-0.008-0.017c-0.052-0.15-0.172-0.273-0.342-0.324c-0.035-0.011-0.058-0.043-0.059-0.079
					c-0.002-0.088,0.147-0.086,0.161-0.196c0.006-0.05-0.016-0.1-0.057-0.128c-0.053-0.036-0.077-0.026-0.142,0.004
					c-0.038,0.018-0.082,0.038-0.13,0.037c-0.039-0.001-0.071-0.028-0.078-0.066c-0.006-0.034,0.01-0.068,0.04-0.084
					c0.011-0.006,0.015-0.02,0.01-0.032l0,0c-0.004-0.008-0.012-0.015-0.021-0.017c-0.102-0.025-0.188-0.04-0.26-0.049
					c-0.134-0.016-0.271-0.006-0.401,0.031C60.117,33.277,60.111,33.294,60.086,33.364z"/>
				<path d="M50,19.564c-16.782,0-30.436,13.653-30.436,30.436S33.217,80.436,50,80.436c16.783,0,30.437-13.654,30.437-30.437
					S66.783,19.564,50,19.564z M49.76,21.57c-1.951,1.44-4.716,2.034-4.65,1.863c-0.295,0.004-0.372-0.076-0.372-0.076
					c-0.096,0.025-0.181,0.079-0.261,0.023l-0.002-0.001c0.003-0.038-0.014-0.075-0.046-0.097c-0.103-0.069-0.305,0.094-0.793,0.342
					c-0.002,0.001-0.004,0.002-0.005,0.003c-0.009,0.005-0.018,0.009-0.027,0.014c-0.206,0.109-0.437,0.135-0.593,0.138
					c-0.113,0.002-0.222,0.023-0.327,0.065c-0.016,0.006-0.034,0-0.043-0.014c-0.036-0.058,0.143-0.123,0.206-0.147
					c0.059-0.023,0.031-0.088-0.214,0.051c-0.053,0.03-0.115,0.038-0.174,0.023c-0.245-0.063-0.539,0.133-0.733,0.295
					c-0.03,0.025-0.069,0.04-0.116,0.02c-0.068-0.029-0.128-0.018-0.107,0.086c0.023,0.113-0.622,0.398-0.634,0.35
					c-0.013-0.035-0.049-0.056-0.086-0.048c-0.085,0.018-0.187,0.087-0.243,0.193c-0.103,0.195-0.384,0.228-0.521,0.342
					c-0.141,0.117-0.352,0.235-0.352,0.235c-0.077,0.089-0.13,0.139-0.212,0.143c-0.08,0.003-0.127-0.138-0.092-0.192
					c0.022-0.033,0.176-0.185,0.139-0.193c-0.015-0.003-0.029-0.013-0.036-0.027c-0.026-0.05,0.095-0.104,0.064-0.166
					c-0.021-0.041-0.254-0.055-0.273-0.076c-0.014-0.015-0.017-0.037-0.008-0.056c0.145-0.295,0.164-0.314,0.361-0.509
					c-0.001-0.001-0.002-0.002-0.002-0.003c-0.021-0.031-0.021-0.071,0-0.101c0.11-0.161,0.476-0.641,0.902-0.699
					c0.113-0.016,0.04-0.039,0.04-0.039c-0.06-0.024-0.125-0.044-0.16-0.072C43.323,22.182,46.476,21.597,49.76,21.57z M33.12,27.287
					c-0.044-0.012-0.064-0.055-0.096-0.086c0.745-0.556,1.519-1.076,2.317-1.558c-0.298,0.613-0.435,1.264-0.826,1.438
					c0,0-0.001,0.001-0.003,0.001c-0.433,0.192-0.584,0.026-1.103,0.22C33.309,27.34,33.214,27.313,33.12,27.287z M76.843,40.633
					c-0.256,0.021-0.508,0.096-0.738,0.226c-1.186,0.671-1.149,0.756-1.563,0.735c-0.189-0.009-1.04,0.556-1.345-0.093
					c-0.058-0.122-0.356-0.672-0.771,0.087c-0.112,0.205-0.725,0.05-0.928-0.063c-0.597-0.333-1.333-1.112-1.513-1.308l-0.001,0.001
					c0,0-0.001,0.001-0.001,0.001c-0.204-0.236-0.793,0.087-0.36,0.732c1.453,2.165,1.708,2.184,2.119,2.4h0.001
					c0.194-0.146,0.166-0.191,0.419-0.227c0.156-0.022,0.291-0.12,0.361-0.262c0-0.001,0.001-0.003,0.002-0.004
					c0.079-0.163,0.23-0.281,0.408-0.317c0.178-0.037,0.363,0.011,0.5,0.13c0.001,0.001,0.003,0.002,0.004,0.004
					c0.251,0.216,0.575,0.016,0.843,0.143c0.678,0.318,0.42,0.966,0.285,1.733c0,0.002-0.002,0.004-0.003,0.005
					c-0.002,0.001-0.006,0.001-0.006,0.001c-0.063-0.013-0.121,0.036-0.122,0.099c-0.002,0.244,0.153,0.471,0.106,0.719
					c-0.002,0.009-0.007,0.017-0.016,0.021c-0.082,0.04-0.154,0.094-0.217,0.16c-0.194,0.206-0.207,0.466-0.375,0.699
					c-0.158,0.221,0.012,0.713-0.367,0.715c-0.146,0.001-0.63,0.28-0.705,0.599c-0.089,0.378-0.295,0.715-0.592,0.965
					c-0.218,0.184-0.515,0.423-0.924,0.742c-0.195,0.152-0.982,1.001-1.66,1.16c-0.093,0.022-0.191-0.014-0.247-0.091
					c-0.004-0.005-0.007-0.01-0.01-0.014c-0.446-0.693-0.539-1.524-0.89-2.254c-0.414-0.865-1.536-1.094-1.848-2.052
					c-0.264-0.809-0.375-1.15-0.743-1.358c-0.258-0.146-0.473-0.348-0.632-0.598c-0.259-0.406-0.652-0.984-0.975-1.296
					c-0.147-0.141-0.244-0.325-0.277-0.526c-0.015-0.09-0.148-0.083-0.153,0.008c-0.018,0.322,0.041,0.423-0.049,0.491
					c-0.075,0.057-0.168,0.026-0.234-0.042c-0.23-0.238-0.608-0.67-0.703-0.911c0,0.001,0,0.002-0.001,0.004
					c-0.024,0.094-0.006,0.194,0.049,0.273c0.499,0.711,2.931,4.222,2.993,4.555c0.405,2.21,2.116,2.74,2.99,3.554
					c0.164,0.153,0.272,0.351,0.314,0.565c0.041,0.203,0.138,0.38,0.29,0.52c0.161,0.149,0.322,0.129,1.234,0.015
					c0.152-0.02,0.25-0.128,0.354-0.224c0.09-0.083,0.83-0.345,0.927-0.406c0.2-0.13-0.049-0.053,0.411-0.271
					c0.18-0.087,0.391-0.628,0.355-0.014c-0.008,0.158,0.081,0.301,0.064,0.46c-0.095,0.932-0.173,1.087-0.227,1.267
					c-0.071,0.238-0.165,0.468-0.224,0.711c-0.279,1.142-0.722,2.361-1.49,3.262c-0.016,0.019-0.033,0.037-0.052,0.054
					c-0.425,0.393-1.2,1.121-1.831,2.357c-0.397,0.778-0.96,1.454-1.375,2.221c-0.14,0.26-0.174,0.325-0.05,0.675
					c0.088,0.249,0.352,1.403,0.392,2.882c0.044,1.613-0.216,1.877-0.732,2.252c-0.827,0.599-1.391,1.007-1.778,1.294
					c-0.454,0.335-0.725,0.863-0.732,1.427c-0.003,0.208-0.051,0.469-0.193,0.785c0,0.001,0.001,0.001,0.001,0.003
					c0.03,0.056-1.066,0.605-1.444,1.051l-0.001,0c-0.002,0.011-0.001,0.022,0.003,0.033c0.255,0.798-2.975,3.114-3.647,3.109
					c-0.485-0.004-1.677,0.186-2.245,0.429c-0.383,0.163-1.417-0.188-1.493-0.408c-0.011-0.033-0.015-0.094,0.012-0.116
					c0.253-0.21-0.601-1.444-0.805-1.585c-0.131-0.09-0.379-0.667-0.481-0.811c-0.311-0.441,0.224-1.062-0.124-1.501
					c-0.019-0.023-0.037-0.048-0.054-0.072l-1.006-1.406c-0.156-0.219-0.601-0.477-0.603-0.746v-0.001
					c-0.003-0.293,0.521-1.707,0.563-1.767c0.048-0.069,0.093-0.144,0.131-0.219c0.021-0.042,0.061-0.073,0.139-0.113
					c0.255-0.131,0.621-0.453,0.203-1.137c-0.024-0.041-0.024,0.139-0.157-0.809c-0.087-0.623-0.906-2.034-1.045-2.182
					c0,0-0.949-0.453-1.384-1.346c0.022-0.051,0.056-0.095,0.099-0.13c0.401-0.321,0.33-0.724,0.448-1.591
					c0.006-0.043,0.013-0.087,0.023-0.13c0-0.003,0.001-0.004,0.001-0.007l0.012-0.057c0.001-0.002,0.001-0.004,0.001-0.006l0-0.001
					c0.036-0.171,0.081-0.399-0.152-0.752c-0.041-0.062-0.112-0.096-0.19-0.088c0,0-0.004,0-0.008,0.001
					c-0.128,0.011-0.241-0.083-0.254-0.211c0-0.002-0.001-0.004-0.001-0.004c0-0.003-0.001-0.004-0.003-0.005
					c-0.188-0.077-0.396-0.087-0.59-0.03c-0.428,0.125-1.337,0.312-1.439-0.277c-0.137-0.791-0.678-0.964-0.943-0.946
					c-1.13,0.08-2.086,1.05-3.253,0.972c-0.052-0.003-0.118-0.028-0.167-0.046c-1.007-0.38-2.095-0.388-3.119-0.585
					c-0.348-0.067-0.848-0.236-1.1-0.484l-1.435-1.411c-0.093-0.092-0.176-0.193-0.248-0.302c-0.455-0.7-0.625-2.24-0.746-2.515
					c-0.018-0.04-0.038-0.081-0.058-0.119l-0.124-0.233c-0.001-0.003-0.003-0.005-0.005-0.008l0,0c-0.334-0.437-0.439-1.01-0.28-1.537
					l0.567-1.886c0.008-0.028,0.016-0.057,0.023-0.085c0.015-0.06,0.027-0.122,0.035-0.182c0.135-0.937-0.044-1.279-0.132-1.447
					c-0.163-0.313-0.163-0.313,0.647-1.442c1.474-2.056,1.727-2.159,2.021-2.277v0.001l0.003,0c0.641,0.073,1.855-0.709,1.833-1.134
					c-0.006-0.136-0.022-0.419,0.217-0.797c0.093-0.146,0.21-0.277,0.344-0.386l1.325-1.077c0.245-0.199,0.589-0.216,0.853-0.042h0
					c0.179-0.063,0.376-0.055,0.549,0.022c0.227,0.1,0.372,0.03,0.443-0.003c0.803-0.385,1.678-0.503,5.747-0.762
					c0.138-0.009,0.271,0.051,0.355,0.16c0.001,0.001,0.001,0.002,0.002,0.003c0.24,0.31,0.061,0.27,0.333,0.728
					c0.103,0.174,0.002,0.306-0.324,0.634c-0.123,0.124-0.103,0.323-0.063,0.33c0.112,0.006,0.376,0.075,0.594,0.189
					c0.288,0.151,0.745,0.299,1.123,0.409c0.344,0.099,0.651,0.3,0.88,0.575c0.149,0.18,2.163,1.383,2.082-0.253
					c-0.006-0.114,0.106-0.312,0.294-0.465c0.654-0.533,1.135,0.157,1.314,0.197c0.289,0.066,0.326,0.066,0.52,0.062h0.005h0.003
					c0.18,0.003,0.262,0.209,0.837,0.17c0.994-0.067,1.997,0.09,2.988-0.086c0.111-0.02,0.266-0.056,0.353-0.128
					c1.098-0.907-0.015-2.018,0.155-3.018c0.001-0.003,0-0.006-0.003-0.008c-0.002-0.002-0.005-0.003-0.008-0.003h0
					c-0.339,0.027-0.661,0.161-0.918,0.383c-0.093,0.08-0.206,0.137-0.362,0.153c-0.274,0.028-0.488-0.151-0.727-0.241
					c-0.12-0.046-0.255,0.015-0.301,0.135c0,0.001-0.001,0.002-0.001,0.003c-0.092,0.223-1.14,0.059-1.453-0.465
					c-0.095-0.159-0.238-0.283-0.41-0.352l-0.001-0.001c0.004-0.003,0.008-0.007,0.011-0.01c0.309-0.291-0.163-0.515-0.215-0.741
					c-0.026-0.113,0.033-0.227,0.14-0.271c0.002-0.001,0.006-0.003,0.006-0.003c0.257-0.097,0.373-0.236,0.322-0.199
					c-0.109,0.08-0.238,0.127-0.373,0.135h-0.001c-0.072,0.004-0.142-0.012-0.205-0.047c-0.152-0.084-0.324-0.129-0.498-0.129
					c-0.209,0-0.42,0.06-0.463,0.267c-0.008,0.038-0.03,0.072-0.062,0.095l0,0c-0.027,0.019-0.061,0.022-0.091,0.009
					c-0.053-0.025-0.105-0.018-0.146,0.009c-0.043,0.029-0.067,0.077-0.061,0.142c0.016,0.18,0.501,0.364,0.108,0.545l-0.003,0.002
					c0,0-0.169,0.099-0.184,0.106c-0.162,0.08-0.373-0.098-0.513-0.106c-0.046-0.003-0.09,0.017-0.136,0.016h-0.004
					c-0.027,0-0.045-0.011-0.051-0.017c-0.001-0.001-0.001-0.001-0.001-0.001c-0.015-0.012-0.167-0.147-0.191-0.189
					c-0.059-0.101-0.065-0.111-0.097-0.145c-0.025-0.026-0.07-0.06-0.105-0.085c-0.077-0.054-0.125-0.14-0.132-0.234v0
					c-0.005-0.073-0.014-0.175-0.027-0.288c-0.03-0.252-0.157-0.481-0.354-0.64c-0.051-0.041-0.115-0.062-0.18-0.06
					c-0.041,0.002-0.083-0.01-0.119-0.033c-0.166-0.111-0.277-0.134-0.277-0.134l-0.002-0.001l-1.3-0.948
					c-0.075-0.054-0.165-0.081-0.257-0.075c-0.076,0.005-0.117-0.067-0.159-0.131c-0.084-0.128-0.241-0.185-0.387-0.141
					c-0.006,0.002-0.012,0.004-0.018,0.006c-0.092,0.035-0.135,0.146-0.085,0.235c0.027,0.049,0.057,0.097,0.089,0.143l0.756,1.101
					c0.125,0.182,0.334,0.29,0.555,0.288c0.09-0.001,0.167,0.067,0.176,0.157c0.005,0.043,0.029,0.084,0.07,0.107
					c0.36,0.207,0.827,0.238,1.078,0.63c0.003,0.004,0.004,0.008,0.005,0.013c0,0.001,0.001,0.003,0.001,0.004c0,0.001,0,0.001,0,0.001
					c0.001,0.03-0.018,0.124-0.034,0.153c-0.026,0.049-0.122,0.071-0.151,0.045c-0.02-0.018-0.019-0.061-0.017-0.107
					c0.001-0.014-0.003-0.032-0.01-0.051c-0.038-0.105-0.116-0.126-0.218-0.169c-0.139-0.059-0.3,0.003-0.363,0.14
					c0,0.001-0.001,0.003-0.002,0.004c-0.002,0.004-0.004,0.008-0.005,0.012c-0.06,0.156,0.04,0.203,0.094,0.229
					c0.084,0.04,0.212,0.101,0.178,0.283c-0.014,0.077-0.098,0.05-0.14,0.082c0,0,0.005,0.014-0.127,0.277
					c-0.053,0.103-0.004,0.127-0.137,0.195c-0.112,0.055-0.165-0.018-0.179-0.041c-0.049-0.083,0.019-0.157,0.017-0.237
					c-0.001-0.036-0.002-0.068,0.102-0.111c0.149-0.063-0.009-0.307-0.098-0.445c-0.001-0.001-0.002-0.003-0.003-0.005
					c-0.183-0.315-0.062-0.06-0.272-0.256c-0.13-0.121-0.47-0.325-0.537-0.408c-0.446-0.553-1.179-0.815-1.562-1.432
					c-0.078-0.125-0.191-0.224-0.325-0.286c-0.087-0.04-0.192-0.069-0.307-0.063c-0.111,0.005-0.638,0.306-1.061,0.548
					c-0.399,0.228-0.687-0.311-1.076-0.156c-0.42,0.167-0.172,0.715-0.527,0.919c-0.405,0.232-0.889,0.308-1.246,0.635
					c-0.014,0.013-0.025,0.033-0.034,0.054c-0.109,0.251-0.3,0.361-0.313,0.423c-0.011,0.052-0.016,0.074,0.007,0.147
					c0.047,0.152,0,0.317-0.12,0.42l-0.001,0.001c-0.078,0.069-0.013,0.286-0.084,0.325c-0.132,0.068-0.275-0.006-0.41,0.032
					c-0.202,0.057-0.212,0.319-0.411,0.38c-0.259,0.078-0.51-0.085-0.768-0.029c-0.583,0.127-0.583,0.127-0.605,0.18
					c-0.02,0.048-0.067,0.128-0.15,0.127c-0.303-0.006-0.191-0.386-0.334-0.549c-0.155-0.178-0.198-0.159-0.268-0.129
					c-0.094,0.041-0.253,0.11-0.301,0.081c-0.065-0.04-0.116-0.1-0.192-0.122c-0.052-0.015-0.095-0.05-0.12-0.098
					c-0.043-0.085,0.065-0.431,0.089-0.53c0.015-0.06,0.011-0.123-0.011-0.18c-0.026-0.068-0.09-0.113-0.163-0.115
					c-0.014,0-0.027-0.006-0.037-0.017c-0.085-0.093,0.263-0.445,0.36-0.625c0.015-0.028,0.031-0.068,0.042-0.097
					c0.297-0.761,0.297-1.019,0.236-1.273c-0.027-0.112,0.054-0.221,0.169-0.228c0.064-0.003,0.13-0.006,0.185-0.009
					c0.123-0.144,0.329-0.184,0.498-0.099c0.229,0.117,0.687,0.283,1.47,0.319c0.19,0.009,0.379,0.049,0.556,0.116
					c0.166,0.063,0.307-0.082,0.368-0.161c0.146-0.186,0.124-0.418,0.153-0.635c0.015-0.115,0.08-0.217,0.177-0.282h0
					c0.026-0.017,0.039-0.048,0.033-0.079c-0.008-0.041-0.041-0.369-0.083-0.372l-0.003,0c-0.324-0.035-0.221-0.451-0.433-0.586
					c-0.18-0.114-0.172-0.192-0.62-0.241c-0.064-0.007,0.088-0.318,0.348-0.401c0.015-0.005,0.031-0.004,0.045,0.004
					c0.16,0.081,0.338,0.118,0.517,0.11c0.068-0.003,0.13-0.037,0.17-0.092c0.04-0.055,0.052-0.125,0.034-0.19
					c0-0.001-0.001-0.002-0.001-0.003c-0.019-0.068,0.04-0.172,0.116-0.122c0.149,0.098,0.223,0.161,0.483,0.123
					c0.064-0.009,0.116-0.057,0.131-0.12c0.007-0.03,0.026-0.056,0.053-0.071c0.291-0.165,0.414-0.238,0.472-0.305
					c0.138-0.159,0.3-0.292,0.485-0.395c0.263-0.147,0.391-0.242,0.643-0.47c0.108-0.098,0.237-0.166,0.379-0.199
					c0.043-0.01,0.072-0.052,0.065-0.096c-0.001-0.008,0.001-0.017,0.006-0.024c0.047-0.062,0.119-0.102,0.198-0.11
					c0.183-0.017,0.293-0.017,0.37-0.018c0,0,0.001-0.001,0.001-0.002c0.053-0.061,0.13-0.095,0.211-0.093
					c0.192,0.006,0.445,0.094,0.404-0.433c-0.061-0.474,0.097-0.951,0.428-1.296l0.002-0.002c0.149,0.063,0.116,0.215,0.141,0.376
					c0.015,0.096-0.014,0.194-0.081,0.267c0,0-0.001,0.001-0.002,0.003c-0.631,0.7,0.178,0.677,0.2,0.858c0,0,0,0.001,0,0.002
					c0.003,0.03,0.02,0.057,0.045,0.074c0.026,0.016,0.057,0.019,0.086,0.009c0.027-0.01,0.651-0.27,0.675-0.254
					c0.118,0.074,0.028,0.112,0.123,0.199c0.001,0.001,0.001,0.001,0.003,0.002c0.141,0.13,0.349,0.157,0.518,0.067
					c0.358-0.19,0.77-0.253,1.169-0.18c0.196,0.036,0.682-0.434,0.592-0.697l0,0c-0.055-0.16-0.064-0.332-0.027-0.497
					c0.023-0.103-0.019-0.16,0.099-0.238c0.059-0.039,0.134-0.045,0.199-0.016c0.083,0.038,0.18,0.04,0.267,0.003
					c0.115-0.049,0.193-0.158,0.202-0.284l0-0.001c0.002-0.025-0.01-0.049-0.032-0.062c-0.107-0.067-0.168-0.192-0.152-0.32
					c0.018-0.142,0.126-0.256,0.268-0.282c0.413-0.076,0.487,0.156,0.88-0.193c0.024-0.021,0.034-0.054,0.026-0.084
					c-0.008-0.031-0.033-0.054-0.064-0.061h0c-0.325-0.071-0.663-0.049-0.977,0.061l-0.378,0.133l-0.002,0.001l-0.001,0.001
					l-0.001,0.001c-0.064,0.041-0.14,0.061-0.216,0.055c-0.264-0.021-0.43-0.271-0.533-0.548c-0.12-0.321-0.079-0.681,0.108-0.967
					c0.093-0.142,0.14-0.324,0.244-0.457c0.043-0.054,0.059-0.125,0.043-0.193c-0.043-0.19-0.373-0.275-0.557-0.234
					c-0.367,0.082-0.121,0.522-0.268,0.752c-0.085,0.133-0.439,0.227-0.47,0.407c-0.077,0.463-0.118,0.706-0.087,0.867
					c0.067,0.345,0.033,0.698-0.1,1.022c-0.001,0.002-0.002,0.004-0.003,0.006c-0.105,0.277,0.11,0.566-0.033,0.841
					c-0.168,0.32-0.558,0.067-0.649,0.452c-0.037,0.163-0.356-0.077-0.464-0.185c-0.011-0.318-0.134-0.464-0.223-0.712
					c-0.072-0.201-0.236-0.356-0.44-0.417c-0.544-0.162-0.655,0.37-1.136,0.222c-0.388-0.119-0.659-0.469-0.68-0.874
					c-0.021-0.405,0.215-0.78,0.588-0.938l0.001,0c1.273-0.535,1.51-0.984,1.595-1.286c0.019-0.068,0.072-0.121,0.14-0.141l0.002-0.001
					l0-0.001c0.014-0.069,0.049-0.131,0.1-0.179c0.131-0.121,0.219-0.283,0.336-0.417c0.128-0.147,0.261-0.373,0.261-0.373h0
					c0,0,0.66-0.645,1.355-0.866c0.322-0.101,0.558-0.097,0.635-0.081c0.08,0.016,0.199,0.039,0.387,0.075v0
					c-0.01,0.063,0.006,0.127,0.044,0.178c0.088,0.117,0.378,0.089,0.726,0.25c0.404,0.187,0.888,0.131,1.324,0.222
					c0.177,0.037,0.297,0.203,0.277,0.383c-0.021,0.18-0.176,0.314-0.357,0.309c-0.126-0.003-0.239,0.074-0.282,0.192
					c-0.043,0.118-0.005,0.25,0.093,0.328c0.156,0.123,0.333,0.221,0.52,0.286c0.22,0.077,0.575,0.134,0.42-0.038
					c-0.055-0.061-0.134-0.097-0.216-0.097c-0.302-0.001-0.207-0.278-0.044-0.204c0.18,0.081,0.681,0.135,0.333-0.2
					c-0.043-0.041-0.047-0.108-0.01-0.155c0.058-0.073,0.105-0.155,0.139-0.241c0.072-0.184,0.058-0.125,0.294-0.053
					c0.041,0.012,0.083,0.005,0.115-0.018c0.066-0.047,0.156-0.082,0.091-0.132c-0.055-0.042,0.058-0.139,0.098-0.125
					c0.068,0.023,0.144,0.001,0.189-0.055c0.035-0.044,0.046-0.102,0.031-0.155c-0.037-0.126,0.06-0.444,0.229-0.546
					C67.947,26.441,74.084,32.748,76.843,40.633z M21.931,45.456c0.001-0.001,0.002,0,0.003-0.001c0.04-0.028,0.262,0.166,0.276,0.402
					c0.008,0.128,0.057,0.274,0.082,0.4c0.03,0.152-0.01,0.31-0.109,0.429c-0.015,0.019-0.021,0.043-0.015,0.067
					c0.125,0.487,0.689,2.56,0.805,2.667c0.067-0.013,0.122,0.01,0.159,0.051c1.14,1.284,2.426,3.381,2.389,4.038
					c-0.257,0.482-0.229,0.457-0.016,0.718c0.397,0.488,0.39,0.511,0.24,1.012l0,0c0.088-0.142,0.243-0.229,0.411-0.229
					c0.167,0,0.323,0.087,0.41,0.229c0.065,0.106,0.131,0.211,0.22,0.291c0.235,0.211,0.356,0.52,0.327,0.835
					c0,0,0.361,0.003,0.862,0.379c0.634,0.476,2.871,3.039,2.959,3.741c0.039,0.313-0.089,0.619-0.249,0.891
					c-0.185,0.312-0.782,0.962-0.883,1.311c-0.05,0.174-0.328,0.253-0.326,0.356c0.003,0.142,0.046,0.438,0.251,1.022
					c0.061,0.173,0.202,1.452,0.132,1.969c-0.041,0.302-0.04,0.356,0.034,0.689c0.024,0.104-0.236,0.4-0.416,0.272
					c-0.225-0.161-0.412-0.137-0.436-0.09l0,0.001c-0.257,0.422-1.058,0.56-1.187,0.902c-3.929-4.878-6.288-11.07-6.288-17.807
					C21.564,48.453,21.693,46.936,21.931,45.456z"/>
				<circle fill="none" cx="50.033" cy="49.835" r="29.226"/>
			</g>
		</defs>
		<defs>
			<g id="bisc004">
				<path d="M25,73.9v-5c0.3-4.1,5.3-6.5,5.3-6.5c10.5-5.6,10.9-7.7,10.9-7.7c1.2-1.1,1.1-2.3,1.1-2.3s0.1-3.9,0-5.9
				c-0.1-2-0.5-1.9-0.5-1.9c-2.4-0.9-2.4-3.9-2.4-3.9c-0.3-2.6,1.6-3.1,1.6-3.1l0.3-5.6c0.8-5.9,8.4-5.7,8.4-5.7s2.7-0.1,4.9,1.2
				c1.5,0.8,2.8,2.2,3.1,4.5l0.3,5.6c0,0,1.9,0.4,1.6,3.1c0,0,0,3.1-2.4,3.9c0,0-0.5-0.1-0.5,1.9c-0.1,2,0,5.9,0,5.9s-0.1,1.2,1.1,2.3
				c0,0,1.6,2.1,12.1,7.7c0,0,5,2.5,5.3,6.5v5L25,73.9z"/>
			</g>
		</defs>
		<defs>
			<g id="biol11">
				<path d="M55.288,71.919c0,2.849-2.265,5.177-5.088,5.283c1.059-1.059,1.462-2.753,1.462-5.607V43.664h-6.951V31.577h-6.044v40.342
				c0,6.259,5.074,11.332,11.332,11.332c6.259,0,11.332-5.073,11.332-11.332V31.577h-6.044V71.919z"/>
				<path d="M61.521,21H38.479c-1.669,0-3.022,1.353-3.022,3.022c0,1.669,1.353,3.022,3.022,3.022h23.042
				c1.669,0,3.022-1.353,3.022-3.022C64.543,22.353,63.19,21,61.521,21z"/>
			</g>
		</defs>
		<defs>
			<g id="biol110">
				<path d="M81.566,69.497l-11.405,3.337l-3.342-11.405l4.937,2.702c2.065-3.654,3.304-7.839,3.304-12.33
				c0-10.31-6.228-19.183-15.114-23.083l1.745-5.361c11.137,4.64,18.971,15.624,18.971,28.444c0,5.47-1.461,10.585-3.966,15.032
				L81.566,69.497z M49.852,77.007c-9.332,0-17.477-5.112-21.834-12.669l4.953-2.872l-11.487-3.05l-3.05,11.482l4.746-2.751
				c5.317,9.231,15.254,15.461,26.673,15.461c6.168,0,11.898-1.832,16.717-4.951l-3.474-4.45
				C59.242,75.602,54.713,77.007,49.852,77.007z M24.662,52.147c0-0.116-0.016-0.23-0.016-0.346c0-12.952,9.83-23.619,22.417-25.015
				l-0.011,5.41l8.416-8.391l-8.389-8.413l-0.008,5.742c-15.71,1.407-28.026,14.592-28.026,30.667c0,0.38,0.044,0.75,0.057,1.126
				L24.662,52.147z M41.819,50.569c-0.703,2.414-0.407,4.952,1.162,7.2c2.533-3.735,7.248-7.75,10.53-8.512
				c-6.706,4.849-10.459,11.652-10.946,19.348h2.831c-0.066-2.905,0.35-6.57,1.392-8.216c2.552,0.843,5.388,0.35,7.833-1.719
				c4.827-4.098,3.017-14.395,11.518-15.583C54.74,36.858,43.892,43.435,41.819,50.569z"/>
			</g>
		</defs>
		<defs>
			<g id="biol120n">
				<path d="M31.379,43.613c-1.229,4.222-0.713,8.662,2.033,12.594c4.43-6.532,12.677-13.555,18.418-14.887
				C40.1,49.801,33.537,61.699,32.685,75.16h4.951c-0.115-5.08,0.612-11.491,2.435-14.37c4.464,1.474,9.424,0.612,13.701-3.007
				c8.444-7.169,5.277-25.177,20.145-27.256C53.978,19.632,35.005,31.137,31.379,43.613z"/>
			</g>
		</defs>
		<defs>
			<g id="biol133">
				<path d="M76.57,30.528c-0.667-1.083-0.833-2.5-0.833-3.25s-0.642-2.657-1.542-3.125c-1.021-0.531-1.338-2.203-2.375-2.708
				c-2.66-1.297-8,0.083-10.417,1.417c-2.417,1.333-6.833,1.667-6.833,1.667c-3.625,0.458-6.031,3.01-6.562,3.542
				c-0.531,0.531-3.312,2.875-5.438,3.938s-1.812,1.375-5.75,4.562s-5.188,6.25-5.625,7.312s-1.625,2.562-1.625,2.562
				c-2.188,2.562,0.938,6.812,0.938,6.812s0.562,0.938,2.562,4s0.062,4.125,0.062,4.125s-8.938,6.438-11.312,7.625
				s-2.312,4.125-0.875,4.25s2.375,3.125,2.375,3.125s-0.062,2.25,2.438,2.125s5.188,0.125,5.188,0.125
				c2.062,0.125,2.125-0.25,2.125-0.75s-0.125-0.688-1.188-1c-0.046-0.013-0.105-0.006-0.172-0.019
				c-0.714-0.136-2.419-1.005-3.391-2.606c-1.062-1.75,2.25-2.875,2.25-2.875c4.75-1.438,10.312-7.688,10.312-7.688
				c3.062-2.438,4.297,2,4.047,3.188s-0.469,3.719,0.5,4.688c0.969,0.969,1,1.875,1,1.875s-0.562,1.938,0.188,3.75
				s3.125,1.375,3.125,1.375l7.703-0.062c1.312,0,1.625-0.312,1.625-1.75s-1.562-1.25-1.562-1.25s-1.938,0.125-3.312-0.375
				s-1.375-1.5-1.375-1.5c-1.188-3.875,0.75-5.562,1.188-6.188s1-3.938,0.688-7.25s0.75-2.938,0.75-2.938
				c1.562,0,3.188,6.188,3.188,6.188s0.375,2.125,2,4.188s1.312,2.938,1.312,3.875s0.438,2.875-1.125,2.125s-1.333,1.229-1.333,1.229
				c0.035,0.068,0.071,0.135,0.107,0.2c1.778,3.177,5.06,2.217,5.06,2.217c3.5-1.083,2.5-7.833,2.5-11.667
				c0-3.833-2.083-8.917-3.5-10.667c-1.417-1.75-0.25-4.583-0.25-6.083s0.25-3.75-0.333-6.417c-0.583-2.667,0.237-4.91,0.667-5.167
				c1.396-0.833,1.167-1.25,1.167-1.25c0.917-2.167,2.25-1,4.333-0.583s4.333-0.167,5.917-0.583
				C76.736,34.445,77.236,31.611,76.57,30.528z"/>
			</g>
		</defs>
		<defs>
			<g id="biol141">
				<path d="M77.205,36.861c0,0-0.142-0.067-0.151-0.194
				c-0.009-0.127-0.156-0.389-0.156-0.389c-0.228-0.284-0.944-0.232-0.944-0.232c-1.482,0.132-3.17-0.47-3.17-0.47
				c0.914-0.509,1.048-0.68,1.164-1.049c0.116-0.369-0.098-0.705-0.384-0.728c-0.286-0.023-0.343,0.293-0.343,0.293
				c-0.167,0.66-0.602,0.65-1.193,0.889s-0.842,0.778-1.182,1.113c-0.34,0.335-0.732,0.38-0.732,0.38
				c-2.499,0.309-6.606-0.046-7.403-0.191c-0.797-0.145-1.22-0.008-1.22-0.008c-0.708,0.188-1.296,0.31-1.778,0.393
				c-0.027-0.042,0.098-0.086,0.098-0.086s1.401-0.484,3.559-1.461c2.158-0.976,4.11-2.67,4.11-2.67s3.928-3.408,4.338-3.78
				c0.411-0.372,0.809-0.464,0.809-0.464l1.258-0.369c0.952-0.254,2.394-1.724,2.394-1.724c0.659-0.59,0.549-0.837,0.508-0.936
				c-0.041-0.1,0.034-0.147,0.034-0.147c0.839-0.403,0.059-0.706,0.375-0.887c0.316-0.181,0.186-0.45,0.186-0.45
				s-0.028-0.324-0.368-0.288c0,0-0.156,0.014-0.228-0.091c-0.072-0.105-0.331-0.257-0.331-0.257c-0.341-0.13-0.932,0.276-0.932,0.276
				c-1.212,0.862-2.974,1.194-2.974,1.194c0.532-0.901,0.562-1.116,0.476-1.493c-0.086-0.377-0.441-0.559-0.699-0.435
				c-0.258,0.124-0.149,0.426-0.149,0.426c0.189,0.653-0.191,0.865-0.581,1.37c-0.39,0.504-0.334,1.097-0.458,1.558
				c-0.125,0.461-0.44,0.697-0.44,0.697c-2.001,1.528-5.726,3.295-6.487,3.572c-0.762,0.277-1.057,0.609-1.057,0.609
				c-1.516,1.527-2.493,2.106-2.493,2.106c-0.618,0.36-2.066,0.916-3.453,1.414c-0.442-0.418-0.905-0.657-0.905-0.657
				c-3.355-1.797-3.879-2.471-3.879-2.471c-0.389-0.34-0.36-0.726-0.36-0.726s-0.016-1.261,0-1.901
				c0.016-0.639,0.164-0.622,0.164-0.622c0.769-0.276,0.777-1.261,0.777-1.261c0.082-0.847-0.515-0.985-0.515-0.985l-0.076-1.667
				l0.008-0.101c-0.024-0.181-0.072-0.338-0.132-0.485c-0.009-0.024-0.018-0.047-0.028-0.071c-0.037-0.08-0.079-0.154-0.124-0.224
				c-0.184-0.302-0.431-0.528-0.706-0.682c-0.722-0.403-1.57-0.38-1.57-0.38s-0.528-0.011-1.117,0.163
				c-0.02,0.006-0.039,0.012-0.06,0.018c-0.063,0.02-0.125,0.042-0.189,0.067c-0.028,0.011-0.054,0.02-0.082,0.032
				c-0.577,0.242-1.132,0.694-1.243,1.541l0.01,0.115l-0.077,1.694c0,0-0.597,0.138-0.515,0.985c0,0,0.008,0.985,0.777,1.261
				c0,0,0.148-0.017,0.164,0.622c0.016,0.639,0,1.901,0,1.901s0.029,0.385-0.36,0.726c0,0-0.524,0.674-3.879,2.471
				c0,0-0.448,0.23-0.883,0.636c-1.386-0.498-2.833-1.054-3.451-1.414c0,0-0.977-0.578-2.493-2.106c0,0-0.295-0.332-1.057-0.609
				c-0.762-0.277-4.486-2.044-6.487-3.572c0,0-0.316-0.236-0.44-0.697c-0.125-0.461-0.069-1.053-0.458-1.558
				c-0.39-0.504-0.771-0.716-0.581-1.37c0,0,0.11-0.302-0.149-0.426c-0.258-0.124-0.613,0.057-0.699,0.435
				c-0.086,0.377-0.056,0.592,0.476,1.493c0,0-1.762-0.332-2.974-1.194c0,0-0.591-0.406-0.932-0.276c0,0-0.259,0.152-0.331,0.257
				c-0.072,0.105-0.228,0.091-0.228,0.091c-0.34-0.036-0.368,0.288-0.368,0.288s-0.13,0.269,0.186,0.45
				c0.316,0.181-0.464,0.483,0.375,0.887c0,0,0.075,0.048,0.034,0.147c-0.041,0.099-0.151,0.346,0.508,0.936
				c0,0,1.442,1.47,2.394,1.724l1.258,0.369c0,0,0.398,0.092,0.809,0.464c0.411,0.372,4.338,3.78,4.338,3.78s1.952,1.694,4.11,2.67
				c2.158,0.976,3.559,1.461,3.559,1.461s0.125,0.043,0.098,0.086c-0.481-0.083-1.07-0.204-1.778-0.393c0,0-0.422-0.137-1.22,0.008
				c-0.797,0.145-4.904,0.5-7.403,0.191c0,0-0.392-0.044-0.732-0.38c-0.34-0.335-0.591-0.875-1.182-1.113s-1.027-0.229-1.193-0.889
				c0,0-0.058-0.316-0.343-0.293c-0.286,0.023-0.5,0.359-0.384,0.728c0.116,0.369,0.251,0.54,1.164,1.049c0,0-1.689,0.602-3.17,0.47
				c0,0-0.715-0.052-0.944,0.232c0,0-0.147,0.262-0.156,0.389c-0.009,0.127-0.151,0.194-0.151,0.194
				c-0.312,0.141-0.173,0.435-0.173,0.435s0.023,0.298,0.388,0.295c0.364-0.003-0.157,0.652,0.772,0.576c0,0,0.089,0.003,0.103,0.11
				c0.015,0.107,0.045,0.375,0.911,0.552c0,0,1.987,0.541,2.937,0.28l1.272-0.316c0,0,0.39-0.121,0.932-0.007
				c0.542,0.114,5.653,1.074,5.653,1.074s2.54,0.477,4.896,0.231c1.273-0.133,2.257-0.276,2.914-0.381
				c0.626,1.05,1.291,2.214,1.611,2.92c0.114,0.25,0.182,0.476,0.278,0.671c0,0,0.331,0.659,0.219,1.104
				C44.951,45.089,45,46.333,45,46.333s-0.049,2.255-0.307,2.968c-0.258,0.713-0.712,3.123-0.54,5.313
				c0.001,0.01,0.002,0.022,0.003,0.032c-0.687,2.008-1.403,4.482-1.403,4.482s-0.74,3.215-1.754,5.073
				c-1.015,1.858-1.481,2.655-1.481,2.655l-0.002-0.001c0,0-0.659,1.123-1.22,2.763l-0.911,2.912l-0.014,0.031
				C36.991,73.83,36.636,75,36.636,75s-0.328,0.957-0.613,1.597l-0.187,0.224c0,0-0.088,0.188-0.259,0.265
				c-0.172,0.077-1.456,0.537-1.456,0.537s-0.377,0.082-0.987,0.026c-0.611-0.056-1.586,0.148-1.738,0.62
				c-0.152,0.472-0.06,1.087,1.147,1.578s3.471-0.184,4.113-0.543c0,0,0.277-0.1,0.463-0.413c0.187-0.313,0.909-1.918,1.24-3.064
				c0,0,0.183-0.505,0.374-0.955c0,0,0.189-0.245,0.494-0.667l0.349-0.489l0.01-0.003c0.799-1.103,2.399-3.417,3.513-5.725
				c0,0,0.672-1.403,1.04-1.727c0.368-0.324,0.77-1.109,0.77-1.109s0.192-0.429,0.496-1.091c0.04,0.568,0.056,1.132,0.024,1.633
				c-0.135,2.112-0.221,3.032-0.221,3.032h-0.003c0,0-0.123,1.296,0.061,3.02l0.405,3.024l0,0.034c0.193,1.311,0.365,2.521,0.365,2.521
				s0.107,1.006,0.119,1.706l-0.075,0.282c0,0,0,0.207-0.123,0.35c-0.123,0.142-1.093,1.102-1.093,1.102s-0.307,0.233-0.884,0.441
				c-0.577,0.207-1.375,0.804-1.313,1.296c0.061,0.492,0.405,1.011,1.706,0.946c1.301-0.065,3.069-1.633,3.499-2.229
				c0,0,0.209-0.207,0.245-0.57c0.037-0.363,0.014-2.122-0.17-3.301c0,0-0.048-0.535-0.065-1.024c0,0,0.068-0.302,0.167-0.813
				l0.11-0.591l0.008-0.007c0.259-1.338,0.731-4.11,0.766-6.673c0,0,0.016-1.555,0.213-2.004c0.196-0.449,0.229-1.33,0.229-1.33
				s-0.133-9.28,0.425-9.504l0.001-0.007c0.114,0.081,0.199,0.545,0.261,1.236l-0.135,0.088c0.038-0.002,0.088,0.03,0.15,0.091
				c0.213,2.654,0.136,8.075,0.136,8.075s0.033,0.881,0.229,1.33c0.196,0.449,0.213,2.005,0.213,2.005
				c0.036,2.562,0.508,5.335,0.766,6.673l0.008,0.007l0.11,0.591c0.099,0.511,0.167,0.813,0.167,0.813
				c-0.017,0.489-0.065,1.024-0.065,1.024c-0.184,1.179-0.207,2.938-0.17,3.301c0.037,0.363,0.246,0.57,0.246,0.57
				c0.43,0.596,2.197,2.164,3.499,2.229c1.301,0.065,1.645-0.454,1.706-0.946c0.061-0.492-0.737-1.089-1.314-1.296
				c-0.577-0.207-0.884-0.441-0.884-0.441s-0.97-0.959-1.093-1.102c-0.123-0.143-0.123-0.35-0.123-0.35l-0.075-0.282
				c0.012-0.7,0.119-1.706,0.119-1.706s0.172-1.21,0.365-2.521l0-0.034l0.405-3.024c0.184-1.724,0.061-3.019,0.061-3.019h-0.003
				c0,0-0.086-0.92-0.221-3.032c-0.018-0.289-0.021-0.599-0.012-0.919c0.114,0.25,0.179,0.397,0.179,0.397s0.402,0.785,0.77,1.109
				c0.368,0.324,1.04,1.727,1.04,1.727c1.115,2.308,2.714,4.621,3.513,5.725l0.01,0.003l0.349,0.489
				c0.306,0.422,0.494,0.667,0.494,0.667c0.191,0.451,0.374,0.955,0.374,0.955c0.331,1.147,1.053,2.751,1.24,3.064
				c0.187,0.313,0.463,0.413,0.463,0.413c0.641,0.359,2.906,1.034,4.113,0.543c1.207-0.491,1.299-1.106,1.147-1.578
				c-0.152-0.472-1.127-0.676-1.738-0.62c-0.611,0.056-0.987-0.026-0.987-0.026s-1.284-0.46-1.456-0.537
				c-0.171-0.077-0.259-0.265-0.259-0.265l-0.187-0.224C62.93,75.957,62.602,75,62.602,75s-0.355-1.169-0.734-2.439l-0.014-0.031
				l-0.911-2.912c-0.561-1.64-1.22-2.763-1.22-2.763l-0.002,0.001c0,0-0.467-0.798-1.481-2.655c-1.015-1.858-1.754-5.073-1.754-5.073
				s-0.538-1.858-1.128-3.66c0.032-0.306,0.059-0.601,0.08-0.875c0.172-2.19-0.282-4.6-0.54-5.313
				c-0.258-0.713-0.307-2.968-0.307-2.968s0.049-1.244-0.123-1.931c-0.112-0.446,0.219-1.104,0.219-1.104
				c0.096-0.195,0.164-0.421,0.278-0.671c0.319-0.703,0.979-1.859,1.602-2.905c0.657,0.106,1.653,0.251,2.947,0.387
				c2.356,0.247,4.896-0.231,4.896-0.231s5.111-0.96,5.653-1.074c0.542-0.114,0.932,0.007,0.932,0.007l1.272,0.316
				c0.95,0.261,2.937-0.28,2.937-0.28c0.866-0.177,0.896-0.445,0.911-0.552c0.015-0.107,0.103-0.11,0.103-0.11
				c0.928,0.075,0.407-0.58,0.772-0.576c0.364,0.003,0.388-0.295,0.388-0.295S77.517,37.002,77.205,36.861z"/>
			</g>
		</defs>
		<defs>
			<g id="biol155">
				<circle cx="43.143" cy="44.193" r="4.028"/>
				<circle cx="58.301" cy="44.193" r="4.028"/>
				<path d="M38.517,58.416l1.583,1.86c9.056-7.323,11.681,7.582,23.13-3.867l-1.39-1.79C53.024,61.2,50.221,46.712,38.517,58.416z"/>
				<path d="M79.679,38.736c-1.551-1.429-0.009-3.768-0.009-4.807s-0.17-4.417-2.508-4.547c-2.339-0.13-2.209,0.39-5.327-0.26
					c-1.611-0.336-2.931,0.058-3.833,0.516c-4.698-4.081-10.827-6.557-17.539-6.557c-6.011,0-11.56,1.982-16.027,5.328
					c-0.72-1.005-1.962-2.135-3.786-1.755c-3.118,0.65-4.028,2.988-6.366,3.118c-2.339,0.13-2.079,2.339-2.079,3.378
					s1.542,3.378-0.009,4.807c-1.551,1.429-1.438,4.417,0,4.547c0.985,0.089,1.113,2.677,1.68,4.299
					c-0.113,0.999-0.177,2.013-0.177,3.042c0,14.782,11.983,26.764,26.764,26.764c14.781,0,26.764-11.983,26.764-26.764
					c0-0.046-0.003-0.091-0.003-0.137c1.298-1.605,2.505-4.768,3.576-4.865C82.237,44.713,81.229,40.166,79.679,38.736z M50.463,71.412
					c-11.919,0-21.567-9.646-21.567-21.567c0-11.919,9.646-21.567,21.567-21.567c11.919,0,21.567,9.646,21.567,21.567
					C72.03,61.764,62.384,71.412,50.463,71.412z"/>
			</g>
		</defs>
		<defs>
			<g id="biol177">
				<path id="malefemale" d="M71.9,32.1l5.3-16.6L61.3,23l3.5,3l-6.1,6.8c-1.7-0.9-3.7-1.4-5.8-1.4c-6.3,0-11.5,4.6-12.6,10.5
				c-6,1.1-10.5,6.3-10.5,12.6c0,6.2,4.4,11.4,10.3,12.6v10.4h-4v5h4v5.3h5v-5.3h3.5v-5h-3.5V67.1c5.1-1,9.2-5.1,10.1-10.3
				c6-1.1,10.5-6.3,10.5-12.6c0-3.2-1.2-6.1-3.1-8.3l6-6.6L71.9,32.1z M42.6,62.3c-4.3,0-7.8-3.5-7.8-7.8c0-3.6,2.4-6.6,5.6-7.5
				c1.1,4.8,4.9,8.6,9.7,9.7C49.1,59.9,46.1,62.3,42.6,62.3z M45.8,47.4c1.8,0.8,3.2,2.2,4,4C48,50.5,46.5,49.1,45.8,47.4z M55.1,51.7
				c-1.1-4.8-4.9-8.6-9.7-9.7c0.9-3.3,4-5.6,7.5-5.6c4.3,0,7.8,3.5,7.8,7.8C60.7,47.7,58.3,50.7,55.1,51.7z"/>
			</g>
		</defs>
		<defs>
			<g id="bmmb551">
				<path d="M39.305,29.016c0,2.151-1.744,3.894-3.894,3.894l0,0c-2.151,0-3.894-1.744-3.894-3.894v-4.369
					c0-2.151,1.744-3.894,3.894-3.894l0,0c2.151,0,3.894,1.744,3.894,3.894V29.016z"/>
				<path d="M39.305,74.068c0,2.151-1.744,3.894-3.894,3.894l0,0c-2.151,0-3.894-1.744-3.894-3.894V39.114
					c0-2.151,1.744-3.894,3.894-3.894l0,0c2.151,0,3.894,1.744,3.894,3.894V74.068z"/>
				<path d="M56.09,43.549c0,2.151-1.744,3.894-3.894,3.894l0,0c-2.151,0-3.894-1.744-3.894-3.894V33.1c0-2.151,1.744-3.894,3.894-3.894
					l0,0c2.151,0,3.894,1.744,3.894,3.894V43.549z"/>
				<path d="M56.09,74.068c0,2.151-1.744,3.894-3.894,3.894l0,0c-2.151,0-3.894-1.744-3.894-3.894V53.454
					c0-2.151,1.744-3.894,3.894-3.894l0,0c2.151,0,3.894,1.744,3.894,3.894V74.068z"/>
				<path d="M72.454,74.068c0,2.151-1.744,3.894-3.894,3.894l0,0c-2.151,0-3.894-1.744-3.894-3.894V51.726
					c0-2.151,1.744-3.894,3.894-3.894l0,0c2.151,0,3.894,1.744,3.894,3.894V74.068z"/>
				<path d="M72.454,41.174c0,2.151-1.744,3.894-3.894,3.894l0,0c-2.151,0-3.894-1.744-3.894-3.894v-2.47
					c0-2.151,1.744-3.894,3.894-3.894l0,0c2.151,0,3.894,1.744,3.894,3.894V41.174z"/>
			</g>
		</defs>
		<defs>
			<g id="bmmb852">
				<path d="M43.3,60.4l-4.8,4.8h23.1l-4.8-4.8H43.3z M75.1,57.6H24.9V21.7h50.2L75.1,57.6L75.1,57.6z M70.3,52.7V26.6l-40.5,0l0,26.2
				H70.3z M24.9,68.2v10.1h50.2V68.2H24.9z M50,74.4c-0.7,0-1.2-0.5-1.2-1.2c0-0.7,0.5-1.2,1.2-1.2s1.2,0.5,1.2,1.2
				C51.2,73.9,50.7,74.4,50,74.4z M70.9,74.3H55.4v-2.2h15.4L70.9,74.3L70.9,74.3z"/>
			</g>
		</defs>
		<defs>
			<g id="chem005">
				<path d="M40.592,45.228L25.367,22.477l-0.192-0.316c-0.3-0.448,0.779-1.697,2.411-2.788s3.197-1.613,3.497-1.165l0.206,0.307
					l15.224,22.751l-0.021-0.002c0.3,0.448-0.779,1.697-2.411,2.788s-3.197,1.613-3.497,1.165L40.592,45.228z"/>
				<path fill="none" d="M42.331,40.054c0,0,13.007,17.115,25.58,23.242
					c0,0,4.985,2.43,5.872,7.652s-4.353,8.779-4.353,8.779s-7.907,5.191-12.601-2.798c0,0-0.719-1.374-1.172-3.026
					c-0.454-1.652-7.401-22.822-14.653-32.91"/>
				<path fill="none" stroke="#363533" stroke-width="2" stroke-miterlimit="10" d="M42.11,40.596
					c10.572,13.625,24.108,23.106,24.108,23.106c3.339,2.754,4.016,6.623,4.016,6.623c0.756,5.23-2.008,7.745-2.008,7.745
					s-2.979,3.169-7.403,0.637c0,0-2.888-1.232-4.264-4.593c-1.376-3.361-9.002-25.726-14.975-33.249"/>
				<path fill="none" stroke="#363533" stroke-width="2" stroke-miterlimit="10" d="M41.736,40.702L63.345,66.25
					c0,0,7.763,8.567,6.21,12.314c0,0-3.772,4.028-10.085-7.991c0,0-14.903-27.328-18.062-29.801"/>				
			</g>
		</defs>
		<defs>
			<g id="chem101">
				<path d="M49.7,35.9c0,1.8-1.4,3.2-3.2,3.2s-3.2-1.4-3.2-3.2s1.4-3.2,3.2-3.2C48.3,32.7,49.7,34.2,49.7,35.9z M54.7,20.7
				c0,1.4-1.2,2.6-2.6,2.6c-1.4,0-2.6-1.2-2.6-2.6c0-1.4,1.2-2.6,2.6-2.6C53.5,18.1,54.7,19.3,54.7,20.7z M55.9,35.4
				c-2.5,0-4.5-2-4.5-4.5c0-2.5,2-4.5,4.5-4.5c2.5,0,4.5,2,4.5,4.5C60.4,33.4,58.4,35.4,55.9,35.4z M44,29.9c-2.1,0-3.8-1.7-3.8-3.8
				s1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8S46.1,29.9,44,29.9z M63,81.9H37c-3.5,0-5.8-3.7-4.3-6.8l7.4-15.3c2.1-4.3,3.1-8.9,3.1-13.7
				v-3h4.5c0,3.2,0.4,9.1-2.5,16.3h6.3l8.1,16.9c0.9,1.9,3.5,0.9,2.6-1.1c-0.8-1.7-2.4-5-6.5-13.5c-4.1-8.5-3.5-15.5-3.5-18.7h4.5v3
				c0,4.7,1.1,9.4,3.1,13.7L67.2,75C68.8,78.2,66.5,81.9,63,81.9z"/>
			</g>
		</defs>
		<defs>
			<g id="chem110">
				<circle cx="41.5" cy="42.9" r="1.3" style="fill:#fff"/>
				<circle cx="58.1" cy="59.1" r="13.9" style="fill:#fff" />
				<rect x="46.99" y="42.17" width="6.7" height="15" transform="translate(-19.85 41.02) rotate(-37.59)" style="fill:#fff"/>
				<rect x="40.94" y="42.96" width="10.4" height="3.3" transform="translate(-17.63 37.41) rotate(-37.59)" style="fill:#fff" />
				<circle cx="40.2" cy="31.5" r="2.5" style="fill:#fff" />
				<circle cx="44.6" cy="40.6" r="0.6"style="fill:#fff" />
			</g>
		</defs>
		<defs>
			<g id="chem111">
				<!-- Need new svg icon -->
			</g>
		</defs>
		<defs>
			<g id="chem202">
				<!-- Need new svg icon -->
			</g>
		</defs>
		<defs>
			<g id="chem810">
				<!-- Need new svg icon -->
			</g>
		</defs>
		<defs>
			<g id="chem811">
			    <!-- Need new svg icon -->
			</g>
		</defs>
		<defs>
			<g id="chem812">
				<!-- Need new svg icon -->
			</g>
		</defs>
		<defs>
			<g id="frnsc100">
				<path d="M36.8,42.3c0,0-0.1,1.6,3.3,3.8c3.4,2.1,4.6,1.2,4.6,1.2l1.6-2.5l-8-5L36.8,42.3z"/>
				<path d="M48.6,21c-0.4,0.6-0.2,1.4,0.4,1.8l-9,14.3l8,5l9-14.3c0.6,0.4,1.4,0.2,1.8-0.4c0.4-0.6,0.2-1.4-0.4-1.8l-8-5"/>
				<path d="M27.9,54.3c-0.6,0-1,0.6-1,1.4c0,0.8,0.4,1.4,1,1.4H52c0.4-0.9,0.7-1.8,0.9-2.7H27.9L27.9,54.3z"/>
				<circle cx="53.6" cy="70.4" r="4.6"/>
				<path d="M53.6,62.5c3.6,0,6.6,2.4,7.5,5.7c7.1-3.1,12-10,12-18.1c0-9.2-6.3-16.9-14.9-19.1l-4.8,7.8c0.4,0,0.8-0.1,1.2-0.1
					c6.4,0,11.6,5.3,11.6,11.9c0,6.6-5.2,11.9-11.6,11.9c-3.4,0-6.4-1.5-8.5-3.9H34.8C37,63.2,41,66.9,46,68.7
					C46.7,65.2,49.9,62.5,53.6,62.5z"/>
				<path d="M64.4,70.9h-3c-0.3,4.1-3.6,7.3-7.8,7.3c-4.1,0-7.5-3.3-7.8-7.3h-3.3c-2.4,0-4.3,1.9-4.3,4.3c0,2.4,1.9,4.3,4.3,4.3h21.9
						c2.4,0,4.3-1.9,4.3-4.3C68.8,72.8,66.8,70.9,64.4,70.9z"/>
			</g>
		</defs>
		<defs>
			<g id="frnsc200">
				<path d="M29.236,40.179c0,0,5.793-3.115,2.936-8.162s-6.034-4.251-7.919-3.444c-1.885,0.806-4.831,3.96-4.126,7.809
					c0.705,3.849,2.554,3.397-0.043,5.35c-2.598,1.953-1.756,5.047,1.377,6.771c3.133,1.723,5.881-0.03,5.728-2.73
					S28.235,40.931,29.236,40.179z"/>
				<path d="M68.756,66.514c0,0-1.613,5.913-6.023,4.642c-4.41-1.272-5.05-4.243-4.482-7.696c0.568-3.453,5.611-2.768,7.397-1.874
					C67.435,62.48,69.705,64.348,68.756,66.514z"/>
				<circle cx="23.631" cy="54.047" r="1.75"/>
				<circle cx="76.745" cy="47.482" r="1.75"/>
				<circle cx="64.236" cy="76.49" r="1.375"/>
				<circle cx="83.343" cy="45.303" r="1.375"/>
				<circle cx="22.1" cy="62.22" r="1.25"/>
				<circle cx="75.499" cy="75.995" r="1.25"/>
				<circle cx="71.089" cy="71.078" r="1.75"/>
				<circle cx="68.353" cy="46.558" r="3.125"/>
				<path d="M56.167,51.083c1.885,4.293,1.5,6.75-4.312,8.927c-5.812,2.177-7.211-3.67-7.688-5.427c-0.667-2.458-3.5-3.065-5.604-3.065
				s-5.396-1.435-5.396-6.185s3.625-4.875,6.25-7.5c1.74-1.74,0-4.5,0-4.5s-1.809-2.454-2-7s7.25-5.75,7.25-5.75
				c4.167-0.667,5.75,2.25,9,6s3.75-1.5,10.25-1.5s7.25,7.25,7.25,11.75s-3.631,6.067-9.25,4l-0.662-0.325c0,0-1.88-1.445-3.988,0.498
				C55.394,42.733,54.069,46.306,56.167,51.083z"/>
			</g>
		</defs>
		<defs>
			<g id="frnsc210">
				<path d="M76.373,72.234c0.518,0.506,0.448,1.418-0.156,2.037l-1.999,2.048c-0.604,0.619-1.514,0.711-2.032,0.205L54.418,59.178
					c-0.518-0.506-0.448-1.418,0.156-2.037l1.999-2.048c0.604-0.619,1.514-0.711,2.032-0.205L76.373,72.234z"/>
				<circle fill="none" stroke="#363533" stroke-width="4" stroke-miterlimit="10" cx="41.904" cy="41.488" r="15.67"/>
				<line fill="none" stroke="#363533" stroke-width="4" stroke-miterlimit="10" x1="52.317" y1="53.198" x2="56.712" y2="57.347"/>
				
			</g>
		</defs>
		<defs>
			<g id="math004">
				<!-- Need new svg icon -->
			</g>
		</defs>
		<defs>
			<g id="math017">
				<!-- Need new svg icon -->
			</g>
		</defs>
		<defs>
			<g id="math021">
				<path fill="#363533" d="M35.807,37.958c-1.593,0-2.594,0.864-2.594,3.14v3.412H28.48v-3.094c0-5.096,2.548-8.008,7.462-8.008
				c4.915,0,7.462,2.912,7.462,8.008c0,10.011-9.965,13.741-9.965,18.975c0,0.228,0,0.455,0.045,0.683h9.464v4.55H28.48V61.71
				c0-9.373,9.919-10.921,9.919-20.112C38.4,38.731,37.399,37.958,35.807,37.958z"/>
				<path fill="#363533" d="M59.758,44.389L56.27,54.703l3.731,10.92h-3.519l-2.73-8.402l-2.761,8.402h-3.124l3.731-10.92
					l-3.489-10.314h3.459l2.518,7.826l2.578-7.826H59.758z"/>
				<path fill="#363533" d="M66.555,30.494c-1.062,0-1.729,0.576-1.729,2.093v2.275H61.67V32.8c0-3.397,1.699-5.339,4.976-5.339
					s4.975,1.941,4.975,5.339c0,6.673-6.644,9.161-6.644,12.649c0,0.151,0,0.303,0.03,0.455h6.31v3.033H61.67v-2.608
					c0-6.249,6.613-7.28,6.613-13.408C68.283,31.01,67.616,30.494,66.555,30.494z"/>
			</g>
		</defs>
		<defs>
			<g id="math022">
				<path fill="#363533" d="M21.795,73.653c-2.207-2.785-4.074-6.044-5.6-9.777c-1.525-3.732-2.289-7.6-2.289-11.599
				c0-3.525,0.57-6.903,1.711-10.133c1.334-3.747,3.393-7.48,6.178-11.199h2.866c-1.792,3.082-2.978,5.281-3.555,6.6
				c-0.904,2.044-1.615,4.178-2.134,6.399c-0.637,2.771-0.955,5.556-0.955,8.355c0,7.125,2.214,14.243,6.644,21.354H21.795z"/>
				<path fill="#363533" d="M35.451,36.411c-1.592,0-2.594,0.864-2.594,3.14v3.412h-4.731v-3.094c0-5.096,2.548-8.008,7.462-8.008
				s7.463,2.912,7.463,8.008c0,10.011-9.966,13.741-9.966,18.975c0,0.228,0,0.455,0.046,0.683h9.465v4.55h-14.47v-3.913
				c0-9.373,9.919-10.921,9.919-20.112C38.045,37.185,37.044,36.411,35.451,36.411z"/>
				<path fill="#363533" d="M59.402,42.842l-3.488,10.314l3.731,10.92h-3.519l-2.73-8.402l-2.761,8.402h-3.124l3.731-10.92
				l-3.489-10.314h3.459l2.518,7.826l2.578-7.826H59.402z"/>
				<path fill="#363533" d="M65.724,73.653h-2.867c4.43-7.11,6.645-14.229,6.645-21.354c0-2.785-0.319-5.548-0.956-8.289
				c-0.503-2.222-1.207-4.354-2.11-6.399c-0.578-1.333-1.771-3.555-3.578-6.666h2.867c2.784,3.719,4.844,7.452,6.177,11.199
				c1.141,3.229,1.711,6.607,1.711,10.133c0,3.999-0.767,7.866-2.3,11.599C69.778,67.609,67.915,70.868,65.724,73.653z"/>
				<path fill="#363533" d="M81.354,28.946c-1.062,0-1.729,0.576-1.729,2.093v2.275h-3.155v-2.062c0-3.397,1.699-5.339,4.976-5.339
				s4.975,1.941,4.975,5.339c0,6.674-6.644,9.161-6.644,12.649c0,0.151,0,0.303,0.03,0.455h6.31v3.033h-9.646v-2.608
				c0-6.249,6.613-7.28,6.613-13.408C83.082,29.462,82.415,28.946,81.354,28.946z"/>
			</g>
		</defs>
		<defs>
			<g id="math026">
				<!-- Need new svg icon -->
			</g>
		</defs>
		<defs>
			<g id="math034">
				<path fill="#363533" d="M48.162,28.765v-3.12h5.399v3.12c4.68,0.96,7.08,4.56,7.08,10.26v1.319h-6.24v-1.739
				c0-3-1.199-4.141-3.3-4.141c-2.1,0-3.3,1.141-3.3,4.141c0,8.64,12.899,9.06,12.899,21.059c0,5.7-2.46,9.359-7.14,10.319v3.061
				h-5.399v-3.061c-4.74-0.96-7.14-4.619-7.14-10.319v-2.88h6.239v3.3c0,3,1.32,4.08,3.42,4.08c2.101,0,3.42-1.08,3.42-4.08
				c0-8.64-12.899-9.06-12.899-21.059C41.202,33.385,43.542,29.784,48.162,28.765z"/>		
			</g>
		</defs>
		<defs>
			<g id="math036">
				<path d="M50.544,29.371c12.016,0,25.134,6.123,33.646,18.486c-7.298,12.162-19.808,20.855-33.646,20.855
				c-13.359,0-25.878-9.16-33.808-20.785C25.559,35.558,38.577,29.371,50.544,29.371"/>
				<path fill="#FFFFFF" d="M50.545,35.101c-13.886,0-23.35,9.14-26.67,12.92c6.513,8.045,16.131,14.959,26.67,14.959
				c14.354,0,23.646-10.757,26.689-14.896C70.755,40.461,61.227,35.101,50.545,35.101"/>
				<path d="M50.849,49.054l-9.56-6.177c-1.152,1.779-1.821,3.9-1.821,6.177c0,6.285,5.095,11.381,11.381,11.381
				c6.286,0,11.381-5.095,11.381-11.381s-5.095-11.381-11.381-11.381c-2.111,0-4.089,0.575-5.783,1.577L50.849,49.054z"/>
			</g>
		</defs>
		<defs>
			<g id="math110">
				<line fill="none" stroke="#363533" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="50.196" y1="20.841" x2="50.196" y2="72.5"/>
				<line fill="none" stroke="#363533" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="77.221" y1="53.458" x2="24.103" y2="53.458"/>
				<path fill="none" stroke="#363533" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
					M31.789,76.723c0,0,5.75-23.608,18.717-23.297"/>
				<path fill="none" stroke="#363533" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
					M68.371,30.193c0,0-5.75,23.608-18.717,23.297"/>
			</g>
		</defs>
		<defs>
			<g id="math140">
				<path d="M68.3,17.3H31.2a3.8,3.8,0,0,0-3.7,3.9V80.7a3.8,3.8,0,0,0,3.7,3.9H68.3A3.78,3.78,0,0,0,72,80.8V21.3a3.89,3.89,0,0,0-3.7-4M41.8,78.9H33.7V70.4h8.1Zm0-12.6H33.7V57.8h8.1ZM54,78.9H45.9V70.4H54Zm0-12.6H45.9V57.8H54ZM66.1,78.9H58V70.4h8.1Zm0-12.6H58V57.8h8.1ZM41.8,53.5H33.7V45h8.1Zm12.2,0H45.9V45H54Zm12.1,0H58V45h8.1Zm0-15.9H33.6v-14H66.1v14Z"/>
			</g>
		</defs>
		<defs>
			<g id="math141">
				<!-- Need new svg icon -->
			</g>
		</defs>
		<defs>
			<g id="math220">
				<path d="M43.4,30.79c0-1.64-.57-2.09-1.48-2.09s-1.48.5-1.48,1.8v1.17H37.73v-1c0-2.91,1.46-4.58,4.27-4.58s4.26,1.67,4.26,4.58v.47c0,2-.62,3.18-2,3.75,1.43.62,2,2,2,3.82v1.43c0,2.92-1.45,4.58-4.26,4.58s-4.27-1.66-4.27-4.58V38.64h2.71v1.69c0,1.3.57,1.8,1.48,1.8s1.48-.44,1.48-2.06V38.64c0-1.69-.57-2.31-1.87-2.31h-1V33.72h1.11c1.07,0,1.72-.46,1.72-1.92Z" style="fill:#363533"/><path d="M56.33,44.73c-2.89,0-4.47-1.67-4.47-4.58V38.72c0-1.74.52-3.1,1.77-3.8-1.2-.65-1.77-1.87-1.77-3.67v-.57c0-2.91,1.58-4.58,4.47-4.58s4.48,1.67,4.48,4.58v.57c0,1.8-.6,3-1.77,3.67,1.24.7,1.77,2.06,1.77,3.8v1.43C60.81,43.06,59.22,44.73,56.33,44.73ZM54.72,31.8c0,1.46.67,1.93,1.61,1.93s1.61-.47,1.61-1.93v-1c0-1.64-.7-2.08-1.61-2.08s-1.61.44-1.61,2.08Zm1.61,10.33c.91,0,1.59-.44,1.61-2.06V38.38c0-1.43-.59-2.05-1.61-2.05s-1.61.62-1.61,2.05v1.69C54.72,41.69,55.42,42.13,56.33,42.13Z" style="fill:#363533"/><path d="M37.21,69.84l5.2-12.31h3.12V69.84h1.36v2.6H45.53v3.3H42.67v-3.3H37.21Zm5.46,0V63.1l-2.83,6.74Z" style="fill:#363533"/><path d="M52,62.06c0-3.07,1.4-4.74,4.37-4.74,2.81,0,4.27,1.67,4.27,4.58v.47H58v-.65c0-1.3-.57-1.79-1.48-1.79s-1.59.49-1.59,2.23v3.33a2.73,2.73,0,0,1,2.65-1.61c2.11,0,3.18,1.48,3.18,4.16v3.33c0,2.92-1.54,4.58-4.35,4.58S52,74.29,52,71.37Zm2.86,6.22v3.27c0,1.31.57,1.77,1.48,1.77s1.49-.47,1.49-1.77V68.28c0-1.31-.58-1.8-1.49-1.8S54.9,67,54.9,68.28Z" style="fill:#363533"/><polygon points="35.15 86.51 24.89 86.51 24.89 16.35 35.15 16.35 35.15 22.35 30.89 22.35 30.89 80.51 35.15 80.51 35.15 86.51" style="fill:#363533"/><polygon points="74.22 86.51 63.95 86.51 63.95 80.51 68.22 80.51 68.22 22.35 63.95 22.35 63.95 16.35 74.22 16.35 74.22 86.51" style="fill:#363533"/>
			</g>
		</defs>
		<defs>
			<g id="math250">
				<!-- Need new svg icon -->
			</g>
		</defs>
		<defs>
			<g id="math436">
				<line fill="none" stroke="#363533" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="50.5" y1="23.487" x2="50.5" y2="79.315"/>
				<line fill="none" stroke="#363533" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="77.525" y1="52.214" x2="24.407" y2="52.214"/>
				<line fill="none" stroke="#363533" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="36.473" y1="23.487" x2="75.95" y2="62.963"/>	
			</g>
		</defs>
		<defs>
			<g id="micrb106">
				<!-- Need new svg icon -->
			</g>
		</defs>
		<defs>
			<g id="micrb107">
				<!-- Need new svg icon -->
			</g>
		</defs>
		<defs>
			<g id="phys010">
				<ellipse transform="matrix(0.4981 0.8671 -0.8671 0.4981 67.6654 -16.9628)" fill="none" stroke="#363533" stroke-width="4" stroke-miterlimit="10" cx="48.486" cy="49.973" rx="28.779" ry="7.571"/>
				<ellipse transform="matrix(-0.4929 0.8701 -0.8701 -0.4929 116.2665 32.5203)" fill="none" stroke="#363533" stroke-width="4" stroke-miterlimit="10" cx="48.656" cy="50.143" rx="28.779" ry="7.571"/>
				<ellipse transform="matrix(-1 0.0047 -0.0047 -1 97.5483 100.0551)" fill="none" stroke="#363533" stroke-width="4" stroke-miterlimit="10" cx="48.656" cy="50.143" rx="28.779" ry="7.571"/>
				<circle fill="#363533" stroke="#363533" stroke-width="6" stroke-miterlimit="10" cx="27.635" cy="44.902" r="1.544"/>
				<circle fill="#363533" stroke="#363533" stroke-width="6" stroke-miterlimit="10" cx="54.199" cy="70.363" r="1.544"/>
				<circle fill="#363533" stroke="#363533" stroke-width="6" stroke-miterlimit="10" cx="63.195" cy="34.972" r="1.544"/>	
			</g>
		</defs>
		<defs>
			<g id="phys211">
				<!-- Need new svg icon -->
			</g>
		</defs>
	</svg>
</iron-iconset-svg>`;

document.head.appendChild($_documentContainer);

var $_documentContainer$1 = document.createElement("div");
$_documentContainer$1.setAttribute("style", "display: none;");

$_documentContainer$1.innerHTML = `
    <iron-iconset-svg name="serviceicons" size="24">
        <svg>
          <defs>
            <g id="computer">
              <path d="M22 3.2c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20v-11.8zm-2 9.8h-16v-9h16v9zm2 3h-20c-.197.372-2 4.582-2 4.998 0 .522.418 1.002 1.002 1.002h21.996c.584 0 1.002-.48 1.002-1.002 0-.416-1.803-4.626-2-4.998zm-12.229 5l.467-1h3.523l.467 1h-4.457z"/>
            </g>
          </defs>
          <defs>
            <g id="accessibility">
              <path d="M16 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-5.405 16.4l-1.472 1.6h-3.123v2h-2v2h-2v-2.179l5.903-5.976c-.404-.559-.754-1.158-1.038-1.795l-6.865 6.95v5h6v-2h2v-2h2l2.451-2.663c-.655-.249-1.276-.562-1.856-.937zm7.405-11.4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"/>
            </g>
          </defs>
        <defs>
          <g id="globe">
            <path d="M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-2.152-3.072l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.206-.299-.36.362-.36.362zm13.008 6.901c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12zm-8.31-5.371c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm6.296 5.371c0-1.035-.177-2.08-.357-2.632-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.268.804-.737 1.685-1.251 2.149-.768.694-.624-.449-1.147-.852-.275-.211-.272-.66-.55-.815-.124-.07-.693-.725-.688-.813l-.017.166c-.094.071-.294-.268-.315-.321 0 .295.48.765.639 1.001.271.405.416.995.748 1.326.178.178.858.914 1.035.898.193-.017.803-.458.911-.433.644.152-1.516 3.205-1.721 3.583-.169.317.138 1.101.113 1.476-.029.433-.37.573-.693.809-.346.253-.265.745-.556.925-.517.318-.889 1.353-1.623 1.348-.216-.001-1.14.36-1.261.007-.094-.256-.22-.45-.353-.703-.13-.248-.015-.505-.173-.724-.109-.152-.475-.497-.508-.677-.002-.155.117-.626.28-.708.229-.117.044-.458.016-.656-.048-.354-.267-.646-.53-.851-.389-.299-.188-.537-.097-.964 0-.204-.124-.472-.398-.392-.564.164-.393-.44-.804-.413-.296.021-.538.209-.813.292-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.104-.054.684-.022.594-.294-.1-.277.051-.195.181-.253-.022.009.34-.619.402-.413-.043-.212-.421.074-.553.063-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.818 1.901 4.38 3.087 7.22 3.087 5.517 0 9.989-4.472 9.989-9.989zm-11.507-6.357c.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.087.106c-.085.084.002.139.087.102z"/>
          </g>
        </defs>
        <defs>
          <g id="consult">
            <path d="M2.001 9.352c0 1.873.849 2.943 1.683 3.943.031 1 .085 1.668-.333 3.183 1.748-.558 2.038-.778 3.008-1.374 1 .244 1.474.381 2.611.491-.094.708-.081 1.275.055 2.023-.752-.06-1.528-.178-2.33-.374-1.397.857-4.481 1.725-6.649 2.115.811-1.595 1.708-3.785 1.661-5.312-1.09-1.305-1.705-2.984-1.705-4.695-.001-4.826 4.718-8.352 9.999-8.352 5.237 0 9.977 3.484 9.998 8.318-.644-.175-1.322-.277-2.021-.314-.229-3.34-3.713-6.004-7.977-6.004-4.411 0-8 2.85-8 6.352zm20.883 10.169c-.029 1.001.558 2.435 1.088 3.479-1.419-.258-3.438-.824-4.352-1.385-.772.188-1.514.274-2.213.274-3.865 0-6.498-2.643-6.498-5.442 0-3.174 3.11-5.467 6.546-5.467 3.457 0 6.546 2.309 6.546 5.467 0 1.12-.403 2.221-1.117 3.074zm-7.563-3.021c0-.453-.368-.82-.82-.82s-.82.367-.82.82.368.82.82.82.82-.367.82-.82zm3 0c0-.453-.368-.82-.82-.82s-.82.367-.82.82.368.82.82.82.82-.367.82-.82zm3 0c0-.453-.368-.82-.82-.82s-.82.367-.82.82.368.82.82.82.82-.367.82-.82z"/>
          </g>
        </defs>
        <defs>
          <g id="ngdle">
            <path d="M5 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.239-5 5s2.238 5 5 5 5-2.239 5-5-2.238-5-5-5zm15 9c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.944 1.764l5.488 2.927c-.072.301-.121.611-.121.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-22c-2.209 0-4 1.791-4 4 0 .324.049.634.121.935l-5.488 2.927c.395.536.713 1.128.944 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4s-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"/>
          </g>
        </defs>
        <defs>
          <g id="container">
            <path d="M18 10.031v-6.423l-6.036-3.608-5.964 3.569v6.499l-6 3.224v7.216l6.136 3.492 5.864-3.393 5.864 3.393 6.136-3.492v-7.177l-6-3.3zm-1.143.036l-4.321 2.384v-4.956l4.321-2.539v5.111zm-4.895-8.71l4.272 2.596-4.268 2.509-4.176-2.554 4.172-2.551zm-10.172 12.274l4.778-2.53 4.237 2.417-4.668 2.667-4.347-2.554zm4.917 3.587l4.722-2.697v5.056l-4.722 2.757v-5.116zm6.512-3.746l4.247-2.39 4.769 2.594-4.367 2.509-4.649-2.713zm9.638 6.323l-4.421 2.539v-5.116l4.421-2.538v5.115z"/>
          </g>
        </defs>
        <defs>
          <g id="oer">
            <path d="M13 12v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201zm5.362-12.201c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614z"/>
          </g>
        </defs>
        <defs>
          <g id="vr">
            <path d="M7.084.584c-.216-.375-.608-.584-1.012-.584-.198 0-.399.05-.583.156l-4.905 2.832c-.349.201-.555.556-.581.93-.016.224.032.456.153.665l9.605 16.632c.323.559 1.037.75 1.595.428l4.905-2.831c.559-.322.75-1.037.428-1.595l-9.605-16.633zm5.924 17.231c-.104.386-.5.615-.886.512s-.615-.5-.512-.886c.104-.386.5-.614.886-.512.386.104.615.501.512.886zm-1.139-1.971c-.104.386-.5.615-.886.512-.386-.104-.615-.5-.512-.886.104-.386.5-.614.886-.512.387.104.616.5.512.886zm-2.717-3.682c-.53.307-1.208.125-1.514-.405s-.125-1.208.406-1.514 1.208-.125 1.514.405c.306.531.125 1.208-.406 1.514zm-1.73-7.246l-1.319.762.762 1.318-1.044.603-.761-1.319-1.32.761-.602-1.043 1.319-.762-.762-1.318 1.044-.603.761 1.319 1.32-.761.602 1.043zm16.446 10c-.433-2.17-1.867-2.939-2.964-2.939-1.752 0-3.09 1.759-2.084 4.08 1.055 2.432 1.213 4.507.435 5.692-.793 1.208-2.376 1.208-3.534.3-.252-.207-.491-.464-.713-.766l-1.122.649c.292.432.638.807 1.031 1.117.807.659 1.696.951 2.593.951 1.64 0 3.306-.977 4.54-2.48 1.262-1.54 1.95-3.426 1.95-5.249 0-.459-.043-.912-.132-1.355zm-2.923 5.921c.25-1.447-.068-3.265-.947-5.292-.631-1.454.068-2.284.906-2.284.976 0 1.521.985 1.704 1.906.395 1.98-.32 4.111-1.663 5.67z"/>
          </g>
        </defs>
        <defs>
          <g id="motivate">
            <path d="M16 24h-6v-1c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.884.586 1.414v1zm8 0h-6v-1c0-1.105.895-2 2-2h2c.53 0 1.039.211 1.414.586s.586.884.586 1.414v1zm-17.241-15c.649 0 1.293-.213 1.692-.436.755-.42 2.695-1.643 3.485-2.124.216-.131.495-.083.654.113l.008.011c.165.204.146.499-.043.68-.622.597-2.443 2.328-3.37 3.213-.522.499-.822 1.183-.853 1.904-.095 2.207-.261 6.912-.331 8.833-.017.45-.387.806-.837.806h-.001c-.444 0-.786-.347-.836-.788-.111-.981-.329-3.28-.426-4.212-.04-.384-.28-.613-.585-.615-.304-.001-.523.226-.549.609-.061.921-.265 3.248-.341 4.22-.034.442-.397.786-.84.786h-.001c-.452 0-.824-.357-.842-.808-.097-2.342-.369-8.964-.369-8.964l-1.287 2.33c-.14.253-.445.364-.715.26h-.001c-.279-.108-.43-.411-.349-.698l1.244-4.393c.122-.43.515-.727.962-.727h4.531zm6.241 7c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm8 0c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm3-1h-15v-1h8v-1h3v1h3v-13h-22v7l-1 2.745v-10.745h24v15zm-6-6h-4v-1h4v1zm-12.626-5c1.241 0 2.25 1.008 2.25 2.25s-1.009 2.25-2.25 2.25c-1.242 0-2.25-1.008-2.25-2.25s1.008-2.25 2.25-2.25zm15.626 3h-7v-1h7v1zm0-2h-7v-1h7v1z"/>
          </g>
        </defs>
        <defs>
          <g id="collaborate">
            <path d="M23 18h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-15.999-10c-2.493 0-4.227 2.383-1.866 6.839.774 1.464-.826 1.812-2.545 2.209-1.491.345-1.59 1.072-1.59 2.334l.002.618h1.329c0-1.918-.186-1.385 1.824-1.973 1.014-.295 1.91-.723 2.316-1.612.212-.463.355-1.22-.162-2.197-.952-1.798-1.219-3.374-.712-4.215.547-.909 2.27-.908 2.819.015.935 1.567-.793 3.982-1.02 4.982h1.396c.44-1 1.206-2.208 1.206-3.9.001-2.01-1.31-3.1-2.997-3.1zm7.754-1.556c.895-1.487 3.609-1.494 4.512.022.77 1.291.423 3.484-.949 6.017-.098.18-.17.351-.232.517h1.464c3.057-5.744.816-9-2.548-9-3.323 0-5.635 3.177-2.488 9.119 1.033 1.952-1.101 2.416-3.394 2.946-1.988.458-2.12 1.429-2.12 3.11l.003.825h1.331c0-2.069-.08-2.367 1.173-2.657 1.918-.442 3.729-.86 4.39-2.305.241-.527.401-1.397-.206-2.543-1.362-2.572-1.704-4.777-.936-6.051z"/>
          </g>
        </defs>
        <defs>
          <g id="engage">
            <path d="M7.092 5.099l1.439-.205-.439-3.083-1.44.204.44 3.084zm-2.211 3.445l.205-1.44-3.084-.44-.205 1.441 3.084.439zm-.494-5.163l-1.03 1.03 2.203 2.204 1.029-1.03-2.202-2.204zm12.541 15.565l-1.439.205.438 3.083 1.441-.204-.44-3.084zm2.21-3.446l-.206 1.441 3.085.439.205-1.44-3.084-.44zm.495 5.163l1.028-1.029-2.204-2.204-1.027 1.03 2.203 2.203zm2.64-18.904c2.344 2.346 2.344 6.149.001 8.494l-3.896 3.896-1.417-1.417 3.895-3.895c1.562-1.562 1.562-4.101 0-5.662-1.562-1.562-4.101-1.562-5.662 0l-3.894 3.895-1.416-1.416 3.895-3.895c2.344-2.345 6.147-2.345 8.494 0zm-8.138 16.631l-3.852 3.851c-2.344 2.347-6.146 2.345-8.494.001-2.344-2.346-2.345-6.149 0-8.494l3.854-3.851 1.414 1.415-3.851 3.851c-1.562 1.562-1.562 4.102-.001 5.663 1.563 1.561 4.102 1.561 5.664-.001l3.85-3.851 1.416 1.416z"/>
          </g>
        </defs>
        <defs>
          <g id="assess">
            <path d="M22 0v14.386c0 2.391-6.648 9.614-9.811 9.614h-10.189v-24h20zm-10.638 22c4.156 0 2.638-6 2.638-6s6 1.65 6-2.457v-11.543h-16v20h7.362zm.638-4v1h-5v-1h5zm-5-2h5v1h-5v-1zm0-2h10v1h-10v-1zm0-2h10v1h-10v-1zm3.691-3.174l-2.055.001-.39 1.172-1.246.001 2.113-5.689 1.086-.001 2.133 5.686-1.246.001-.395-1.171zm4.373-2.015l1.41-.001.001 1.019-1.41.001.001 1.594-1.074.001-.001-1.594-1.414.001-.001-1.019 1.414-.001-.001-1.528h1.074l.001 1.527zm-6.112 1.067l1.422-.001-.717-2.129-.705 2.13z"/>
          </g>
        </defs>
        <defs>
          <g id="video">
            <path d="M23 5.999v10l-6-3v-4l6-3zm-6-2.499c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5zm-12.5-3.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5zm9 9c-1.858 0-3.504-.926-4.5-2.341-.996 1.415-2.642 2.341-4.5 2.341-.521 0-1.022-.078-1.5-.213v4.713c0 .829.672 1.5 1.5 1.5h9c.828 0 1.5-.671 1.5-1.5v-4.713c-.478.135-.979.213-1.5.213zm-3.117 8h-2.766l-5.588 5.586 1.414 1.414 4.557-4.556v4.553h2v-4.553l4.557 4.556 1.414-1.414-5.588-5.586z"/>
          </g>
        </defs>
        <defs>
          <g id="image">
            <path d="M19.5 12c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-18 0l4-5.96 2.48 1.96 2.52-4 1.853 2.964c-1.271 1.303-1.977 3.089-1.827 5.036h-9.026zm10.82 4h-14.82v-18h22v7.501c-.623-.261-1.297-.422-2-.476v-5.025h-18v14h11.502c.312.749.765 1.424 1.318 2zm-9.32-11c-.828 0-1.5-.671-1.5-1.5 0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5z"/>
          </g>
        </defs>
        <defs>
          <g id="podcast">
            <path d="M6.043 17.496l-1.483 1.505c-2.79-2.201-4.56-5.413-4.56-9.001s1.77-6.8 4.561-9l1.483 1.504c-2.327 1.835-3.805 4.512-3.805 7.496s1.478 5.661 3.804 7.496zm8.957-7.496c0-1.657-1.344-3-3-3s-3 1.343-3 3c0 1.304.838 2.403 2 2.816v10.184h2v-10.184c1.162-.413 2-1.512 2-2.816zm-8.282 0c0-1.791.887-3.398 2.282-4.498l-1.481-1.502c-1.86 1.467-3.04 3.608-3.04 6s1.18 4.533 3.04 6l1.481-1.502c-1.396-1.1-2.282-2.707-2.282-4.498zm12.722-9l-1.483 1.504c2.326 1.835 3.804 4.512 3.804 7.496s-1.478 5.661-3.804 7.496l1.483 1.505c2.79-2.201 4.56-5.413 4.56-9.001s-1.77-6.8-4.56-9zm-2.959 3l-1.481 1.502c1.396 1.101 2.282 2.707 2.282 4.498s-.886 3.398-2.282 4.498l1.481 1.502c1.86-1.467 3.04-3.608 3.04-6s-1.179-4.533-3.04-6z"/>
          </g>
        </defs>
        <defs>
          <g id="gears">
            <svg width="24" height="24" viewBox="-5 -4 34 34"><path d="M17 10.645v-2.29c-1.17-.417-1.907-.533-2.28-1.431-.373-.9.07-1.512.6-2.625l-1.618-1.619c-1.105.525-1.723.974-2.626.6-.9-.373-1.017-1.116-1.431-2.28h-2.29c-.412 1.158-.53 1.907-1.431 2.28h-.001c-.9.374-1.51-.07-2.625-.6l-1.617 1.619c.527 1.11.973 1.724.6 2.625-.375.901-1.123 1.019-2.281 1.431v2.289c1.155.412 1.907.531 2.28 1.431.376.908-.081 1.534-.6 2.625l1.618 1.619c1.107-.525 1.724-.974 2.625-.6h.001c.9.373 1.018 1.118 1.431 2.28h2.289c.412-1.158.53-1.905 1.437-2.282h.001c.894-.372 1.501.071 2.619.602l1.618-1.619c-.525-1.107-.974-1.723-.601-2.625.374-.899 1.126-1.019 2.282-1.43zm-8.5 1.689c-1.564 0-2.833-1.269-2.833-2.834s1.269-2.834 2.833-2.834 2.833 1.269 2.833 2.834-1.269 2.834-2.833 2.834zm15.5 4.205v-1.077c-.55-.196-.897-.251-1.073-.673-.176-.424.033-.711.282-1.236l-.762-.762c-.52.248-.811.458-1.235.283-.424-.175-.479-.525-.674-1.073h-1.076c-.194.545-.25.897-.674 1.073-.424.176-.711-.033-1.235-.283l-.762.762c.248.523.458.812.282 1.236-.176.424-.528.479-1.073.673v1.077c.544.193.897.25 1.073.673.177.427-.038.722-.282 1.236l.762.762c.521-.248.812-.458 1.235-.283.424.175.479.526.674 1.073h1.076c.194-.545.25-.897.676-1.074h.001c.421-.175.706.034 1.232.284l.762-.762c-.247-.521-.458-.812-.282-1.235s.529-.481 1.073-.674zm-4 .794c-.736 0-1.333-.597-1.333-1.333s.597-1.333 1.333-1.333 1.333.597 1.333 1.333-.597 1.333-1.333 1.333zm-4 3.071v-.808c-.412-.147-.673-.188-.805-.505s.024-.533.212-.927l-.572-.571c-.389.186-.607.344-.926.212s-.359-.394-.506-.805h-.807c-.146.409-.188.673-.506.805-.317.132-.533-.024-.926-.212l-.572.571c.187.393.344.609.212.927-.132.318-.396.359-.805.505v.808c.408.145.673.188.805.505.133.32-.028.542-.212.927l.572.571c.39-.186.608-.344.926-.212.318.132.359.395.506.805h.807c.146-.409.188-.673.507-.805h.001c.315-.131.529.025.924.213l.572-.571c-.186-.391-.344-.609-.212-.927s.397-.361.805-.506zm-3 .596c-.552 0-1-.447-1-1s.448-1 1-1 1 .447 1 1-.448 1-1 1z"/></svg>
          </g>
        </defs>
        <defs>
          <g id="camera">
          <svg width="24" height="24" viewBox="-5 -4 34 34"><path d="M4 11c-2.21 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm10 2c.702 0 1.373-.127 2-.35v6.35c0 1.104-.896 2-2 2h-10c-1.104 0-2-.896-2-2v-6.35c.627.223 1.298.35 2 .35 2.084 0 3.924-1.068 5-2.687 1.076 1.619 2.916 2.687 5 2.687zm4 1v4l6 3v-10l-6 3zm-4-11c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z"/></svg>
          </g>
        </defs>
        <defs>
          <g id="computer">
            <svg width="24" height="24" viewBox="-5 -4 34 34"><path d="M22 3.2c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20v-11.8zm-2 9.8h-16v-9h16v9zm2 3h-20c-.197.372-2 4.582-2 4.998 0 .522.418 1.002 1.002 1.002h21.996c.584 0 1.002-.48 1.002-1.002 0-.416-1.803-4.626-2-4.998zm-12.229 5l.467-1h3.523l.467 1h-4.457z"/></svg>
          </g>
        </defs>
      </svg>
    </iron-iconset-svg>`;

document.head.appendChild($_documentContainer$1);

class HaxThemeServiceCourse extends PolymerElement {
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

        h1 {
          font-size: 36px;
          font-weight: 400;
        }

        h2 {
          font-size: 28px;
          font-weight: 400;
        }

        @media screen and (max-width: 768px) {
          h1 {
            font-size: 28px;
          }
        }

        #content-wrap {
          width: 80%;
          margin: 0 auto 0 auto;
        }

        #header {
          border-left: solid;
          border-left-width: 4px;
          border-left-color: #e2801e;
          padding-left: 15px;
          margin: 0 0 25px 0;
        }

        .description {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.4;
        }

        #icon-banner {
          display: grid;
          grid-template-columns: repeat(5, auto);
          margin: -20px 0 0 0;
        }

        @media screen and (max-width: 1130px) {
          #icon-banner {
            grid-template-columns: repeat(2, auto);
          }
        }

        @media screen and (max-width: 768px) {
          #icon-banner {
            grid-template-columns: repeat(1, auto);
          }
        }

        #testimonials {
          margin: 0 0 25px 0;
        }

        #testimonial_header {
          font-size: 24px;
          font-weight: 400;
          border-left: solid;
          border-left-width: 4px;
          border-left-color: #e2801e;
          padding-left: 15px;
          margin: 0 0 25px 0;
        }

        #quotes {
          display: grid;
          grid-template-columns: repeat(2, auto);
        }

        @media screen and (max-width: 768px) {
          #quotes {
            grid-template-columns: repeat(1, auto);
          }
        }

        person-testimonial {
          margin-right: 10px;
        }
      </style>
      <page-banner
        image="files/theme-images/page-banners/ngdle-banner.jpg"
        text="Course Management"
        alt="Hand on keyboard with digital imagery.  Photo by: Geralt - Pixabay.com"
      ></page-banner>
      <div id="content-wrap">
        <div id="header">
          <h1>Course Management</h1>
          <div class="description">
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur
            aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </div>
        </div>
        <div id="icon-banner">
          <service-icon
            icon="serviceicons:computer"
            title="Content Delivery"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="serviceicons:accessibility"
            title="Accessibility"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="serviceicons:globe"
            title="World Campus"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="serviceicons:consult"
            title="Consultations"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
        </div>
        <div id="service-banner">
          <service-band
            type="video"
            source="https://youtu.be/o55m5yfdF-o"
            alt="A student raises their hand in a lecture hall."
            title="Content Delivery Title"
            url="https://www.google.com"
          >
            <span slot>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.</span
            >
          </service-band>
          <service-band
            source="files/feature-images/course-select.jpg"
            alt="A student raises their hand in a lecture hall."
            title="Accessibility Title"
            align="right"
          >
            <span slot>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.</span
            >
          </service-band>
          <service-band
            type="video"
            source="https://youtu.be/obxNix6w2aE"
            alt="A student raises their hand in a lecture hall."
            title="World Campus Title" 
            url="https://www.google.com"
          >
            <span slot>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.</span
            >
          </service-band>
          <service-band
            type="video"
            source="https://youtu.be/obxNix6w2aE"
            alt="A student raises their hand in a lecture hall."
            title="Consultations Title"
            align="right"
          >
            <span slot>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.</span
            >
          </service-band>
        </div>

        <div id="testimonials">
          <div id="testimonial_header">
            <h2>What Others are Saying</h2>
          </div>
          <div id="quotes">
            <person-testimonial
              accent-color="orange"
              image="files/odl-team/mike.jpg"
              name="Michael Potter"
              position="Educational Technologist"
            >
              <span
                >HAX has revolutionized how I help faculty deliver
                content!</span
              >
            </person-testimonial>
            <person-testimonial
              accent-color="orange"
              image="files/odl-team/mike.jpg"
              name="Michael Potter"
              position="Educational Technologist"
            >
              <span
                >HAX has revolutionized how I help faculty deliver
                content!</span
              >
            </person-testimonial>
            <person-testimonial
              accent-color="orange"
              image="files/odl-team/mike.jpg"
              name="Michael Potter"
              position="Educational Technologist"
            >
              <span
                >HAX has revolutionized how I help faculty deliver
                content!</span
              >
            </person-testimonial>
            <person-testimonial
              accent-color="orange"
              image="files/odl-team/mike.jpg"
              name="Michael Potter"
              position="Educational Technologist"
            >
              <span
                >HAX has revolutionized how I help faculty deliver
                content!</span
              >
            </person-testimonial>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-service-course";
  }
  connectedCallback() {
    super.connectedCallback();
    this.__disposer = [];
    autorun(reaction => {
      this.manifest = toJS(store.routerManifest);
      this.__disposer.push(reaction);
    });
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
}
window.customElements.define(HaxThemeServiceCourse.tag, HaxThemeServiceCourse);

class HaxThemeServiceLab extends PolymerElement {
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

        h1 {
          font-size: 36px;
          font-weight: 400;
        }

        h2 {
          font-size: 24px;
          font-weight: 400;
        }

        @media screen and (max-width: 768px) {
          h1 {
            font-size: 28px;
          }
        }

        #content-wrap {
          width: 80%;
          margin: 0 auto 0 auto;
        }

        #header {
          border-left: solid;
          border-left-width: 4px;
          border-left-color: #e2801e;
          padding-left: 15px;
          margin: 0 0 25px 0;
        }

        .description {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.4;
        }

        #icon-banner {
          display: grid;
          grid-template-columns: repeat(5, auto);
          margin: -20px 0 0 0;
        }

        @media screen and (max-width: 1130px) {
          #icon-banner {
            grid-template-columns: repeat(2, auto);
          }
        }

        @media screen and (max-width: 768px) {
          #icon-banner {
            grid-template-columns: repeat(1, auto);
          }
        }

        #whatsnext {
          margin: 0 0 25px 0;
        }

        #whatsnext_header {
          font-size: 24px;
          font-weight: 400;
          border-left: solid;
          border-left-width: 4px;
          border-left-color: #e2801e;
          padding-left: 15px;
          margin: 0 0 25px 0;
        }

        #quotes {
          display: grid;
          grid-template-columns: repeat(2, auto);
        }

        @media screen and (max-width: 768px) {
          #quotes {
            grid-template-columns: repeat(1, auto);
          }
        }

        person-testimonial {
          margin-right: 10px;
        }
      </style>
      <page-banner
        image="files/theme-images/page-banners/lab-banner.jpg"
        text="Innovation Lab"
        alt="Random gears on a banner.  Photo by: Geralt - Pixabay.com"
      ></page-banner>
      <div id="content-wrap">
        <div id="header">
          <h1>Innovation Lab</h1>
          <div class="description">
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur
            aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </div>
        </div>
        <div id="icon-banner">
          <service-icon
            icon="serviceicons:vr"
            title="Virtual Reality"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="serviceicons:ngdle"
            title="NGDLE"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="serviceicons:container"
            title="Containers on Demand"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="serviceicons:oer"
            title="OER Schema"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
        </div>
        <div id="service-banner">
          <service-band
            type="video"
            source="https://youtu.be/o55m5yfdF-o"
            alt="A student raises their hand in a lecture hall."
            title="Track Real-time Anayltics to Measure Student Performance"
          >
            <span slot>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.</span
            >
          </service-band>
          <service-band
            source="files/feature-images/course-select.jpg"
            alt="A student raises their hand in a lecture hall."
            title="Track Real-time Anayltics to Measure Student Performance"
            align="right"
          >
            <span slot>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.</span
            >
          </service-band>
          <service-band
            type="video"
            source="https://youtu.be/obxNix6w2aE"
            alt="A student raises their hand in a lecture hall."
            title="Track Real-time Anayltics to Measure Student Performance"
          >
            <span slot>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.</span
            >
          </service-band>
        </div>
        <div id="whatsnext">
          <div id="whatsnext_header">
            <h2>What's Next</h2>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-service-lab";
  }
  connectedCallback() {
    super.connectedCallback();
    this.__disposer = [];
    autorun(reaction => {
      this.manifest = toJS(store.routerManifest);
      this.__disposer.push(reaction);
    });
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
}
window.customElements.define(HaxThemeServiceLab.tag, HaxThemeServiceLab);

class HaxThemeServicePedagogy extends PolymerElement {
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

        h1 {
          font-size: 36px;
          font-weight: 400;
        }

        h2 {
          font-size: 24px;
          font-weight: 400;
        }

        @media screen and (max-width: 768px) {
          h1 {
            font-size: 28px;
          }
        }

        #content-wrap {
          width: 80%;
          margin: 0 auto 0 auto;
        }

        #header {
          border-left: solid;
          border-left-width: 4px;
          border-left-color: #e2801e;
          padding-left: 15px;
          margin: 0 0 25px 0;
        }

        .description {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.4;
        }

        #icon-banner {
          display: grid;
          grid-template-columns: repeat(5, auto);
          margin: -20px 0 0 0;
        }

        @media screen and (max-width: 1130px) {
          #icon-banner {
            grid-template-columns: repeat(2, auto);
          }
        }

        @media screen and (max-width: 768px) {
          #icon-banner {
            grid-template-columns: repeat(1, auto);
          }
        }

        #testimonials {
          margin: 0 0 25px 0;
        }

        #testimonial_header {
          font-size: 24px;
          font-weight: 400;
          border-left: solid;
          border-left-width: 4px;
          border-left-color: #e2801e;
          padding-left: 15px;
          margin: 0 0 25px 0;
        }

        #quotes {
          display: grid;
          grid-template-columns: repeat(2, auto);
        }

        @media screen and (max-width: 768px) {
          #quotes {
            grid-template-columns: repeat(1, auto);
          }
        }

        person-testimonial {
          margin-right: 10px;
        }
      </style>
      <page-banner
        image="files/theme-images/page-banners/pedagogy-banner.jpg"
        text="Pedagogy"
        alt="Digital representation of a brain. Photo by: Geralt - Pixabay.com"
      ></page-banner>
      <div id="content-wrap">
        <div id="header">
          <h1>Pedagogy</h1>
          <div class="description">
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur
            aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </div>
        </div>
        <div id="icon-banner">
          <service-icon
            icon="serviceicons:motivate"
            title="Motivate"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="serviceicons:collaborate"
            title="Collaborate"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="serviceicons:engage"
            title="Engage"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="serviceicons:assess"
            title="Assess"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
        </div>
        <div id="service-banner">
          <service-band
            type="video"
            source="https://youtu.be/o55m5yfdF-o"
            alt="A student raises their hand in a lecture hall."
            title="Track Real-time Anayltics to Measure Student Performance"
          >
            <span slot>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.</span
            >
          </service-band>
          <service-band
            source="files/feature-images/course-select.jpg"
            alt="A student raises their hand in a lecture hall."
            title="Track Real-time Anayltics to Measure Student Performance"
            align="right"
          >
            <span slot>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.</span
            >
          </service-band>
          <service-band
            type="video"
            source="https://youtu.be/obxNix6w2aE"
            alt="A student raises their hand in a lecture hall."
            title="Track Real-time Anayltics to Measure Student Performance"
          >
            <span slot>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.</span
            >
          </service-band>
        </div>

        <div id="testimonials">
          <div id="testimonial_header">
            <h2>What Others are Saying...</h2>
          </div>
          <div id="quotes">
            <person-testimonial
              accent-color="orange"
              image="files/odl-team/mike.jpg"
              name="Michael Potter"
              position="Educational Technologist"
            >
              <span
                >HAX has revolutionized how I help faculty deliver
                content!</span
              >
            </person-testimonial>
            <person-testimonial
              accent-color="orange"
              image="files/odl-team/mike.jpg"
              name="Michael Potter"
              position="Educational Technologist"
            >
              <span
                >HAX has revolutionized how I help faculty deliver
                content!</span
              >
            </person-testimonial>
            <person-testimonial
              accent-color="orange"
              image="files/odl-team/mike.jpg"
              name="Michael Potter"
              position="Educational Technologist"
            >
              <span
                >HAX has revolutionized how I help faculty deliver
                content!</span
              >
            </person-testimonial>
            <person-testimonial
              accent-color="orange"
              image="files/odl-team/mike.jpg"
              name="Michael Potter"
              position="Educational Technologist"
            >
              <span
                >HAX has revolutionized how I help faculty deliver
                content!</span
              >
            </person-testimonial>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-service-pedagogy";
  }
  connectedCallback() {
    super.connectedCallback();
    this.__disposer = [];
    autorun(reaction => {
      this.manifest = toJS(store.routerManifest);
      this.__disposer.push(reaction);
    });
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
}
window.customElements.define(HaxThemeServicePedagogy.tag, HaxThemeServicePedagogy);

class HaxThemeServiceMultimedia extends PolymerElement {
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

        h1 {
          font-size: 36px;
          font-weight: 400;
        }

        h2 {
          font-size: 24px;
          font-weight: 400;
        }

        @media screen and (max-width: 768px) {
          h1 {
            font-size: 28px;
          }
        }

        #content-wrap {
          width: 80%;
          margin: 0 auto 0 auto;
        }

        #header {
          border-left: solid;
          border-left-width: 4px;
          border-left-color: #e2801e;
          padding-left: 15px;
          margin: 0 0 25px 0;
        }

        .description {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.4;
        }

        #icon-banner {
          display: grid;
          grid-template-columns: repeat(5, auto);
          margin: -20px 0 0 0;
        }

        @media screen and (max-width: 1130px) {
          #icon-banner {
            grid-template-columns: repeat(2, auto);
          }
        }

        @media screen and (max-width: 768px) {
          #icon-banner {
            grid-template-columns: repeat(1, auto);
          }
        }

        #testimonials {
          margin: 0 0 25px 0;
        }

        #testimonial_header {
          font-size: 24px;
          font-weight: 400;
          border-left: solid;
          border-left-width: 4px;
          border-left-color: #e2801e;
          padding-left: 15px;
          margin: 0 0 25px 0;
        }

        #quotes {
          display: grid;
          grid-template-columns: repeat(2, auto);
        }

        @media screen and (max-width: 768px) {
          #quotes {
            grid-template-columns: repeat(1, auto);
          }
        }

        person-testimonial {
          margin-right: 10px;
        }
      </style>
      <page-banner
        image="files/theme-images/page-banners/obs-banner3.jpg"
        text="Multimedia"
        alt="Digital representation of an eye. Photo by: Geralt - Pixabay.com"
      ></page-banner>
      <div id="content-wrap">
        <div id="header">
          <h1>Multimedia</h1>
          <div class="description">
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur
            aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </div>
        </div>
        <div id="icon-banner">
          <service-icon
            icon="serviceicons:video"
            title="Instructional Video"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="serviceicons:vr"
            title="Virtual Reality"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="serviceicons:image"
            title="Visual Representations"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="serviceicons:podcast"
            title="Podcasting"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
        </div>
        <div id="service-banner">
          <service-band
            type="video"
            source="https://youtu.be/o55m5yfdF-o"
            alt="A student raises their hand in a lecture hall."
            title="Track Real-time Anayltics to Measure Student Performance"
          >
            <span slot>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.</span
            >
          </service-band>
          <service-band
            source="files/feature-images/course-select.jpg"
            alt="A student raises their hand in a lecture hall."
            title="Track Real-time Anayltics to Measure Student Performance"
            align="right"
          >
            <span slot>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.</span
            >
          </service-band>
          <service-band
            type="video"
            source="https://youtu.be/obxNix6w2aE"
            alt="A student raises their hand in a lecture hall."
            title="Track Real-time Anayltics to Measure Student Performance"
          >
            <span slot>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.</span
            >
          </service-band>
        </div>
        <div id="testimonials">
          <div id="testimonial_header">
            <h2>What Others are Saying...</h2>
          </div>
          <div id="quotes">
            <person-testimonial
              accent-color="orange"
              image="files/odl-team/mike.jpg"
              name="Michael Potter"
              position="Educational Technologist"
            >
              <span
                >HAX has revolutionized how I help faculty deliver
                content!</span
              >
            </person-testimonial>
            <person-testimonial
              accent-color="orange"
              image="files/odl-team/mike.jpg"
              name="Michael Potter"
              position="Educational Technologist"
            >
              <span
                >HAX has revolutionized how I help faculty deliver
                content!</span
              >
            </person-testimonial>
            <person-testimonial
              accent-color="orange"
              image="files/odl-team/mike.jpg"
              name="Michael Potter"
              position="Educational Technologist"
            >
              <span
                >HAX has revolutionized how I help faculty deliver
                content!</span
              >
            </person-testimonial>
            <person-testimonial
              accent-color="orange"
              image="files/odl-team/mike.jpg"
              name="Michael Potter"
              position="Educational Technologist"
            >
              <span
                >HAX has revolutionized how I help faculty deliver
                content!</span
              >
            </person-testimonial>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-service-multimedia";
  }
  connectedCallback() {
    super.connectedCallback();
    this.__disposer = [];
    autorun(reaction => {
      this.manifest = toJS(store.routerManifest);
      this.__disposer.push(reaction);
    });
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
}
window.customElements.define(HaxThemeServiceMultimedia.tag, HaxThemeServiceMultimedia);

class NewsCard extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          --theme-color-1: #363533;
          --theme-color-2: #e2801e;
          --theme-color-4: #fff;
        }

        a {
          color: var(--theme-color-1);
          text-decoration: none;
        }

        h1 {
          font-size: 28px;
          font-weight: 400;
          line-height: 1.2;
          margin: 0;
        }

        @media screen and (max-width: 1124px) {
          h1 {
            font-size: 24px;
          }
        }

        h1:hover {
          color: var(--theme-color-2);
        }

        h2 {
          color: var(--theme-color-1);
          font-size: 18px;
          font-weight: 400;
          margin: 0;
        }

        #news_wrap {
          display: flex;
          background-color: var(--theme-color-4);
          margin: 15px;
          padding: 0 0 10px 0;
          border-bottom: solid 2px #dcdcdc;
        }

        @media screen and (max-width: 1124px) {
          #news_wrap {
            flex-direction: column;
          }
        }

        #content_wrap {
          width: 75%;
        }

        @media screen and (max-width: 1124px) {
          #content_wrap {
            width: 100%;
          }
        }

        #news_image {
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          width: 175px;
          height: 250px;
          margin: 0 15px 0 0;
        }

        @media screen and (max-width: 1124px) {
          #news_image {
            width: 100%;
            height: 235px;
          }
        }

        #header_info {
          border-left: solid 4px var(--theme-color-2);
          padding: 0 0 0 15px;
        }

        @media screen and (max-width: 1124px) {
          #header_info {
            margin: 15px 0 0 0;
          }
        }

        #author_info {
          display: flex;
          align-items: center;
          margin: 5px 0 5px;
        }

        #author_image {
          background-size: cover;
          background-repeat: no-repeat;
          background-position: right center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin: 0 5px 0 0;
        }

        #author a {
          color: var(--theme-color-1);
          text-decoration: none;
        }

        #author a:hover {
          color: var(--theme-color-2);
        }

        #description {
          margin-top: 10px;
          font-size: 18px;
          font-weight: 300;
          line-height: 1.2;
        }

        @media screen and (max-width: 1124px) {
          #description {
            margin-top: 10px;
          }
        }

        #action_button {
          display: flex;
          justify-content: flex-end;
          margin: 20px 0 0 0;
        }

        @media screen and (max-width: 768px) {
          #action_button {
            justify-content: center;
            margin: 15px 0 0 0;
          }
        }

        paper-button#action {
          color: var(--theme-color-2);
          padding: 0;
        }

        paper-button#action:hover,
        paper-button#action:focus {
          color: var(--theme-color-1);
        }
      `
    ];
  }
  render() {
    return html$1`
      <div id="news_wrap">
        <div
          id="news_image"
          style="background-image:url(${this.image})"
          alt="${this.alt}"
        ></div>
        <div id="content_wrap">
          <div id="header_info">
            <div id="title">
              <a href="${this.url}">
                <h1>${this.title}</h1>
              </a>
            </div>
            <div id="date">
              <h2>${this.date}</h2>
            </div>
            <div id="author_info">
              <div
                id="author_image"
                style="background-image:url(${this.authorimage})"
              ></div>
              <div id="author">By: ${this.author}</div>
            </div>
          </div>
          <div id="description">
            <span>${this.description}</span>
          </div>
          <div id="action_button">
            <a href="${this.url}">
              <paper-button noink id="action">
                <div class="title">Read More</div>
                <iron-icon icon="chevron-right"></iron-icon>
              </paper-button>
            </a>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "news-card";
  }
  static get properties() {
    return {
      /**
       * Image
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
       * Title
       */
      title: {
        type: String
      },
      /**
       * Date
       */
      date: {
        type: String
      },
      /**
       * Author Image
       */
      authorimage: {
        type: String
      },
      /**
       * Author
       */
      author: {
        type: String
      },
      /**
       * Author Page
       */
      authorpage: {
        type: String
      },
      /**
       * Article Description
       */
      description: {
        type: String
      },
      /**
       * Destination Url
       */
      url: {
        type: String
      }
    };
  }
  constructor() {
    super();
    import('../../build/es6/node_modules/@polymer/paper-button/paper-button.js');
  }
}
window.customElements.define(NewsCard.tag, NewsCard);

class HaxThemeNews extends PolymerElement {
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
        .news_container {
          display: var(--haxtheme-news-news-container-display, flex);
          width: var(--haxtheme-news-news-container-width, 80%);
          margin: var(--haxtheme-news-news-container-margin, 0 auto 0 auto);
          @apply --haxtheme-news-news-container;
        }

        @media screen and (max-width: 768px) {
          .news_container {
            flex-direction: var(
              --haxtheme-news-news-container-flex-direction-mobile,
              column
            );
            width: var(--haxtheme-news-news-container-width-mobile, 98%);
            @apply --haxtheme-news-news-container-mobile;
          }
        }

        .news_page_feed {
          width: var(--haxtheme-news-news-page-feed-width, 75%);
          margin: var(--haxtheme-news-news-page-feed-margin, 20px 0 0 0);
          @apply --haxtheme-news-news-page-feed;
        }

        @media screen and (max-width: 768px) {
          .news_page_feed {
            width: var(--haxtheme-news-news-page-feed-width-mobile, 100%);
            margin: var(
              --haxtheme-news-news-page-feed-margin-mobile,
              10px 0 0 0
            );
            @apply --haxtheme-news-news-page-feed-mobile;
          }
        }

        .sidebar_wrap {
          width: var(--haxtheme-news-sidebar-wrap-width);
          height: var(--haxtheme-news-sidebar-wrap-height);
          margin: var(--haxtheme-news-sidebar-wrap-margin);
          border-left: var(--haxtheme-news-sidebar-wrap-border-left);
          border-left-width: var(
            --haxtheme-news-sidebar-wrap-border-left-width
          );
          border-left-color: var(
            --haxtheme-news-sidebar-wrap-border-left-color
          );
          padding: var(--haxtheme-news-sidebar-wrap-padding);
          @apply --haxtheme-news-sidebar-wrap;
        }

        @media screen and (max-width: 768px) {
          .sidebar_wrap {
            width: var(--haxtheme-news-sidebar-wrap-width-mobile);
            height: var(--haxtheme-news-sidebar-wrap-height-mobile);
            border: var(--haxtheme-news-sidebar-wrap-border-left-mobile);
            padding: var(--haxtheme-news-sidebar-wrap-padding-mobile);
            margin: var(--haxtheme-news-sidebar-wrap-margin-mobile);
            @apply --haxtheme-news-sidebar-wrap-mobile;
          }
        }

        @media screen and (max-width: 768px) {
          #twitter_feed {
            width: var(--haxtheme-news-twitter-feed-width-mobile, 90%);
            margin: var(--haxtheme-news-twitter-margin-mobile, 0 auto 0 auto);
            @apply --haxtheme-news-twitter-feed-mobile;
          }
        }

        #news_archive {
          margin: var(--haxtheme-news-news-archive-margin, 0 0 25px 0);
          @apply --haxtheme-news-news-archive;
        }

        @media screen and (max-width: 768px) {
          #news_archive {
            width: var(--haxtheme-news-news-archive-width-mobile, 90%);
            margin: var(
              --haxtheme-news-news-archive-margin-mobile,
              0 auto 0 auto
            );
            @apply --haxtheme-news-news-archive-mobile;
          }
        }

        site-recent-content-block {
          --site-recent-content-block-header-color: #e2801e;
        }

        #share_actions {
          display: var(--haxtheme-news-share-actions-display, flex);
          justify-content: var(
            --haxtheme-news-share-actions-justify-content,
            space-around
          );
          padding: var(--haxtheme-news-share-actions-padding, 10px);
          margin: var(--haxtheme-news-share-actions-margin, 10px 0 0 0);
          @apply --haxtheme-news-share-actions;
        }

        @media screen and (max-width: 768px) {
          #share_actions {
            width: var(--haxtheme-news-share-actions-width-mobile, 85%);
            margin: var(
              --haxtheme-news-share-actions-margin-mobile,
              15px auto 15px auto
            );
            @apply --haxtheme-news-share-actions-mobile;
          }
        }
      </style>
      <page-banner
        image="files/theme-images/page-banners/news-banner.jpg"
        text="News"
        alt="Gateway to the Sciences"
      ></page-banner>
      <div id="news_wrap">
        <div class="news_container">
          <div class="news_page_feed">
            <site-query
              result="{{__newsitems}}"
              conditions='{"metadata.type": {
                            "value": ["spotlight", "news"],
                            "operator": "=="
                }}'
              limit="5"
              sort
            ></site-query>
            <dom-repeat items="[[__newsitems]]" mutable-data>
              <template>
                <news-card
                  image="[[item.metadata.fields.image]]"
                  alt="[[item.metadata.fields.imageAlt]]"
                  title="[[item.title]]"
                  date="[[_formatDate(item.metadata.created)]]"
                  authorimage="[[item.metadata.authorImage]]"
                  author="[[item.metadata.author]]"
                  description="[[_trimDescription(item.description)]]"
                  url="[[item.location]]"
                >
                </news-card>
              </template>
            </dom-repeat>
          </div>
          <div class="sidebar_wrap">
            <!-- <div id="twitter_feed">
              <a
                class="twitter-timeline"
                data-height="600"
                href="https://twitter.com/Eberly_ODL?ref_src=twsrc%5Etfw"
                >Tweets by Eberly_ODL</a
              >
              <script
                async=""
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </div> -->
            <div id="news_archive">
              <site-recent-content-block
                title="News Archive"
                conditions='{"metadata.type": {
                            "value": ["spotlight", "news"],
                            "operator": "="
                }}'
                limit=""
                start-index="5"
                sort=""
              >
              </site-recent-content-block>
            </div>
            <div id="share_actions">
              <site-rss-button type="rss"></site-rss-button>
              <site-rss-button type="atom"></site-rss-button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-news";
  }
  _formatDate(unixTimecode) {
    const date = new Date(unixTimecode * 1000);
    const dateFormatted = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return dateFormatted;
  }

  _trimDescription(description) {
    const trim = description.substring(0, 250) + "...";
    return trim;
  }

  constructor() {
    super();
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/blocks/site-recent-content-block.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-rss-button.js');
    this.__disposer = autorun(() => {
      this.manifest = toJS(store.routerManifest);
    });
  }
  disconnectedCallback() {
    this.__disposer();
    super.disconnectedCallback();
  }
}
window.customElements.define(HaxThemeNews.tag, HaxThemeNews);

var $_documentContainer$2 = document.createElement("div");
$_documentContainer$2.setAttribute("style", "display: none;");

$_documentContainer$2.innerHTML = `<iron-iconset-svg name="haxthemeicons" size="24">
    <svg>
        <defs>
          <g id="scroll">
            <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12
              5.373-12 12zm18-1h-4v7h-4v-7h-4l6-6 6 6z"></path>
          </g>
        </defs>
        <defs>
          <g id="twitter">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5
              5h14c2.762 0
              5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209
              4.617-3.234 9.765-9.33
              9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278
              4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069
              1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394
              1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038
              3.293 6.766
              3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395
              1.037.748-.147
              1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08
              1.297-.256
              1.885-.517-.439.656-.996 1.234-1.639 1.697z"></path>
          </g>
        </defs>
        <defs>
          <g id="vimeo">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5
            5
            5h14c2.762 0
            5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.248 10.732c-1.627
            3.478-5.558
            8.213-8.042 8.213-2.448
            0-2.802-5.221-4.139-8.696-.657-1.709-1.082-1.317-2.315-.454l-.752-.97c1.798-1.581
            3.599-3.418 4.705-3.52 1.245-.12 2.012.731 2.299 2.554.379
            2.396.908 6.114
            1.832 6.114.719 0 2.495-2.95
            2.585-4.004.161-1.544-1.136-1.591-2.261-1.109
            1.781-5.836 9.194-4.761 6.088 1.872z"></path>
          </g>
        </defs>
        <defs>
          <g id="pinterest">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239
            5
            5 5h14c2.762 0
            5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-7 20c-.825
            0-1.62-.125-2.369-.357.326-.531.813-1.402.994-2.098l.499-1.901c.261.498
            1.023.918 1.833.918 2.414 0 4.152-2.219 4.152-4.976
            0-2.643-2.157-4.62-4.933-4.62-3.452 0-5.286 2.317-5.286
            4.841 0 1.174.625
            2.634 1.624
            3.1.151.07.232.039.268-.107l.222-.907c.019-.081.01-.15-.056-.23-.331-.4-.595-1.138-.595-1.825
            0-1.765 1.336-3.472 3.612-3.472 1.965 0 3.341 1.339 3.341
            3.255 0
            2.164-1.093 3.663-2.515 3.663-.786
            0-1.374-.649-1.185-1.446.226-.951.663-1.977.663-2.664
            0-.614-.33-1.127-1.012-1.127-.803 0-1.448.831-1.448 1.943
            0
            .709.239
            1.188.239 1.188s-.793 3.353-.938 3.977c-.161.691-.098
            1.662-.028
            2.294-2.974-1.165-5.082-4.06-5.082-7.449 0-4.418 3.582-8
            8-8s8 3.582 8
            8-3.582 8-8 8z"></path>
          </g>
        </defs>
        <defs>
          <g id="flikr">
            <path d="M18.666 12.333c0 1.838-1.494 3.333-3.332
            3.333s-3.334-1.495-3.334-3.333 1.496-3.333 3.334-3.333
            3.332 1.496 3.332
            3.333zm5.334-7.333v14c0 2.761-2.238 5-5 5h-14c-2.761
            0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239
            5
            5zm-4
            7.333c0-2.578-2.09-4.667-4.666-4.667-1.309
            0-2.488.539-3.336
            1.405-.846-.866-2.024-1.405-3.332-1.405-2.576.001-4.666
            2.09-4.666
            4.667s2.09 4.667 4.666 4.667c1.308 0 2.486-.539
            3.332-1.405.848.866 2.027
            1.405 3.336 1.405 2.576 0 4.666-2.089 4.666-4.667z"></path>
          </g>
        </defs>
        <defs>
          <g id="youtube">
            <path d="M9.279
            13.52h-.939v5.027h-.908v-5.027h-.94v-.854h2.788v.854zm5.395
            1.721v2.406c0
            .537-.2.954-.736.954-.296
            0-.541-.108-.767-.388v.333h-.813v-5.88h.813v1.893c.183-.222.429-.405.718-.405.59
            0 .785.499.785
            1.087zm-.83.049c0-.146-.027-.257-.086-.333-.098-.129-.279-.143-.42-.071l-.167.132v2.703l.19.153c.132.066.324.071.413-.045.046-.061.069-.161.069-.299v-2.24zm-2.347-5.859c.229
            0
            .354-.183.354-.431v-2.119c0-.255-.111-.434-.371-.434-.237
            0-.353.185-.353.434v2.119c.001.24.137.431.37.431zm-.733
            8.07c-.099.123-.317.325-.475.325-.172
            0-.215-.118-.215-.292v-3.325h-.805v3.626c0 .88.597.885
            1.031.636.16-.092.315-.227.464-.403v.479h.807v-4.338h-.807v3.292zm13.236-12.501v14c0
            2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761
            2.239-5 5-5h14c2.762
            0 5 2.239 5 5zm-10.566 4.427c0 .45.137.813.592.813.256
            0
            .611-.133.979-.569v.503h.847v-4.554h-.847v3.457c-.104.129-.333.341-.498.341-.182
            0-.226-.124-.226-.307v-3.491h-.847v3.807zm-3.177-2.621v2.233c0
            .803.419 1.22
            1.24 1.22.682 0 1.218-.456
            1.218-1.22v-2.233c0-.713-.531-1.224-1.218-1.224-.745
            0-1.24.493-1.24
            1.224zm-3.155-2.806l1.135
            3.67v2.504h.953v-2.504l1.11-3.67h-.969l-.611
            2.468-.658-2.468h-.96zm11.564
            11.667c-.014-2.978-.232-4.116-2.111-4.245-1.734-.118-7.377-.118-9.109
            0-1.876.128-2.098 1.262-2.111 4.245.014 2.978.233
            4.117
            2.111 4.245
            1.732.118 7.375.118 9.109 0 1.877-.129 2.097-1.262
            2.111-4.245zm-1.011-.292v1.104h-1.542v.818c0
            .325.027.607.352.607.34 0
            .36-.229.36-.607v-.301h.83v.326c0 .836-.358
            1.342-1.208
            1.342-.771
            0-1.164-.561-1.164-1.342v-1.947c0-.753.497-1.275
            1.225-1.275.773-.001
            1.147.491 1.147
            1.275zm-.83-.008c0-.293-.062-.508-.353-.508-.299
            0-.359.21-.359.508v.439h.712v-.439z"></path>
          </g>
        </defs>
        <defs>
          <g id="email">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623
            5.712v-9.458l4.623
            3.746zm-4.141-5.929h19.035l-9.517
            7.713-9.518-7.713zm5.694 7.188l3.824 3.099
            3.83-3.104 5.612
            6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"></path>
          </g>
        </defs>
        <defs>
          <g id="phone">
          <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
        </g>
      </defs>
      <defs>
        <g id="twitter2">
        <path
        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </defs>
      </svg>
    </iron-iconset-svg>`;

document.head.appendChild($_documentContainer$2);

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
          line-height: 1.3;
          font-weight: 300;
        }

        .action_button {
          display: flex;
          justify-content: center;
          border: solid;
          border-width: 2px;
          border-color: #dcdcdc;
          border-top: none;
          max-width: 300px;
          margin: -113px auto 0 auto;
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
    import('../../build/es6/node_modules/@polymer/iron-image/iron-image.js');
  }
}
window.customElements.define(TeamCard.tag, TeamCard);

class HaxThemeTeam extends PolymerElement {
  static get tag() {
    return "haxtheme-team";
  }
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
        a {
          text-decoration: var(--haxtheme-team-a-text-decoration);
          @apply --haxtheme-team-a;
        }

        #team_card {
          display: var(--haxtheme-team-team-card-display, grid);
          grid-template-columns: var(
            --haxtheme-team-team-card-grid-template-columns,
            repeat(3, auto [col-start])
          );
          justify-content: var(
            --haxtheme-team-team-card-justify-content,
            center
          );
          margin: var(--haxtheme-team-team-card-margin, 25px 0 0 0);
          padding: var(--haxtheme-team-team-card-padding, 0 0 25px 0);
          @apply --haxtheme-team-card;
        }

        @media screen and (max-width: 1000px) {
          #team_card {
            grid-template-columns: var(
              --haxtheme-team-team-card-grid-template-columns-mobile,
              repeat(2, auto [col-start])
            );
            @apply --haxtheme-team-card-mobile;
          }
        }

        @media screen and (max-width: 768px) {
          #team_card {
            grid-template-columns: var(
              --haxtheme-team-team-card-grid-template-columns-mobile,
              repeat(1, auto [col-start])
            );
            @apply --haxtheme-team-card-mobile;
          }
        }
      </style>
      <site-query
        result="{{__items}}"
        conditions='{"metadata.type": "team"}'
        sort
      >
      </site-query>
      <page-banner
        image="files/theme-images/page-banners/team-banner.jpg"
        text="Team"
        alt="Office of Digital Learning Team"
      >
      </page-banner>
      <div id="team_card">
        <dom-repeat items="[[__items]]" mutable-data>
          <template>
            <team-card
              name="[[item.metadata.fields.name]]"
              image="[[item.metadata.fields.image]]"
              position="[[item.metadata.fields.jobTitle]]"
              info="[[item.metadata.fields.info]]"
              url="[[item.location]]"
            >
            </team-card>
          </template>
        </dom-repeat>
      </div>
      <div id="contentcontainer">
        <div id="slot">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
window.customElements.define(HaxThemeTeam.tag, HaxThemeTeam);

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
          min-height: 300px;
          border: solid 1px #dcdcdc;
        }

        a:hover {
          box-shadow:  1px 1px 5px #dcdcdc;
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

class HaxThemeCourses extends PolymerElement {
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
        #course_wrap {
          width: var(--haxtheme-courses-course-wrap-width, 80%);
          margin: var(
            --haxtheme-courses-course-wrap-margin,
            25px auto 15px auto
          );
          @apply --haxtheme-courses-course-wrap;
        }

        #course {
          display: var(--haxtheme-courses-course-display, grid);
          grid-template-columns: var(
            --haxtheme-courses-course-grid-template-columns,
            repeat(auto-fit, minmax(250px, 1fr))
          );
          grid-column-gap: var(--haxtheme-courses-course-grid-column-gap, 2vw);
          grid-row-gap: var(--haxtheme-courses-course-grid-row-gap, 2vw);
          @apply --haxtheme-courses-course;
        }
      </style>
      <site-query
        result="{{__items}}"
        conditions='{"metadata.type": "course"}'
        sort
      ></site-query>
      <page-banner
        image="files/theme-images/page-banners/course_banner.jpg"
        text="Courses"
        alt="Gateway to the Sciences"
      ></page-banner>
      <div id="course_wrap">
        <div id="course_list">
          <div id="course">
          <dom-repeat items="[[__items]]" mutable-data>
              <template>
                <course-card
                  image="[[item.metadata.fields.image]]"
                  alt="[[item.metadata.fields.imageAlt]]"
                  number="[[item.title]]"
                  icon="[[item.metadata.icon]]"
                  name="[[item.metadata.fields.name]]"
                  url="[[item.location]]"
                >
                </course-card>
              </template>
          </dom-repeat>

          </div>
        </div>
      </div>
      <div id="contentcontainer">
        <div id="slot">
          <slot></slot>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-courses";
  }
  constructor() {
    super();
    this.__disposer = autorun(() => {
      this.manifest = toJS(store.routerManifest);
    });
  }
  disconnectedCallback() {
    this.__disposer();
    super.disconnectedCallback();
  }
}
window.customElements.define(HaxThemeCourses.tag, HaxThemeCourses);

class HaxThemeCourse extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --site-recent-content-block-item-link: {
            text-transform: uppercase;
          }
         
        }
        /**
       * Hide the slotted content during edit mode. This must be here to work.
       */
        :host([edit-mode]) #slot {
          display: none;
        }
    
        h1 {
          font-size: var(--haxtheme-course-h1-font-size);
          font-weight: var(--haxtheme-course-h1-font-weight);
          margin: var(--haxtheme-course-h1-margin, 25px 0 0 0);
          text-transform: var(--haxtheme-course-h1-text-transform);
          @apply --haxtheme-course-h1;
        }

        h2 {
          font-size: var(--haxtheme-course-h2-font-size);
          font-weight: var(--haxtheme-course-h2-font-weight);
          margin: var(--haxtheme-course-h2-margin, -10px 0 0 0);
          @apply --haxtheme-course-h2;
        }

        h3 {
          font-size: 20px;
          font-weight: 100;
          margin: -5px 0 0 0;
        }

        page-banner {
          --page-banner-text-transform: uppercase;
        }

        site-breadcrumb {
          margin: var(--haxtheme-course-site-breadcrumb-margin);
          @apply --haxtheme-course-site-breadcrumb;
        }

        @media screen and (max-width: 768px) {
          site-breadcrumb {
            margin: var(
              --haxtheme-course-site-breadcrumb-margin-mobile,
              -15px 0 15px
            );
            @apply --haxtheme-course-site-breadcrumb-mobile;
          }
        }

        @media screen and (max-width: 768px) {
          #course_wrap {
            padding: var(--haxtheme-course-course-wrap-padding, 20px);
            @apply --haxtheme-course-course-wrap-mobile;
          }
        }

        .course_container {
          display: var(--haxtheme-course-course-container-display, flex);
          width: var(--haxtheme-course-course-container-width, 75%);
          margin: var(--haxtheme-course-course-container-margin, 0 auto 0 auto);
          @apply --haxtheme-course-course-container;
        }

        @media screen and (max-width: 768px) {
          .course_container {
            flex-direction: var(
              --haxtheme-course-course-container-flex-direction-mobile,
              column
            );
            width: var(--haxtheme-course-course-container-width-mobile, 98%);
            @apply --haxtheme-course-course-container-mobile;
          }
        }

        .course_inner_wrap {
          width: var(--haxtheme-course-course-inner-wrap-width, 90%);
          margin: var(--haxtheme-course-course-inner-wrap-margin, 0 20px 0 0);
          @apply --haxtheme-course-course-inner-wrap;
        }

        @media screen and (max-width: 768px) {
          .course_inner_wrap {
            width: var(--haxtheme-course-course-inner-wrap-width-mobile, 100%);
            margin: var(
              --haxtheme-course-course-inner-wrap-margin-mobile,
              10px 0 0 0
            );
            @apply --haxtheme-course-course-inner-wrap-mobile;
          }
        }

        #course_header {
          border-left: var(--haxtheme-course-course-header-border-left);
          border-left-width: var(
            --haxtheme-course-course-header-border-left-width
          );
          border-left-color: var(--haxtheme-course-course-header-border-color);
          padding: var(--haxtheme-course-course-header-padding, 0 0 0 15px);
          @apply --haxtheme-course-course-header;
        }

        #course_archive {
          width: var(--haxtheme-course-course-archive-width, 121%);
          margin: var(--haxtheme-course-course-arhive-margin, 0 0 25px 0);
          @apply --haxtheme-course-course-archive;
        }

        @media screen and (max-width: 768px) {
          #course_archive {
            width: var(--haxtheme-course-course-archive-width-mobile, 100%);
            margin: var(--haxtheme-course-course-arhive-margin, 0 auto 0 auto);
            @apply --haxtheme-course-course-archive-mobile;
          }
        }

        #credit {
          margin: 5px 0 0 0;
        }

        #description {
          font-size: var(--haxtheme-course-description-font-size);
          font-weight: var(--haxtheme-course-description-font-weight);
          line-height: var(--haxtheme-course-description-line-height);
          margin: var(--haxtheme-course-description-margin, 15px 0 25px 0);
          @apply --haxtheme-course-course-description;
        }

        .sidebar_wrap {
          width: var(--haxtheme-course-sidebar-wrap-width);
          margin: var(--haxtheme-course-sidebar-wrap-margin);
          border-left: var(--haxtheme-course-sidebar-wrap-border-left);
          border-left-width: var(
            --haxtheme-course-sidebar-wrap-border-left-width
          );
          border-left-color: var(
            --haxtheme-course-sidebar-wrap-border-left-color
          );
          height: var(--haxtheme-course-sidebar-wrap-height);
          padding: var(--haxtheme-course-sidebar-wrap-padding);
          @apply --haxtheme-course-sidebar-wrap;
        }

        @media screen and (max-width: 768px) {
          .sidebar_wrap {
            width: var(--haxtheme-course-sidebar-wrap-width-mobile);
            height: var(--haxtheme-course-sidebar-wrap-height-mobile);
            border: var(--haxtheme-course-sidebar-wrap-border-mobile);
            padding: var(--haxtheme-course-sidebar-wrap-padding-mobile);
            margin: var(--haxtheme-course-sidebar-wrap-margin-mobile);
            @apply --haxtheme-course-sidebar-wrap-mobile;
          }
        }

        #video_wrap {
          margin: var(--haxtheme-course-video-wrap-margin, 15px 15px 15px 0);
          @apply --haxtheme-course-video-wrap;
        }

        #video_placehold {
          display: var(--haxtheme-course-video-placehold-display, flex);
          justify-content: var(
            --haxtheme-course-video-placehold-justify-content,
            center
          );
          @apply --haxtheme-course-video-placehold;
        }

        iron-icon {
          width: var(--haxtheme-course-iron-icon-width, 400px);
          height: var(--haxtheme-course-iron-icon-height, 400px);
          fill: var(--haxtheme-course-iron-icon-fill);
          margin: var(--haxtheme-course-iron-icon-margin, 0 0 -20px 0);
          @apply --haxtheme-course-iron-icon;
        }

        @media screen and (max-width: 768px) {
          iron-icon {
            width: var(--haxtheme-course-iron-icon-width-mobile, 250px);
            height: var(--haxtheme-course-iron-icon-height-mobile, 250px);
            @apply --haxtheme-course-iron-icon-mobile;
          }
        }

        site-recent-content-block {
          --site-recent-content-block-header-color: #e2801e;
        }

        #prereqs {
          display: flex;
        }

        #syllabi a {
          text-decoration: none;
        }

        paper-button {
          text-transform: none;
          background-color: #e2801e;
          color: #fff;
          margin: 10px 0;
        }
      </style>
      <page-banner
        image="[[activeItem.metadata.fields.image]]"
        text="[[activeItem.title]]"
        alt="[[activeItem.metadata.fields.imageAlt]]"
      ></page-banner>
      <div id="course_wrap">
        <div class="course_container">
          <div class="course_inner_wrap">
            <site-breadcrumb></site-breadcrumb>
            <template is="dom-if" if="[[activeItem.metadata.fields.video]]">
              <div id="video_wrap">
                <video-player
                  width="100%"
                  source="[[activeItem.metadata.fields.video]]"
                ></video-player>
              </div>
            </template>
            <template is="dom-if" if="[[!activeItem.metadata.fields.video]]">
              <div id="video_placehold">
                <iron-icon icon="[[activeItem.metadata.icon]]"></iron-icon>
              </div>
            </template>
            <div id="course_header">
              <div id="title">
                <h1>[[activeItem.title]]</h1>
              </div>
              <div id="name">
                <h2>[[activeItem.metadata.fields.name]]</h2>
              </div>
              <div id="credit">
                <h3>Credits: [[activeItem.metadata.fields.credits]]</h3>
              </div>
              <!-- <div id="prereqs">
                <div class="prereq_title">
                  <h3>Prerequisites:</h3>
                </div>
                <template
                  is="dom-repeat"
                  items="[[activeItem.metadata.fields.prereqs]]"
                  as="prereq"
                >
                  <a href="#">
                    [[prereq]]
                  </a>
                </template>
              </div> -->
              <div id="syllabi">
                <a href="[[activeItem.metadata.syllabus]]">
                  <paper-button noink>Sample Syllabus</paper-button>
                </a>
              </div>
            </div>

            <div id="description">[[activeItem.metadata.fields.description]]</div>
            <div id="contentcontainer">
              <div id="slot">
                <slot></slot>
              </div>
            </div>
          </div>
          <div class="sidebar_wrap">
            <div id="course_archive">
              <site-recent-content-block
                title="Related Courses"
                conditions="[[__subjectSiteQueryCondition(activeItem)]]"
                result="{{__items}}"
                limit="5"
                sort
              >
              </site-recent-content-block>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-course";
  }
  static get properties() {
    return {
      activeItem: {
        type: Object
      },
      manifest: {
        type: Object
      }
    };
  }

  constructor() {
    super();
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/blocks/site-recent-content-block.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/video-player/video-player.js');
    this.__disposer = [];
    autorun(reaction => {
      this.manifest = toJS(store.routerManifest);
      this.__disposer.push(reaction);
    });
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
  __subjectSiteQueryCondition(activeItem) {
    if (
      activeItem !== null &&
      activeItem.metadata &&
      activeItem.metadata.fields &&
      activeItem.metadata.fields.subject
    ) {
      return { "metadata.fields.subject": activeItem.metadata.fields.subject };
    }
  }
}
window.customElements.define(HaxThemeCourse.tag, HaxThemeCourse);

class HaxThemeBlog extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
      }

      h1 {
        margin: var(--haxtheme-blog-h1-margin, 25px 0 0);
        font-weight: var(--haxtheme-blog-h1-font-weight);
        font-size: var(--haxtheme-blog-h1-font-size);
        @apply --haxtheme-blog-h1;
      }

      h2 {
        margin: var(--haxtheme-blog-h2-margin, 0);
        font-weight: var(--haxtheme-blog-h2-font-weight);
        font-size: var(--haxtheme-blog-h2-font-size);
        @apply --haxtheme-blog-h2;
      }

      #contentcontainer {
        font-size: var(--haxtheme-blog-contentcontainer-font-size);
        font-weight: var(--haxtheme-blog-contentcontainer-font-weight);
        line-height: var(--haxtheme-blog-contentcontainer-line-height);
        @apply --haxtheme-blog-contentcontainer;
      }

      .blog_container {
        display: var(--haxtheme-blog-blog-container-display, flex);
        width: var(--haxtheme-blog-blog-container-width, 75%);
        margin: var(--haxtheme-blog-blog-container-margin, 0 auto 0);
        @apply --haxtheme-blog-blog-container;
      }

      @media screen and (max-width: 768px) {
        .blog_container {
          flex-direction: var(--haxtheme-blog-blog-container-flex-direction, column);
          width: var(--haxtheme-blog-blog-container-mobile-width, 98%);
          @apply --haxtheme-blog-blog-container-mobile;
        }
      }

      @media screen and (max-width: 768px) {
        #blog_wrap {
          padding: var(--haxtheme-blog-blog-wrap-padding, 15px);
          @apply --haxtheme-blog-blog-wrap-mobile;
        }
      }

      #blog_inner_wrap {
        width: var(--haxtheme-blog-blog-inner-wrap-width, 90%);
        margin-right: var(--haxtheme-blog-blog-inner-wrap-margin-right, 20px);
        @apply --haxtheme-blog-blog-inner-wrap;
      }

      @media screen and (max-width: 768px) {
        #blog_inner_wrap {
          width: var(--haxtheme-blog-blog-inner-wrap-width-mobile, 95%);
          margin: var(--haxtheme-blog-blog-inner-wrap-margin-mobile, 0 auto 0);
          @apply --haxtheme-blog-blog-inner-wrap-mobile;
        }
      }
      /**
       * Hide the slotted content during edit mode. This must be here to work.
       */
      :host([edit-mode]) #slot {
        display: none;
      }
      #share_actions {
        display: var(--haxtheme-blog-share-actions-display, flex);
        justify-content: var(--haxtheme-blog-share-actions-justify--site-recent-content-block-active-color, flex-end);
        margin-top: var(--haxtheme-blog-margin-top, -20px);
        @apply --haxtheme-blog-share-actions;
      }

      .sidebar_wrap {
        width: var(--haxtheme-blog-sidebar-wrap-width);
        margin: var(--haxtheme-blog-sidebar-wrap-margin);
        border-left: var(--haxtheme-blog-sidebar-wrap-border-left);
        border-left-width: var(--haxtheme-blog-sidebar-wrap-border-left-width);
        border-left-color: var(--haxtheme-blog-sidebar-wrap-border-left-color);
        height: var(--haxtheme-blog-sidebar-wrap-height);
        padding: var(--haxtheme-blog-sidebar-wrap-padding);
        @apply --haxtheme-blog-sidebar-wrap;
      }

      @media screen and (max-width: 768px) {
       .sidebar_wrap {
          width: var(--haxtheme-blog-side-bar-wrap-width-mobile);
          height: var(--haxtheme-blog-sidebar-wrap-height-mobile);
          border: var(--haxtheme-blog-sidebar-wrap-border-mobile);
          padding: var(--haxtheme-blog-sidebar-wrap-padding-mobile);
          margin: var(--haxtheme-blog-sidebar-wrap-margin-mobile);
          @apply --haxtheme-blog-sidebar-wrap-mobile;
        }
      }

      #news_archive {
        margin-bottom: var(--haxtheme-blog-news-archive-margin-bottom, 25px);
        width: var(--haxtheme-blog-news-archive-width, 121%);
        @apply --haxtheme-blog-news-archive;
      }

      @media screen and (max-width: 768px) {
        #news_archive {
          width: var(--haxtheme-blog-news-archive-width-mobile, 100%);
          margin: var(--haxtheme-blog-news-archive-margin-mobile, 0 auto 0 auto);
          @apply --haxtheme-blog-news-archive-mobile;
        }
      }

      .publish_credentials {
        border-left: var(--haxtheme-blog-publish-credentials-border-left);
        border-left-width: var(--haxtheme-blog-publish-credentials-border-left-width);
        border-left-color: var(--haxtheme-blog-accent-color);
        padding-left: var(--haxtheme-blog-publish-credentials-padding-left, 15px);
        @apply --haxtheme-blog-publish-credentials;
      }

      #author a {
        text-decoration: var(--haxtheme-blog-author-a-text-decoration);
        color: var(--haxtheme-blog-author-a-color);
        @apply --haxtheme-blog-author-a;
      }

      #author a:hover {
        color: var(--haxtheme-blog-author-a-hover);
        color: var( --theme-color-2);
        @apply --haxtheme-blog-author-a-hover;
      }

      #author_info {
        display: var(--haxtheme-blog-author-info-display, flex);
        align-items: var(--haxtheme-blog-author-info-align-items, center);
        margin: var(--haxtheme-blog-author-margin, 15px 0 15px);
        @apply --haxtheme-blog-author-info;
      }

      iron-image#author_image {
        border-radius: var(--haxtheme-blog-iron-image-author-image-border-radius, 50%);
        margin-right: var(--haxtheme-blog-iron-image-author-image-margin-right, 10px);
        @apply --haxtheme-blog-iron-image-author-image;
      }
  
      #taxonomy {
        display: var(--haxtheme-blog-taxonomy-display, flex);
        align-items: var(--haxtheme-blog-taxonomy-align-items, center);
        margin: var(--haxtheme-blog-taxonomy-margin, 15px 0 15px);
        @apply --haxtheme-blog-taxonomy;
      }

      #taxonomy a {
        text-decoration: var(--haxtheme-blog-taxonomy-a-text-decoration);
        font-size: var(--haxtheme-blog-taxonomy-a-font-size, 22px);
        font-weight: var(--haxtheme-blog-taxonomy-a-font-weight);
        color: var(--haxtheme-blog-taxonomy-a-color);
        margin-right: var(--haxtheme-blog-taxonomy-a-margin-right, 10px);
        @apply --haxtheme-blog-taxonomy-a;
      }

      #taxonomy a:hover {
        font-weight: var(--haxtheme-blog-taxonomy-a-hover);
        @apply --haxtheme-blog-taxonomy-a-hover;
      }

      @media screen and (max-width: 768px) {
        #taxonomy a {
          font-size: var(--haxtheme-blog-taxonomy-a-font-size-mobile, 18px);
          @apply --haxtheme-blog-taxonomy-a-mobile;
        }
      }

      .tag_wrap {
        margin-right: var(--haxtheme-blog-tag-wrap-margin-right, 10px);
        @apply --haxtheme-blog-tag-wrap;
      }

      #prev_next_btns {
        display: var(--haxtheme-blog-prev-next-btns-display, flex);
        justify-content: var(--haxtheme-blog-prev-next-btns-justify-content, space-between);
        @apply --haxtheme-blog-prev-next-btns;
      }

      site-breadcrumb {
        margin: var(--haxtheme-blog-site-breadcrumb-margin);
      }

      @media screen and (max-width: 768px) {
        site-breadcrumb {
          margin: var(--haxtheme-blog-site-breadcrumb-margin-mobile, 0 0 30px);
        }
      }

      site-recent-content-block {
      --site-recent-content-block-header-color: var(--odl-haxtheme-accent-color-2);
      }
    </style>
    
    <page-banner image="[[activeItem.metadata.fields.image]]" text="[[activeItem.metadata.tagLine]]" alt="Gateway to the Sciences"></page-banner>
    <div id="blog_wrap">
      <div class="blog_container">
        <div id="blog_inner_wrap">
            <site-breadcrumb></site-breadcrumb>
          <div class="publish_credentials">
            <div class="title">
              <h1>[[activeItem.title]]</h1>
            </div>
            <div class="date">
              <h2>[[_formatDate(activeItem.metadata.created)]]</h2>
            </div>
            <div id="author_info">
              <iron-image
                id="author_image"
                style="width:60px; height:60px;"
                sizing="cover"
                src="[[activeItem.metadata.authorImage]]">
              </iron-image>
              <div id="author">By:
                <a href="/team-directory/[[activeItem.metadata.fields.authorId]]">[[activeItem.metadata.author]]</a> 
              </div>
            </div>
          </div>
          <!-- <div id="share_actions">
            <site-print-button></site-print-button>
          </div> -->
          <div id="contentcontainer">
              <div id="slot">
                <slot></slot>
              </div>
            </div>
           <div id="taxonomy">
            <div class="tag_wrap">
              <h2>Tags:</h2>
            </div>
            <template is="dom-repeat" items="[[activeItem.metadata.tags]]" as="tag">
            <a href="#">[[tag]]</a> 
            </template>
           </div>
           <div id="prev_next_btns">
            <site-menu-button type="prev" position="top" label="Previous">
              <div slot="suffix">Prev</div>
            </site-menu-button>
            <site-menu-button type="next" position="top" label="Next">
              <div slot="prefix">Next</div>
            </site-menu-button>
           </div>
        </div>
        <div class="sidebar_wrap">
          <div id="news_archive">
            <site-recent-content-block
              title="News Archive"
              conditions='{"metadata.type": {
                          "value": ["spotlight", "news"],
                          "operator": "=="
              }}'
              limit="5"
            >
            </site-recent-content-block>
          </div>
        </div>
        </div>
      </div>
    </div>`;
  }
  static get tag() {
    return "haxtheme-blog";
  }
  _formatDate(unixTimecode) {
    const date = new Date(unixTimecode * 1000);
    const dateFormatted = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return dateFormatted;
  }

  constructor() {
    super();
    import('../../build/es6/node_modules/@polymer/iron-image/iron-image.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/blocks/site-recent-content-block.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js');
    this.__disposer = [];
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
}
window.customElements.define(HaxThemeBlog.tag, HaxThemeBlog);

class HaxThemeProfile extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
        --theme-color-1: #363533;
        --theme-color-2: #e2801e;
      }
      /**
       * Hide the slotted content during edit mode. This must be here to work.
       */
      :host([edit-mode]) #slot {
        display: none;
      }
      h1 {
        margin: 15px 0 0;
        font-weight: 400;
      }

      h2 {
        margin: 0;
        font-weight: 100;
        font-size: 24px;
      }

      site-breadcrumb {
        margin-top: 10px;
      }

      #contentcontainer {
        font-size: 1.1rem;
        font-weight: 300;
        line-height: 1.6;
      }

      .profile_container {
        display: flex;
        width: 75%;
        margin-left: auto;
        margin-right: auto;
      }

      @media screen and (max-width: 768px) {
        #profile_wrap {
          padding: 15px;
        }
      }

      #profile_inner_wrap {
        width: 90%;
        margin-right: 20px;
      }


      @media screen and (max-width: 768px) {
        .profile_container {
          flex-direction: column;
          width: 98%;
        }
      }

      .sidebar_wrap {
        width: 25%;
        margin-top: 45px;
        border-left: solid 2px #dcdcdc;
        padding-left: 20px;
        height: 600px;
      }

      @media screen and (max-width: 768px) {
       .sidebar_wrap {
          width: 100%;
          height: auto;
          border: none;
          padding-left: 0;
          margin-top: 10px;
        }
      }

      #news_archive {
        margin-bottom: 25px;
        width: 121%;
      }

      @media screen and (max-width: 768px) {
        #news_archive {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }
      }

      #profile_head {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 45px 0 10px;
      }

      @media screen and (max-width: 768px) {
        #profile_head {
          padding-top: 0;
        }
      }

      #profile_image iron-image {
        height: 300px;
        width: 300px;
        border-radius: 50%;
        border: solid 8px #e2801e;
      }

      @media screen and (max-width: 768px) {
        #profile_image iron-image {
          height: 250px;
          width: 250px;
        }
      }

      #connect {
        display: flex;
        justify-content: center;
        margin: 20px 0 20px;
        border-bottom: solid 2px #dcdcdc;
        padding-bottom: 10px;
        width: 40%;
      }

      iron-icon {
        width: 30px;
        height: 30px;
        fill: #a9a9a9;
      }

      iron-icon:hover {
        fill: var(--theme-color-2);
      }

      paper-button {
        padding: 0;
        margin: 0;
        min-width: 3em;
      }

      paper-tooltip {
          --paper-tooltip-background: var(--theme-color-1);
          --paper-tooltip-opacity: 1;
          --paper-tooltip-text-color: var(
            --site-menu-button-tooltip-text,
            #ffffff
          );
          --paper-tooltip-delay-in: 0;
          --paper-tooltip: {
            border-radius: 0;
          }
        }
        
      @media screen and (max-width: 768px) {
        site-breadcrumb {
          margin: 0 0 30px;
        }
      }

      site-recent-content-block {
        --site-recent-content-block-header-color: #e2801e;
        --site-recent-content-block-active-color: var(--theme-color-2);
      }

      #contentcontainer {
        margin-bottom: 25px;
      }

    
    </style>
    
    <div id="profile_wrap">
      <div class="profile_container">
        <div id="profile_inner_wrap">
          <site-breadcrumb></site-breadcrumb>
          <div id="profile_head">
            <div id="profile_image">
            <iron-image sizing="cover" src="[[activeItem.metadata.fields.image]]"></iron-image>
            </div>
            <div id="profile_name">
              <h1>[[activeItem.metadata.fields.name]]</h1>
            </div>
            <div id="profile_position">
              <h2>[[activeItem.metadata.fields.jobTitle]]</h2>
            </div>
            <div id="connect">
              <div class="icon">
                  <a href="[[activeItem.metadata.fields.twitter]]" target="_blank">
                    <paper-button id="twitter" aria-label="twitter" noink="">
                      <iron-icon icon="haxthemeicons:twitter2" role="img"></iron-icon>
                    </paper-button>
                  </a>
                  <paper-tooltip for="twitter" offset="8">Twitter</paper-tooltip>
                </div>  
              <div class="icon"> 
                <a href="mailto:[[activeItem.metadata.fields.email]]">
                  <paper-button id="email" aria-label="email" noink="">
                    <iron-icon icon="haxthemeicons:email" role="img"></iron-icon>
                  </paper-button>
                </a>
                <paper-tooltip for="email" offset="8">Email</paper-tooltip>
              </div>
              <div class="icon">
                <a href="tel:[[activeItem.metadata.fields.phone]]" target="_blank">
                  <paper-button id="phone" aria-label="phone" noink="">
                    <iron-icon icon="haxthemeicons:phone" role="img"></iron-icon>
                  </paper-button>
                </a>
                <paper-tooltip for="phone" offset="8">Phone</paper-tooltip>
              </div>
            </div>
          </div>
          <div id="contentcontainer">
              <div id="slot">
                <slot></slot>
              </div>
            </div>
        </div>
        <div class="sidebar_wrap">
          <div id="news_archive">
            <site-recent-content-block
              title="My Blog Posts"
              conditions="[[__recentPostsConditions(activeItem)]]"
              result="{{__items}}" 
              limit="5"
              sort
              >
            </site-recent-content-block>
          </div>
        </div>
        </div>
      </div>
    </div>`;
  }
  static get tag() {
    return "haxtheme-profile";
  }
  constructor() {
    super();
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/blocks/site-recent-content-block.js');
    import('../../build/es6/node_modules/@polymer/iron-image/iron-image.js');
    import('../../build/es6/node_modules/@polymer/paper-button/paper-button.js');
    import('../../build/es6/node_modules/@polymer/paper-tooltip/paper-tooltip.js');
    import('../../build/es6/node_modules/@polymer/iron-icon/iron-icon.js');
    this.__disposer = [];
    autorun(reaction => {
      this.manifest = toJS(store.routerManifest);
      this.__disposer.push(reaction);
    });
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }

  __recentPostsConditions(activeItem) {
    let condition = {};
    if (activeItem !== null) {
      condition = {
        "metadata.type": "news",
        "metadata.fields.authorId": activeItem.id
      };
    }
    return condition;
  }
}
window.customElements.define(HaxThemeProfile.tag, HaxThemeProfile);

class HaxThemeSpotlight extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
      }

      h1 {
        margin: var(--haxtheme-blog-h1-margin, 25px 0 0);
        font-weight: var(--haxtheme-blog-h1-font-weight);
        font-size: var(--haxtheme-blog-h1-font-size);
        @apply --haxtheme-blog-h1;
      }

      h2 {
        margin: var(--haxtheme-blog-h2-margin, 0);
        font-weight: var(--haxtheme-blog-h2-font-weight);
        font-size: var(--haxtheme-blog-h2-font-size);
        @apply --haxtheme-blog-h2;
      }

      #contentcontainer {
        font-size: var(--haxtheme-blog-contentcontainer-font-size);
        font-weight: var(--haxtheme-blog-contentcontainer-font-weight);
        line-height: var(--haxtheme-blog-contentcontainer-line-height);
        @apply --haxtheme-blog-contentcontainer;
      }

      .blog_container {
        display: var(--haxtheme-blog-blog-container-display, flex);
        width: var(--haxtheme-blog-blog-container-width, 75%);
        margin: var(--haxtheme-blog-blog-container-margin, 0 auto 0);
        @apply --haxtheme-blog-blog-container;
      }

      @media screen and (max-width: 768px) {
        .blog_container {
          flex-direction: var(--haxtheme-blog-blog-container-flex-direction, column);
          width: var(--haxtheme-blog-blog-container-mobile-width, 98%);
          @apply --haxtheme-blog-blog-container-mobile;
        }
      }

      @media screen and (max-width: 768px) {
        #blog_wrap {
          padding: var(--haxtheme-blog-blog-wrap-padding, 15px);
          @apply --haxtheme-blog-blog-wrap-mobile;
        }
      }

      #blog_inner_wrap {
        width: var(--haxtheme-blog-blog-inner-wrap-width, 90%);
        margin-right: var(--haxtheme-blog-blog-inner-wrap-margin-right, 20px);
        @apply --haxtheme-blog-blog-inner-wrap;
      }

      @media screen and (max-width: 768px) {
        #blog_inner_wrap {
          width: var(--haxtheme-blog-blog-inner-wrap-width-mobile, 95%);
          margin: var(--haxtheme-blog-blog-inner-wrap-margin-mobile, 0 auto 0);
          @apply --haxtheme-blog-blog-inner-wrap-mobile;
        }
      }
      /**
       * Hide the slotted content during edit mode. This must be here to work.
       */
      :host([edit-mode]) #slot {
        display: none;
      }
      #share_actions {
        display: var(--haxtheme-blog-share-actions-display, flex);
        justify-content: var(--haxtheme-blog-share-actions-justify--site-recent-content-block-active-color, flex-end);
        margin-top: var(--haxtheme-blog-margin-top, -20px);
        @apply --haxtheme-blog-share-actions;
      }

      .sidebar_wrap {
        width: var(--haxtheme-blog-sidebar-wrap-width);
        margin: var(--haxtheme-blog-sidebar-wrap-margin);
        border-left: var(--haxtheme-blog-sidebar-wrap-border-left);
        border-left-width: var(--haxtheme-blog-sidebar-wrap-border-left-width);
        border-left-color: var(--haxtheme-blog-sidebar-wrap-border-left-color);
        height: var(--haxtheme-blog-sidebar-wrap-height);
        padding: var(--haxtheme-blog-sidebar-wrap-padding);
        @apply --haxtheme-blog-sidebar-wrap;
      }

      @media screen and (max-width: 768px) {
       .sidebar_wrap {
          width: var(--haxtheme-blog-side-bar-wrap-width-mobile);
          height: var(--haxtheme-blog-sidebar-wrap-height-mobile);
          border: var(--haxtheme-blog-sidebar-wrap-border-mobile);
          padding: var(--haxtheme-blog-sidebar-wrap-padding-mobile);
          margin: var(--haxtheme-blog-sidebar-wrap-margin-mobile);
          @apply --haxtheme-blog-sidebar-wrap-mobile;
        }
      }

      #news_archive {
        margin-bottom: var(--haxtheme-blog-news-archive-margin-bottom, 25px);
        width: var(--haxtheme-blog-news-archive-width, 121%);
        @apply --haxtheme-blog-news-archive;
      }

      @media screen and (max-width: 768px) {
        #news_archive {
          width: var(--haxtheme-blog-news-archive-width-mobile, 100%);
          margin: var(--haxtheme-blog-news-archive-margin-mobile, 0 auto 0 auto);
          @apply --haxtheme-blog-news-archive-mobile;
        }
      }

      .publish_credentials {
        border-left: var(--haxtheme-blog-publish-credentials-border-left);
        border-left-width: var(--haxtheme-blog-publish-credentials-border-left-width);
        border-left-color: var(--haxtheme-blog-accent-color);
        padding-left: var(--haxtheme-blog-publish-credentials-padding-left, 15px);
        @apply --haxtheme-blog-publish-credentials;
      }

      #author a {
        text-decoration: var(--haxtheme-blog-author-a-text-decoration);
        color: var(--haxtheme-blog-author-a-color);
        @apply --haxtheme-blog-author-a;
      }

      #author a:hover {
        color: var(--haxtheme-blog-author-a-hover);
        color: var( --theme-color-2);
        @apply --haxtheme-blog-author-a-hover;
      }

      #author_info {
        display: var(--haxtheme-blog-author-info-display, flex);
        align-items: var(--haxtheme-blog-author-info-align-items, center);
        margin: var(--haxtheme-blog-author-margin, 15px 0 15px);
        @apply --haxtheme-blog-author-info;
      }

      iron-image#author_image {
        border-radius: var(--haxtheme-blog-iron-image-author-image-border-radius, 50%);
        margin-right: var(--haxtheme-blog-iron-image-author-image-margin-right, 10px);
        @apply --haxtheme-blog-iron-image-author-image;
      }

      #spotlight_image {
          background-repeat: no-repeat;
          background-size: cover;
          background-position: right center;
          min-height: 24vw;
        }

        @media screen and (max-width: 768px) {
          #spotlight_image {
            min-height: 40vw;
        }
      }
  
      #taxonomy {
        display: var(--haxtheme-blog-taxonomy-display, flex);
        align-items: var(--haxtheme-blog-taxonomy-align-items, center);
        margin: var(--haxtheme-blog-taxonomy-margin, 15px 0 15px);
        @apply --haxtheme-blog-taxonomy;
      }

      #taxonomy a {
        text-decoration: var(--haxtheme-blog-taxonomy-a-text-decoration);
        font-size: var(--haxtheme-blog-taxonomy-a-font-size, 22px);
        font-weight: var(--haxtheme-blog-taxonomy-a-font-weight);
        color: var(--haxtheme-blog-taxonomy-a-color);
        margin-right: var(--haxtheme-blog-taxonomy-a-margin-right, 10px);
        @apply --haxtheme-blog-taxonomy-a;
      }

      #taxonomy a:hover {
        font-weight: var(--haxtheme-blog-taxonomy-a-hover);
        @apply --haxtheme-blog-taxonomy-a-hover;
      }

      @media screen and (max-width: 768px) {
        #taxonomy a {
          font-size: var(--haxtheme-blog-taxonomy-a-font-size-mobile, 18px);
          @apply --haxtheme-blog-taxonomy-a-mobile;
        }
      }

      .tag_wrap {
        margin-right: var(--haxtheme-blog-tag-wrap-margin-right, 10px);
        @apply --haxtheme-blog-tag-wrap;
      }

      #prev_next_btns {
        display: var(--haxtheme-blog-prev-next-btns-display, flex);
        justify-content: var(--haxtheme-blog-prev-next-btns-justify-content, space-between);
        @apply --haxtheme-blog-prev-next-btns;
      }

      site-breadcrumb {
        margin: var(--haxtheme-blog-site-breadcrumb-margin);
      }

      @media screen and (max-width: 768px) {
        site-breadcrumb {
          margin: var(--haxtheme-blog-site-breadcrumb-margin-mobile, 0 0 30px);
        }
      }

      site-recent-content-block {
      --site-recent-content-block-header-color: var(--odl-haxtheme-accent-color-2);
      }
    </style>
    
    <page-banner image="files/theme-images/page-banners/spotlight-banner.jpg" text="Faculty Spotlight" alt=""></page-banner>
    <div id="blog_wrap">
      <div class="blog_container">
        <div id="blog_inner_wrap">
            <site-breadcrumb></site-breadcrumb>
          <div class="publish_credentials">
            <div class="title">
              <h1>[[activeItem.metadata.fields.name]]</h1>
            </div>
            <div class="date">
              <h2>[[_formatDate(activeItem.metadata.created)]]</h2>
            </div>
            <div id="author_info">
              <iron-image
                id="author_image"
                style="width:60px; height:60px;"
                sizing="cover"
                src="[[activeItem.metadata.authorImage]]">
              </iron-image>
              <div id="author">By:
                <a href="/sites/haxcms-odl/team-directory/[[activeItem.metadata.fields.authorId]]">[[activeItem.metadata.author]]</a> 
              </div>
            </div>
          </div>
          <div id="spotlight_image" style$="background-image:url([[activeItem.metadata.fields.image]])">
          </div>
          <div id="contentcontainer">
              <div id="slot">
                <slot></slot>
              </div>
            </div>
           <div id="taxonomy">
            <div class="tag_wrap">
              <h2>Tags:</h2>
            </div>
            <template is="dom-repeat" items="[[activeItem.metadata.tags]]" as="tag">
            <a href="#">[[tag]]</a> 
            </template>
           </div>
           <!-- <div id="prev_next_btns">
            <site-menu-button type="prev" position="top" label="Previous">
              <div slot="suffix">Prev</div>
            </site-menu-button>
            <site-menu-button type="next" position="top" label="Next">
              <div slot="prefix">Next</div>
            </site-menu-button>
           </div> -->
        </div>
        <div class="sidebar_wrap">
          <div id="news_archive">
            <site-recent-content-block
              title="Recent Spotlights"
              conditions='{"metadata.type": { "value": "spotlight", "operator": "="}, "id": { "value": "$activeId", "operator": "!=" }}'
              result="{{__items}}" 
              limit="5"
              sort
              >
            </site-recent-content-block>
          </div>
        </div>
        </div>
      </div>
    </div>`;
  }
  static get tag() {
    return "haxtheme-spotlight";
  }
  _formatDate(unixTimecode) {
    const date = new Date(unixTimecode * 1000);
    const dateFormatted = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return dateFormatted;
  }

  constructor() {
    super();
    import('../../build/es6/node_modules/@polymer/iron-image/iron-image.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/blocks/site-recent-content-block.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js');
    this.__disposer = [];
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
}
window.customElements.define(HaxThemeSpotlight.tag, HaxThemeSpotlight);

/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */

/**
 * `site-menu`
 * `Menu hierarchy`
 */
class ResourcesSidemenu extends LitElement {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: block;
          height: 100vh;
        }

        ul {
          list-style-type: none;
          margin-left: 0em;
          padding-left: 0em;
        }

        li {
          list-style-type: none;
          margin-left: 0em;
          padding-left: .5em;
        }

        a {
          color: var(--odl-haxtheme-accent-color-2);
          padding: .8em;
          padding-bottom: .5em;
          padding-right: .2em;
          border-bottom: solid 1px #dcdcdc;
          display: block;
          text-decoration: none;
          font-size: .9em;
        }

        a:hover {
          color: calc(var(--odl-haxtheme-accent-color-2) * 0.1);
        }
      `
    ];
  }
  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "resources-sidemenu";
  }
  /**
   * HTMLElement life cycle
   */
  constructor() {
    super();
    import('../../build/es6/node_modules/@lrnwebcomponents/map-menu/map-menu.js');
    this.__disposer = [];
    autorun(reaction => {
      this.__updateMenu(toJS(store.routerManifest));
      this.__disposer.push(reaction);
    });
  }
  /**
   * LitElement life cycle - properties definition
   */
  static get properties() {
    return {
      /**
       * Manifest with router / location enhancements
       */
      manifest: {
        type: Object
      },
      activeItem: {
        type: Object
      }
    };
  }
  /**
   * LitElement life cycle - render callback
   */
  render() {
    return html$1`
      ${this.__renderSideMenu(this.manifest)}
    `;
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
  __updateMenu(routerManifest) {
    // figure out where to start
    const topLevelObject = routerManifest.items.find(i => i.id === "resources");
    this.manifest = topLevelObject;
  }
  __renderSideMenu(item) {
    if (item) {
      return html$1`
        <ul>
          <li>
            <a href="${item.location}">${item.title}</a>
            ${item.children && item.children.length > 0 ? html$1`
              ${item.children.map(i => this.__renderSideMenu(i))}
            ` : ""}
          </li>
        </ul>
      `;
    } else {
      return "";
    }
  }
}
window.customElements.define(ResourcesSidemenu.tag, ResourcesSidemenu);

class OdlFaqsItem extends LitElement {
  static get properties() {
    return {
      item: { type: Object },
      active: { type: Boolean },
      isLoggedIn: { type: Boolean },
      path: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      input {
        margin: auto;
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
        margin-bottom: 10px;
        width: 100%;
        box-sizing: border-box;
        color: #2c3e50;
        font-size: 13px;
      }

      .container {
        margin: 0 auto;
        padding: 4rem;
        width: 48rem;
      }

      h3 {
        font-size: 1.75rem;
        color: var(--odl-haxtheme-accent-color-2);
        padding: 1.3rem;
        margin: 0;
      }

      a {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        width: auto;
        padding: 1rem 3rem 1rem 1rem;
        color: var(--odl-haxtheme-accent-color-1);
        font-size: 1.15rem;
        font-weight: 400;
        border-bottom: 1px solid #ccc;
      }

      a:hover,
      a:hover::after {
        cursor: pointer;
        color: var(--odl-haxtheme-accent-color-2);
      }

      a:hover::after {
        border: 1px solid var(--odl-haxtheme-accent-color-2);
      }

      a.active {
        color: var(--odl-haxtheme-accent-color-2);
        border-bottom: 1px solid var(--odl-haxtheme-accent-color-2);
      }

      .icon {
        position: absolute;
        float: right;
        right: 1rem;
      }

      .icon svg {
        fill: var(--odl-haxtheme-accent-color-1);
        width: 30px;
        height: 30px;
      }

      .active .icon svg {
        fill: var(--odl-haxtheme-accent-color-2);
      }

      .content {
        opacity: 0;
        padding: 0 1rem;
        max-height: 0;
        border-bottom: 1px solid #ccc;
        overflow: hidden;
        clear: both;
        -webkit-transition: all 0.2s ease 0.15s;
        -o-transition: all 0.2s ease 0.15s;
        transition: all 0.2s ease 0.15s;
        position: relative;
      }

      .content p {
        font-size: 1rem;
        font-weight: 300;
      }

      .content.active {
        opacity: 1;
        padding: 1rem;
        max-height: 100%;
        -webkit-transition: all 0.35s ease 0.15s;
        -o-transition: all 0.35s ease 0.15s;
        transition: all 0.35s ease 0.15s;
      }

      #edit {
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
        padding: 1em;
        border: none;
      }

      #edit-icon {
        width: 20px;
        height: 20px;
      }
    `;
  }

  constructor() {
    super();
    this.__disposer = [];
    this.active = false;
    this.isLoggedIn = false;
    this.path = null;
    this.item = {};
  }

  firstUpdated() {
    console.log("item", this.item);
    this.shadowRoot
      .querySelector(".accordion-item a")
      .addEventListener("click", this.__toggleAccordion.bind(this));
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector(".accordion-item a")
      .removeEventListener("click", this.__toggleAccordion.bind(this));
    super.disconnectedCallback();
  }

  updated(changedProperties) {
    if (this.item) {
      const contentOutlet = this.shadowRoot.querySelector("#content-outlet");
      contentOutlet.innerHTML = this.item.content;
      // update path
      const manifestItem = store.routerManifest.items.find(
        i => i.id === this.item.id
      );
      this.path = manifestItem.location;
    }
  }

  render() {
    return html$1`
      ${this.item
        ? html$1`
            <div class="accordion-item">
              <a id="toggle">
                ${this.item.title}
                <span class="icon">${this.__renderIcon()}</span>
              </a>
              <div class="content">
                <div id="content-outlet"></div>
                <div id="edit">
                  ${this.__renderEditIcon()}
                </div>
              </div>
            </div>
          `
        : html$1``}
    `;
  }

  __renderIcon() {
    if (this.active) {
      return html$1`
        <svg
          enable-background="new 0 0 551.13 551.13"
          height="512"
          viewBox="0 0 551.13 551.13"
          width="512"
        >
          <path
            d="m275.565 0c-151.944 0-275.565 123.621-275.565 275.565s123.621 275.565 275.565 275.565 275.565-123.621 275.565-275.565-123.621-275.565-275.565-275.565zm0 516.685c-132.955 0-241.119-108.164-241.119-241.119s108.164-241.12 241.119-241.12 241.12 108.164 241.12 241.119-108.165 241.12-241.12 241.12z"
          />
          <path d="m137.783 258.342h275.565v34.446h-275.565z" />
        </svg>
      `;
    } else {
      return html$1`
        <svg
          enable-background="new 0 0 551.13 551.13"
          height="512"
          viewBox="0 0 551.13 551.13"
          width="512"
        >
          <path
            d="m275.565 0c-151.944 0-275.565 123.621-275.565 275.565s123.621 275.565 275.565 275.565 275.565-123.621 275.565-275.565-123.621-275.565-275.565-275.565zm0 516.685c-132.955 0-241.119-108.164-241.119-241.119s108.164-241.12 241.119-241.12 241.12 108.164 241.12 241.119-108.165 241.12-241.12 241.12z"
          />
          <path
            d="m292.788 137.783h-34.446v120.56h-120.56v34.446h120.56v120.56h34.446v-120.56h120.56v-34.446h-120.56z"
          />
        </svg>
      `;
    }
  }

  __renderEditIcon() {
    if (this.isLoggedIn) {
      return html$1`
        <a href="${this.path}" id="edit"
          ><svg
            id="edit-icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 383.947 383.947"
            style="enable-background:new 0 0 383.947 383.947;"
            xml:space="preserve"
          >
            <g>
              <polygon
                points="0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893 			"
              />
              <path
                d="M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04
         C386.027,77.92,386.027,64.373,377.707,56.053z"
              />
            </g>
          </svg>
        </a>
      `;
    } else {
      return html$1``;
    }
  }

  __toggleAccordion(e) {
    this.active = !this.active;
    e.target.classList.toggle("active");
    e.target.nextElementSibling.classList.toggle("active");
  }
}

customElements.define("odl-faqs-item", OdlFaqsItem);

class OdlFaqs extends LitElement {
  static get properties() {
    return {
      tags: { type: String },
      results: { type: Array },
      search: { type: Boolean },
      isLoggedIn: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      input {
        margin: auto;
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
        margin-bottom: 10px;
        width: 100%;
        box-sizing: border-box;
        color: #2c3e50;
        font-size: 13px;
      }

      .container {
        margin: 0 auto;
        /* padding: 4rem; */
        width: 48rem;
      }

      h3 {
        font-size: 1.75rem;
        color: var(--odl-haxtheme-accent-color-2);
        padding: 1.3rem;
        margin: 0;
      }

      .accordion a {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        padding: 1rem 3rem 1rem 1rem;
        color: var(--odl-haxtheme-accent-color-1);
        font-size: 1.15rem;
        font-weight: 400;
        border-bottom: 1px solid #ccc;
      }

      .accordion a:hover,
      .accordion a:hover::after {
        cursor: pointer;
        color: var(--odl-haxtheme-accent-color-2);
      }

      .accordion a:hover::after {
        border: 1px solid var(--odl-haxtheme-accent-color-2);
      }

      .accordion a.active {
        color: var(--odl-haxtheme-accent-color-2);
        border-bottom: 1px solid var(--odl-haxtheme-accent-color-2);
      }

      .accordion .icon {
        position: absolute;
        float: right;
        right: 1rem;
      }

      .accordion .icon svg {
        fill: var(--odl-haxtheme-accent-color-1);
        width: 30px;
        height: 30px;
      }

      .accordion .active .icon svg {
        fill: var(--odl-haxtheme-accent-color-2);
      }

      .accordion .content {
        opacity: 0;
        padding: 0 1rem;
        max-height: 0;
        border-bottom: 1px solid #ccc;
        overflow: hidden;
        clear: both;
        -webkit-transition: all 0.2s ease 0.15s;
        -o-transition: all 0.2s ease 0.15s;
        transition: all 0.2s ease 0.15s;
      }

      .accordion .content p {
        font-size: 1rem;
        font-weight: 300;
      }

      .accordion .content.active {
        opacity: 1;
        padding: 1rem;
        max-height: 100%;
        -webkit-transition: all 0.35s ease 0.15s;
        -o-transition: all 0.35s ease 0.15s;
        transition: all 0.35s ease 0.15s;
      }
    `;
  }

  constructor() {
    super();
    this.__disposer = [];
    this.results = [];
    this.isLoggedIn = false;
    this.tags = '';
    this.search = false;
    autorun(reaction => {
      this.isLoggedIn = store.isLoggedIn;
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }

  firstUpdated() {
    this.__getFaqs();
  }

  render() {
    return html$1`
      ${this.search ? html$1`
        <div id="search-container">
          <input id="search" @input=${this.__inputChanged} />
        </div>
      ` : html$1``}
      <div id="results-container">
        ${this.results
          ? html$1`
              <div class="container">
                <div class="accordion">
                  ${this.results.map(result => html$1`
                    <odl-faqs-item .item=${result} .isLoggedIn=${this.isLoggedIn}></odl-faqs-item>
                  `)}
                </div>
              </div>
            `
          : html$1``}
      </div>
      <slot></slot>
    `;
  }

  __getFaqs() {
    const tags = this.tags ? `?tags=${this.tags}` : '';
    fetch(`/service/api/faqs${tags}`)
      .then(res => res.json())
      .then(res => this.results = res);
  }
}

customElements.define("odl-faqs", OdlFaqs);

class HaxThemeResources extends PolymerElement {
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

      h1 {
        margin: 25px 0 0;
        font-weight: 400;
        font-size: 36px;
      }


      .publish_credentials {
        border-left: solid;
        border-left-width: 4px;
        border-left-color: #e2801e;
        padding-left: 15px;
      }

      #description {
        font-size: 18px;
        font-weight: 300;
        line-height: 1.4;
      }

      #contentcontainer {
        font-size: 18px;
        font-weight: 300;
        line-height: 1.4;
      }

      .resource_container {
        display: flex;
        width: 80%;
        margin: 0 auto 0;
      }

      @media screen and (max-width: 768px) {
        .resource_container {
          flex-direction: column;
          width: 98%;
        }
      }

      @media screen and (max-width: 768px) {
        #resource_wrap {
          padding: 15px;
        }
      }

      #resource_inner_wrap {
        width: 90%;
        margin-right: 20px;
      }

      @media screen and (max-width: 768px) {
        #resource_inner_wrap {
          width: 95%;
          margin: 0 auto 0;
        }
      }

      .sidebar_wrap {
        width: 25%;
        margin: 45px 0 0 0;
        border-left: solid;
        border-left-width: 2px;
        border-left-color: #dcdcdc;
        padding: 0 0 0 20px;
        height: auto;
      }

      @media screen and (max-width: 768px) {
       .sidebar_wrap {
          width: var(--haxtheme-blog-side-bar-wrap-width-mobile);
          height: var(--haxtheme-blog-sidebar-wrap-height-mobile);
          border: var(--haxtheme-blog-sidebar-wrap-border-mobile);
          padding: var(--haxtheme-blog-sidebar-wrap-padding-mobile);
          margin: var(--haxtheme-blog-sidebar-wrap-margin-mobile);
        }
      }

      #resource_archive {
        margin-bottom: 25px;
        width: 121%;
      }

      @media screen and (max-width: 768px) {
        #resource_archive {
          width: 100%;
          margin: 0 auto 0 auto;
        }
      }

      site-breadcrumb {
        margin: var(--haxtheme-blog-site-breadcrumb-margin);
      }

      @media screen and (max-width: 768px) {
        site-breadcrumb {
          margin: var(--haxtheme-blog-site-breadcrumb-margin-mobile, 0 0 30px);
        }
      }
    </style>
    
    <page-banner image="[[activeItem.metadata.fields.image]]" text="[[activeItem.title]]" alt="Gateway to the Sciences"></page-banner>
    <div id="resource_wrap">
      <div class="resource_container">
        <div id="resource_inner_wrap">
            <site-breadcrumb></site-breadcrumb>
          <div class="publish_credentials">
            <div class="title">
              <h1>[[activeItem.title]]</h1>
            </div>
            <div id="description">[[activeItem.description]]</div>
          </div>
          <div id="contentcontainer">
              <div id="slot">
                <slot></slot>
              </div>
            </div>
        </div>
        <div class="sidebar_wrap">
          <div id="resource_archive">
            <div id="side_menu">
              <resources-sidemenu></resources-sidemenu>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>`;
  }
  static get tag() {
    return "haxtheme-resources";
  }
  

  constructor() {
    super();
    import('../../build/es6/node_modules/@polymer/iron-image/iron-image.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/blocks/site-recent-content-block.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js');
    this.__disposer = [];
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
}
window.customElements.define(HaxThemeResources.tag, HaxThemeResources);

class WorksheetDownload extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      link: { type: String }
    };
  }

  static get haxProperties() {
    return {
      canScale: false,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "Worksheet-Download",
        description: "A button for displaying files available for download.",
        icon: "icons:file-download",
        color: "blue",
        meta: {
          author: "LRNWebComponents"
        }
      },
      settings: {
        quick: [
          {
            property: "title",
            title: "Title",
            description: "The title of the download.",
            inputMethod: "textfield",
            icon: "editor:title"
          },
          {
            property: "link",
            title: "Link",
            description: "The link for the download.",
            inputMethod: "textfield",
            icon: "editor:insert-link"
          }
        ],
        configure: [
          {
            property: "title",
            title: "Title",
            description: "The title of the download.",
            inputMethod: "textfield",
            icon: "editor:title"
          },
          {
            property: "link",
            title: "Link",
            description: "The link for the download.",
            inputMethod: "textfield",
            icon: "editor:insert-link"
          }
        ],
        advanced: []
      }
    };
  }

  constructor() {
    super();
    this.title = "";
    this.link = "";
  }
  static get styles() {
    return [css`
      :host {
        display: block;
      }

      a {
        text-decoration: none;
        color: #0c7cd5;
      }

      paper-button {
        --paper-button-ink-color: #dcdcdc;
        text-transform: none;
        border: solid 2px #dcdcdc;
        display: flex;
        width: 100%;
        margin: 0 auto 0;
      }

      paper-button:hover {
        background-color: #0c7cd5;
        color: #fff;
      }

      iron-icon {
        margin-right: 5px;
      }
    `];
  }
  render() {
    return html$1`
      <div id="button_wrap">
        <a href="${this.link}" target="_blank">
          <paper-button>
            <iron-icon icon="file-download"></iron-icon>
            ${this.title}
          </paper-button>
        </a>
      </div>
    `;
  }
}
customElements.define("worksheet-download", WorksheetDownload);

class HaxThemeSyllabus extends PolymerElement {
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
        a {
          color: var(--odl-haxtheme-accent-color-2);
          text-decoration: var(--haxtheme-syllabus-a-text-decoration);
          @apply --haxtheme-syllabus-a;
        }

        h2 {
          margin: var(--haxtheme-syllabus-h2-margin, 0);
          font-weight: var(--haxtheme-syllabus-h2-font-weight);
          font-size: var(--haxtheme-syllabus-h2-font-size);
          @apply --haxtheme-syllabus-h2;
        }

        h3 {
          margin: var(--haxtheme-syllabus-h3-margin, 0);
          font-weight: var(--haxtheme-syllabus-h3-font-weight);
          font-size: var(--haxtheme-syllabus-h3-font-size);
          @apply --haxtheme-syllabus-h3;
        }

        #contentcontainer {
        font-size: var(--haxtheme-syllabus-contentcontainer-font-size);
        font-weight: var(--haxtheme-syllabus-contentcontainer-font-weight);
        line-height: var(--haxtheme-syllabus-contentcontainer-line-height);
        @apply --haxtheme-syllabus-contentcontainer;
      }
      
        #syllabus_header {
          border-left: var(--haxtheme-syllabus-header-border-left);
          border-left-width: var(--haxtheme-syllabus-header-border-left-width);
          border-left-color: var(--haxtheme-syllabus-accent-color);
          padding-left: var(--haxtheme-syllabus-header-padding-left, 15px);
          @apply --haxtheme-syllabus-header;
        }

        #syllabus_title h1 {
          text-transform: var(--haxtheme-syllabus-syllabus-title-h1, uppercase);
          margin: var(--haxtheme-syllabus-syllabus-title-h1-margin, 25px 0 0);
          font-weight: var(--haxtheme-syllabus-syllabus-title-h1-font-weight);
          @apply --haxtheme-syllabus-syllabus-title-h1;
        }

        .policy h2 {
          margin: var(--haxtheme-syllabus-policy-h2-margin, 5px 0 5px);
          font-weight: var(--haxtheme-syllabus-policy-h2-font-weight, 400);
          font-size: var(--haxtheme-syllabus-policy-h2-font-size, 24px);
          color: var(--haxtheme-syllabus-policy-h2-color);
          @apply --haxtheme-syllabus-policy-h2;
        }

        .policy {
          margin: var(--haxtheme-syllabus-policy-margin, 20px 0 20px);
          font-size: var(--haxtheme-syllabus-policy-font-size);
          font-weight: var(--haxtheme-syllabus-policy-font-weight);
          line-height: var(--haxtheme-syllabus-policy-line-height);
          @apply --haxtheme-syllabus-policy;
        }

        #share_actions {
          display: var(--haxtheme-syllabus-share-actions-display, flex);
          justify-content: var(
            --haxtheme-syllabus-share-actions-justify-content,
            flex-end
          );
          margin: var(--haxtheme-syllabus-share-actions-margin-top, -20px);
          @apply --haxtheme-syllabus-share-actions;
        }

        #syllabus_wrap {
          background: url(files/theme-images/syllabus/syllabus-watermark2.png);
          background-repeat: no-repeat;
          background-position: center;
          background-size: 100%;
          width: var(--haxtheme-syllabus-syllabus-wrap-width, 75%);
          margin: var(--haxtheme-syllabus-syllabus-wrap-margin, 0 auto 0 auto);
          @apply --haxtheme-syllabus-syllabus-wrap;
        }

        @media screen and (max-width: 768px) {
          #syllabus_wrap {
            width: var(--haxtheme-syllabus-syllabus-wrap-width-mobile, 90%);
            @apply --haxtheme-syllabus-syllabus-wrap-mobile;
          }
        }

        page-banner {
          --page-banner-text-transform: uppercase;
        }

        site-breadcrumb {
          margin: var(--haxtheme-syllabus-site-breadcrumb-margin);
        }

        worksheet-download {
          margin: 0 0 25px 0;
        }
      </style>
      <page-banner
        image="[[activeItem.metadata.fields.image]]"
        text="[[activeItem.title]]"
        alt="[[activeItem.metadata.fields.imageAlt]]"
      ></page-banner>
      <div id="syllabus_wrap">
        <site-breadcrumb></site-breadcrumb>
        <div id="syllabus_header">
          <div id="syllabus_title">
            <h1>[[activeItem.title]]</h1>
          </div>
          <div id="syllabus_subtitle">
            <h2>[[activeItem.metadata.fields.name]]</h2>
          </div>
          <div id="syllabus_sample">
            <h3>Sample Syllabus</h3>
          </div>
        </div>
        <!-- <div id="share_actions">
          <site-print-button></site-print-button>
        </div> -->
        <div id="syllabus">
          <div id="contentcontainer">
            <div id="slot">
              <slot></slot>
            </div>
          </div>
        </div>
        <div id="syllabus_policy">
          <div class="policy">
            <h2>Academic Integrity</h2>
            <div>
              Academic integrity is the pursuit of scholarly activity in an
              open, honest and responsible manner. Academic integrity is a basic
              guiding principle for all academic activity at The Pennsylvania
              State University, and all members of the University community are
              expected to act in accordance with this principle. Consistent with
              this expectation, the University’s Code of Conduct states that all
              students should act with personal integrity, respect other
              students’ dignity, rights and property, and help create and
              maintain an environment in which all can succeed through the
              fruits of their efforts.
            </div>
            <br />
            <div>
              Academic integrity includes a commitment by all members of the
              University community not to engage in or tolerate acts of
              falsification, misrepresentation or deception. Such acts of
              dishonesty violate the fundamental ethical principles of the
              University community and compromise the worth of work completed by
              others.
            </div>
          </div>
          <div class="policy">
            <h2>Accommodating Disabilities</h2>
            <div>
              Penn State welcomes students with disabilities into the
              University’s educational programs. Every Penn State campus has an
              office for students with disabilities. The
              <a
                href="http://equity.psu.edu/sdr/disability-coordinator"
                target="_blank"
                >Student Disability Resources (SDR) website
              </a>
              provides contact information for every Penn State campus . For
              further information, please visit
              <a href="http://equity.psu.edu/sdr/" target="_blank"
                >Student Disability Resources website</a
              >. <br /><br />
              In order to receive consideration for reasonable accommodations,
              you must contact the appropriate disability services office at the
              campus where you are officially enrolled, participate in an intake
              interview, and provide documentation:
              <a href="http://equity.psu.edu/sdr/guidelines" target="_blank"
                >See documentation guidelines</a
              >
              . If the documentation supports your request for reasonable
              accommodations, your campus disability services office will
              provide you with an accommodation letter. Please share this letter
              with your instructors and discuss the accommodations with them as
              early as possible. You must follow this process for every semester
              that you request accommodations.
            </div>

            <div class="policy">
              <h2>Counseling and Psychological Services</h2>
              <div>
                Many students at Penn State face personal challenges or have
                psychological needs that may interfere with their academic
                progress, social development, or emotional wellbeing. The
                university offers a variety of confidential services to help you
                through difficult times, including individual and group
                counseling, crisis intervention, consultations, online chats,
                and mental health screenings. These services are provided by
                staff who welcome all students and embrace a philosophy
                respectful of clients’ cultural and religious backgrounds, and
                sensitive to differences in race, ability, gender identity and
                sexual orientation.
              </div>
              <ul>
                <li>
                  <a
                    href="http://studentaffairs.psu.edu/counseling/"
                    target="_blank"
                    >Counseling and Psychological Services at University Park
                    (CAPS)</a
                  >: 814-863-0395
                </li>
                <li>
                  <a
                    href="http://senate.psu.edu/faculty/counseling-services-at-commonwealth-campuses/"
                    target="_blank"
                    >Counseling and Psychological Services at Commonwealth
                    Campuses</a
                  >
                </li>
                <li>
                  Penn State Crisis Line (Available 24 hrs, 7 days a week):
                  877-229-6400
                </li>
                <li>
                  Crisis Text Line (Available 24 hrs, 7 days a week): Text LIONS
                  to 741741
                </li>
              </ul>
            </div>
            <div class="policy">
              <h2>Educational Equity / Report Bias</h2>
              <div>
                Penn State takes great pride to foster a diverse and inclusive
                environment for students, faculty, and staff. Acts of
                intolerance, discrimination, or harassment due to age, ancestry,
                color, disability, gender, gender identity, national origin,
                race, religious belief, sexual orientation, or veteran status
                are not tolerated and can be reported through Educational Equity
                via the
                <a href="http://equity.psu.edu/reportbias/" target="_blank"
                  >Report Bias website</a
                >.
              </div>
            </div>
          </div>
        </div>
        <worksheet-download title="Download Sample" link="[[activeItem.metadata.fields.pdf]]"></worksheet-download>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-syllabus";
  }

  constructor() {
    super();
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js');
    import('../../build/es6/node_modules/@polymer/iron-image/iron-image.js');
    this.__disposer = [];
    autorun(reaction => {
      this.manifest = toJS(store.routerManifest);
      this.__disposer.push(reaction);
    });
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
}
window.customElements.define(HaxThemeSyllabus.tag, HaxThemeSyllabus);

class HaxForm extends LitElement {
  static get properties() {
    return {
      endpoint: { type: String },
      loading: { type: Boolean, reflect: true },
      formId: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  constructor() {
    super();
    this.endpoint = null;
    this.loading = false;
    this._form = null;
    this.formId = null;
  }

  /**
   * When the element first sets up add
   * an event listener to monitor any slot changes.
   * We do this to gather the children of the component.
   */
  firstUpdated() {
    this.shadowRoot
      .querySelector('slot')
      .addEventListener('slotchange', this.slotChangedHandler.bind(this));
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector('slot')
      .removeEventListener('slotchange', this.slotChangedHandler.bind(this));
    super.disconnectedCallback();
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == 'loading') {
        this.dispatchEvent(
          new CustomEvent("loading-changed", {
            detail: {
              value: this[propName],
            }
          })
        );
      }
    });
  }

  /**
   * When new children are added look for a form element and
   * compture all submission events from that form.
   * @param {event} e 
   */
  slotChangedHandler(e) {
    // get all children
    const nodes = e.target.assignedNodes({ flatten: true });
    const form = [...nodes].find(i => i.nodeName === 'FORM');
    // if there is a form
    if (form) {
      this._form = form;
      form.addEventListener('submit', _e => {
        _e.preventDefault();
        this.submitForm();
      });
    }
  }

  /**
   * Collects all of the form values and submits
   * them to the endpoint
   */
  submitForm() {
    const form = this._form;

    if (!form) {
      console.error(`No form found.`);
    }

    if (this.endpoint) {
      const values = this.constructor.collectFormValues(form);
      // get the form id from hax-form or the child form
      const id = this.formId || form.id;

      this.loading = true;

      fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          values,
        }),
      })
        .then(res => {
          if (res.ok) {
            this.dispatchEvent(new CustomEvent('subission-successful'));
          }
          else {
            this.dispatchEvent(new CustomEvent('subission-error'));
          }
          return res
        })
        .finally(() => {
          this.loading = false;
        });
    } else {
      console.error(`Endpoint not defined`);
    }
  }

  /**
   * Collect all values of a form
   * @param {DOM Node} form 
   * @return {object}
   *  - value
   *  - name
   */
  static collectFormValues(form) {
    const formItems = form.querySelectorAll('[name]');
    const values = [...formItems].map(i => ({ name: i.name, value: i.value }));
    return values;
  }

  render() {
    return html$1`
      <div id="slot">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('hax-form', HaxForm);

class ContactForm extends LitElement {
  static get properties() {
    return {
      loading: { type: Boolean },
      submitted: { type: Boolean, reflect: true }
    };
  }
  constructor() {
    super();
    this.loading = false;
    this.submitted = false;
  }
  static get styles() {
    return css`
      :host {
        display: block;
      }

      #contact-form input[type="text"],
      #contact-form input[type="email"],
      #contact-form textarea {
        width: 100%;
        box-shadow: inset 0 1px 2px #ddd, 0 1px 0 #fff;
        border: 1px solid #ccc;
        background: #fff;
        margin: 0 0 5px;
        padding: 10px;
      }
      #contact-form button[type="submit"] {
        cursor: pointer;
        width: 100%;
        border: none;
        background: #e2801e;
        color: #fff;
        margin: 0 0 5px;
        padding: 10px;
        height: 50px;
        font-size: 18px;
        text-transform: uppercase;
      }
      #contact-form button[disabled] {
        opacity: 0.3;
      }
      :host[submitted] #contact-form button[disabled] {
        opacity: 1;
        background: transparent;
        color: black;
      }
    `;
  }
  submissionButton() {
    if (this.submitted) {
      return html$1`
        <button type="submit" id="contact-submit" disabled>
          Submitted!
        </button>`
    }
    else if (this.loading) {
      return html$1`
        <button type="submit" id="contact-submit" disabled>
          Submitting...
        </button>
      `
    }
    else {
      return html$1`
        <button type="submit" id="contact-submit">
          Submit
        </button>
      `
    }
  }
  firstUpdated() {
    // Setup recaptcha
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=6LcgleAUAAAAAG21mesiKq8YAo8tgYn4zEHPhTWG";
    document.head.appendChild(script);
    this.shadowRoot.querySelector("form").addEventListener("click", e => {
      grecaptcha.ready(() => {
          grecaptcha.execute('6LcgleAUAAAAAG21mesiKq8YAo8tgYn4zEHPhTWG', {action: 'contact_form'}).then((token) => {
            const captcha = this.shadowRoot.querySelector("#recaptcha");
            captcha.value = token;
          });
      });
    });
  }
  render() {
    return html$1`
      <hax-form endpoint="http://hax-forms-service.odl.science.psu.edu" @loading-changed="${e =>
        (this.loading = e.detail.value)}" @subission-successful=${() => this.submitted = true}>
        <form id="contact-form">
          <div>
            <label>
              <span>Name:</span>
              <input
                placeholder="Full name"
                type="text"
                tabindex="1"
                required
                autofocus
                name="name"
              />
            </label>
          </div>
          <div>
            <label>
              <span>Email:</span>
              <input
                placeholder="name@example.com"
                type="email"
                tabindex="2"
                required
                name="email"
              />
            </label>
          </div>
          <div>
            <label>
              <span>Message:</span>
              <textarea
                placeholder="Comments"
                tabindex="3"
                required
                rows="5" 
                cols="40"
                name="comments"
              ></textarea>
            </label>
          <div>
            <input id="recaptcha" type="hidden" name="recaptcha">
          </div>
          </div>
            ${this.submissionButton()}
          </div>
        </form>
      </hax-form>
    `;
  }
  static get tag() {
    return "contact-form";
  }
  connectedCallback() {
    super.connectedCallback();
    this.__disposer = [];
    autorun(reaction => {
      this.manifest = toJS(store.routerManifest);
      this.__disposer.push(reaction);
    });
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
}

window.customElements.define(ContactForm.tag, ContactForm);

class HaxThemeContact extends PolymerElement {
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

        h1 {
          font-size: 36px;
          font-weight: 400;
        }
        #content-wrap {
          width: 80%;
          margin: 0 auto 0 auto;
        }

        #contentcontainer {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.4;
        }

        #about_header {
          border-left: solid;
          border-left-width: 4px;
          border-left-color: #e2801e;
          padding-left: 15px;
        }

        #contact-info {
          display: flex;
          justify-content: space-between;
          margin: 0 0 25px 0;
        }

        @media screen and (max-width: 1324px) {
          #contact-info {
            flex-direction: column;
          }
        }

        contact-form {
          width: 50%;
        }

        @media screen and (max-width: 1324px) {
          contact-form {
            width: 100%;
          }
        }
      </style>
      <page-banner
        image="files/theme-images/page-banners/contact-banner.jpg"
        text="Contact"
        alt="A courtyard view of Shortlidge Square."
      ></page-banner>
      <div id="content-wrap">
        <div id="about_header">
          <div id="title">
            <h1>Email Us</h1>
          </div>
        </div>
        <div id="contact-info">
          <contact-form></contact-form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.2838768296356!2d-77.86327558409836!3d40.799755272459215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cea62073a7b393%3A0x704b7ea310a54bc1!2sRitenour%2C%20State%20College%2C%20PA%2016801!5e0!3m2!1sen!2sus!4v1571944254759!5m2!1sen!2sus"
            width="500"
            height="auto"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-contact";
  }
  connectedCallback() {
    super.connectedCallback();
    this.__disposer = [];
    autorun(reaction => {
      this.manifest = toJS(store.routerManifest);
      this.__disposer.push(reaction);
    });
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
}
window.customElements.define(HaxThemeContact.tag, HaxThemeContact);

class LinkPreview extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          --link-preview-link-color: #000;
          --link-preview-accent-color: #e2801e;
          --link-preview-title-font-size: 28px;
          width: 95%;
          margin: 15px 0 15px;
        }

        a {
          text-decoration: none;
          color: var(--link-preview-link-color);
        }

        h1 {
          font-weight: 400;
          font-size: var(--link-preview-title-font-size);
        }

        @media screen and (max-width: 768px) {
          h1 {
            margin: 0;
            font-size: 18px;
          }
        }

        #link_wrap {
          display: flex;
          box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
          padding: 10px;
          border-left: solid 6px var(--link-preview-accent-color);
          width: 100%;
        }

        @media screen and (max-width: 768px) {
          #link_wrap {
            flex-direction: column;
          }
        }

        #card_description {
          margin-top: -10px;
        }

        @media screen and (max-width: 768px) {
          #card_description {
            margin-top: 0;
          }
        }

        #card_url {
          opacity: 0.6;
          width: 500px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media screen and (max-width: 768px) {
          #card_url {
            font-size: 16px;
          }
        }

        #card_image {
          position: relative;
          width: 10vw;
          flex: 1 1 10vw;
          min-width: 100px;
          max-width: 250px;
          margin: -10px;
          display: flex;
        }

        @media screen and (max-width: 768px) {
          #card_image {
            min-width: 100%;
            margin: 0;
          }
        }

        #card_image iron-image {
          height: 170px;
          width: 225px;
          margin-right: 15px;
        }

        @media screen and (max-width: 768px) {
          #card_image iron-image {
            width: 100%;
          }
        }

        #card_info {
          flex: 1 1 auto;
          margin-left: 15px;
        }

        @media screen and (max-width: 768px) {
          #card_info {
            margin: 5px 0 0;
          }
        }
      `
    ];
  }
  render() {
    return html$1`
      <a href="${this.url}" target="_blank">
        <div id="link_wrap">
          <div id="card_image">
            <iron-image sizing="cover" src="${this.image}"></iron-image>
          </div>
          <div id="card_info">
            <div id="card_title">
              <h1>${this.title}</h1>
            </div>
            <div id="card_description">
              <slot></slot>
            </div>
            <div id="card_url">${this.url}</div>
          </div>
        </div>
      </a>
    `;
  }
  static get tag() {
    return "link-preview";
  }
  static get properties() {
    return {
      /**
       * Image source
       */
      image: {
        type: String
      },
      title: {
        type: String
      },
      url: {
        type: String
      }
    };
  }
  constructor() {
    super();
    import('../../build/es6/node_modules/@polymer/iron-image/iron-image.js');
  }
}
window.customElements.define(LinkPreview.tag, LinkPreview);

class CompanyMark extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          width: 20%;
          padding: 5px;
          margin-top: 2px;
        }

        @media screen and (max-width: 1000px) {
          :host {
            width: 25%;
          }
        }

        @media screen and (max-width: 800px) {
          :host {
            width: 30%;
          }
        }

        @media screen and (max-width: 700px) {
          :host {
            width: 35%;
          }
        }

        @media screen and (max-width: 600px) {
          :host {
            width: 45%;
          }
        }
      `
    ];
  }
  render() {
    return html$1`
      <a
        href="http://science.psu.edu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382.55 85.96">
          <title>Penn State Eberly College of Science</title>
          <path
            d="M72.63,119.21C55.4,109,33.68,94.08,33.68,67.78V40c7.94-3,20.22-6.77,38.95-6.77,18.94,0,31.94,4.1,39,6.77V67.78C111.58,94.3,89,109.58,72.63,119.21Z"
            transform="translate(-33.68 -33.25)"
            style="fill:#fff"
          ></path>
          <path
            d="M84.35,83.26c0-.59.48-1.5.48-2.32s-1.19-1.28-2.11-1.41c-2-.27-2.6-.18-2.6-.61s.26-.61.61-1.12a3.8,3.8,0,0,1,2.44-1.13,21.08,21.08,0,0,1,3-.24,16.48,16.48,0,0,1,2.92.29c1.19.2,1.38.7,1.38,1.26v.56c0,.57-.47.86-1.3,1l-.64.13c-.6.12-1.35.24-1.61,1-.57,1.63-1.56,2.92-2.3,2.88C84.49,83.6,84.35,83.5,84.35,83.26Zm1.72-26.38c-.07,0-.33-.13-.33-.38s.21-.59.64-1.15c1-1.31,2.31-2.91,2.8-2.91.24,0,.39.16.69.72a3.38,3.38,0,0,1,.32,1.42,7.32,7.32,0,0,1-1.52,4.34A12.92,12.92,0,0,0,86.07,56.88ZM57.45,60.13c.44,0,.77-.3,1.43-1,1.48-1.63,2.91-1.85,2.91-2.55a1.89,1.89,0,0,0-.41-.94c-1.57-2.47-2.25-3.8-3.19-5.59-.34-.65-.78-1.09-1.12-1.09-.55,0-1.12.63-1.46,1.18a5.15,5.15,0,0,0-.94,2.43,17.33,17.33,0,0,0,.79,4.76C56,58.8,56.77,60.13,57.45,60.13Zm17.78,5.69a3,3,0,0,0-3.14-2.51A3.86,3.86,0,0,0,68.6,65.7a3.63,3.63,0,0,0,2.54,2.21c.23.07.45.08.45.27s-.29.41-.89.41a4.38,4.38,0,0,1-3.59-1.46,13.05,13.05,0,0,1-1.8.29.79.79,0,0,1-.86-.9,2.65,2.65,0,0,1,.3-1.13c.11-.23.23-.47.32-.63a5.72,5.72,0,0,1,2.52-2.9l1-.6a5.06,5.06,0,0,1,2.94-.73h.87a3.87,3.87,0,0,1,2.78.93c1.27,1.07,2,1.66,2,2.45a3.54,3.54,0,0,1-.75,2.49,3.16,3.16,0,0,1-2.07,1.33c-.16,0-.21-.09-.21-.18s.13-.18.27-.3A3.33,3.33,0,0,0,75.23,65.82Zm8.56,27.31a16.29,16.29,0,0,1-3.91.24c-4.42,0-5.17-1.08-5.17-2C74.71,90,81.05,89,83.55,89S87,89.74,87,90.33,85.92,92.61,83.79,93.13Zm-25.5,12.94a139.9,139.9,0,0,0,14.34,9.64h0c0-4.33-.09-6.88,2.84-9.95,1.18-1.24,2.41-2.51,3.51-3.65.84-.86,1.51-1.51,1.9-1.51s.41.15.41.53a8.85,8.85,0,0,0,1,3.51,4.42,4.42,0,0,0,3.23,2.5c12.56-9.45,23.06-21.82,23.06-39.42V42.08c-3.1-1.06-15.82-5.93-36-5.93s-32.91,4.87-36,5.93V67.72A40.67,40.67,0,0,0,42,88.09c.33-3.56,2.74-5.25,2.74-8.75,0-2.44-.69-4-.69-6,0-3.7,5-11.3,7.58-14.4.08-.09.24-.31.45-.31a.54.54,0,0,1,.44.3c.26.41.38.62.66.62s.39-.16.39-.41a21.69,21.69,0,0,1-.74-5.92c0-2.94.68-3.56,2.51-5.35a4,4,0,0,1,2.33-1.31A3.08,3.08,0,0,1,60,47.85c1.13,1.15,2.7,3.19,3,3.51a.33.33,0,0,0,.29.17c.52,0,1-.16,3.22-.16,4.12,0,10.34.65,13.53,1.7a24.24,24.24,0,0,0,2.42.9c.21,0,.23-.13.23-.25s-.43-.54-.43-.82a.5.5,0,0,1,.3-.41c2.38-1.28,4.41-2.24,6.27-2.24,1.08,0,1.62.94,2.07,1.86a6.26,6.26,0,0,1,.74,2.69,8.28,8.28,0,0,1-1.73,5.14c.37.37.89.94,1.21,1.32a4.33,4.33,0,0,1,1.24,2.47,8.74,8.74,0,0,1-.3,1.51c0,.22-.25.67-.63.66s-.44-.39-.45-.72v-.26a3.86,3.86,0,0,0-3.26-3.76h-.3a3.27,3.27,0,0,0-2.55,1A2.46,2.46,0,0,0,84,64a5.08,5.08,0,0,0,.71,1.78c.24.47.85,1.61,1.18,2.19a1.19,1.19,0,0,0,1.08.69c1,0,1.92-.15,1.92-.45,0-.09,0-.16-.18-.16l-.33,0c-1.34,0-2.06-1.71-2.73-3.25a2.84,2.84,0,0,1,2.14-1A2.06,2.06,0,0,1,90,65.85a3,3,0,0,1-.29,1.28.66.66,0,0,0-.08.24c0,.18.23.22.6.3l.52.13a1.59,1.59,0,0,1,1,.93c.12.31.38,1,.44,1.21a8.4,8.4,0,0,1,.58,2.77,8.05,8.05,0,0,1-.4,2.72,16,16,0,0,0-.66,2.94,4.09,4.09,0,0,1,.22.49,5.71,5.71,0,0,1,.53,2.32V82a6,6,0,0,1-1.27,3.61c-.52.69-1.25,1.66-1.67,2.2a1.42,1.42,0,0,1-1,.57,3.42,3.42,0,0,1-.66-.12l-1-.27a2.1,2.1,0,0,1-1.52-1.6c0-.12-.18-.45-.22-.56-.21-.55-.33-.9-.67-.9s-.5.17-.76.55a4.06,4.06,0,0,1-3,2.22c-.55.14-1.67.37-2.29.51a21.51,21.51,0,0,1-3.59.65l-.63,0c-1.29-.18-2.21-.27-3.83-2.2-2.21-2.64-2-3-2.12-6.59,0-.4-.14-.9-.56-.9s-.53.76-.67,1.83c-.16,1.26-.45,2.58-1.07,2.58a4,4,0,0,1-1.39-.29l-3.87-1.29c-1.44-.47-2.82-.85-3.37-2.13-.26-.6-.75-1.71-1-2.29-.17-.41-.3-.62-.57-.62s-.47.45-.51.81S55,79.05,55,79.64a8,8,0,0,1-1.77,4.94c-.48.63-.94,1.28-1.48,2A8.41,8.41,0,0,0,50,92.37c0,.19,0,1.25,0,1.73C50.1,98.33,51.17,100.4,58.29,106.07Z"
            transform="translate(-33.68 -33.25)"
            style="fill:#231e20"
          ></path>
          <path
            d="M91.75,68.73h0c.12.31.38,1,.44,1.21a8.4,8.4,0,0,1,.58,2.77,8.05,8.05,0,0,1-.4,2.72,16,16,0,0,0-.66,2.94c-.12-.24-2.28-4-2.45-4.28a2,2,0,0,1-.3-1c0-.38.16-.61.62-.9.28-.18.64-.38.88-.51a2.13,2.13,0,0,0,1.39-2A6.52,6.52,0,0,0,91.75,68.73Zm-9.44,6a2.58,2.58,0,0,1,.22.88,1.24,1.24,0,0,1-.45,1.06l-.58.52a2.16,2.16,0,0,0-.77.63c-.35.51-.61.82-.61,1.12a.24.24,0,0,0,.1.21,1.55,1.55,0,0,1-.61-1.25c0-.39.13-.6.13-1a3,3,0,0,0-.14-.79c-.6-2-1.61-4.4-2.23-6s-1.14-2.56-1.86-2.56c-.4,0-.75.2-1.17.2a3.2,3.2,0,0,0,2.07-1.33,3.54,3.54,0,0,0,.75-2.49,1.68,1.68,0,0,0-.45-1.06,11.89,11.89,0,0,1,2.1,3.42C80.16,69.13,81.33,72.26,82.31,74.71ZM50,94.1c0-.48,0-1.54,0-1.73a8.41,8.41,0,0,1,1.73-5.8c.54-.71,1-1.36,1.48-2A8,8,0,0,0,55,79.64c.05-.59.15-1.52.2-1.93s.13-.81.51-.81.4.21.57.62c.24.58.73,1.69,1,2.29.55,1.28,1.93,1.66,3.37,2.13l3.87,1.29a4,4,0,0,0,1.39.29c.62,0,.91-1.32,1.07-2.58.14-1.07.3-1.83.67-1.83s.55.5.56.9c.13,3.57-.09,3.95,2.12,6.59,1.62,1.93,2.54,2,3.83,2.2A1.79,1.79,0,0,1,73,86.93V85.64a4.93,4.93,0,0,1,.4-2c.15-.34.32-1,.49-1.36A2.18,2.18,0,0,0,74.07,81a7.34,7.34,0,0,0-.55-2.14c-.2-.6-.47-1.48-.72-2.2C72,74.38,71.67,73.85,69,73.5l-5.41-.76c-3-.43-5.36-.57-6.59-2.59-1.47-2.41-1.32-5.34-2.73-5.34-.67,0-1,.74-1,1.83s.43,3,.43,6.23c0,2.79-.26,3.57-1.89,5.62-.42.54-1,1.32-1.35,1.78-1.21,1.51-1.74,2.37-1.67,4.14A60.54,60.54,0,0,0,50,94.1Zm30.69,10.77c.11-1.12.6-3,.6-3.74h0c0-.38-.13-.53-.41-.53s-1.06.65-1.9,1.51c-1.1,1.14-2.33,2.41-3.51,3.65-2.93,3.07-2.8,5.62-2.84,9.95h0c3.26-2,6.24-3.85,8.45-5.36A17.34,17.34,0,0,1,80.69,104.87Z"
            transform="translate(-33.68 -33.25)"
            style="fill:#a7a9ac"
          ></path>
          <path
            d="M134.74,88.63h-7.4v6.86h8.24v2.06h-10.7v-19h10.28v2.06h-7.82v6h7.4Zm3.84,8.92c0-.93.11-2.31.11-3.53V77.51h2.46v8.58h0a5.09,5.09,0,0,1,4.66-2.51c3.39,0,5.79,2.82,5.76,7,0,4.88-3.08,7.31-6.13,7.31a4.87,4.87,0,0,1-4.57-2.57h-.09l-.11,2.26Zm2.57-5.47a4.43,4.43,0,0,0,.11.9A3.84,3.84,0,0,0,145,95.89c2.59,0,4.15-2.12,4.15-5.25,0-2.74-1.42-5.09-4.07-5.09a4,4,0,0,0-3.78,3,4.65,4.65,0,0,0-.14,1Zm15-.91c.05,3.36,2.2,4.74,4.68,4.74a9.11,9.11,0,0,0,3.79-.7L165,97a11.2,11.2,0,0,1-4.55.84c-4.2,0-6.72-2.76-6.72-6.89s2.43-7.36,6.41-7.36c4.47,0,5.65,3.92,5.65,6.43a9.17,9.17,0,0,1-.08,1.16Zm7.28-1.78c0-1.58-.65-4-3.44-4-2.52,0-3.62,2.32-3.82,4Zm5.48-1.24c0-1.61,0-3-.12-4.26H171l.08,2.68h.12a4.08,4.08,0,0,1,3.78-3,2.62,2.62,0,0,1,.71.08V86a4.23,4.23,0,0,0-.85-.08,3.49,3.49,0,0,0-3.33,3.19,6.57,6.57,0,0,0-.12,1.16v7.28H168.9Zm9.34-10.64h2.49v20h-2.49Zm7.57,6.38,3,8.07c.31.91.65,2,.88,2.8h0c.26-.82.54-1.87.88-2.86l2.71-8H196l-3.73,9.74c-1.78,4.69-3,7.08-4.69,8.55a6.62,6.62,0,0,1-3.05,1.61l-.62-2.09a6.57,6.57,0,0,0,2.17-1.21,7.51,7.51,0,0,0,2.09-2.77,1.62,1.62,0,0,0,.2-.59,2,2,0,0,0-.17-.65L183.1,83.89Zm31.76,13a12.23,12.23,0,0,1-5,.9c-5.36,0-9.4-3.38-9.4-9.62,0-6,4-10,9.94-10a10.19,10.19,0,0,1,4.52.85l-.59,2a9,9,0,0,0-3.84-.79c-4.47,0-7.43,2.85-7.43,7.85,0,4.66,2.68,7.65,7.31,7.65a9.83,9.83,0,0,0,4-.79Zm15.05-6.32c0,5-3.5,7.25-6.81,7.25-3.69,0-6.55-2.71-6.55-7,0-4.57,3-7.25,6.78-7.25C230,83.58,232.62,86.43,232.62,90.61Zm-10.84.14c0,3,1.72,5.25,4.15,5.25s4.15-2.23,4.15-5.31c0-2.31-1.16-5.25-4.1-5.25S221.78,88.15,221.78,90.75Zm14-13.24h2.49v20h-2.49Zm6.67,0h2.48v20h-2.48Zm8,13.66c.06,3.36,2.2,4.74,4.69,4.74a9.05,9.05,0,0,0,3.78-.7l.43,1.78a11.24,11.24,0,0,1-4.55.84c-4.21,0-6.72-2.76-6.72-6.89s2.43-7.36,6.41-7.36c4.46,0,5.65,3.92,5.65,6.43a8.78,8.78,0,0,1-.09,1.16Zm7.29-1.78c0-1.58-.65-4-3.45-4-2.51,0-3.61,2.32-3.81,4ZM275,83.89c-.06,1-.12,2.09-.12,3.75v7.94c0,3.13-.62,5-1.94,6.24a7.26,7.26,0,0,1-5,1.63,8.77,8.77,0,0,1-4.55-1.13l.62-1.89a7.69,7.69,0,0,0,4,1.07c2.54,0,4.41-1.32,4.41-4.77V95.21h-.06a4.88,4.88,0,0,1-4.35,2.29c-3.39,0-5.82-2.89-5.82-6.67,0-4.63,3-7.25,6.16-7.25A4.54,4.54,0,0,1,272.65,86h.06l.11-2.06Zm-2.57,5.39a3.65,3.65,0,0,0-.14-1.13,3.59,3.59,0,0,0-3.48-2.63c-2.37,0-4.06,2-4.06,5.17,0,2.68,1.35,4.91,4,4.91a3.63,3.63,0,0,0,3.44-2.54,4.34,4.34,0,0,0,.2-1.33Zm8,1.89c.06,3.36,2.2,4.74,4.69,4.74a9.09,9.09,0,0,0,3.78-.7l.42,1.78a11.15,11.15,0,0,1-4.54.84c-4.21,0-6.72-2.76-6.72-6.89s2.43-7.36,6.41-7.36c4.46,0,5.64,3.92,5.64,6.43a9.17,9.17,0,0,1-.08,1.16Zm7.28-1.78c0-1.58-.65-4-3.44-4-2.51,0-3.62,2.32-3.81,4Zm24.49,1.22c0,5-3.5,7.25-6.81,7.25-3.7,0-6.55-2.71-6.55-7,0-4.57,3-7.25,6.78-7.25S312.16,86.43,312.16,90.61Zm-10.85.14c0,3,1.73,5.25,4.16,5.25s4.15-2.23,4.15-5.31c0-2.31-1.16-5.25-4.1-5.25S301.31,88.15,301.31,90.75Zm14.23,6.8V85.78h-1.92V83.89h1.92v-.65a6.47,6.47,0,0,1,1.59-4.78,4.76,4.76,0,0,1,3.33-1.27,5.68,5.68,0,0,1,2.11.4l-.33,1.92a3.74,3.74,0,0,0-1.59-.31c-2.11,0-2.65,1.86-2.65,4v.74h3.3v1.89H318V97.55Zm13.73-3a8.67,8.67,0,0,0,4.4,1.24c2.51,0,4-1.33,4-3.25,0-1.77-1-2.79-3.58-3.78-3.11-1.1-5-2.71-5-5.39,0-3,2.46-5.17,6.15-5.17a8.67,8.67,0,0,1,4.21.93l-.68,2a7.56,7.56,0,0,0-3.61-.9c-2.6,0-3.59,1.55-3.59,2.85,0,1.77,1.16,2.65,3.79,3.67,3.22,1.24,4.85,2.79,4.85,5.59s-2.17,5.47-6.66,5.47a9.85,9.85,0,0,1-4.86-1.21ZM353.35,97a9.15,9.15,0,0,1-3.93.79c-4.12,0-6.8-2.79-6.8-7A6.94,6.94,0,0,1,350,83.6a8.31,8.31,0,0,1,3.45.71l-.57,1.92a5.73,5.73,0,0,0-2.88-.65c-3.13,0-4.83,2.32-4.83,5.17,0,3.16,2,5.11,4.75,5.11a7,7,0,0,0,3-.68Zm5.67-17a1.46,1.46,0,0,1-1.58,1.52,1.48,1.48,0,0,1-1.5-1.52,1.52,1.52,0,0,1,1.56-1.56A1.48,1.48,0,0,1,359,80.05Zm-2.77,17.5V83.89h2.49V97.55Zm8-6.38c.05,3.36,2.2,4.74,4.68,4.74a9.14,9.14,0,0,0,3.79-.7l.42,1.78a11.2,11.2,0,0,1-4.55.84c-4.2,0-6.72-2.76-6.72-6.89s2.43-7.36,6.41-7.36c4.46,0,5.65,3.92,5.65,6.43a8.78,8.78,0,0,1-.09,1.16Zm7.28-1.78c0-1.58-.65-4-3.44-4-2.52,0-3.62,2.32-3.82,4ZM377,87.58c0-1.41,0-2.56-.12-3.69h2.21l.14,2.25h.05a5,5,0,0,1,4.52-2.56c1.89,0,4.83,1.12,4.83,5.81v8.16h-2.49V89.67c0-2.2-.81-4-3.16-4a3.51,3.51,0,0,0-3.33,2.54,3.64,3.64,0,0,0-.17,1.16v8.21H377ZM402.42,97a9.15,9.15,0,0,1-3.93.79c-4.12,0-6.8-2.79-6.8-7A6.94,6.94,0,0,1,399,83.6a8.26,8.26,0,0,1,3.44.71l-.56,1.92a5.76,5.76,0,0,0-2.88-.65c-3.14,0-4.83,2.32-4.83,5.17,0,3.16,2,5.11,4.74,5.11a7.05,7.05,0,0,0,3.05-.68Zm4.12-5.87c.06,3.36,2.2,4.74,4.69,4.74a9.09,9.09,0,0,0,3.78-.7l.42,1.78a11.15,11.15,0,0,1-4.54.84c-4.21,0-6.72-2.76-6.72-6.89s2.43-7.36,6.41-7.36c4.46,0,5.64,3.92,5.64,6.43a9.17,9.17,0,0,1-.08,1.16Zm7.28-1.78c0-1.58-.65-4-3.44-4-2.52,0-3.62,2.32-3.81,4ZM127.25,45.56H124.9V42.08h10.95c5.76,0,8.77,3,8.77,7.33,0,5.11-4,7.33-8.77,7.33h-3.62v5.72h2.35v3.48H124.9V62.46h2.35Zm8.09,7.7c2.49,0,4.11-1.43,4.11-3.85,0-2.19-1.42-3.85-4.18-3.85h-3v7.7ZM150.7,58.1c.14,2.83,2.32,4.57,5.66,4.57a13.45,13.45,0,0,0,5.52-1.13v3.68a16.25,16.25,0,0,1-6.58,1.13c-6.88,0-9.78-4.3-9.78-9.24,0-5.55,3.38-9.4,9-9.4,6.14,0,8.63,4.63,8.63,10.39Zm7.23-3.27c0-2.45-1.4-3.85-3.62-3.85s-3.44,1.43-3.64,3.85ZM282.8,58.1c.14,2.83,2.32,4.57,5.66,4.57A13.45,13.45,0,0,0,294,61.54v3.68a16.29,16.29,0,0,1-6.58,1.13c-6.88,0-9.78-4.3-9.78-9.24,0-5.55,3.37-9.4,9-9.4,6.14,0,8.62,4.63,8.62,10.39ZM290,54.83c0-2.45-1.39-3.85-3.61-3.85s-3.44,1.43-3.64,3.85ZM167.53,51.59h-2.32V48.12h6.55l.13,2.33H172a6.24,6.24,0,0,1,5.47-2.74c4.53,0,6.9,3.18,6.9,7.1v7.65h2v3.48h-8.75V62.46h1.94V55.64c0-2.49-1.38-3.84-3.64-3.84-2,0-3.62,1.14-3.62,3.84v6.82h2v3.48h-8.75V62.46h1.94Zm23.24,0h-2.32V48.12H195l.13,2.33h.07a6.27,6.27,0,0,1,5.48-2.74c4.52,0,6.9,3.18,6.9,7.1v7.65h2v3.48h-8.76V62.46h2V55.64c0-2.49-1.38-3.84-3.65-3.84-2,0-3.61,1.14-3.61,3.84v6.82h2v3.48h-8.76V62.46h2Zm76.06-7.29h4.77v3.82h4.77v3.47H271.6v7.94c0,2.39.84,3.14,2.81,3.14a13.06,13.06,0,0,0,2.13-.27v3.38a15.33,15.33,0,0,1-3.93.57c-3.51,0-5.78-1.89-5.78-5V51.59h-2.42V48.12h2.42Zm-32.15,0h4.77v3.82h4.77v3.47h-4.77v7.94c0,2.39.84,3.14,2.81,3.14a13.06,13.06,0,0,0,2.13-.27v3.38a15.33,15.33,0,0,1-3.93.57c-3.51,0-5.78-1.89-5.78-5V51.59h-2.42V48.12h2.42Zm22.65,10.29c0-2.46-1.19-3.41-3.6-3.41a8.77,8.77,0,0,0-3,.51v2.39h-3.86V49.55a14.77,14.77,0,0,1,6.76-1.84c5,0,8.16,2,8.16,7v7.74h1.84v3.48H257.9l-.14-2.43h-.07c-.35.5-1.65,2.84-5.67,2.84s-6-2.39-6-5.18c0-3.39,2.61-5.73,9.14-5.73h2.14Zm-1.39,3.78c-3.89,0-5.11.82-5.11,2.36,0,1.05.74,2.14,2.62,2.14s3.82-1.49,3.82-4.5ZM225.07,45.73a10.22,10.22,0,0,0-3-.58c-2.77,0-3.88,1.51-3.88,2.84,0,1.73,1.29,2.54,2.78,2.91l2.37.62c3.33.89,7,2.31,7,7.25,0,4.53-2.91,7.58-9.35,7.58A23.68,23.68,0,0,1,212.84,65V58.71h4.28v3.08a18,18,0,0,0,4.27.67c2.53,0,3.75-1.05,3.75-2.86,0-1.49-.84-2.57-3.89-3.39l-2-.56c-4.67-1.26-6.25-3.51-6.25-7.19s2.52-6.79,8.93-6.79a20.85,20.85,0,0,1,7.45,1.27v5.69h-4.28Z"
            transform="translate(-33.68 -33.25)"
            style="fill:#231e20"
          ></path>
        </svg>
      </a>
    `;
  }
  static get tag() {
    return "company-mark";
  }
}
window.customElements.define(CompanyMark.tag, CompanyMark);

class PageSearch extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        #search_wrap {
          margin-right: 15px;
        }
      `
    ];
  }
  render() {
    return html$1`
      <div id="search_wrap">
        <site-modal
          .disabled="${this.editMode}"
          icon="icons:search"
          title="Search site"
          button-label="Search"
        >
          <site-search></site-search>
        </site-modal>
      </div>
    `;
  }
  static get tag() {
    return "page-search";
  }
  constructor() {
    super();
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-modal.js');
    import('../../build/es6/node_modules/@polymer/iron-icon/iron-icon.js');
    this.__disposer = [];
    autorun(reaction => {
      this.editMode = toJS(store.editMode);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
}
window.customElements.define(PageSearch.tag, PageSearch);

class AlertMessage extends LitElement {
  static get styles() {
    return [
      css`
        a {
          color: #fff;
          text-decoration: none;
        }

        @media screen and (max-width: 768px) {
          a {
            font-size: 14px;
          }
        }

        a:hover {
          color: #00d2ff;
        }

        #container {
          background-color: red;
          padding: 8px;
        }

        iron-icon {
          width: 25px;
          height: 25px;
          color: #fff;
          margin-right: 5px;
        }
      `
    ];
  }
  render() {
    return html$1`
      <div id="container">
        <iron-icon icon="icons:report-problem"></iron-icon>
        <a href="${this.url}">
          <slot></slot>
        </a>
      </div>
    `;
  }

  static get tag() {
    return "alert-message";
  }
  static get properties() {
    return {
      /**
       * URL for alert
       */
      url: {
        type: String,
      },
    };
  }
  constructor() {
    super();
    this.url = "";
  }
}
window.customElements.define(AlertMessage.tag, AlertMessage);

class PageTopBar extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          padding: 2px;
        }

        a {
          text-decoration: none;
        }

        #topbar-wrap {
          display: flex;
          justify-content: stretch;
          align-items: center;
        }

        .spacer {
          flex: 1 1 auto;
        }

        .action_button {
          display: flex;
          justify-content: center;
        }

        paper-button#schedule {
          text-transform: none;
          background-color: #e2801e;
          color: #fff;
        }

        iron-icon {
          margin-left: 10px;
        }

        @media screen and (max-width: 768px) {
          .action_button {
            font-size: 12px;
            width: 30%;
          }
        }
        
        page-search {
          /* add a little spacing between this and the schedule button */
          margin-left: 8px;
        }
      `
    ];
  }
  render() {
    return html$1`
      ${this.renderAlert(this.alert)} 
      <div id="topbar-wrap">
      <company-mark></company-mark>
      <div class="spacer"></div>
      <div class="action_button">
        <a href="https://nam01.safelinks.protection.outlook.com/?url=https%3A%2F%2Foutlook.office365.com%2Fowa%2Fcalendar%2Fb58fc79c95a249aa8de9afbc555ed6ab%40psu.edu%2F16fac4c6e6aa4f5f90aabda235ee917710394492065995205772%2Fcalendar.html&data=02%7C01%7Ccmd30%40psu.edu%7C7909d5ecf71d4d74be9508d7aa714dc0%7C7cf48d453ddb4389a9c1c115526eb52e%7C0%7C0%7C637165277560978827&sdata=YisxiX9FgsqsT%2BeuAfzDs1ZfsTzPwM52HL270vPFvIE%3D&reserved=0" target=_blank>
          <paper-button noink id="schedule">
            <div class="title">Schedule Our Studio</div>
            <iron-icon icon="date-range"></iron-icon>
          </paper-button>
        </a>
      </div>
      <page-search></page-search>
    </div> 
    `;
  }

  renderAlert(alert) {
    if (alert === true) {
      return html$1`
       <div id="alert">
        <alert-message url="resources/contingency">
          Information about Coronavirus and Contingency Planning
        </alert-message>
       </div>
      `;
    }
    else {
      return "";
    }
    
  }


  static get tag() {
    return "page-topbar";
  }
  static get properties() {
    return {
      /**
       * Alert
       */
      alert: {
        type: Boolean,
      },
    };
  }
  constructor() {
    super();
    this.alert = "";
  }
}
window.customElements.define(PageTopBar.tag, PageTopBar);

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
    import('../../build/es6/node_modules/@polymer/paper-button/paper-button.js');
    import('../../build/es6/node_modules/@polymer/iron-icon/iron-icon.js');
  }
}
window.customElements.define(PageFooter.tag, PageFooter);

/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
/**
 * `site-top-menu`
 * `Menu on top of the site typically a bar of options`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

class OdlSiteTopMenu extends SiteTopMenu {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "odl-site-top-menu";
  }

  constructor() {
    super();
  }

  static get template() {
    return html`
      <style>
        #indicator {
          z-index: 99;
        }
      </style>
      ${super.template}
    `
  }
}

window.customElements.define(OdlSiteTopMenu.tag, OdlSiteTopMenu);

class HaxthemeSearch extends LitElement {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex: 1 1 auto;
          flex-direction: column;
        }

        #container {
          display: block;
          padding: 1em;
        }

        #search {
          max-width: 900px;
          margin: auto;
        }

        input {
          margin: auto;
          padding: 15px;
          border: 1px solid #ccc;
          border-radius: 3px;
          margin-bottom: 10px;
          width: 100%;
          box-sizing: border-box;
          font-family: montserrat;
          color: #2C3E50;
          font-size: 13px;
        }
      `
    ];
  }
  render() {
    return html$1`
      <div id="container">
        <div id="search">
          <h1>Search</h1>
          <input @input=${this.__inputChanged}>
        </div>
        <div id="results">
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-search";
  }
  static get properties() {
    return { 
      results: {
        type: Array
      }
    };
  }
  constructor() {
    super();
    this.results = [];
  }
  __inputChanged(e) {
    const value = e.target.value;
    const results = fetch('lunrSearchIndex.json').then(res => res.json());
    console.log('results:', results);
  }
}
window.customElements.define(HaxthemeSearch.tag, HaxthemeSearch);

class HaxthemeFaqs extends LitElement {
  static get tag() {
    return "haxtheme-faqs";
  }

  static get properties() {
    return {
      faqs: { type: Array }
    }
  }

  constructor() {
    super();
  }

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex: 1 1 auto;
          flex-direction: column;
        }

       /**
        * Hide the slotted content during edit mode. This must be here to work.
        */
        :host([edit-mode]) #slot {
          display: none;
        }

        #container {
          display: block;
          padding: 1em;
          max-width: 900px;
          margin: 0 auto;
        }

        #search {
          max-width: 900px;
          margin: auto;
        }

        input {
          margin: auto;
          padding: 15px;
          border: 1px solid #ccc;
          border-radius: 3px;
          margin-bottom: 10px;
          width: 100%;
          box-sizing: border-box;
          font-family: montserrat;
          color: #2C3E50;
          font-size: 13px;
        }
      `
    ];
  }

  render() {
    return html$1`
      <div id="container">
        <h1>Frequently Asked Questions</h1>
        <div id="results">
          <div id="contentcontainer">
            <div id="slot">
              <slot></slot>
            </div>
          </div>
          <odl-faqs tags="zoom"></odl-faqs>
        </div>
      </div>
    `;
  }
}
window.customElements.define(HaxthemeFaqs.tag, HaxthemeFaqs);

class HaxthemeFaq extends LitElement {
  static get properties() {
    return {
      activeItem: { type: Object }
    }
  }

  static get tag() {
    return "haxtheme-faq";
  }

  constructor() {
    super();
    this.activeItem = null;
    this.__disposer = [];
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  }

  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex: 1 1 auto;
          flex-direction: column;
        }

       /**
        * Hide the slotted content during edit mode. This must be here to work.
        */
        :host([edit-mode]) #slot {
          display: none;
        }

        #container {
          display: block;
          padding: 1em;
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
        }
      `
    ];
  }

  render() {
    return html$1`
      <div id="container">
        ${this.activeItem ? html$1`<h1>${this.activeItem.title}</h1>` : html$1``}
        <div id="contentcontainer">
          <div id="slot">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}
window.customElements.define(HaxthemeFaq.tag, HaxthemeFaq);

/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */

/**
 * `odl-haxtheme`
 * `ODL custom site theme`
 * @demo demo/index.html
 */
class OdlHaxtheme extends HAXCMSPolymerElementTheme {
  
  // render function
  static get template() {
    return html`
<style>:host {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  --theme-color-1: #363533;
  --theme-color-2: #e2801e;
  --theme-color-4: #fff;
  --site-print-button-button: {
    color: #a9a9a9;
  }
  --paper-button: {
      border-radius: none;
      text-decoration: none;
  };
}

:root {
  --haxtheme-page-banner-image-text-h1-color: #FFFFFF;
  --haxtheme-homepage-banner-image-text-h1-color: #FFFFFF;
  --site-recent-content-block-active-color: #e2801e;
  --site-rss-bg-color: var(--theme-color-2);

  --site-breadcrumb-color: #a9a9a9;
  --site-breadcrumb-text-decoration: none;
  --site-menu-button-button: {
    background-color: var(--theme-color-2);
    margin: 5px 0 15px;
    border-radius: none;
    color: var(--theme-color-4);
  };

  --site-menu-button-link: {
    text-decoration: none;
  };


 
  --site-menu-button-tooltip-bg: var(--theme-color-1);
  --site-rss-border-radius: 0;
  --site-rss-bg-active: var(--theme-color-2);
  --site-recent-content-block-item-link: {
    color: var(--theme-color-1);
  };
  
}

:host([hidden]) {
  display: none;
}

/* Scroll Button Styles */
scroll-button {
    position: fixed;
    right: 0;
    bottom: 65px;
    margin-right: 25px;
    border: 1px solid #f5f5f5;
  --scroll-button-button: {
    background-color: var(--theme-color-2);
  };
  --scroll-button-button-active: {
    background-color: var(--theme-color-2);
  }
}

  
iron-pages {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
/* Menu Styles */

odl-site-top-menu {
    width: 100%;
    --site-top-menu-bg: var(--theme-color-2);
    color: white;
  --site-top-menu-button: {
    padding: 15px 10px;
    margin: 0;
    width: 100%;
    border-radius: 0;
  };
  --site-top-menu-button-hover: {
    background-color: var(--theme-color-1);
    color: white;
  };
  --site-top-menu-link-active: {
    background-color: var(--theme-color-1);
    color: white;
  };
  --site-top-menu-spacing: {
    flex: 1 1 auto;
  };
  --site-top-menu-indicator: {
    border-bottom: 4px solid white;
  };
  --site-top-meu-wrapper: {
    background-color: var(--theme-color-2);
    display: flex;
    justify-content: stretch;
  };
  --site-top-menu-link: {
    width: 100%;
    background-color: var(--theme-color-2);
    color: var(--theme-color-4);
    text-decoration: none;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
  };
}

/* Table Styles */
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 18px;
  font-weight: 300;
}

th, td {
  border-bottom: solid 1px #dddddd;
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #ddd;
}

tr:nth-child(even){background-color: #f2f2f2;}

tr:hover {
  background-color: #ddd;
}
</style>

<page-topbar alert></page-topbar>
<odl-site-top-menu 
  conditions='{
    "parent": null,
    "location": {
      "value": ["syllabi", "spotlight", "coursemanagement", "lab", "pedagogy", "multimedia", "contingency", "search", "faqs"],
      "operator": "!="
    }
  }'>
</odl-site-top-menu>
<iron-pages selected="[[selectedPage]]">
    <haxtheme-home id="home" edit-mode$="[[editMode]]"></haxtheme-home>
    <haxtheme-news id="news" edit-mode$="[[editMode]]"></haxtheme-news>
    <haxtheme-team id="team" edit-mode$="[[editMode]]"></haxtheme-team>
    <haxtheme-courses id="courses" edit-mode$="[[editMode]]"></haxtheme-courses>
    <haxtheme-about id="about" edit-mode$="[[editMode]]"></haxtheme-about>
    <haxtheme-contact id="contact" edit-mode$="[[editMode]]"></haxtheme-contact>
    <haxtheme-blog id="blog" edit-mode$="[[editMode]]"></haxtheme-blog>
    <haxtheme-profile id="profile" edit-mode$="[[editMode]]"></haxtheme-profile>
    <haxtheme-course id="course" edit-mode$="[[editMode]]"></haxtheme-course>
    <haxtheme-syllabus id="syllabus" edit-mode$="[[editMode]]"></haxtheme-syllabus>
    <haxtheme-service-course id="coursemanagement" edit-mode$="[[editMode]]"></haxtheme-service-course>
    <haxtheme-service-lab id="lab" edit-mode$="[[editMode]]"></haxtheme-service-lab>
    <haxtheme-service-pedagogy id="pedagogy" edit-mode$="[[editMode]]"></haxtheme-service-pedagogy>
    <haxtheme-service-multimedia id="multimedia" edit-mode$="[[editMode]]"></haxtheme-service-multimedia>
    <haxtheme-spotlight id="spotlight" edit-mode$="[[editMode]]"></haxtheme-spotlight>
    <haxtheme-resources id="resources" edit-mode$="[[editMode]]"></haxtheme-resources>
    <haxtheme-search id="search" edit-mode$="[[editMode]]"></haxtheme-search>
    <haxtheme-faqs id="faqs" edit-mode$="[[editMode]]"></haxtheme-faqs>
    <haxtheme-faq id="faq" edit-mode$="[[editMode]]"></haxtheme-faq>
</iron-pages>
<scroll-button></scroll-button>
<page-footer></page-footer>`;
  }

  // properties available to the custom element for data binding
    static get properties() {
    let props = {
  /**
   * editting state for the page
   */
  "editMode": {
    "type": Boolean,
    "reflectToAttribute": true,
    "observer": "_editModeChanged"
  },
  "activeItemContent": {
    "type": String,
    "observer": "_activeItemContentChanged"
  },
  /**
   * Active item which is in JSON Outline Schema
   */
  "activeItem": {
    "type": Object
  },
  /**
   * a manifest json file decoded, in JSON Outline Schema format
   */
  "manifest": {
    "type": Object
  },
  /**
   * DOM node that wraps the slot
   */
  "contentContainer": {
    "type": Object,
    "value": null,
    "observer": "_contentContainerChanged"
  },
  /**
   * active manifest index, key to location in the manifest itemsarray
   */
  "activeManifestIndex": {
    "type": Number,
    "value": -1
  },
  /**
   * The "page" to show (overview or blog post itself).
   */
  "selectedPage": {
    "type": Number,
    "reflectToAttribute": true,
    "value": 0
  }
}
;
    if (super.properties) {
      props = Object.assign(props, super.properties);
    }
    return props;
  }
  constructor() {
    super();
    import('../../build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-top-menu.js');
    import('../../build/es6/node_modules/@polymer/paper-card/paper-card.js');
    import('../../build/es6/node_modules/@polymer/paper-button/paper-button.js');
    import('../../build/es6/node_modules/@polymer/iron-icons/iron-icons.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/promo-tile/promo-tile.js');
    import('../../build/es6/node_modules/@lrnwebcomponents/scroll-button/scroll-button.js');
  }
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "odl-haxtheme";
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
    autorun(reaction => {
      this._locationChanged(store.location);
      this.__disposer.push(reaction);
    });
    autorun(reaction => {
      this.activeItemContent = toJS(store.activeItemContent);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
  /**
   * Notice content has changed, ensure it shows up in the right place
   * in the theme
   */
  _activeItemContentChanged(newValue) {
    if (newValue) {
      var target;
      // pass in the current location from store
      const location = store.location;
      switch (location.route.name) {
        case "home":
        case "news":
        case "team":
        case "courses":
        case "about":
          target = location.route.name;
          break;
        default:
          if (location.route.path.startsWith("blog-posts/")) {
            target = "blog";
          } else if (location.route.path.startsWith("team-directory/")) {
            target = "profile";
          } else if (location.route.path.startsWith("courses/")) {
            target = "course";
          } else if (location.route.path.startsWith("syllabi/")) {
            target = "syllabus";
          } else if (location.route.path.startsWith("about/")) {
            target = "about";
          } else if (location.route.path.startsWith("spotlight/")) {
            target = "spotlight";
          } else if (location.route.path.startsWith("resources")) {
            target = "resources";
          } else if (location.route.path.startsWith("search")) {
            target = "search";
          } else if (location.route.path.startsWith("faqs/")) {
            target = "faq";
          } else if (location.route.path.startsWith("faqs")) {
            target = "faqs";
          }
          break;
      }
      if (target) {
        wipeSlot(this.shadowRoot.querySelector("#" + target), "*");
        let frag = document.createRange().createContextualFragment(newValue);
        dom(this.shadowRoot.querySelector("#" + target)).appendChild(frag);
      }
    }
  }
  /**
   * Notice active item changed state
   */
  _locationChanged(location) {
    console.log(location);
    if (typeof location !== typeof undefined) {
      var target;
      switch (location.route.name) {
        case "home":
          this.selectedPage = 0;
          target = location.route.name;
          break;
        case "news":
          this.selectedPage = 1;
          target = location.route.name;
          break;
        case "team":
          this.selectedPage = 2;
          target = location.route.name;
          break;
        case "courses":
          this.selectedPage = 3;
          target = location.route.name;
          break;
        case "about":
          this.selectedPage = 4;
          target = location.route.name;
          break;
        case "contact":
          this.selectedPage = 5;
          target = location.route.name;
          break;
        case "search":
          this.selectedPage = 16;
          target = location.route.name;
          break;
        case "faqs":
          this.selectedPage = 17;
          target = location.route.name;
          break;
        // case "resources":
        //   this.selectedPage = 15;
        //   target = location.route.name;
        //   break;
          default:
              // normalize the route path so that this logic works on sub directory / multi-site setup
              const routePath = location.route.path.startsWith("/") ? location.route.path : `/${location.route.path}`;
              if (routePath.startsWith("/blog-posts/")) {
                this.selectedPage = 6;
                target = "blog";
              } else if (routePath.startsWith("/team-directory/")) {
                this.selectedPage = 7;
                target = "profile";
              } else if (routePath.startsWith("/courses/")) {
                this.selectedPage = 8;
                target = "course";
              } else if (routePath.startsWith("/syllabi/")) {
                this.selectedPage = 9;
                target = "syllabus";
              } else if (routePath.startsWith("/coursemanagement")) {
                this.selectedPage = 10;
                target = "coursemanagement";
              } else if (routePath.startsWith("/lab")) {
                this.selectedPage = 11;
                target = "lab";
              } else if (routePath.startsWith("/pedagogy")) {
                this.selectedPage = 12;
                target = "pedagogy";
              } else if (routePath.startsWith("/multimedia")) {
                this.selectedPage = 13;
                target = "multimedia";
              } else if (routePath.startsWith("/spotlight/")) {
                this.selectedPage = 14;
                target = "spotlight";
              } else if (routePath.startsWith("/resources")) {
                this.selectedPage = 15;
                target = "resources";
              } else if (routePath.startsWith("/search")) {
                this.selectedPage = 16;
                target = "search";
              } else if (routePath.startsWith("/faqs/")) {
                this.selectedPage = 18;
                target = "faq";
              }
              
              break;
          }
      if (target) {
        this.contentContainer = this.shadowRoot
          .querySelector("#" + target)
          .shadowRoot.querySelector("#contentcontainer");
      }

      window.scrollTo(0, 0);
      // this.set('activeItem', e.detail);
    } else {
      this.selectedPage = 0;
    }
  }
}
window.customElements.define(OdlHaxtheme.tag, OdlHaxtheme);

// stuff
