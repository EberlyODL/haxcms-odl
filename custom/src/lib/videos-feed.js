import { LitElement, html, css } from "lit-element/lit-element.js";
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
          display: flex;
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
    return html`
      <div id="video_feed_wrap">
        <div class="feed_header">
          <h2>Videos</h2>
        </div>
        <div id="video_feed">
          <div id="card_wrap">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/5n7WCeHXc4A"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div id="card_wrap">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/GVTB-jnWDRk"
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
export { VideosFeed };
