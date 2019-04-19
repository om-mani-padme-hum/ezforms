#!/bin/bash

echo "Compiling SCSS..."

sass scss/ezforms.scss css/ezforms.css

echo "Done, starting example..."

node example.js
