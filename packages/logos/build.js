const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');

console.log('Build started...');
console.log('=============================================');

const folderNameToCreate = 'dist';

const sourceDir = path.join(__dirname, "assets");
const destinationDir = path.join(__dirname, `${folderNameToCreate}`);


if (!fs.existsSync(destinationDir)){
  console.log('Creating the dist folder...');
  fs.mkdirSync(destinationDir, { recursive: true });
}

console.log('Copying files...');
fsExtra.copy(sourceDir, destinationDir, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log('=============================================');
  console.log('Build completed!');
});


