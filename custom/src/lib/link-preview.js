import { LitElement, html, css } from "lit-element/lit-element.js";

class LinkPreview extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          --link-preview-link-color: #000;
          --link-preview-accent-color: #e2801e;
          --link-preview-title-font-size: 28px;
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
    return html`
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
    import("@polymer/iron-image/iron-image.js");
  }
}
window.customElements.define(LinkPreview.tag, LinkPreview);
export { LinkPreview };
