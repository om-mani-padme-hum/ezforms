/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const ezspace = require(`./ez-space`);

/** Configure EZRadioGroup class */
const configEZRadioGroup = {
  className: `EZRadioGroup`,
  extends: ezhtml.Child,
  properties: [
    { name: `accept`, type: `string` },
    { name: `align`, type: `string`, default: `horizontal` },
    { name: `alt`, type: `string` },
    { name: `autocomplete`, type: `string` },
    { name: `autofocus`, type: `boolean` },
    { name: `checked`, type: `boolean` },
    { name: `cols`, type: `int`, default: 16 },
    { name: `colsAfter`, type: `int` },
    { name: `colsBefore`, type: `int` },
    { name: `dirname`, type: `string` },
    { name: `disabled`, type: `boolean` },
    { name: `columnDivClasses`, type: `string` },
    { name: `groupDivClasses`, type: `string` },
    { name: `inputDivClasses`, type: `string` },
    { name: `form`, type: `string` },
    { name: `formaction`, type: `string` },
    { name: `formenctype`, type: `string` },
    { name: `formmethod`, type: `string` },
    { name: `formnovalidate`, type: `boolean` },
    { name: `formtarget`, type: `string` },
    { name: `inputClasses`, type: `string` },
    { name: `label`, type: `string` },
    { name: `groupLabelClasses`, type: `string` },
    { name: `inputLabelClasses`, type: `string` },
    { name: `list`, type: `string` },
    { name: `max`, type: `string` },
    { name: `maxlength`, type: `string` },
    { name: `min`, type: `string` },
    { name: `multiple`, type: `boolean` },
    { name: `name`, type: `string` },
    { name: `options`, type: `array`, arrayOf: { instanceOf: `Option` } },
    { name: `pattern`, type: `string` },
    { name: `placeholder`, type: `string` },
    { name: `readonly`, type: `boolean` },
    { name: `required`, type: `boolean` },
    { name: `size`, type: `int` },
    { name: `src`, type: `string` },
    { name: `step`, type: `string` },
    { name: `type`, type: `string`, default: `text` },
    { name: `value`, type: `string` }
  ]
};

/** Create EZRadioGroup class */
ezobjects.createClass(configEZRadioGroup);

/** Create method for adding class to column div classes */
EZRadioGroup.prototype.addColumnDivClass = function (className) {
  const classes = className.split(` `);

  /** Add class to classes if it doesn`t already exist */
  classes.forEach((classx) => {
    if ( typeof className == `string` ) {
      if ( !this._columnDivClasses.split(` `).includes(classx) )
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

/** Create method for adding class to group div classes */
EZRadioGroup.prototype.addGroupDivClass = function (className) {
  const classes = className.split(` `);

  /** Add class to classes if it doesn`t already exist */
  classes.forEach((classx) => {
    if ( typeof className == `string` ) {
      if ( !this._groupDivClasses.split(` `).includes(classx) )
        this._groupDivClasses = this._groupDivClasses.concat(` ${classx}`).trim(); 
    }

    /** Handle errors */
    else if ( className === null ) {
      throw new TypeError(`${this.constructor.name}.addGroupDivClass(null): Invalid signature.`);
    } else {
      throw new TypeError(`${this.constructor.name}.addGroupDivClass(${className.constructor.name}): Invalid signature.`);
    }
  });

  /** Allow for call chaining */
  return this;
};

/** Create method for adding class to input div classes */
EZRadioGroup.prototype.addInputDivClass = function (className) {
  const classes = className.split(` `);

  /** Add class to classes if it doesn`t already exist */
  classes.forEach((classx) => {
    if ( typeof className == `string` ) {
      if ( !this._inputDivClasses.split(` `).includes(classx) )
        this._inputDivClasses = this._inputDivClasses.concat(` ${classx}`).trim(); 
    }

    /** Handle errors */
    else if ( className === null ) {
      throw new TypeError(`${this.constructor.name}.addInputDivClass(null): Invalid signature.`);
    } else {
      throw new TypeError(`${this.constructor.name}.addInputDivClass(${className.constructor.name}): Invalid signature.`);
    }
  });

  /** Allow for call chaining */
  return this;
};

/** Create method for adding class to input classes */
EZRadioGroup.prototype.addInputClass = function (className) {
  const classes = className.split(` `);

  /** Add class to classes if it doesn`t already exist */
  classes.forEach((classx) => {
    if ( typeof className == `string` ) {
      if ( !this._inputClasses.split(` `).includes(classx) )
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

/** Create method for adding class to group label classes */
EZRadioGroup.prototype.addGroupLabelClass = function (className) {
  const classes = className.split(` `);

  /** Add class to classes if it doesn`t already exist */
  classes.forEach((classx) => {
    if ( typeof className == `string` ) {
      if ( !this._groupLabelClasses.split(` `).includes(classx) )
        this._groupLabelClasses = this._groupLabelClasses.concat(` ${classx}`).trim(); 
    }

    /** Handle errors */
    else if ( className === null ) {
      throw new TypeError(`${this.constructor.name}.addGroupLabelClass(null): Invalid signature.`);
    } else {
      throw new TypeError(`${this.constructor.name}.addGroupLabelClass(${className.constructor.name}): Invalid signature.`);
    }
  });

  /** Allow for call chaining */
  return this;
};

/** Create method for adding class to label classes */
EZRadioGroup.prototype.addInputLabelClass = function (className) {
  const classes = className.split(` `);

  /** Add class to classes if it doesn`t already exist */
  classes.forEach((classx) => {
    if ( typeof className == `string` ) {
      if ( !this._inputLabelClasses.split(` `).includes(classx) )
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

/** Create method for removing class from column div classes */
EZRadioGroup.prototype.removeColumnDivClass = function (className) {
  /** Remove class from classes if it doesn`t already exist */
  if ( typeof className == `string` ) {
    if ( this._columnDivClasses.split(` `).includes(className) )
      this._columnDivClasses = this._columnDivClasses.replace(new RegExp(`\\b${className}\\b`, `g`), ` `).replace(/[\s]+/, ` `).trim(); 
  }

  /** Handle errors */
  else {
    throw new TypeError(`${this.constructor.name}.removeColumnDivClass(): Invalid signature (${typeof className}).`);
  }

  /** Allow for call chaining */
  return this;
};

/** Create method for removing class from group div classes */
EZRadioGroup.prototype.removeGroupDivClass = function (className) {
  /** Remove class from classes if it doesn`t already exist */
  if ( typeof className == `string` ) {
    if ( this._groupDivClasses.split(` `).includes(className) )
      this._groupDivClasses = this._groupDivClasses.replace(new RegExp(`\\b${className}\\b`, `g`), ` `).replace(/[\s]+/, ` `).trim(); 
  }

  /** Handle errors */
  else {
    throw new TypeError(`${this.constructor.name}.removeGroupDivClass(): Invalid signature (${typeof className}).`);
  }

  /** Allow for call chaining */
  return this;
};

/** Create method for removing class from input div classes */
EZRadioGroup.prototype.removeInputDivClass = function (className) {
  /** Remove class from classes if it doesn`t already exist */
  if ( typeof className == `string` ) {
    if ( this._inputDivClasses.split(` `).includes(className) )
      this._inputDivClasses = this._inputDivClasses.replace(new RegExp(`\\b${className}\\b`, `g`), ` `).replace(/[\s]+/, ` `).trim(); 
  }

  /** Handle errors */
  else {
    throw new TypeError(`${this.constructor.name}.removeInputDivClass(): Invalid signature (${typeof className}).`);
  }

  /** Allow for call chaining */
  return this;
};


/** Create method for removing class from input classes */
EZRadioGroup.prototype.removeInputClass = function (className) {
  /** Remove class from classes if it doesn`t already exist */
  if ( typeof className == `string` ) {
    if ( this._inputClasses.split(` `).includes(className) )
      this._inputClasses = this._inputClasses.replace(new RegExp(`\\b${className}\\b`, `g`), ` `).replace(/[\s]+/, ` `).trim(); 
  }

  /** Handle errors */
  else {
    throw new TypeError(`${this.constructor.name}.removeInputClass(): Invalid signature (${typeof className}).`);
  }

  /** Allow for call chaining */
  return this;
};

/** Create method for removing class from group label classes */
EZRadioGroup.prototype.removeGroupLabelClass = function (className) {
  /** Remove class from classes if it doesn`t already exist */
  if ( typeof className == `string` ) {
    if ( this._groupLabelClasses.split(` `).includes(className) )
      this._groupLabelClasses = this._groupLabelClasses.replace(new RegExp(`\\b${className}\\b`, `g`), ` `).replace(/[\s]+/, ` `).trim(); 
  }

  /** Handle errors */
  else {
    throw new TypeError(`${this.constructor.name}.removeGroupLabelClass(): Invalid signature (${typeof className}).`);
  }

  /** Allow for call chaining */
  return this;
};

/** Create method for removing class from input label classes */
EZRadioGroup.prototype.removeInputLabelClass = function (className) {
  /** Remove class from classes if it doesn`t already exist */
  if ( typeof className == `string` ) {
    if ( this._inputLabelClasses.split(` `).includes(className) )
      this._inputLabelClasses = this._inputLabelClasses.replace(new RegExp(`\\b${className}\\b`, `g`), ` `).replace(/[\s]+/, ` `).trim(); 
  }

  /** Handle errors */
  else {
    throw new TypeError(`${this.constructor.name}.removeInputLabelClass(): Invalid signature (${typeof className}).`);
  }

  /** Allow for call chaining */
  return this;
};

/** Create method for rendering element */
EZRadioGroup.prototype.render = function (indent = 0) {
  /** Validate cols */
  if ( this.cols() < 1 || this.cols() > 16 )
    throw new RangeError(`EZRadioGroup.render(): Invalid number, cols must be between 1 and 16 inclusive.`);
  
  /** Validate align */
  if ( this.align() != `horizontal` && this.align() != `vertical` )
    throw new RangeError(`EZCheckboxGroup.render(): Align value must be 'horizontal' or 'vertical'.`);
  
  /** Create column div */
  const columnDiv = new ezhtml.Div();
  
  /** Set required cols class on column div */
  columnDiv.addClass(`col-${this.cols()}`);
  
  /** Transfer column div classes to column div */
  this.columnDivClasses().split(` `).map(x => columnDiv.addClass(x));
  
  /** Create group label */
  const groupLabel = new ezhtml.Label();
  
  /** Transfer group label classes to group label */
  this.groupLabelClasses().split(` `).map(x => groupLabel.addClass(x));

  /** Set group label text */
  groupLabel.text(this.label());

  /** Append group label to column div */
  columnDiv.append(groupLabel);
  
  /** Create group div element */
  const groupDiv = new ezhtml.Div();
  
  /** Add options alignment class to groupDiv */
  groupDiv.addClass(`options-${this.align()}`);
  
  /** Transfer group div classes to group div */
  this.groupDivClasses().split(` `).map(x => groupDiv.addClass(x));
  
  /** Loop through each option */
  this.options().forEach((option) => {
    /** Create input div element */
    const inputDiv = new ezhtml.Div();
    
    /** Transfer input div classes to input div */
    this.inputDivClasses().split(` `).map(x => inputDiv.addClass(x));

    /** Create input element */
    const input = new ezhtml.Input();

    /** Transfer input classes to input */
    this.inputClasses().split(` `).map(x => input.addClass(x));
    
    /** Transfer input properties */
    input.accept(this.accept());
    input.alt(this.alt());
    input.autocomplete(this.autocomplete());
    input.autofocus(this.autofocus());
    input.checked(option.selected());
    input.dirname(this.dirname());
    input.disabled(this.disabled());
    input.form(this.form());
    input.formaction(this.formaction());
    input.formenctype(this.formenctype());
    input.formmethod(this.formmethod());
    input.formnovalidate(this.formnovalidate());
    input.formtarget(this.formtarget());
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
    input.type(`radio`);
    input.value(option.value());
    
    /** Append input to input div */
    inputDiv.append(input);
    
    /** Create input label */
    const inputLabel = new ezhtml.Label();
    
    /** Transfer input label classes to input label */
    this.inputLabelClasses().split(` `).map(x => inputLabel.addClass(x));
    
    /** Transfer option content to input label */
    inputLabel.content(option.content());
    
    /** Append input label to input div */
    inputDiv.append(inputLabel);
    
    /** Append input div to group div */
    groupDiv.append(inputDiv);
  });
  
  /** Append group div to column div */
  columnDiv.append(groupDiv);
  
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
module.exports.EZRadioGroup = EZRadioGroup;
