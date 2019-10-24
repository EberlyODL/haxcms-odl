import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
class ContactForm extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        #contact-form input[type="text"],
        #contact-form input[type="email"],
        #contact-form textarea {
            width: 100%;
            box-shadow: inset 0 1px 2px #ddd, 0 1px 0 #fff;
            border: 1px solid #ccc;
            background: #fff;
            margin: 0 0 5px;
            padding: 10px;
          }
          #contact-form button[type="submit"] {
            cursor: pointer;
            width: 100%;
            border: none;
            background: #e2801e;
            color: #fff;
            margin: 0 0 5px;
            padding: 10px;
            height: 50px;
            font-size: 18px;
            text-transform: uppercase;
        }
      </style>
      <!-- action property needs a destination url -->
      <form id="contact-form" action="/" method="post">
        <div>
          <label>
            <span>Name:</span>
            <input
              placeholder="Full name"
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </label>
        </div>
        <div>
          <label>
            <span>Email:</span>
            <input
              placeholder="name@example.com"
              type="email"
              tabindex="2"
              required
            />
          </label>
        </div>
        <div>
          <label>
            <span>Message:</span>
            <textarea
              placeholder="Comments"
              tabindex="3"
              required
              rows="5" 
              cols="40"
            ></textarea>
          </label>
        </div>
          <button name="submit" type="submit" id="contact-submit">
            Submit
          </button>
        </div>
      </form>
    `;
  }
  static get tag() {
    return "contact-form";
  }
  connectedCallback() {
    super.connectedCallback();
    this.__disposer = [];
    autorun(reaction => {
      this.manifest = toJS(store.routerManifest);
      this.__disposer.push(reaction);
    });
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

window.customElements.define(ContactForm.tag, ContactForm);
export { ContactForm };
