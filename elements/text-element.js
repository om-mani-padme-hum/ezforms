/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Require local modules */
const element = require(`./element`);

/** Configure class */
const configTextElement = {
  className: `TextElement`,
  extends: element.Element,
  properties: [    
    { name: `text`, type: `string` }
  ]
};

/** Create class */
ezobjects.createClass(configTextElement);

/** Create method for rendering element */
TextElement.prototype.render = function (indent = 0) {
  /** Start tag */
  let markup = element.Element.prototype.render.call(this, indent).split(`\n`)[0];
  
  /** Append text */
  markup += this.text();
  
  /** Close tag */
  markup += `</${this.tag()}>\n`;
  
  /** Return markup */
  return markup;
};

/** Export class config and class from module */
module.exports.configTextElement = configTextElement;
module.exports.TextElement = TextElement;
