/** Require external modules */
const ezobjects = require(`ezobjects`);

/** Require local modules */
const containerElement = require(`./container-element`);

/** Configure Select class */
const configSelect = {
  className: `Select`,
  extends: containerElement.ContainerElement,
  properties: [    
    { name: `id`, type: `string` },
    { name: `multiple`, type: `boolean` },
    { name: `required`, type: `boolean` },
    { name: `name`, type: `string` }
  ]
};

/** Create Select class */
ezobjects.createClass(configSelect);

/** Create method for rendering element */
Select.prototype.render = function (indent = 0) {
  /** Set tag */
  this.tag(`select`);
  
  /** If id is set, add attribute */
  if ( this.id().length > 0 )
    this.addAttribute(`id`, this.id());
  
  /** If name is set, add attribute */
  if ( this.name().length > 0 )
    this.addAttribute(`name`, this.name());
  
  /** If multiple is set, add attribute */
  if ( this.multiple() )
    this.addAttribute(`multiple`, `multiple`);
  
  /** If required is set, add attribute */
  if ( this.required() )
    this.addAttribute(`required`, `required`);
  
  /** Return markup */
  return containerElement.ContainerElement.prototype.render.call(this, indent);
};

/** Export class config and class from module */
module.exports.Select = Select;
