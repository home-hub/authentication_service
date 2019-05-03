'use strict';
const fs = require('fs');
fs.createReadStream('.sample-env')
  .pipe(fs.createWriteStream('.env'));

fs.writeFile('public.key','paste your public key in here',(err) => {
  if (err) throw err;
  console.log('File was created successfully.');
})