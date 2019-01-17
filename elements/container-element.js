/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Require local modules */
const element = require(`./element`);

/** Configure class */
const configContainerElement = {
  className: `ContainerElement`,
  extends: element.Element,
  properties: [
    { name: `contents`, type: `array`, arrayOf: { instanceOf: `Element` } }
  ]
};

/** Create class */
ezobjects.createClass(configContainerElement);

/** Create method for rendering element */
ContainerElement.prototype.render = function (indent = 0) {
  /** Start tag */
  let markup = element.Element.prototype.render.call(this, indent);
    
  /** Loop through contents... */
  this.contents().forEach(function (item) {
    /** Render content item */
    markup += item.render(indent + 2);
  });
  
  /** Close tag */
  markup += ` `.repeat(indent) + `</${this.tag()}>\n`;
  
  /** Return markup */
  return markup;
};

/** Export class config and class from module */
module.exports.configContainerElement = configContainerElement;
module.exports.ContainerElement = ContainerElement;
