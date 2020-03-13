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
          height: 100vh;
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
    this.hideActiveIndicator = false;
    this.preventAutoScroll = false;
    this.trackIcon = "";
    this.__disposer = [];
    this.toplevel = null;
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
      routerManifest: {
        type: Object
      },
      /**
       * acitvely selected item
       */
      activeId: {
        type: String,
        attribute: "active-id"
      },
      /**
       * Binding for active indicator and auto scrolling
       */
      hideActiveIndicator: {
        type: Boolean,
        attribute: "hide-active-indicator"
      },
      /**
       * prevent the automatic scrolling when items become active
       */
      preventAutoScroll: {
        type: Boolean,
        attribute: "prevent-auto-scroll"
      },
      /**
       * allow for visualizing the tracking of page requests
       */
      trackIcon: {
        type: String,
        attribute: "track-icon"
      },
      /**
       * Where to start from
       */
      toplevel: {
        type: String
      }
    };
  }
  /**
   * LitElement life cycle - render callback
   */
  render() {
    return html`
      <map-menu
        .selected="${this.activeId}"
        .manifest="${this.routerManifest}"
        ?active-indicator="${!this.hideActiveIndicator}"
        selected="${this.activeId}"
        ?auto-scroll="${!this.preventAutoScroll}"
        @active-item="${this.mapMenuActiveChanged}"
      ></map-menu>
    `;
  }
  firstUpdated(changedProperties) {
    // executing this here ensures that the timing is correct with highlighting the active item in the menu
    autorun(reaction => {
      setTimeout(() => {
        this.activeId = toJS(store.activeId);
      }, 2000)
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
  __updateMenu(routerManifest) {
    let _manifest = routerManifest

    // figure out where to start
    const topLevelObject = routerManifest.items.find(i => i.id === "resources");
    let newManifestItems = []
    const _assembleChildren = (_item) => {
      newManifestItems = [ ...newManifestItems, _item]
      if (_item.children) {
        if (_item.children.length > 0) {
          for (let _child of _item.children) {
            return _assembleChildren(_child);
          }
        }
      }
    }
    _assembleChildren(topLevelObject);
    console.log(assembleChildren(topLevelObject))
    let newManifestItems = [ ...assembleChildren(topLevelObject)]

    this.routerManifest = Object.assign({}, _manifest, { items: newManifestItems })
  }
}
window.customElements.define(ResourcesSidemenu.tag, ResourcesSidemenu);
export { ResourcesSidemenu };
