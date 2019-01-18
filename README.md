# EZ Forms v0.3.0

A super easy to use Node.js module for generating HTML 5 forms that can easily be customized with CSS using the default class names or your own.

## Example

### example.js

```javascript
/** Require external modules */
const ejs = require(`ejs`);
const express = require(`express`);
const ezforms = require(`ezforms`);
const fs = require(`fs`);

/** Create express app */
const app = express();

/** Define express port */
const port = 7000;

/** Create express route for the root URL '/' */
app.get(`/`, (req, res) => {
  /** Create our EZ form element */
  const form = new ezforms.Form();
  
  /** Start by setting the form attributes */
  form.id(`exampleForm`).method(`GET`).action(`/`);
  
  /** Row 1 */

  /** Create rank 1 form heading */
  form.heading().rank(1).text(`Create User Account`);

  /** Keep in mind each form row has 16 possible columns... */
  
  /** Row 2 */

  /** Create text inputs for first and last name, each 8 columns wide, but adding some padding on the right so they don't take up full width */
  form.text().cols(8).addDivClass(`pr-4`).label(`First Name:`).name(`firstName`).required(true);
  form.text().cols(8).addDivClass(`pr-4`).label(`Last Name:`).name(`lastName`).required(true);
  
  /** Row 3 */

  /** Create password inputs for password and password confirmation, each 8 columns wide */
  form.password().cols(8).label(`Password:`).id(`password`).name(`password`);
  form.password().cols(8).label(`Confirm Password:`).id(`password2`).name(`password2`);

  /** Row 4 */
  
  /** Create select pull-down input for age, 2 columns wide */
  form.select().cols(2).label(`Age:`).name(`age`);
    
  /** Loop from age = 18 to age <= 85, adding an option to the select with each age, values and text labels are the same, just the age */
  for ( let age = 18; age <= 85; age++ )
    form.option().value(`${age}`).text(`${age}`);
  
  /** Create checkbox input for sex, 6 columns wide, horizontally aligned */
  form.checkboxes().cols(6).label(`Sex:`).name(`sex`).align(`horizontal`);
  form.option().value(`male`).text(`Male`).selected(true);
  form.option().value(`female`).text(`Female`);
  
  /** Create date input for birth date, 6 columns wide */
  form.date().cols(6).label(`Birth Date:`).name(`birthDate`);
  
  /** Create space of 2 columns on row so we finish out the required 16 columns (2 age + 6 sex + 6 birth date = only 14) */
  form.space().cols(2);
  
  /** Row 5 */
  
  /** Create radio inputs for department, 8 columns wide, vertically aligned */
  form.radios().cols(8).label(`Department:`).name(`department`).align(`vertical`);
  form.option().value(`administration`).text(`Administration`);
  form.option().value(`engineering`).text(`Engineering`).selected(true);
  form.option().value(`materials`).text(`Materials`);
  form.option().value(`quality`).text(`Quality`);
  
  /** Create checkbox inputs for product lines, 8 columns wide, vertically aligned */
  form.checkboxes().cols(8).label(`Product Lines:`).name(`productLines`).align(`vertical`);
  form.option().value(`thingies`).text(`Thingies`);
  form.option().value(`doohickeys`).text(`Doohickeys`);
  form.option().value(`gizmos`).text(`Gizmos`);

  /** Row 6 */
  
  /** Create multi-select input for favorite cuisine, 8 columns wide, but add some padding on the right so it doesn't take up full width */
  form.select().cols(8).addDivClass(`pr-4`).addSelectClass(`show4`).label(`Favorite Cuisine:`).name(`cuisine`).multiple(true);
  form.option().value(`american`).text(`American`);
  form.option().value(`chinese`).text(`Chinese`);
  form.option().value(`german`).text(`German`);
  form.option().value(`italian`).text(`Italian`);
  form.option().value(`japanese`).text(`Japanese`);
  form.option().value(`mexican`).text(`Mexican`);
  form.option().value(`russian`).text(`Russian`);
  form.option().value(`slavic`).text(`Slavic`);
  
  /** Create checkbox input for newsletter, 8 columns wide, horizontally aligned */
  form.checkboxes().cols(8).label(`Subscribe to Newsletter:`).name(`newsletter`).align(`horizontal`);
  form.option().value(`yes`).text(`Sign Me Up!`).selected(true);

  /** Row 7 */
  
  /** Create color input for favorite color, 5 columns wide */
  form.color().cols(5).addInputClass(`ml-2`).label(`Favorite Color:`).name(`favoriteColor`);
  
  /** Create space of 3 columns between color and start time */
  form.space().cols(3);
  
  /** Create time input for start time, 8 columns wide */
  form.time().cols(8).label(`Start Time:`).name(`startTime`);
  
  /** Row 8 */
  
  /** Create file input for attachment, 16 columns wide */
  form.file().cols(16).label(`Attachment:`).name(`attachment`);
  
  /** Row 9 */
  
  /** Create month input for start month, 6 columns wide */
  form.month().cols(6).label(`Month Started:`).name(`startMonth`);
  
  /** Create space of 1 column between month started and # children */
  form.space().cols(1);
  
  /** Create number input for # children, min 0 children, max 8 children, 3 columns wide */
  form.number().cols(3).label(`# Children:`).name(`numChildren`).min(0).max(8);
  
  /** Create space of 1 column between # children and youngest */
  form.space().cols(1);
  
  /** Create range input for youngest child, min 0, max 18, 5 columns wide */
  form.range().cols(5).label(`Youngest:`).name(`youngest`).min(0).max(18);
  
  /** Row 10 */
  
  /** Create week input for start week, 7 columns wide */
  form.week().cols(7).label(`Week Started:`).name(`startWeek`);
  
  /** Create email input for email address, 9 columns wide */
  form.email().cols(9).label(`Email:`).name(`email`);
  
  /** Row 11 */
  
  /** Create URL input, 16 columns wide */
  form.url().cols(16).label(`URL:`).name(`url`);
  
  /** Row 12 */
  
  /** Create text area input for self description, 16 columns wide */
  form.textarea().cols(16).rows(4).label(`Describe Yourself:`).name(`description`);
  
  /** Row 13 */
  
  /** Create space of 4 columns before buttons */
  form.space().cols(4);
  
  /** Create reset button, reset type, 4 columns wide */
  form.button().cols(4).type(`reset`).text(`Reset`);
  
  /** Create submit button, button type, 4 columns wide */
  form.button().cols(4).type(`submit`).text(`Submit`);
  
  /** Create space of 4 columns after buttons */
  form.space().cols(4);
  
  /** Read in our EJS template for the remaining HTML */
  const template = fs.readFileSync(`templates/example.ejs`).toString();
  
  /** Render EJS template while inserting form using form.render() with an indent of 8 spaces for View Source readability */
  const html = ejs.render(template, { form: form.render(8) });

  /** Send HTML as response to requestor */
  res.send(html);
});

/** Create express route for CSS files */
app.get(`/css/:file`, (req, res, next) => {
  /** Point all  to 'css' folder */
  res.sendFile(__dirname + `/css/` + req.params.file, () => {});
});

/** Start server on defined port */
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

### templates/example.ejs

```jsp
<html>
  <head>
    <title>Example EZ Form</title>
    <link rel='stylesheet' type='text/css' href='/css/ezforms.css'>
    <link rel='stylesheet' type='text/css' href='/css/example.css'>
  </head>
  <body>
    <div class='left-side'>
      <h1>Lorem Ipsum</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend tristique nisl, ut auctor turpis varius quis. Fusce congue aliquet auctor. Praesent sodales leo in diam luctus blandit. Maecenas eget magna et leo hendrerit maximus. In mattis metus a velit accumsan, id sollicitudin libero convallis. Etiam non interdum risus. Nunc porttitor nibh eu libero viverra pulvinar. Phasellus efficitur justo nec quam molestie, non scelerisque nisl tempor. Morbi vitae urna commodo, porttitor nulla ut, sodales massa. Aliquam cursus arcu vel magna cursus hendrerit nec ac odio. Sed feugiat condimentum sollicitudin. Vivamus consectetur dui nec rhoncus lacinia. Phasellus facilisis, dolor quis mattis cursus, arcu sem lobortis nisl, a suscipit dui nibh varius sapien. Vestibulum dui tortor, ornare scelerisque eleifend eget, pretium et ligula. Nulla malesuada faucibus mauris, a porta neque facilisis ut. Vestibulum ut ornare urna.</p>
      <p>Cras in risus pellentesque, vestibulum nibh in, fermentum arcu. Vivamus nisl lectus, ullamcorper id maximus ut, bibendum a ex. Integer vel venenatis eros, fringilla congue tellus. Donec sed eros cursus, auctor magna vel, pellentesque neque. Phasellus sit amet semper justo, ac semper libero. Phasellus vestibulum ex quis tortor sollicitudin vehicula. Vivamus at porttitor mi. Nulla pretium velit libero, a dignissim eros faucibus sit amet. Aliquam in commodo lorem, in iaculis velit. Suspendisse at tellus odio. Morbi sit amet finibus tellus. Pellentesque in maximus ex. Aliquam tortor nunc, pellentesque et odio ut, pellentesque fringilla metus. Integer pharetra ante a facilisis pellentesque. Aliquam erat volutpat.</p>
      <p>Duis pharetra ipsum at nulla tincidunt, hendrerit tempus elit feugiat. Suspendisse potenti. Curabitur ut orci dapibus, tempor nisi sed, lacinia tellus. Duis mollis mauris sed lectus mattis vestibulum. Vivamus eleifend sapien lorem. Praesent mattis, odio pellentesque rhoncus dapibus, felis nulla laoreet justo, quis dignissim sapien risus eu nibh. Maecenas lacinia, metus non aliquet consequat, enim mi semper eros, sed suscipit ipsum nulla a diam.</p>
    </div>
    <div class='right-side'> 
<%-form-%>
    </div>
  </body>
</html>
```

### example.css

```css
h1, h2, h3, h4, h5, h6 {
  color: #446e9b;
}

button[type=reset] {
  color: #e1e1e1;
  background: #e10000;
}

button[type=reset]:hover {
  color: rgba(225, 225, 225, 0.8);
  background: rgba(225, 0, 0, 0.8);
}

button[type=button] {
  color: #e1e1e1;
  background: #446e9b;
}

button[type=button]:hover {
  color: rgba(225, 225, 225, 0.8);
  background: rgba(68, 110, 155, 0.8);
}

.left-side {
  display: inline-block;
  float: left;
  width: 50%;
  padding-right: 5%;
}

.left-side p {
  text-indent: 20px;
  text-align: justify;
}

.right-side {
  display: inline-block;
  float: right;
  width: 50%;
  padding-right: 5%;
}

.pr-4 {
  padding-right: 50px;
}

.ml-2 {
  margin-left: 10px;
}
```