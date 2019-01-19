/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Configure EZHeading class */
const configEZHeading = {
  className: `EZHeading`,
  extends: ezhtml.Child,
  properties: [
    { name: `cols`, type: `int`, default: 16 },
    { name: `columnDivClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `headingClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `rank`, type: `int`, default: 1 },
    { name: `text`, type: `string` }
  ]
};

/** Create EZHeading class */
ezobjects.createClass(configEZHeading);

/** Create method for adding class to column div classes array */
EZHeading.prototype.addColumnDivClass = function (className) {
  /** If the class doesn`t already exist in the column div classes array, add it */
  if ( !this.columnDivClasses().includes(className) )
    this.columnDivClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to heading classes array */
EZHeading.prototype.addHeadingClass = function (className) {
  /** If the class doesn`t already exist in the heading classes array, add it */
  if ( !this.headingClasses().includes(className) )
    this.headingClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from column div classes array */
EZHeading.prototype.removeColumnDivClass = function (className) {
  /** Find index of class in column div classes array (if it exists) */
  const index = this.columnDivClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from column div classes array */
  if ( index !== -1 )
    this.columnDivClasses(this.columnDivClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from heading classes array */
EZHeading.prototype.removeHeadingClass = function (className) {
  /** Find index of class in heading classes array (if it exists) */
  const index = this.headingClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from heading classes array */
  if ( index !== -1 )
    this.headingClasses(this.headingClasses().splice(index, 1));
  
  /** Return this class for call chaining */
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
  this.columnDivClasses().map(x => columnDiv.addClass(x));
  
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
  this.headingClasses().map(x => heading.addClass(x));
  
  /** Transfer properties to heading */
  heading.text(this.text());
  
  /** Append heading to column div */
  columnDiv.append(heading);
  
  /** Return markup */
  return columnDiv.render(indent);
};

/** Export class from module */
module.exports.EZHeading = EZHeading;
