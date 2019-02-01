/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const ezspace = require(`./ez-space`);;

/** Configure EZButton class */
const configEZButton = {
  className: `EZButton`,
  extends: ezhtml.Button,
  properties: [
    { name: `buttonClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `cols`, type: `int`, default: 16 },
    { name: `colsAfter`, type: `int` },
    { name: `colsBefore`, type: `int` },
    { name: `columnDivClasses`, type: `array`, arrayOf: { type: `string` } },
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
  if ( this.content().length == 0 )
    throw new ReferenceError(`EZButton.render(): Invalid button text, must not be blank.`);
  
  /** Create column div */
  const columnDiv = new ezhtml.Div();
  
  /** Set required cols class on column div */
  columnDiv.addClass(`col-${this.cols()}`);
  
  /** Transfer column div classes to column div */
  this.columnDivClasses().map(x => columnDiv.addClass(x));

  /** Create button element */
  const button = new ezhtml.Button();
  
  button.attributes(this.attributes());
  button.classes(this.classes());
  button.id(this.id());
  button.style(this.style());
  button.title(this.title());
  button.content(this.content());
  
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
  button.name(this.name());
  button.type(this.type());
    
  /** Append button to column div */
  columnDiv.append(button);
  
  let markup = ``;
  
  /** If there are columns before, append space to markup */
  if ( this.colsBefore() > 0 )
    markup += new ezspace.EZSpace().cols(this.colsBefore()).render(indent);
  
  /** Append input to markup */
  markup += columnDiv.render(indent);
  
  /** If there are columns after, append space to markup */
  if ( this.colsAfter() > 0 )
    markup += new ezspace.EZSpace().cols(this.colsAfter()).render(indent);
  
  /** Return markup */
  return markup;
};

/** Export class from module */
module.exports.EZButton = EZButton;
