/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Require local modules */
const textElement = require(`./text-element`);

/** Configure Option class */
const configOption = {
  className: `Option`,
  extends: textElement.TextElement,
  properties: [
    { name: `selected`, type: `boolean` },
    { name: `value`, type: `string` }
  ]
};

/** Create Option class */
ezobjects.createClass(configOption);

/** Render element */
Option.prototype.render = function (indent = 0) {
  /** Set tag */
  this.tag(`option`);
  
  /** Set value attribute */
  this.addAttribute(`value`, this.value());
  
  /** If selected is set, add attribute */
  if ( this.selected() )
    this.addAttribute(`selected`, `selected`);
  
  /** Verify label exists */
  if ( this.text().length == 0 )
    throw new SyntaxError(`Option.render(): Invalid option text, use the text() method to set a label for each option.`);
  
  /** Return markup */
  return textElement.TextElement.prototype.render.call(this, indent);
};

/** Export class from module */
module.exports.Option = Option;
