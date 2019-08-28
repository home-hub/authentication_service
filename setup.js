'use strict';
const fs = require('fs');
fs.createReadStream('.sample-env')
  .pipe(fs.createWriteStream('.env'));

fs.writeFile('public.key','paste your public key in here',(err) => {
  if (err) throw err;
  console.log('File public.key was created successfully.');
})

fs.writeFile('private.key', 'paste your private key in here', (err) => {
  if (err) throw err;
  console.log('File private.key was created successfully.');
})