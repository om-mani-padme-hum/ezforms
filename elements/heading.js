/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Require local modules */
const textElement = require(`./text-element`);

/** Configure class */
const configHeading = {
  className: `Heading`,
  extends: textElement.TextElement,
  properties: [
    { name: `rank`, type: `int`, default: 1 }
  ]
};

/** Create class */
ezobjects.createClass(configHeading);

/** Create method for rendering element */
Heading.prototype.render = function (indent = 0) {
  /** Set tag */
  this.tag(`h${this.rank()}`);
    
  /** Validate rank */
  if ( this.rank() < 1 || this.rank() > 6 )
    throw new RangeError(`Heading.render(): Invalid number, rank must be between 1 and 6 inclusive.`);
    
  /** Return markup */
  return textElement.TextElement.prototype.render.call(this, indent);
};

/** Export class from module */
module.exports.Heading = Heading;
