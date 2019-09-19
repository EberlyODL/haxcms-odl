import { LitElement, html, css } from "lit-element/lit-element.js";

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
    return html`
      <div id="news_wrap">
        <div
          id="news_image"
          style="background-image:url(${this.image})"
          alt="${this.alts}"
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
    import("@polymer/paper-button/paper-button.js");
  }
}
window.customElements.define(NewsCard.tag, NewsCard);
export { NewsCard };
