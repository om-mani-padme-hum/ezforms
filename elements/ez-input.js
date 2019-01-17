/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Require local modules */
const div = require(`./div`);
const input = require(`./input`);
const label = require(`./label`);

/** Configure EZInput class */
const configEZInput = {
  className: `EZInput`,
  properties: [    
    { name: `cols`, type: `int`, default: 16 },
    { name: `divClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `inputClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `inputAttributes`, type: `array`, arrayOf: { type: `string` } },
    { name: `labelClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `label`, type: `string` },
    { name: `id`, type: `string` },
    { name: `min`, type: `float`, default: -1 },
    { name: `max`, type: `float`, default: -1 },
    { name: `name`, type: `string` },
    { name: `required`, type: `boolean` },
    { name: `type`, type: `string` },
    { name: `value`, type: `string` }
  ]
};

/** Create EZInput class */
ezobjects.createClass(configEZInput);

/** Create method for adding class to div classes array */
EZInput.prototype.addDivClass = function (className) {
  /** If the class doesn't already exist in the div classes array, add it */
  if ( !this.divClasses().includes(className) )
    this.divClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding attribute to input attributes object */
EZInput.prototype.addInputAttribute = function (name, value) {
  /** Set the attribute */
  this.inputAttributes[name] = value;
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to input classes array */
EZInput.prototype.addInputClass = function (className) {
  /** If the class doesn't already exist in the input classes array, add it */
  if ( !this.inputClasses().includes(className) )
    this.inputClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to label classes array */
EZInput.prototype.addLabelClass = function (className) {
  /** If the class doesn't already exist in the label classes array, add it */
  if ( !this.labelClasses().includes(className) )
    this.labelClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from div classes array */
EZInput.prototype.removeDivClass = function (className) {
  /** Find index of class in div classes array (if it exists) */
  const index = this.divClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from div classes array */
  if ( index !== -1 )
    this.divClasses(this.divClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing attribute from input attributes object */
EZInput.prototype.removeInputAttribute = function (name) {
  /** Delete the attribute */
  delete this.inputAttributes[name];
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from input classes array */
EZInput.prototype.removeInputClass = function (className) {
  /** Find index of class in input classes array (if it exists) */
  const index = this.inputClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from input classes array */
  if ( index !== -1 )
    this.inputClasses(this.inputClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from label classes array */
EZInput.prototype.removeLabelClass = function (className) {
  /** Find index of class in label classes array (if it exists) */
  const index = this.labelClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from label classes array */
  if ( index !== -1 )
    this.labelClasses(this.labelClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for rendering element */
EZInput.prototype.render = function (indent = 0) {
  /** Validate cols */
  if ( this.cols() < 1 || this.cols() > 16 )
    throw new RangeError(`EZInput.render(): Invalid number, cols must be between 1 and 16 inclusive.`);
  
  /** Create div element */
  const div1 = new div.Div();
  
  /** Set required cols class on div */
  div1.addClass(`col-${this.cols()}`);
  
  /** If there are div classes to include, add them to div */
  if ( this.divClasses().length > 0 )
    this.divClasses().map(x => div1.addClass(x));
  
  /** Create label element */
  const label1 = new label.Label();
  
  /** If there are label classes to include, add them to label */
  if ( this.labelClasses().length > 0 )
    this.labelClasses().map(x => label1.addClass(x));

  /** Set label text */
  label1.text(this.label());

  /** Append label to div contents */
  div1.contents().push(label1);
  
  /** Create input element */
  const input1 = new input.Input();
  
  /** If there are input attributes to include, append them */
  if ( Object.keys(this.inputAttributes()).length > 0 ) {
    Object.keys(this.inputAttributes()).forEach((key) => {
      input1.addAttribute(key, this.inputAttributes()[key]);
    });
  }
  
  /** If there are input classes to include, add them to input */
  if ( this.inputClasses().length > 0 )
    this.inputClasses().map(x => input1.addClass(x));
  
  /** If id is set, add attribute */
  if ( this.id().length > 0 )
    input1.id(this.id());
  
  /** If min is set, add attribute */
  if ( this.min() >= 0 )
    input1.min(this.min());
  
  /** If max is set, add attribute */
  if ( this.max() >= 0 )
    input1.max(this.max());
  
  /** If name is set, add attribute */
  if ( this.name().length > 0 )
    input1.name(this.name());
  
  /** If name is set, add attribute */
  if ( this.value().length > 0 )
    input1.value(this.value());
  
  /** If required is set, transfer to input element */
  if ( this.required() )
    input1.required(true);
  
  if ( this.type().length == 0 )
    throw new SyntaxError(`EZInput.render(): Input type not set, set this using the type() setter on the input.`);
  
  /** Set input type */
  input1.type(this.type());
  
  /** Append input to div contents */
  div1.contents().push(input1);
  
  /** Return markup */
  return div1.render(indent);
};

/** Export class from module */
module.exports.EZInput = EZInput;
