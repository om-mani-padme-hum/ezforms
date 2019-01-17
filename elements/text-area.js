/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Require local modules */
const textElement = require(`./text-element`);

/** Configure class */
const configTextArea = {
  className: `TextArea`,
  extends: textElement.TextElement,
  properties: [
    { name: `rows`, type: `int`, default: 4 },
    { name: `required`, type: `boolean` },
    { name: `name`, type: `string` }
  ]
};

/** Create class */
ezobjects.createClass(configTextArea);

/** Create method for rendering element */
TextArea.prototype.render = function (indent = 0) {
  /** Validate rows */
  if ( this.rows() < 1 || this.rows() > 100 )
    throw new RangeError(`TextArea.render(): Invalid number, rows must be between 1 and 100 inclusive.`);
  
  /** Set tag */
  this.tag(`textarea`);
  
  /** Set rows */
  this.addAttribute(`rows`, this.rows());
  
  /** If name is set, add as attribute */
  if ( this.name().length > 0 )
    this.addAttribute(`name`, this.name());
  
  /** If required is set, add attribute */
  if ( this.required() )
    this.addAttribute(`required`, `required`);
  
  /** Return markup */
  return textElement.TextElement.prototype.render.call(this, indent);
};

/** Export class from module */
module.exports.TextArea = TextArea;
