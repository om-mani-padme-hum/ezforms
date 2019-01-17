/** Require external modules */
const ezobjects = require(`ezobjects`);
const util = require(`util`);

/** Configure class */
const configElement = {
  className: `Element`,
  properties: [
    { name: `attributes`, type: `Array`, arrayOf: { type: `Object` } },
    { name: `classes`, type: `Array`, arrayOf: { type: `string` } },
    { name: `tag`, type: `string` }
  ]
};

/** Create class */
ezobjects.createClass(configElement);

/** Create method for adding attribute to attributes object */
Element.prototype.addAttribute = function (name, value) {  
  /** Set the attribute */
  this.attributes().push({ key: name, val: value });

  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to classes array */
Element.prototype.addClass = function (className) {
  /** If the class doesn't already exist in the classes array, add it */
  if ( !this.classes().includes(className) )
    this.classes().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing attribute from attributes object */
Element.prototype.removeAttribute = function (name) {
  /** Delete the attribute */
  const index = this.attributes().findIndex(x => x.key == name);
  
  if ( index !== -1 )
    this.attributes().splice(index, 1);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from classes array */
Element.prototype.removeClass = function (className) {
  /** Find index of class in classes array (if it exists) */
  const index = this.classes().findIndex(x => x == className);
  
  /** If index exists, remove class from classes array */
  if ( index !== -1 )
    this.classes(this.classes().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for rendering element */
Element.prototype.render = function (indent = 0) {
  /** Start tag */
  let markup = ` `.repeat(indent) + `<${this.tag()}`;
  
  /** If there are classes to add, add them */
  if ( this.classes().length > 0 )
    markup += ` class='${this.classes().join(` `)}'`;
    
  /** If there are other attributes to include, append them */
  if ( this.attributes().length > 0 ) {
    this.attributes().forEach((obj) => {
      markup += ` ${obj.key}='${obj.val}'`;
    });
  }
  
  /** Close tag */
  markup += `>\n`;
  
  /** Return markup */
  return markup;
};

/** Export class config and class from module */
module.exports.configElement = configElement;
module.exports.Element = Element;
