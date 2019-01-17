/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Require local modules */
const textElement = require(`./text-element`);

/** Configure class */
const configLabel = {
  className: `Label`,
  extends: textElement.TextElement
};

/** Create class */
ezobjects.createClass(configLabel);

/** Create method for rendering element */
Label.prototype.render = function (indent = 0) {
  /** Set tag */
  this.tag(`label`);
  
  /** Return markup */
  return textElement.TextElement.prototype.render.call(this, indent);
};

/** Export class config and class from module */
module.exports.Label = Label;
