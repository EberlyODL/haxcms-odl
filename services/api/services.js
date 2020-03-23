const fs = require("fs");
const path = require("path");
const _ = require("lodash");
// the location of the haxcms site in this container
const HAXCMS_PATH = process.env.HAXCMS_PATH || "/haxcms"
// unique id of the parent of the faqs in site.json
const FAQS_PARENT_ID = process.env.FAQS_PARENT_ID || "faqs"

const faqs = (tags = null) => {
  let faqs = [];
  if (fs.existsSync(path.join(HAXCMS_PATH))) {
    // check if site.json exists
    if (fs.existsSync(path.join(HAXCMS_PATH, "site.json"))) {
      const siteJSON = JSON.parse(fs.readFileSync(path.join(HAXCMS_PATH, "site.json"), 'utf8'));
      // make sure we have items
      if (siteJSON.items) {
        let _faqs = siteJSON.items.filter(i => i.parent === FAQS_PARENT_ID);
        // filter tags
        if (tags) {
          _faqs = _faqs.filter(i => {
            if (_.has(i, 'metadata.fields.tags')) {
              const itemTagsArray = i.metadata.fields.tags;
              const diff = _.difference(itemTagsArray, tags);
              // find out if there were any matches by asking
              // if the diff array is less than the itemtags array.
              return diff.length < itemTagsArray.length;
            }
            else {
              return false;
            }
          })
        }
        faqs = _faqs;
      }
    }
  }

  // Load the html for the faqs
  faqs = faqs.map(faq => {
    try {
      const pageContent = fs.readFileSync(path.join(HAXCMS_PATH, faq.location), 'utf8');
      faq.content = pageContent;
    } catch (error) {
      console.error(`Could not load page for faq item.`, error);
    }
    return faq;
  })

  return faqs;
}

module.exports.faqs = faqs;