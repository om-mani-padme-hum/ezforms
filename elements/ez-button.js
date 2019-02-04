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
    { name: `buttonClasses`, type: `string` },
    { name: `cols`, type: `int`, default: 16 },
    { name: `colsAfter`, type: `int` },
    { name: `colsBefore`, type: `int` },
    { name: `columnDivClasses`, type: `string` },
  ]
};

/** Create EZButton class */
ezobjects.createClass(configEZButton);

/** Create method for adding class to column div classes */
EZButton.prototype.addColumnDivClass = function (className) {
  const classes = className.split(' ');

  /** Add class to classes if it doesn't already exist */
  classes.forEach((classx) => {
    if ( typeof className == 'string' ) {
      if ( !this._columnDivClasses.split(' ').includes(classx) )
        this._columnDivClasses = this._columnDivClasses.concat(` ${classx}`).trim(); 
    }

    /** Handle errors */
    else if ( className === null ) {
      throw new TypeError(`${this.constructor.name}.addColumnDivClass(null): Invalid signature.`);
    } else {
      throw new TypeError(`${this.constructor.name}.addColumnDivClass(${className.constructor.name}): Invalid signature.`);
    }
  });

  /** Allow for call chaining */
  return this;
};

/** Create method for adding class to button classes */
EZButton.prototype.addButtonClass = function (className) {
  const classes = className.split(' ');

  /** Add class to classes if it doesn't already exist */
  classes.forEach((classx) => {
    if ( typeof className == 'string' ) {
      if ( !this._buttonClasses.split(' ').includes(classx) )
        this._buttonClasses = this._buttonClasses.concat(` ${classx}`).trim(); 
    }

    /** Handle errors */
    else if ( className === null ) {
      throw new TypeError(`${this.constructor.name}.addButtonClass(null): Invalid signature.`);
    } else {
      throw new TypeError(`${this.constructor.name}.addButtonClass(${className.constructor.name}): Invalid signature.`);
    }
  });

  /** Allow for call chaining */
  return this;
};

/** Create method for removing class from column div classes */
EZButton.prototype.removeColumnDivClass = function (className) {
  /** Remove class from classes if it doesn't already exist */
  if ( typeof className == 'string' ) {
    if ( this._columnDivClasses.split(' ').includes(className) )
      this._columnDivClasses = this._columnDivClasses.replace(new RegExp(`\\b${className}\\b`, 'g'), ' ').replace(/[\s]+/, ' ').trim(); 
  }

  /** Handle errors */
  else {
    throw new TypeError(`${this.constructor.name}.removeColumnDivClass(): Invalid signature (${typeof className}).`);
  }

  /** Allow for call chaining */
  return this;
};

/** Create method for removing class from button classes */
EZButton.prototype.removeButtonClass = function (className) {
  /** Remove class from classes if it doesn't already exist */
  if ( typeof className == 'string' ) {
    if ( this._buttonClasses.split(' ').includes(className) )
      this._buttonClasses = this._buttonClasses.replace(new RegExp(`\\b${className}\\b`, 'g'), ' ').replace(/[\s]+/, ' ').trim(); 
  }

  /** Handle errors */
  else {
    throw new TypeError(`${this.constructor.name}.removeButtonClass(): Invalid signature (${typeof className}).`);
  }

  /** Allow for call chaining */
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
  this.columnDivClasses().split(` `).map(x => columnDiv.addClass(x));

  /** Create button element */
  const button = new ezhtml.Button();
  
  button.attributes(this.attributes());
  button.classes(this.classes());
  button.id(this.id());
  button.style(this.style());
  button.title(this.title());
  button.content(this.content());
  
  /** Transfer button classes to button */
  this.buttonClasses().split(` `).map(x => button.addClass(x));
  
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
