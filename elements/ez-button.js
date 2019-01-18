/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Configure EZButton class */
const configEZButton = {
  className: `EZButton`,
  properties: [
    { name: `autofocus`, type: `boolean` },
    { name: `buttonClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `cols`, type: `int`, default: 16 },
    { name: `columnDivClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `disabled`, type: `boolean` },
    { name: `form`, type: `string` },
    { name: `formaction`, type: `string` },
    { name: `formenctype`, type: `string` },
    { name: `formmethod`, type: `string` },
    { name: `formnovalidate`, type: `boolean` },
    { name: `formtarget`, type: `string` },
    { name: `id`, type: `string` },
    { name: `name`, type: `string` },
    { name: `text`, type: `string` },
    { name: `type`, type: `string`, default: `submit` }
  ]
};

/** Create EZButton class */
ezobjects.createClass(configEZButton);

/** Create method for adding class to column div classes array */
EZButton.prototype.addColumnDivClass = function (className) {
  /** If the class doesn`t already exist in the column div classes array, add it */
  if ( !this.columnDivClasses().includes(className) )
    this.columnDivClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to button classes array */
EZButton.prototype.addButtonClass = function (className) {
  /** If the class doesn`t already exist in the button classes array, add it */
  if ( !this.buttonClasses().includes(className) )
    this.buttonClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from column div classes array */
EZButton.prototype.removeColumnDivClass = function (className) {
  /** Find index of class in column div classes array (if it exists) */
  const index = this.columnDivClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from column div classes array */
  if ( index !== -1 )
    this.columnDivClasses(this.columnDivClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from button classes array */
EZButton.prototype.removeButtonClass = function (className) {
  /** Find index of class in button classes array (if it exists) */
  const index = this.buttonClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from button classes array */
  if ( index !== -1 )
    this.buttonClasses(this.buttonClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for rendering element */
EZButton.prototype.render = function (indent = 0) {
  /** Validate cols */
  if ( this.cols() < 1 || this.cols() > 16 )
    throw new RangeError(`EZButton.render(): Invalid number, cols must be between 1 and 16 inclusive.`);
  
  /** Validate text */
  if ( this.text().length == 0 )
    throw new ReferenceError(`EZButton.render(): Invalid button text, must not be blank.`);
  
  /** Create column div */
  const columnDiv = new ezhtml.Div();
  
  /** Set required cols class on column div */
  columnDiv.addClass(`col-${this.cols()}`);
  
  /** Transfer column div classes to column div */
  this.columnDivClasses().map(x => columnDiv.addClass(x));

  /** Create button element */
  const button = new ezhtml.Button();
  
  /** Transfer button classes to button */
  this.buttonClasses().map(x => button.addClass(x));
  
  /** Transfer button properties to button */
  button.autofocus(this.autofocus());
  button.disabled(this.disabled());
  button.form(this.form());
  button.formaction(this.formaction());
  button.formenctype(this.formenctype());
  button.formmethod(this.formmethod());
  button.formnovalidate(this.formnovalidate());
  button.formtarget(this.formtarget());
  button.id(this.id());
  button.name(this.name());
  button.text(this.text());
  button.type(this.type());
  button.value(this.value());
  
  /** Append button to column div */
  columnDiv.append(button);
  
  /** Return markup */
  return columnDiv.render(indent);
};

/** Export class from module */
module.exports.EZButton = EZButton;
