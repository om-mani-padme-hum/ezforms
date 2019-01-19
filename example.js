const ejs = require(`ejs`);
const express = require(`express`);
const ezforms = require(`./index`);
const fs = require(`fs`);

/** Create express web server */
const app = express();

/** Create route for example form at root of web server */
app.get(`/`, (req, res) => {
  /** Create form */
  const form = new ezforms.Form();
  
  /** Set form action and method properties */
  form.action(`/`).method(`GET`);
  
  /** Create form heading (default 16 cols wide) */
  form.heading().rank(1).text(`My Example Form`);
  
  /** Create two text inputs, separated with a space */
  form.text().cols(6).name(`firstName`).label(`First Name:`).required(true);
  form.space().cols(2);
  form.text().cols(6).name(`lastName`).label(`Last Name:`).required(true);
  form.space().cols(2);

  /** Create password inputs */
  form.password().cols(8).name(`password`).label(`Choose Password:`).required(true);
  form.password().cols(8).name(`password2`).label(`Confirm Password:`).required(true);
  
  /** Create select pulldown input */
  form.select().cols(8).name(`favoritePetType`).label(`Favorite Pet Type:`);
  form.option().value(`bird`).text(`Bird`);
  form.option().value(`cat`).text(`Cat`);
  form.option().value(`dog`).text(`Dog`);
  form.option().value(`dog`).text(`Gerbil`);
  form.option().value(`horse`).text(`Horse`);
  form.option().value(`rat`).text(`Mouse/Rat`);
  
  /** Create horizontal radio group input */
  form.radios().cols(8).name(`sex`).label(`Sex:`).align(`horizontal`);
  form.option().value(`female`).text(`Female`).selected(true);
  form.option().value(`male`).text(`Male`);
  
  /** Create vertical checkbox group input */
  form.checkboxes().cols(6).name(`languages`).label(`Langauges:`).align(`vertical`);
  form.option().value(`arabic`).text(`Arabic`);
  form.option().value(`mandarin`).text(`Chinese Mandarin`);
  form.option().value(`english`).text(`English`);
  form.option().value(`french`).text(`French`);
  form.option().value(`german`).text(`German`);
  form.option().value(`italian`).text(`Italian`);
  form.option().value(`japanese`).text(`Japanese`);
  form.option().value(`korean`).text(`Korean`);
  form.option().value(`portuguese`).text(`Portuguese`);
  form.option().value(`spanish`).text(`Spanish`);
  form.option().value(`russian`).text(`Russian`);
  form.option().value(`urdu`).text(`Urdu`);
  
  /** Create number input */
  form.number().cols(4).min(13).max(120).name(`age`).id(`age`).label(`Age:`).value(40);
  
  /** Create range input */
  form.range().cols(6).min(13).max(120).id(`ageSlider`).label(`&nbsp;`).value(40).addColumnDivClass(`pad-me`);
  
  /** Create date input */
  form.date().cols(6).name(`birthDate`).label(`Birth Date:`);
  
  /** Create email input */
  form.email().cols(10).name(`email`).label(`Email Address:`);
  
  /** Create text area input (default 16 cols wide -- EZ form cols, not text area cols) */
  form.textarea().rows(4).name(`description`).label(`Describe Yourself:`);
  
  /** Create buttons with spaces around */
  form.space().cols(3);
  form.button().cols(4).type(`reset`).text(`Reset`);
  form.space().cols(2);
  form.button().cols(4).type(`submit`).text(`Submit`);
  form.space().cols(3);
  
  /** Render EJS template with our rendered form */
  const html = ejs.render(fs.readFileSync(`example.ejs`).toString(), { form: form.render() });
  
  /** Send HTML to requestor */
  res.send(html);
});

/** Create route for example CSS */
app.get(`/css/:file`, (req, res) => {
  res.sendFile(__dirname + `/css/` + req.params.file);
});

/** Create route for jQuery */
app.get(`/js/jquery.min.js`, (req, res) => {
  res.sendFile(__dirname + `/node_modules/jquery/dist/jquery.min.js`);
});

/** Start web server */
app.listen(7000, () => {
  console.log(`Web server up and running on port 7000!`);
});
