import { html, css, LitElement } from "lit-element/lit-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./odl-accordion-item.js"

class OdlAccordion extends LitElement {
  static get properties() {
    return {
      tags: { type: String },
      results: { type: Array },
      search: { type: Boolean },
      isLoggedIn: { type: Boolean },
      parent: { type: String },
      items: { type: String }
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
    this.parent = null
    this.items = "";
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

  static get haxProperties() {
    return {
      canScale: false,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "Accordion",
        description: "",
        icon: "icons:file-download",
        color: "blue",
        meta: {
          author: "LRNWebComponents"
        }
      },
      settings: {
        quick: [],
        configure: [
          {
            property: "items",
            title: "Items",
            description: "Specify the items you want included by item id. Comma separated.",
            inputMethod: "textfield",
            icon: "editor:title"
          }
        ],
        advanced: []
      }
    };
  }

  firstUpdated() {
    this.__getItems();
  }

  render() {
    return html`
      ${this.search ? html`
        <div id="search-container">
          <input id="search" @input=${this.__inputChanged} />
        </div>
      ` : html``}
      <div id="results-container">
        ${this.results
          ? html`
              <div class="container">
                <div class="accordion">
                  ${this.results.map(result => html`
                    <odl-faqs-item .item=${result} .isLoggedIn=${this.isLoggedIn}></odl-faqs-item>
                  `)}
                </div>
              </div>
            `
          : html``}
      </div>
      <slot></slot>
    `;
  }

  __getItems() {
    let params = [];
    if (this.tags) {
      params.push(`tags=${this.tags}`);
    }
    if (this.parent) {
      params.push(`parent=${this.parent}`);
    }
    if (this.items && this.items !== "") {
      params.push(`items=${this.items}`);
    }
    fetch(`/service/api/items?${params.join('&')}`)
      .then(res => res.json())
      .then(res => this.results = res);
  }
}

customElements.define("odl-accordion", OdlAccordion);

export { OdlAccordion };