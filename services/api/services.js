const fs = require("fs");
const path = require("path");
const _ = require("lodash");
// the location of the haxcms site in this container
const HAXCMS_PATH = process.env.HAXCMS_PATH || "/haxcms"
// unique id of the parent of the faqs in site.json
const FAQS_PARENT_ID = process.env.FAQS_PARENT_ID || "faqs"


/**
 * 
 * @param {Array} tags  
 * @param {String} operator
 *  - and
 *  - or
 *  - not 
 * @param {Boolean} includeContent
 *  include the html of the items content
 */
const items = ({ tags = null, operator = 'and', includeContent = true, parent = null, items = null }) => {
  let result = [];
  if (fs.existsSync(path.join(HAXCMS_PATH))) {
    // check if site.json exists
    if (fs.existsSync(path.join(HAXCMS_PATH, "site.json"))) {
      const siteJSON = JSON.parse(fs.readFileSync(path.join(HAXCMS_PATH, "site.json"), 'utf8'));
      // make sure we have items
      if (siteJSON.items) {
        let _items = siteJSON.items;
        // if there is a parent then filter on that.
        if (parent) {
          _items = _items.filter(i => i.parent === parent);
        }
        if (items) {
          _items = _items.filter(i => items.includes(i.id));
        }
        // filter tags
        if (tags) {
          _items = _items.filter(i => {
            if (_.has(i, 'metadata.fields.tags')) {
              const itemTagsArray = i.metadata.fields.tags;
              const diff = _.difference(itemTagsArray, tags);
              // find out if there were any matches by asking
              // if the diff array is less than the itemtags array.
              if (operator === 'not') {
                return diff.length === itemTagsArray.length;
              }
              else if (operator === 'or') {
                return diff.length < itemTagsArray.length;
              }
              else {
                // operator === 'and'
                return diff.length === 0;
              }
            }
            else {
              return false;
            }
          })
        }
        result = _items;
      }
    }
  }

  // Load the html for the faqs
  if (includeContent) {
    result = result.map(item => {
      try {
        const pageContent = fs.readFileSync(path.join(HAXCMS_PATH, item.location), 'utf8');
        item.content = pageContent;
      } catch (error) {
        console.error(`Could not load page for faq item.`, error);
      }
      return item;
    })
  }

  return result;
}

module.exports.items = items;