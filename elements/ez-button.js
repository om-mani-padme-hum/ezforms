/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Require local modules */
const div = require(`./div`);
const button = require(`./button`);

/** Configure EZButton class */
const configEZButton = {
  className: `EZButton`,
  properties: [    
    { name: `cols`, type: `int`, default: 16 },
    { name: `divClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `buttonClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `text`, type: `string` },
    { name: `type`, type: `string`, default: `submit` },
    { name: `id`, type: `string` }
  ]
};

/** Create EZButton class */
ezobjects.createClass(configEZButton);

/** Create method for adding class to div classes array */
EZButton.prototype.addDivClass = function (className) {
  /** If the class doesn't already exist in the div classes array, add it */
  if ( !this.divClasses().includes(className) )
    this.divClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to button classes array */
EZButton.prototype.addButtonClass = function (className) {
  /** If the class doesn't already exist in the button classes array, add it */
  if ( !this.buttonClasses().includes(className) )
    this.buttonClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from div classes array */
EZButton.prototype.removeDivClass = function (className) {
  /** Find index of class in div classes array (if it exists) */
  const index = this.divClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from div classes array */
  if ( index !== -1 )
    this.divClasses(this.divClasses().splice(index, 1));
  
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
  
  /** Create div element */
  const div1 = new div.Div();
  
  /** Set required cols class on div */
  div1.addClass(`col-${this.cols()}`);
  
  /** If there are div classes to include, add them to div */
  if ( this.divClasses().length > 0 )
    this.divClasses().map(x => div1.addClass(x));
  
  /** Create button element */
  const button1 = new button.Button();
  
  /** If there are button classes to include, add them to button */
  if ( this.buttonClasses().length > 0 )
    this.buttonClasses().map(x => button1.addClass(x));
  
  /** If id is set, transfer to button element */
  if ( this.id().length > 0 )
    button1.id(this.id());
  
  /** If type is set, transfer to button element */
  if ( this.type().length > 0 )
    button1.type(this.type());
  
  /** Transfer text to button element */
  button1.text(this.text());
  
  /** Append input to div contents */
  div1.contents().push(button1);
  
  /** Return markup */
  return div1.render(indent);
};

/** Export class from module */
module.exports.EZButton = EZButton;
