/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const ezspace = require(`./ez-space`);;

/** Configure EZHeading class */
const configEZHeading = {
  className: `EZHeading`,
  extends: ezhtml.Child,
  properties: [
    { name: `cols`, type: `int`, default: 16 },
    { name: `colsAfter`, type: `int` },
    { name: `colsBefore`, type: `int` },
    { name: `columnDivClasses`, type: `string` },
    { name: `headingClasses`, type: `string` },
    { name: `rank`, type: `int`, default: 1 },
    { name: `text`, type: `string` }
  ]
};

/** Create EZHeading class */
ezobjects.createClass(configEZHeading);

/** Create method for adding class to column div classes */
EZHeading.prototype.addColumnDivClass = function (className) {
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

/** Create method for adding class to heading classes */
EZButton.prototype.addHeadingClass = function (className) {
  const classes = className.split(' ');

  /** Add class to classes if it doesn't already exist */
  classes.forEach((classx) => {
    if ( typeof className == 'string' ) {
      if ( !this._headingClasses.split(' ').includes(classx) )
        this._headingClasses = this._headingClasses.concat(` ${classx}`).trim(); 
    }

    /** Handle errors */
    else if ( className === null ) {
      throw new TypeError(`${this.constructor.name}.addHeadingClass(null): Invalid signature.`);
    } else {
      throw new TypeError(`${this.constructor.name}.addHeadingClass(${className.constructor.name}): Invalid signature.`);
    }
  });

  /** Allow for call chaining */
  return this;
};

/** Create method for removing class from column div classes */
EZHeading.prototype.removeColumnDivClass = function (className) {
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

/** Create method for removing class from heading classes */
EZHeading.prototype.removeHeadingClass = function (className) {
  /** Remove class from classes if it doesn't already exist */
  if ( typeof className == 'string' ) {
    if ( this._headingClasses.split(' ').includes(className) )
      this._headingClasses = this._headingClasses.replace(new RegExp(`\\b${className}\\b`, 'g'), ' ').replace(/[\s]+/, ' ').trim(); 
  }

  /** Handle errors */
  else {
    throw new TypeError(`${this.constructor.name}.removeHeadingClass(): Invalid signature (${typeof className}).`);
  }

  /** Allow for call chaining */
  return this;
};

/** Create method for rendering element */
EZHeading.prototype.render = function (indent = 0) {
  /** Validate cols */
  if ( this.cols() < 1 || this.cols() > 16 )
    throw new RangeError(`EZHeading.render(): Invalid number, cols must be between 1 and 16 inclusive.`);
  
  /** Validate rank */
  if ( this.rank() < 1 || this.rank() > 6 )
    throw new RangeError(`EZHeading.render(): Invalid number, rank must be between 1 and 6 inclusive.`);
  
  /** Create column div */
  const columnDiv = new ezhtml.Div();
  
  /** Set required cols class on column div */
  columnDiv.addClass(`col-${this.cols()}`);
  
  /** Transfer column div classes to column div */
  this.columnDivClasses().split(` `).map(x => columnDiv.addClass(x));
  
  /** Create heading */
  let heading = null;
  
  if ( this.rank() == 1 )
    heading = new ezhtml.H1();
  else if ( this.rank() == 2 )
    heading = new ezhtml.H2();
  else if ( this.rank() == 3 )
    heading = new ezhtml.H3();
  else if ( this.rank() == 4 )
    heading = new ezhtml.H4();
  else if ( this.rank() == 5 )
    heading = new ezhtml.H5();
  else if ( this.rank() == 6 )
    heading = new ezhtml.H6();
  
  /** Transfer heading classes to heading */
  this.headingClasses().split(` `).map(x => heading.addClass(x));
  
  /** Transfer properties to heading */
  heading.text(this.text());
  
  /** Append heading to column div */
  columnDiv.append(heading);
  
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
module.exports.EZHeading = EZHeading;
