/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Require local modules */
const div = require(`./div`);
const label = require(`./label`);
const textArea = require(`./text-area`);

/** Configure EZTextArea class */
const configEZTextArea = {
  className: `EZTextArea`,
  properties: [    
    { name: `cols`, type: `int`, default: 16 },
    { name: `divClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `labelClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `textAreaClasses`, type: `array`, arrayOf: { type: `string` } },
    { name: `label`, type: `string` },
    { name: `id`, type: `string` },
    { name: `name`, type: `string` },
    { name: `required`, type: `boolean` },
    { name: `rows`, type: `int` }
  ]
};

/** Create EZTextArea class */
ezobjects.createClass(configEZTextArea);

/** Create method for adding class to div classes array */
EZTextArea.prototype.addDivClass = function (className) {
  /** If the class doesn't already exist in the div classes array, add it */
  if ( !this.divClasses().includes(className) )
    this.divClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to textArea classes array */
EZTextArea.prototype.addTextAreaClass = function (className) {
  /** If the class doesn't already exist in the textArea classes array, add it */
  if ( !this.textAreaClasses().includes(className) )
    this.textAreaClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for adding class to label classes array */
EZTextArea.prototype.addLabelClass = function (className) {
  /** If the class doesn't already exist in the label classes array, add it */
  if ( !this.labelClasses().includes(className) )
    this.labelClasses().push(className);
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from div classes array */
EZTextArea.prototype.removeDivClass = function (className) {
  /** Find index of class in div classes array (if it exists) */
  const index = this.divClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from div classes array */
  if ( index !== -1 )
    this.divClasses(this.divClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from textArea classes array */
EZTextArea.prototype.removeTextAreaClass = function (className) {
  /** Find index of class in textArea classes array (if it exists) */
  const index = this.textAreaClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from textArea classes array */
  if ( index !== -1 )
    this.textAreaClasses(this.textAreaClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for removing class from label classes array */
EZTextArea.prototype.removeLabelClass = function (className) {
  /** Find index of class in label classes array (if it exists) */
  const index = this.labelClasses().findIndex(x => x == className);
  
  /** If index exists, remove class from label classes array */
  if ( index !== -1 )
    this.labelClasses(this.labelClasses().splice(index, 1));
  
  /** Return this class for call chaining */
  return this;
};

/** Create method for rendering element */
EZTextArea.prototype.render = function (indent = 0) {
  /** Validate cols */
  if ( this.cols() < 1 || this.cols() > 16 )
    throw new RangeError(`EZTextArea.render(): Invalid number, cols must be between 1 and 16 inclusive.`);
  
  /** Create div element */
  const div1 = new div.Div();
  
  /** Set required cols class on div */
  div1.addClass(`col-${this.cols()}`);
  
  /** If there are div classes to include, add them to div */
  if ( this.divClasses().length > 0 )
    this.divClasses().map(x => ddiv1iv.addClass(x));
  
  /** Create label element */
  const label1 = new label.Label();
  
  /** If there are label classes to include, add them to label */
  if ( this.labelClasses().length > 0 )
    this.labelClasses().map(x => label1.addClass(x));

  /** Set label text */
  label1.text(this.label());

  /** Append label to div contents */
  div1.contents().push(label1);
  
  /** Create textArea element */
  const textArea1 = new textArea.TextArea();
  
  /** If there are textArea classes to include, add them to label */
  if ( this.textAreaClasses().length > 0 )
    this.textAreaClasses().map(x => textArea1.addClass(x));
  
  /** If id is set, transfer to select element */
  if ( this.id().length > 0 )
    textArea1.id(this.id());
  
  /** If name is set, transfer to select element */
  if ( this.name().length > 0 )
    textArea1.name(this.name());
  
  /** If required is set, transfer to text area element */
  if ( this.required() )
    textArea1.required(true);
  
  /** Transfer rows to textArea element */
  textArea1.rows(this.rows());
  
  /** Append input to div contents */
  div1.contents().push(textArea1);
  
  /** Return markup */
  return div1.render(indent);
};

/** Export class from module */
module.exports.EZTextArea = EZTextArea;
