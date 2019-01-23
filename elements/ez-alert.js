/** Require external modules */
const ezhtml = require(`ezhtml`);
const ezobjects = require(`ezobjects`);

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
  
  /** Create column div */
  const columnDiv = new ezhtml.Div();
  
  /** Set required cols class on column div */
  columnDiv.addClass(`col-${this.cols()}`);
  
  if ( this.type() == `error` )
    columnDiv.addClass(`alert-error`);
  else if ( this.type() == `warning` )
    columnDiv.addClass(`alert-warning`);
  else if ( this.type() == `success` )
    columnDiv.addClass(`alert-success`);
  else if ( this.type() == `info` )
    columnDiv.addClass(`alert-info`);
  
  const strong = new ezhtml.Strong().text(this.strong() + `&nbsp;&nbsp;`);
  
  /** Append strong text to column div if it has length */
  if ( this.strong().length > 0 )
    columnDiv.append(strong);
  
  /** Append remaining text to column div */
  columnDiv.text(this.text());
  
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
module.exports.EZAlert = EZAlert;
