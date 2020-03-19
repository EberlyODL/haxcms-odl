import { html, css, LitElement } from "lit-element/lit-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./hax-faqs-item.js"

class HaxForm extends LitElement {
  static get properties() {
    return {
      results: { type: Array }
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
    autorun(reaction => {
      // filter faqs
      this.__getFaqs(toJS(store.routerManifest));
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div id="search-container">
        <input id="search" @input=${this.__inputChanged} />
      </div>
      <div id="results-container">
        ${this.results
          ? html`
              <div class="container">
                <div class="accordion">
                  ${this.results.map(result => html`
                    <hax-faqs-item .item=${result}></hax-faqs-item>
                  `)}
                </div>
              </div>
            `
          : html``}
      </div>
      <slot></slot>
    `;
  }

  __renderIcon(active) {
    if (active) {
      return html`
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
      return html`
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

  __getFaqs(manifest) {
    if (manifest) {
      if (manifest.items) {
        const faqsParent = manifest.items.find(i => i.id === "faqs");
        if (faqsParent) {
          if (faqsParent.children) {
            this.results = faqsParent.children;
          }
        }
      }
    }
  }

  __renderSearchItem(item) {
    const active = (Math.random() < 0.5)
    const contentNode = document.createElement('div')
    contentNode.classList.add('content')
    contentNode.innerHTML = item.content;
    return html`
      <div class="accordion-item">
        <a>${item.title}
          <span class="icon">${this.__renderIcon(active)}</span></a>
      </div>
    `;
  }
}

customElements.define("hax-faqs", HaxForm);

export { HaxForm };
