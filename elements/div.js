/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Require local modules */
const containerElement = require(`./container-element`);

/** Configure class */
const configDiv = {
  className: `Div`,
  extends: containerElement.ContainerElement
};

/** Create class */
ezobjects.createClass(configDiv);

/** Create method for rendering element */
Div.prototype.render = function (indent = 0) {
  /** Set tag */
  this.tag(`div`);
  
  /** Return markup */
  return containerElement.ContainerElement.prototype.render.call(this, indent);
};

/** Export class from module */
module.exports.Div = Div;
