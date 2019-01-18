/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Configure EZInput class */
const configEZInput = {
  className: `EZInput`,
  properties: [
    { name: `accept`, type: `string` },
    { name: `alt`, type: `string` },
    { name: `autocomplete`, type: `string` },
    { name: `autofocus`, type: `boolean` },
    { name: `checked`, type: `boolean` },
    { name: `cols`, type: `int`, default: 16 },
    { name: `columnDivClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `dirname`, type: `string` },
    { name: `disabled`, type: `boolean` },
    { name: `form`, type: `string` },
    { name: `formaction`, type: `string` },
    { name: `formenctype`, type: `string` },
    { name: `formmethod`, type: `string` },
    { name: `formnovalidate`, type: `boolean` },
    { name: `formtarget`, type: `string` },
    { name: `height`, type: `string` },
    { name: `id`, type: `string` },
    { name: `inputClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `inputLabelClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `label`, type: `string` },
    { name: `list`, type: `string` },
    { name: `max`, type: `string` },
    { name: `maxlength`, type: `string` },
    { name: `min`, type: `string` },
    { name: `multiple`, type: `boolean` },
    { name: `name`, type: `string` },
    { name: `pattern`, type: `string` },
    { name: `placeholder`, type: `string` },
    { name: `readonly`, type: `boolean` },
    { name: `required`, type: `boolean` },
    { name: `size`, type: `int` },
    { name: `src`, type: `string` },
    { name: `step`, type: `string` },
    { name: `type`, type: `string`, default: `text` },
    { name: `value`, type: `string` },
    { name: `width`, type: `string` }
  ]
};

/** Create EZInput class */
ezobjects.createClass(configEZInput);

/** Create method for adding class to column div classes array */
EZInput.prototype.addColumnDivClass = function (className) {
  /** If the class doesn`t already exist in the column div classes array, add it */
  if ( !this.columnDivClasses().includes(className) )
    this.columnDivClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to label classes array */
EZInput.prototype.addInputLabelClass = function (className) {
  /** If the class doesn`t already exist in the label classes array, add it */
  if ( !this.inputLabelClasses().includes(className) )
    this.inputLabelClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to input classes array */
EZInput.prototype.addInputClass = function (className) {
  /** If the class doesn`t already exist in the input classes array, add it */
  if ( !this.inputClasses().includes(className) )
    this.inputClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from column div classes array */
EZInput.prototype.removeColumnDivClass = function (className) {
  /** Find index of class in column div classes array (if it exists) */
  const index = this.columnDivClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from column div classes array */
  if ( index !== -1 )
    this.columnDivClasses(this.columnDivClasses().splice(index, 1));
  
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

/** Create method for removing class from input label classes array */
EZInput.prototype.removeInputLabelClass = function (className) {
  /** Find index of class in input label classes array (if it exists) */
  const index = this.inputLabelClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from input label classes array */
  if ( index !== -1 )
    this.inputLabelClasses(this.inputLabelClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for rendering element */
EZInput.prototype.render = function (indent = 0) {
  /** Validate cols */
  if ( this.cols() < 1 || this.cols() > 16 )
    throw new RangeError(`EZInput.render(): Invalid number, cols must be between 1 and 16 inclusive.`);
  
  /** Create column div */
  const columnDiv = new ezhtml.Div();
  
  /** Set required cols class on column div */
  columnDiv.addClass(`col-${this.cols()}`);
  
  /** Transfer column div classes to column div */
  this.columnDivClasses().map(x => columnDiv.addClass(x));
  
  /** Create label element */
  const inputLabel = new ezhtml.Label();
  
  /** Transfer input label classes to input label */
  this.inputLabelClasses().map(x => inputLabel.addClass(x));

  /** Set input label text */
  inputLabel.text(this.label());

  /** Append label to div contents */
  columnDiv.append(inputLabel);
  
  /** Create input */
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
  input.height(this.height());
  input.id(this.id());
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
  input.type(this.type());
  input.value(this.value());
  input.width(this.width());

  /** Append input to column div */
  columnDiv.append(input);
  
  /** Return markup */
  return columnDiv.render(indent);
};

/** Export class from module */
module.exports.EZInput = EZInput;
