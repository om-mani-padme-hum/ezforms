/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Require local modules */
const div = require(`./div`);
const label = require(`./label`);
const select = require(`./select`);

/** Configure EZSelect class */
const configEZSelect = {
  className: `EZSelect`,
  properties: [    
    { name: `cols`, type: `int`, default: 16 },
    { name: `divClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `labelClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `selectClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `label`, type: `string` },
    { name: `id`, type: `string` },
    { name: `multiple`, type: `boolean` },
    { name: `required`, type: `boolean` },
    { name: `name`, type: `string` },
    { name: `options`, type: `array`, arrayOf: { instanceOf: `Option` } }
  ]
};

/** Create EZSelect class */
ezobjects.createClass(configEZSelect);

/** Create method for adding class to div classes array */
EZSelect.prototype.addDivClass = function (className) {
  /** If the class doesn't already exist in the div classes array, add it */
  if ( !this.divClasses().includes(className) )
    this.divClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to select classes array */
EZSelect.prototype.addSelectClass = function (className) {
  /** If the class doesn't already exist in the select classes array, add it */
  if ( !this.selectClasses().includes(className) )
    this.selectClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to label classes array */
EZSelect.prototype.addLabelClass = function (className) {
  /** If the class doesn't already exist in the label classes array, add it */
  if ( !this.labelClasses().includes(className) )
    this.labelClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from div classes array */
EZSelect.prototype.removeDivClass = function (className) {
  /** Find index of class in div classes array (if it exists) */
  const index = this.divClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from div classes array */
  if ( index !== -1 )
    this.divClasses(this.divClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from select classes array */
EZSelect.prototype.removeSelectClass = function (className) {
  /** Find index of class in select classes array (if it exists) */
  const index = this.selectClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from select classes array */
  if ( index !== -1 )
    this.selectClasses(this.selectClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from label classes array */
EZSelect.prototype.removeLabelClass = function (className) {
  /** Find index of class in label classes array (if it exists) */
  const index = this.labelClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from label classes array */
  if ( index !== -1 )
    this.labelClasses(this.labelClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for rendering element */
EZSelect.prototype.render = function (indent = 0) {
  /** Validate cols */
  if ( this.cols() < 1 || this.cols() > 16 )
    throw new RangeError(`EZSelect.render(): Invalid number, cols must be between 1 and 16 inclusive.`);
  
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
  
  /** Create select element */
  const select1 = new select.Select();
  
  /** If there are select classes to include, add them to select */
  if ( this.selectClasses().length > 0 )
    this.selectClasses().map(x => select1.addClass(x));
  
  /** If id is set, transfer to select element */
  if ( this.id().length > 0 )
    select1.id(this.id());
  
  /** If name is set, transfer to select element */
  if ( this.name().length > 0 )
    select1.name(this.name());
  
  /** If multiple is set, transfer to select element */
  if ( this.multiple() )
    select1.multiple(true);
  
  /** If required is set, transfer to select element */
  if ( this.required() )
    select1.required(true);
  
  /** Append options to select contents */
  select1.contents().push(...this.options());
  
  /** Append input to div contents */
  div1.contents().push(select1);
  
  /** Return markup */
  return div1.render(indent);
};

/** Export class from module */
module.exports.EZSelect = EZSelect;
