import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/query/site-query.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";

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
    import("@polymer/iron-image/iron-image.js");
    import("@polymer/paper-button/paper-button.js");
    import("@polymer/iron-icons/iron-icons.js");
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
export { NewsFeed };
