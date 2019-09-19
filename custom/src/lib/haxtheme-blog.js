import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";

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
        padding-left: 15px;
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
          <div id="share_actions">
            <site-print-button></site-print-button>
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
              title="Recent News"
              conditions='{"metadata.type": "news"}'
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
    import("@polymer/iron-image/iron-image.js");
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js");
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js");
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/blocks/site-recent-content-block.js");
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js");
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
export { HaxThemeBlog };
