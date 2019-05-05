/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Configure EZSpace class */
const configEZSpace = {
  className: `EZSpace`,
  extends: ezhtml.Child,
  properties: [
    { name: `cols`, type: `int`, default: 16 },
    { name: `wrapperClasses`, type: `string` },
    { name: `text`, type: `string` }
  ]
};

/** Create EZSpace class */
ezobjects.createClass(configEZSpace);

/** Create method for adding class to wrapper classes */
EZSpace.prototype.addWrapperClass = function (className) {
  const classes = className.split(` `);

  /** Add class to classes if it doesn't already exist */
  classes.forEach((classx) => {
    if ( typeof className == `string` ) {
      if ( !this._wrapperClasses.split(` `).includes(classx) )
        this._wrapperClasses = this._wrapperClasses.concat(` ${classx}`).trim(); 
    }

    /** Handle errors */
    else if ( className === null ) {
      throw new TypeError(`${this.constructor.name}.addWrapperClass(null): Invalid signature.`);
    } else {
      throw new TypeError(`${this.constructor.name}.addWrapperClass(${className.constructor.name}): Invalid signature.`);
    }
  });

  /** Allow for call chaining */
  return this;
};

/** Create method for removing class from wrapper classes */
EZSpace.prototype.removeWrapperClass = function (className) {
  /** Remove class from classes if it doesn't already exist */
  if ( typeof className == `string` ) {
    if ( this._wrapperClasses.split(` `).includes(className) )
      this._wrapperClasses = this._wrapperClasses.replace(new RegExp(`\\b${className}\\b`, `g`), ` `).replace(/[\s]+/, ` `).trim(); 
  }

  /** Handle errors */
  else {
    throw new TypeError(`${this.constructor.name}.removeWrapperClass(): Invalid signature (${typeof className}).`);
  }

  /** Allow for call chaining */
  return this;
};

/** Create method for rendering element */
EZSpace.prototype.render = function (indent = 0) {
  /** Validate cols */
  if ( this.cols() < 1 || this.cols() > 16 )
    throw new RangeError(`EZSpace.render(): Invalid number, cols must be between 1 and 16 inclusive.`);
  
  /** Create wrapper */
  const wrapper = new ezhtml.Div();
  
  /** Set required cols class on wrapper */
  wrapper.addClass(`col-${this.cols()}`);
  
  /** Transfer wrapper classes to wrapper */
  this.wrapperClasses().split(` `).map(x => wrapper.addClass(x));
  
  /** Transfer text to wrapper */
  wrapper.text(this.text().length == 0 ? `&nbsp;` : this.text());
  
  /** Return markup */
  return wrapper.render(indent);
};

/** Export class from module */
module.exports.EZSpace = EZSpace;
