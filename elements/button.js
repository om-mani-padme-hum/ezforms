/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Require local modules */
const textElement = require(`./text-element`);

/** Configure class */
const configButton = {
  className: `Button`,
  extends: textElement.TextElement,
  properties: [
    { name: `id`, type: `string` },
    { name: `type`, type: `string`, default: `submit` }
  ]
};

/** Create class */
ezobjects.createClass(configButton);

/** Create method for rendering element */
Button.prototype.render = function (indent = 0) {
  /** Validate type */
  if ( this.type() != `submit` && this.type() != `button` && this.type() != `reset` )
    throw new SyntaxError(`Button.render(): Invalid button type, must be 'submit', 'reset', or 'button'.`);
  
  /** Set tag */
  this.tag(`button`);
  
  /** Set type attribute */
  this.addAttribute(`type`, this.type());
  
  /** If id is set, add attribute */
  if ( this.id().length > 0 )
    this.addAttribute(`id`, this.id());
  
  /** Return markup */
  return textElement.TextElement.prototype.render.call(this, indent);
};

/** Export class config and class from module */
module.exports.Button = Button;
