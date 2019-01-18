/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Configure EZTextArea class */
const configEZTextArea = {
  className: `EZTextArea`,
  extends: ezhtml.Child,
  properties: [
    { name: `autofocus`, type: `boolean` },
    { name: `cols`, type: `int`, default: 16 },
    { name: `columnDivClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `dirname`, type: `string` },
    { name: `disabled`, type: `boolean` },
    { name: `form`, type: `string` },
    { name: `id`, type: `string` },
    { name: `inputClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `inputLabelClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `label`, type: `string` },
    { name: `maxlength`, type: `int` },
    { name: `name`, type: `string` },
    { name: `placeholder`, type: `string` },
    { name: `readonly`, type: `boolean` },
    { name: `required`, type: `boolean` },
    { name: `rows`, type: `int` },
    { name: `wrap`, type: `string` }
  ]
};

/** Create EZTextArea class */
ezobjects.createClass(configEZTextArea);

/** Create method for adding class to column div classes array */
EZTextArea.prototype.addColumnDivClass = function (className) {
  /** If the class doesn`t already exist in the column div classes array, add it */
  if ( !this.columnDivClasses().includes(className) )
    this.columnDivClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to input classes array */
EZTextArea.prototype.addInputClass = function (className) {
  /** If the class doesn`t already exist in the input classes array, add it */
  if ( !this.inputClasses().includes(className) )
    this.inputClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to input label classes array */
EZTextArea.prototype.addInputLabelClass = function (className) {
  /** If the class doesn`t already exist in the input label classes array, add it */
  if ( !this.inputLabelClasses().includes(className) )
    this.inputLabelClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from column div classes array */
EZTextArea.prototype.removeColumnDivClass = function (className) {
  /** Find index of class in column div classes array (if it exists) */
  const index = this.columnDivClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from column div classes array */
  if ( index !== -1 )
    this.columnDivClasses(this.columnDivClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from input classes array */
EZTextArea.prototype.removeInputClass = function (className) {
  /** Find index of class in input classes array (if it exists) */
  const index = this.inputClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from input classes array */
  if ( index !== -1 )
    this.inputClasses(this.inputClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from input label classes array */
EZTextArea.prototype.removeInputLabelClass = function (className) {
  /** Find index of class in input label classes array (if it exists) */
  const index = this.inputLabelClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from input label classes array */
  if ( index !== -1 )
    this.inputLabelClasses(this.inputLabelClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for rendering element */
EZTextArea.prototype.render = function (indent = 0) {
  /** Validate cols */
  if ( this.cols() < 1 || this.cols() > 16 )
    throw new RangeError(`EZTextArea.render(): Invalid number, cols must be between 1 and 16 inclusive.`);
  
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

  /** Set label text */
  inputLabel.text(this.label());

  /** Append label to div contents */
  columnDiv.append(inputLabel);
  
  /** Create input */
  const input = new ezhtml.TextArea();
  
  /** Transfer input classes to input */
  this.inputClasses().map(x => input.addClass(x));

  /** Transfer input properties */
  input.autofocus(this.autofocus());
  input.dirname(this.dirname());
  input.disabled(this.disabled());
  input.form(this.form());
  input.id(this.id());
  input.maxlength(this.maxlength());
  input.name(this.name());
  input.readonly(this.readonly());
  input.required(this.required());
  input.rows(this.rows());
  input.wrap(this.wrap());

  /** Append input to column div */
  columnDiv.append(input);
  
  /** Return markup */
  return columnDiv.render(indent);
};

/** Export class from module */
module.exports.EZTextArea = EZTextArea;
