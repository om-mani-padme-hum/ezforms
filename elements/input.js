/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Require local modules */
const element = require(`./element`);

/** Configure Input class */
const configInput = {
  className: `Input`,
  extends: element.Element,
  properties: [
    { name: `id`, type: `string` },
    { name: `max`, type: `float`, default: -1 },
    { name: `min`, type: `float`, default: -1 },
    { name: `name`, type: `string` },
    { name: `required`, type: `boolean` },
    { name: `type`, type: `string`, default: `text` },
    { name: `value`, type: `string` }
  ]
};

/** Create Input class */
ezobjects.createClass(configInput);

/** Create method for rendering element */
Input.prototype.render = function (indent = 0) {
  /** Validate type */
  if ( ![`checkbox`, `color`, `date`, `datetime-local`, `email`, `file`, `month`, `number`, `password`, `radio`, `range`, `tel`, `text`, `time`, `url`, `week`].includes(this.type()) )
    throw new SyntaxError(`Input.render(): Input type invalid, must be checkbox, color, date, datetime-local, email, file, month, number, password, radio, range, tel, time, text, url, or week.`);
  
  /** Set tag */
  this.tag(`input`);
  
  /** If id is set, add attribute */
  if ( this.id().length > 0 )
    this.addAttribute(`id`, this.id());
  
  /** If min is set, add attribute */
  if ( this.min() >= 0 )
    this.addAttribute(`min`, this.min());
  
  /** If max is set, add attribute */
  if ( this.max() >= 0 )
    this.addAttribute(`max`, this.max());
  
  /** If name is set, add attribute */
  if ( this.name().length > 0 )
    this.addAttribute(`name`, this.name());
  
  /** If value is set, add attribute */
  if ( this.value().length > 0 )
    this.addAttribute(`value`, this.value());
  
  /** If required is set, add attribute */
  if ( this.required() )
    this.addAttribute(`required`, `required`);
  
  /** Add attribute for type */
  this.addAttribute(`type`, this.type());
    
  /** Return markup */
  return element.Element.prototype.render.call(this, indent);
};

/** Export class from module */
module.exports.Input = Input;
