import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/query/site-query.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";
import "./news-card";
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
        image="files/theme-images/page-banners/news_banner.jpg"
        text="News"
        alt="Gateway to the Sciences"
      ></page-banner>
      <div id="news_wrap">
        <div class="news_container">
          <div class="news_page_feed">
            <site-query
              result="{{__items}}"
              conditions='{"metadata.type": "news"}'
              limit="5"
              sort
            ></site-query>
            <dom-repeat items="[[__items]]" mutable-data>
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
            <div id="twitter_feed">
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
            </div>
            <div id="news_archive">
              <site-recent-content-block
                title="News Archive"
                conditions='{"metadata.type": "news"}'
                result="{{__items}}"
                limit="5"
                start-index="5"
                sort
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
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/blocks/site-recent-content-block.js");
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-rss-button.js");
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
export { HaxThemeNews };
