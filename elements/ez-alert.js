/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);
const octicons = require(`octicons`);

/** Require local modules */
const ezspace = require(`./ez-space`);;

/** Configure EZAlert class */
const configEZAlert = {
  className: `EZAlert`,
  extends: ezhtml.Child,
  properties: [
    { name: `cols`, type: `int`, default: 16 },
    { name: `colsAfter`, type: `int` },
    { name: `colsBefore`, type: `int` },
    { name: `strong`, type: `string` },
    { name: `text`, type: `string` },
    { name: `type`, type: `string`, default: `error` }
  ]
};

/** Create EZAlert class */
ezobjects.createClass(configEZAlert);

/** Create method for rendering element */
EZAlert.prototype.render = function (indent = 0) {
  /** Validate cols */
  if ( this.cols() < 1 || this.cols() > 16 )
    throw new RangeError(`EZAlert.render(): Invalid number, cols must be between 1 and 16 inclusive.`);
  
  /** Validate text */
  if ( this.text().length == 0 )
    throw new RangeError(`EZAlert.render(): Invalid alert text, must not be blank.`);
  
  /** Validate type */
  if ( ![`error`, `warning`, `info`, `success`].includes(this.type()) )
    throw new RangeError(`EZAlert.render(): Invalid alert type, must be error, warning, success, or info.`);
  
  /** Create wrapper */
  const wrapper = new ezhtml.Div();
  
  /** Set required cols class on wrapper */
  wrapper.addClass(`col-${this.cols()}`);
  
  if ( this.type() == `error` )
    wrapper.addClass(`alert-error`);
  else if ( this.type() == `warning` )
    wrapper.addClass(`alert-warning`);
  else if ( this.type() == `success` )
    wrapper.addClass(`alert-success`);
  else if ( this.type() == `info` )
    wrapper.addClass(`alert-info`);
  
  /** Assume alert is error type, so use alert icon */
  let icon = octicons.alert.toSVG({ width: 16 })
  
  /** If alert is warning type, use issue opened icon */
  if ( this.type() == `warning` )
    icon = octicons[`issue-opened`].toSVG({ width: 16 });
  
  /** Otherwise, if alert is success type, use check icon */
  else if ( this.type() == `success` )
    icon = octicons.check.toSVG({ width: 16 });
  
  /** Otherwise, if alert is info type, use question mark */
  else if ( this.type() == `info` )
    icon = octicons.question.toSVG({ width: 16 });
  
  const strong = new ezhtml.Strong().text(icon + `&nbsp;&nbsp;` + this.strong() + ` `);
  
  /** Append strong text to wrapper if it has length */
  if ( this.strong().length > 0 )
    wrapper.append(strong);
  
  /** Append remaining text to wrapper */
  wrapper.text(this.text());
  
  let markup = ``;
  
  /** If there are columns before, append space to markup */
  if ( this.colsBefore() > 0 )
    markup += new ezspace.EZSpace().cols(this.colsBefore()).render(indent);
  
  /** Append input to markup */
  markup += wrapper.render(indent);
  
  /** If there are columns after, append space to markup */
  if ( this.colsAfter() > 0 )
    markup += new ezspace.EZSpace().cols(this.colsAfter()).render(indent);
  
  /** Return markup */
  return markup;
};

/** Export class from module */
module.exports.EZAlert = EZAlert;
