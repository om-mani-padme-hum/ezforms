/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Configure EZRadioGroup class */
const configEZRadioGroup = {
  className: `EZRadioGroup`,
  properties: [
    { name: `accept`, type: `string` },
    { name: `align`, type: `string`, default: `horizontal` },
    { name: `alt`, type: `string` },
    { name: `autocomplete`, type: `string` },
    { name: `autofocus`, type: `boolean` },
    { name: `checked`, type: `boolean` },
    { name: `cols`, type: `int`, default: 16 },
    { name: `dirname`, type: `string` },
    { name: `disabled`, type: `boolean` },
    { name: `columnDivClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `groupDivClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `inputDivClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `form`, type: `string` },
    { name: `formaction`, type: `string` },
    { name: `formenctype`, type: `string` },
    { name: `formmethod`, type: `string` },
    { name: `formnovalidate`, type: `boolean` },
    { name: `formtarget`, type: `string` },
    { name: `inputClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `label`, type: `string` },
    { name: `groupLabelClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `inputLabelClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `list`, type: `string` },
    { name: `max`, type: `string` },
    { name: `maxlength`, type: `string` },
    { name: `min`, type: `string` },
    { name: `multiple`, type: `boolean` },
    { name: `name`, type: `string` },
    { name: `options`, type: `array`, arrayOf: { instanceOf: `Option` } },
    { name: `pattern`, type: `string` },
    { name: `placeholder`, type: `string` },
    { name: `readonly`, type: `boolean` },
    { name: `required`, type: `boolean` },
    { name: `size`, type: `int` },
    { name: `src`, type: `string` },
    { name: `step`, type: `string` },
    { name: `type`, type: `string`, default: `text` },
    { name: `value`, type: `string` }
  ]
};

/** Create EZRadioGroup class */
ezobjects.createClass(configEZRadioGroup);

/** Create method for adding class to column div classes array */
EZRadioGroup.prototype.addColumnDivClass = function (className) {
  /** If the class doesn`t already exist in the column div classes array, add it */
  if ( !this.columnDivClasses().includes(className) )
    this.columnDivClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to group div classes array */
EZRadioGroup.prototype.addGroupDivClass = function (className) {
  /** If the class doesn`t already exist in the group div classes array, add it */
  if ( !this.groupDivClasses().includes(className) )
    this.groupDivClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to input div classes array */
EZRadioGroup.prototype.addInputDivClass = function (className) {
  /** If the class doesn`t already exist in the input div classes array, add it */
  if ( !this.inputDivClasses().includes(className) )
    this.inputDivClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to input classes array */
EZRadioGroup.prototype.addInputClass = function (className) {
  /** If the class doesn`t already exist in the input classes array, add it */
  if ( !this.inputClasses().includes(className) )
    this.inputClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to group label classes array */
EZRadioGroup.prototype.addGroupLabelClass = function (className) {
  /** If the class doesn`t already exist in the group label classes array, add it */
  if ( !this.groupLabelClasses().includes(className) )
    this.groupLabelClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to input label classes array */
EZRadioGroup.prototype.addInputLabelClass = function (className) {
  /** If the class doesn`t already exist in the input label classes array, add it */
  if ( !this.inputLabelClasses().includes(className) )
    this.inputLabelClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from column div classes array */
EZRadioGroup.prototype.removeColumnDivClass = function (className) {
  /** Find index of class in column div classes array (if it exists) */
  const index = this.columnDivClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from column div classes array */
  if ( index !== -1 )
    this.columnDivClasses(this.columnDivClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from group div classes array */
EZRadioGroup.prototype.removeGroupDivClass = function (className) {
  /** Find index of class in group div classes array (if it exists) */
  const index = this.groupDivClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from group div classes array */
  if ( index !== -1 )
    this.groupDivClasses(this.groupDivClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from input div classes array */
EZRadioGroup.prototype.removeInputDivClass = function (className) {
  /** Find index of class in input div classes array (if it exists) */
  const index = this.inputDivClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from input div classes array */
  if ( index !== -1 )
    this.inputDivClasses(this.inputDivClasses().splice(index, 1));
  
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

/** Create method for removing class from group label classes array */
EZRadioGroup.prototype.removeGroupLabelClass = function (className) {
  /** Find index of class in group label classes array (if it exists) */
  const index = this.groupLabelClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from group label classes array */
  if ( index !== -1 )
    this.groupLabelClasses(this.groupLabelClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from input label classes array */
EZRadioGroup.prototype.removeInputLabelClass = function (className) {
  /** Find index of class in input label classes array (if it exists) */
  const index = this.inputLabelClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from input label classes array */
  if ( index !== -1 )
    this.inputLabelClasses(this.inputLabelClasses().splice(index, 1));
  
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
    throw new RangeError(`EZCheckboxGroup.render(): Align value must be 'horizontal' or 'vertical'.`);
  
  /** Create column div */
  const columnDiv = new ezhtml.Div();
  
  /** Set required cols class on column div */
  columnDiv.addClass(`col-${this.cols()}`);
  
  /** Transfer column div classes to column div */
  this.columnDivClasses().map(x => columnDiv.addClass(x));
  
  /** Create group label */
  const groupLabel = new ezhtml.Label();
  
  /** Transfer group label classes to group label */
  this.groupLabelClasses().map(x => groupLabel.addClass(x));

  /** Set group label text */
  groupLabel.text(this.label());

  /** Append group label to column div */
  columnDiv.append(groupLabel);
  
  /** Create group div element */
  const groupDiv = new ezhtml.Div();
  
  /** Add options alignment class to groupDiv */
  groupDiv.addClass(`options-${this.align()}`);
  
  /** Transfer group div classes to group div */
  this.groupDivClasses().map(x => groupDiv.addClass(x));
  
  /** Loop through each option */
  this.options().forEach((option) => {
    /** Create input div element */
    const inputDiv = new ezhtml.Div();
    
    /** Transfer input div classes to input div */
    this.inputDivClasses().map(x => inputDiv.addClass(x));

    /** Create input element */
    const input = new ezhtml.Input();

    /** Transfer input classes to input */
    this.inputClasses().map(x => input.addClass(x));
    
    /** Transfer input properties */
    input.accept(this.accept());
    input.alt(this.alt());
    input.autocomplete(this.autocomplete());
    input.autofocus(this.autofocus());
    input.checked(option.selected());
    input.dirname(this.dirname());
    input.disabled(this.disabled());
    input.form(this.form());
    input.formaction(this.formaction());
    input.formenctype(this.formenctype());
    input.formmethod(this.formmethod());
    input.formnovalidate(this.formnovalidate());
    input.formtarget(this.formtarget());
    input.list(this.list());
    input.max(this.max());
    input.maxlength(this.maxlength());
    input.min(this.min());
    input.multiple(this.multiple());
    input.name(this.name());
    input.pattern(this.pattern());
    input.placeholder(this.placeholder());
    input.readonly(this.readonly());
    input.required(this.required());
    input.size(this.size());
    input.src(this.src());
    input.step(this.step());
    input.type(`radio`);
    input.value(option.value());
    
    /** Append input to input div */
    inputDiv.append(input);
    
    /** Create input label */
    const inputLabel = new ezhtml.Label();
    
    /** Transfer input label classes to input label */
    this.inputLabelClasses().map(x => inputLabel.addClass(x));
    
    /** Transfer option content to input label */
    inputLabel.content(option.content());
    
    /** Append input label to input div */
    inputDiv.append(inputLabel);
    
    /** Append input div to group div */
    groupDiv.append(inputDiv);
  });
  
  /** Append group div to column div */
  columnDiv.append(groupDiv);
  
  /** Return markup */
  return columnDiv.render(indent);
};

/** Export class from module */
module.exports.EZRadioGroup = EZRadioGroup;
