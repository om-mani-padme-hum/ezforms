/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

/** Require local modules */
const elements = require(`./elements`);

/** Configure class */
const configForm = {
  className: `Form`,
  extends: ezhtml.Form,
  extendsConfig: ezhtml.configForm
};

/** Create class */
ezobjects.createClass(configForm);

Form.prototype.alert = function () {
  /** Create alert */
  const alert = new elements.EZAlert();
  
  /** Add alert to form */
  this.append(alert);
  
  /** Return alert for call chaining */
  return alert;
};

Form.prototype.button = function () {
  /** Create button */
  const button = new elements.EZButton();
  
  /** Add button to form */
  this.append(button);
  
  /** Return button for call chaining */
  return button;
};

Form.prototype.checkboxes = function () {
  /** Create input group */
  const checkboxes = new elements.EZCheckboxGroup();
  
  /** Add input group to form */
  this.append(checkboxes);
  
  /** Return input group for call chaining */
  return checkboxes;
};

Form.prototype.color = function () {
  /** Create input */
  const input = new elements.EZInput();
  
  /** Set input type */
  input.type(`color`);
  
  /** Add input to form */
  this.append(input);
  
  /** Return input for call chaining */
  return input;
};

Form.prototype.date = function () {
  /** Create input */
  const input = new elements.EZInput();
  
  /** Set input type */
  input.type(`date`);
  
  /** Add input to form */
  this.append(input);
  
  /** Return input for call chaining */
  return input;
};

Form.prototype.datetime = function () {
  /** Create input */
  const input = new elements.EZInput();
  
  /** Set input type */
  input.type(`datetime-local`);
  
  /** Add input to form */
  this.append(input);
  
  /** Return input for call chaining */
  return input;
};

Form.prototype.email = function () {
  /** Create input */
  const input = new elements.EZInput();
  
  /** Set input type */
  input.type(`email`);
  
  /** Add input to form */
  this.append(input);
  
  /** Return input for call chaining */
  return input;
};

Form.prototype.file = function () {
  /** Create input */
  const input = new elements.EZInput();
  
  /** Set input type */
  input.type(`file`);
  
  /** Add input to form */
  this.append(input);
  
  /** Return input for call chaining */
  return input;
};

Form.prototype.heading = function () {
  /** Create heading */
  const heading = new elements.EZHeading();
    
  /** Add heading to form */
  this.append(heading);
  
  /** Return heading for call chaining */
  return heading;
};

Form.prototype.hidden = function () {
  /** Create input */
  const input = new ezhtml.Input();
  
  /** Set input type */
  input.type(`hidden`);
  
  /** Add input to form */
  this.append(input);
  
  /** Return input for call chaining */
  return input;
};

Form.prototype.month = function () {
  /** Create input */
  const input = new elements.EZInput();
  
  /** Set input type */
  input.type(`month`);
  
  /** Add input to form */
  this.append(input);
  
  /** Return input for call chaining */
  return input;
};

Form.prototype.multiselect = function () {
  /** Create select */
  const select = new elements.EZSelect();
  
  /** Set multiple to true */
  select.multiple(true);
  
  /** Add select to form */
  this.append(select);
  
  /** Return select for call chaining */
  return select;
};

Form.prototype.number = function () {
  /** Create input */
  const input = new elements.EZInput();
  
  /** Set input type */
  input.type(`number`);
  
  /** Add input to form */
  this.append(input);
  
  /** Return input for call chaining */
  return input;
};

Form.prototype.option = function () {
  /** Create option */
  const option = new ezhtml.Option();
  
  /** Init last container to null */
  let lastContainer = null;
  
  /** Loop through contents... */
  this.content().forEach((content) => {
    /** If valid container found, set as last container */
    if ( [`EZCheckboxGroup`, `EZRadioGroup`, `EZSelect`].includes(content.constructor.name) )
      lastContainer = content;
  });
  
  /** If no valid container found, throw error */
  if ( !lastContainer )
    throw new ReferenceError(`Form.option(): No container exists to place option in, option should succeed checkboxes, radios, or select.`);
  
  /** Add option to last container */
  lastContainer.options().push(option);
  
  /** Return heading for call chaining */
  return option;
};

Form.prototype.password = function () {
  /** Create input */
  const input = new elements.EZInput();
  
  /** Set input type */
  input.type(`password`);
  
  /** Add input to form */
  this.append(input);
  
  /** Return input for call chaining */
  return input;
};

Form.prototype.radios = function () {
  /** Create input group */
  const radios = new elements.EZRadioGroup();
  
  /** Add input group to form */
  this.append(radios);
  
  /** Return input group for call chaining */
  return radios;
};

Form.prototype.range = function () {
  /** Create input */
  const input = new elements.EZInput();
  
  /** Set input type */
  input.type(`range`);
  
  /** Add input to form */
  this.append(input);
  
  /** Return input for call chaining */
  return input;
};

Form.prototype.select = function () {
  /** Create select */
  const select = new elements.EZSelect();
  
  /** Add select to form */
  this.append(select);
  
  /** Return select for call chaining */
  return select;
};

Form.prototype.space = function () {
  /** Create space */
  const space = new elements.EZSpace();
  
  /** Add space to form */
  this.append(space);
  
  /** Return space for call chaining */
  return space;
};

Form.prototype.tel = function () {
  /** Create input */
  const input = new elements.EZInput();
  
  /** Set input type */
  input.type(`tel`);
  
  /** Add input to form */
  this.append(input);
  
  /** Return input for call chaining */
  return input;
};

Form.prototype.textarea = function () {
  /** Create text area */
  const textArea = new elements.EZTextArea();
  
  /** Add text area to form */
  this.append(textArea);
  
  /** Return text area for call chaining */
  return textArea;
};

Form.prototype.text = function () {
  /** Create input */
  const input = new elements.EZInput();
  
  /** Set input type */
  input.type(`text`);
  
  /** Add input to form */
  this.append(input);
  
  /** Return input for call chaining */
  return input;
};

Form.prototype.time = function () {
  /** Create input */
  const input = new elements.EZInput();
  
  /** Set input type */
  input.type(`time`);
  
  /** Add input to form */
  this.append(input);
  
  /** Return input for call chaining */
  return input;
};

Form.prototype.url = function () {
  /** Create input */
  const input = new elements.EZInput();
  
  /** Set input type */
  input.type(`url`);
  
  /** Add input to form */
  this.append(input);
  
  /** Return input for call chaining */
  return input;
};

Form.prototype.week = function () {
  /** Create input */
  const input = new elements.EZInput();
  
  /** Set input type */
  input.type(`week`);
  
  /** Add input to form */
  this.append(input);
  
  /** Return input for call chaining */
  return input;
};

/** Export class from module */
module.exports.configForm = configForm;
module.exports.Form = Form;
