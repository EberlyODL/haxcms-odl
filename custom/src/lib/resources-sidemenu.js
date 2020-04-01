/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";

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
          height: auto;
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
    import("@lrnwebcomponents/map-menu/map-menu.js");
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
    return html`
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
      return html`
        <ul>
          <li>
            <a href="${item.location}">${item.title}</a>
            ${item.children && item.children.length > 0 ? html`
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
export { ResourcesSidemenu };
