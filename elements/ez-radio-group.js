/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Require local modules */
const div = require(`./div`);
const input = require(`./input`);
const label = require(`./label`);

/** Configure EZRadioGroup class */
const configEZRadioGroup = {
  className: `EZRadioGroup`,
  properties: [
    { name: `align`, type: `string`, default: `horizontal` },
    { name: `cols`, type: `int`, default: 16 },
    { name: `divClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `div2Classes`, type: `array`, arrayOf: { type: `string` } },
    { name: `div3Classes`, type: `array`, arrayOf: { type: `string` } },
    { name: `labelClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `label2Classes`, type: `array`, arrayOf: { type: `string` } },
    { name: `inputClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `label`, type: `string` },
    { name: `name`, type: `string` },
    { name: `required`, type: `boolean` },
    { name: `options`, type: `array`, arrayOf: { instanceOf: `Option` } }
  ]
};

/** Create EZRadioGroup class */
ezobjects.createClass(configEZRadioGroup);

/** Create method for adding class to div classes array */
EZRadioGroup.prototype.addDivClass = function (className) {
  /** If the class doesn't already exist in the div classes array, add it */
  if ( !this.divClasses().includes(className) )
    this.divClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to input classes array */
EZRadioGroup.prototype.addInputClass = function (className) {
  /** If the class doesn't already exist in the input classes array, add it */
  if ( !this.inputClasses().includes(className) )
    this.inputClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to label classes array */
EZRadioGroup.prototype.addLabelClass = function (className) {
  /** If the class doesn't already exist in the label classes array, add it */
  if ( !this.labelClasses().includes(className) )
    this.labelClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from div classes array */
EZRadioGroup.prototype.removeDivClass = function (className) {
  /** Find index of class in div classes array (if it exists) */
  const index = this.divClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from div classes array */
  if ( index !== -1 )
    this.divClasses(this.divClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from input classes array */
EZRadioGroup.prototype.removeInputClass = function (className) {
  /** Find index of class in input classes array (if it exists) */
  const index = this.inputClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from input classes array */
  if ( index !== -1 )
    this.inputClasses(this.inputClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from label classes array */
EZRadioGroup.prototype.removeLabelClass = function (className) {
  /** Find index of class in label classes array (if it exists) */
  const index = this.labelClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from label classes array */
  if ( index !== -1 )
    this.labelClasses(this.labelClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for rendering element */
EZRadioGroup.prototype.render = function (indent = 0) {
  /** Validate cols */
  if ( this.cols() < 1 || this.cols() > 16 )
    throw new RangeError(`EZRadioGroup.render(): Invalid number, cols must be between 1 and 16 inclusive.`);
  
  /** Validate align */
  if ( this.align() != `horizontal` && this.align() != `vertical` )
    throw new RangeError(`EZRadioGroup.render(): Align value must be 'horizontal' or 'vertical'.`);
  
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
  
  /** Create second div element */
  const div2 = new div.Div();
  
  /** Add options alignment class to div2 */
  div2.addClass(`options-${this.align()}`);
  
  /** If there are div2 classes to include, add them to div2 */
  if ( this.div2Classes().length > 0 )
    this.div2Classes().map(x => div2.addClass(x));
  
  this.options().forEach((option) => {
    /** Create div3 element */
    const div3 = new div.Div();
    
    /** If there are div3 classes to include, add them to div3 */
    if ( this.div3Classes().length > 0 )
      this.div3Classes().map(x => div3.addClass(x));

    /** Create input element */
    const input1 = new input.Input();

    /** If there are input classes to include, add them to input */
    if ( this.inputClasses().length > 0 )
      this.inputClasses().map(x => input1.addClass(x));

    /** If name is set, transfer to input element */
    if ( this.name().length > 0 )
      input1.name(this.name());
    
    /** If option value is set, transfer to input element */
    if ( option.value().length > 0 )
      input1.value(option.value());
    
    /** If option is selected, transfer to input element as checked */
    if ( option.selected() )
      input1.addAttribute(`checked`, `checked`);
    
    /** If required is set, transfer to input element */
    if ( this.required() )
      input1.required(true);
    
    /** Set input type */
    input1.type(`radio`);
    
    /** Append input to div3 contents */
    div3.contents().push(input1);
    
    /** Create label2 element */
    const label2 = new label.Label();
    
    /** If there are label2 classes to include, add them to input */
    if ( this.label2Classes().length > 0 )
      this.label2Classes().map(x => label2.addClass(x));
    
    /** If option text is set, transfer to label2 element */
    label2.text(option.text());
    
    /** Append label2 to div3 contents */
    div3.contents().push(label2);
    
    /** Append div3 to div2 element */
    div2.contents().push(div3);
  });
  
  /** Append div2 to div element */
  div1.contents().push(div2);
  
  /** Return markup */
  return div1.render(indent);
};

/** Export class from module */
module.exports.EZRadioGroup = EZRadioGroup;
