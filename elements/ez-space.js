/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Configure EZSpace class */
const configEZSpace = {
  className: `EZSpace`,
  properties: [
    { name: `cols`, type: `int`, default: 16 },
    { name: `columnDivClasses`, type: `array`, arrayOf: { type: `string` } }
    { name: `text`, type: `string` }
  ]
};

/** Create EZSpace class */
ezobjects.createClass(configEZSpace);

/** Create method for adding class to column div classes array */
EZSpace.prototype.addColumnDivClass = function (className) {
  /** If the class doesn`t already exist in the column div classes array, add it */
  if ( !this.columnDivClasses().includes(className) )
    this.columnDivClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from column div classes array */
EZSpace.prototype.removeColumnDivClass = function (className) {
  /** Find index of class in column div classes array (if it exists) */
  const index = this.columnDivClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from column div classes array */
  if ( index !== -1 )
    this.columnDivClasses(this.columnDivClasses().splice(index, 1));
  
  /** Return this class for call chaining */
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
  this.columnDivClasses().map(x => columnDiv.addClass(x));
  
  /** Transfer text to column div */
  columnDiv.text(this.text().length == 0 ? `&nbsp;` : this.text());
  
  /** Return markup */
  return columnDiv.render(indent);
};

/** Export class from module */
module.exports.EZSpace = EZSpace;
