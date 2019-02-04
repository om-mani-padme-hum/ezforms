/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Configure EZSpace class */
const configEZSpace = {
  className: `EZSpace`,
  extends: ezhtml.Child,
  properties: [
    { name: `cols`, type: `int`, default: 16 },
    { name: `columnDivClasses`, type: `string` },
    { name: `text`, type: `string` }
  ]
};

/** Create EZSpace class */
ezobjects.createClass(configEZSpace);

/** Create method for adding class to column div classes */
EZSpace.prototype.addColumnDivClass = function (className) {
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

/** Create method for removing class from column div classes */
EZSpace.prototype.removeColumnDivClass = function (className) {
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

/** Create method for rendering element */
EZSpace.prototype.render = function (indent = 0) {
  /** Validate cols */
  if ( this.cols() < 1 || this.cols() > 16 )
    throw new RangeError(`EZSpace.render(): Invalid number, cols must be between 1 and 16 inclusive.`);
  
  /** Create column div */
  const columnDiv = new ezhtml.Div();
  
  /** Set required cols class on column div */
  columnDiv.addClass(`col-${this.cols()}`);
  
  /** Transfer column div classes to column div */
  this.columnDivClasses().split(` `).map(x => columnDiv.addClass(x));
  
  /** Transfer text to column div */
  columnDiv.text(this.text().length == 0 ? `&nbsp;` : this.text());
  
  /** Return markup */
  return columnDiv.render(indent);
};

/** Export class from module */
module.exports.EZSpace = EZSpace;
