/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const ezspace = require(`./ez-space`);;

/** Configure EZInput class */
const configEZInput = {
  className: `EZInput`,
  extends: ezhtml.Child,
  properties: [
    { name: `accept`, type: `string` },
    { name: `alt`, type: `string` },
    { name: `autocomplete`, type: `string` },
    { name: `autofocus`, type: `boolean` },
    { name: `checked`, type: `boolean` },
    { name: `cols`, type: `int`, default: 16 },
    { name: `colsAfter`, type: `int` },
    { name: `colsBefore`, type: `int` },
    { name: `columnDivClasses`, type: `string` },
    { name: `dirname`, type: `string` },
    { name: `disabled`, type: `boolean` },
    { name: `form`, type: `string` },
    { name: `formaction`, type: `string` },
    { name: `formenctype`, type: `string` },
    { name: `formmethod`, type: `string` },
    { name: `formnovalidate`, type: `boolean` },
    { name: `formtarget`, type: `string` },
    { name: `height`, type: `string` },
    { name: `id`, type: `string` },
    { name: `inputClasses`, type: `string` },
    { name: `inputLabelClasses`, type: `string` },
    { name: `label`, type: `string` },
    { name: `list`, type: `string` },
    { name: `max`, type: `string` },
    { name: `maxlength`, type: `string` },
    { name: `min`, type: `string` },
    { name: `multiple`, type: `boolean` },
    { name: `name`, type: `string` },
    { name: `pattern`, type: `string` },
    { name: `placeholder`, type: `string` },
    { name: `readonly`, type: `boolean` },
    { name: `required`, type: `boolean` },
    { name: `selected`, type: `boolean` },
    { name: `size`, type: `int` },
    { name: `src`, type: `string` },
    { name: `step`, type: `string` },
    { name: `type`, type: `string`, default: `text` },
    { name: `value`, type: `string` },
    { name: `width`, type: `string` }
  ]
};

/** Create EZInput class */
ezobjects.createClass(configEZInput);

/** Create method for adding class to column div classes */
EZInput.prototype.addColumnDivClass = function (className) {
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

/** Create method for adding class to label classes */
EZInput.prototype.addInputLabelClass = function (className) {
  const classes = className.split(' ');

  /** Add class to classes if it doesn't already exist */
  classes.forEach((classx) => {
    if ( typeof className == 'string' ) {
      if ( !this._inputLabelClasses.split(' ').includes(classx) )
        this._inputLabelClasses = this._inputLabelClasses.concat(` ${classx}`).trim(); 
    }

    /** Handle errors */
    else if ( className === null ) {
      throw new TypeError(`${this.constructor.name}.addInputLabelClass(null): Invalid signature.`);
    } else {
      throw new TypeError(`${this.constructor.name}.addInputLabelClass(${className.constructor.name}): Invalid signature.`);
    }
  });

  /** Allow for call chaining */
  return this;
};

/** Create method for adding class to input classes */
EZInput.prototype.addInputClass = function (className) {
  const classes = className.split(' ');

  /** Add class to classes if it doesn't already exist */
  classes.forEach((classx) => {
    if ( typeof className == 'string' ) {
      if ( !this._inputClasses.split(' ').includes(classx) )
        this._inputClasses = this._inputClasses.concat(` ${classx}`).trim(); 
    }

    /** Handle errors */
    else if ( className === null ) {
      throw new TypeError(`${this.constructor.name}.addInputClass(null): Invalid signature.`);
    } else {
      throw new TypeError(`${this.constructor.name}.addInputClass(${className.constructor.name}): Invalid signature.`);
    }
  });

  /** Allow for call chaining */
  return this;
};

/** Create method for removing class from column div classes */
EZInput.prototype.removeColumnDivClass = function (className) {
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

/** Create method for removing class from input classes */
EZInput.prototype.removeInputClass = function (className) {
  /** Remove class from classes if it doesn't already exist */
  if ( typeof className == 'string' ) {
    if ( this._inputClasses.split(' ').includes(className) )
      this._inputClasses = this._inputClasses.replace(new RegExp(`\\b${className}\\b`, 'g'), ' ').replace(/[\s]+/, ' ').trim(); 
  }

  /** Handle errors */
  else {
    throw new TypeError(`${this.constructor.name}.removeInputClass(): Invalid signature (${typeof className}).`);
  }

  /** Allow for call chaining */
  return this;
};

/** Create method for removing class from input label classes */
EZInput.prototype.removeInputLabelClass = function (className) {
  /** Remove class from classes if it doesn't already exist */
  if ( typeof className == 'string' ) {
    if ( this._inputLabelClasses.split(' ').includes(className) )
      this._inputLabelClasses = this._inputLabelClasses.replace(new RegExp(`\\b${className}\\b`, 'g'), ' ').replace(/[\s]+/, ' ').trim(); 
  }

  /** Handle errors */
  else {
    throw new TypeError(`${this.constructor.name}.removeInputLabelClass(): Invalid signature (${typeof className}).`);
  }

  /** Allow for call chaining */
  return this;
};

/** Create method for rendering element */
EZInput.prototype.render = function (indent = 0) {
  /** Validate cols */
  if ( this.cols() < 1 || this.cols() > 16 )
    throw new RangeError(`EZInput.render(): Invalid number, cols must be between 1 and 16 inclusive.`);
  
  /** Create column div */
  const columnDiv = new ezhtml.Div();
  
  /** Set required cols class on column div */
  columnDiv.addClass(`col-${this.cols()}`);
  
  /** Transfer column div classes to column div */
  this.columnDivClasses().split(` `).map(x => columnDiv.addClass(x));
  
  /** Create label element */
  const inputLabel = new ezhtml.Label();
  
  /** Transfer input label classes to input label */
  this.inputLabelClasses().split(` `).map(x => inputLabel.addClass(x));

  /** Set input label text */
  inputLabel.text(this.label());

  /** Append label to div contents */
  columnDiv.append(inputLabel);
  
  /** Create input */
  const input = new ezhtml.Input();
  
  /** Transfer input classes to input */
  this.inputClasses().split(` `).map(x => input.addClass(x));
  
  /** Transfer input properties */
  input.accept(this.accept());
  input.alt(this.alt());
  input.autocomplete(this.autocomplete());
  input.autofocus(this.autofocus());
  input.checked(this.checked() || this.selected());
  input.dirname(this.dirname());
  input.disabled(this.disabled());
  input.form(this.form());
  input.formaction(this.formaction());
  input.formenctype(this.formenctype());
  input.formmethod(this.formmethod());
  input.formnovalidate(this.formnovalidate());
  input.formtarget(this.formtarget());
  input.height(this.height());
  input.id(this.id());
  input.list(this.list());
  input.max(this.max());
  input.maxlength(this.maxlength());
  input.min(this.min());
  input.multiple(this.multiple());
  input.name(this.name());
  input.pattern(this.pattern());
  input.placeholder(this.placeholder());
  input.readonly(this.readonly());
  input.required(this.required());
  input.size(this.size());
  input.src(this.src());
  input.step(this.step());
  input.type(this.type());
  input.value(this.value());
  input.width(this.width());

  /** Append input to column div */
  columnDiv.append(input);
  
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
module.exports.EZInput = EZInput;
