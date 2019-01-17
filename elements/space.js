/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Require local modules */
const textElement = require(`./text-element`);

/** Configure class */
const configSpace = {
  className: `Space`,
  extends: textElement.TextElement,
  properties: [
    { name: `cols`, type: `int` }
  ]
};

/** Create class */
ezobjects.createClass(configSpace);

/** Create method for rendering element */
Space.prototype.render = function (indent = 0) {
  /** Set tag */
  this.tag(`div`);
  
  /** Set cols */
  this.addClass(`col-${this.cols()}`);
  
  /** Set text if left blank */
  if ( this.text().length == 0 )
    this.text(`&nbsp;`);
  
  /** Return markup */
  return textElement.TextElement.prototype.render.call(this, indent);
};

/** Export class config and class from module */
module.exports.Space = Space;
