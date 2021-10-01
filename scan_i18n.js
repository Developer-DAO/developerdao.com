const fs = require('fs');
const path = require('path');

// reads the arguments at the command line:
// index 2 is the source code directory
// index 3 is the language directory
// iterates over the source directory, recursively, to find any call to t('YOUR_KEY_HERE')
// once all keys have been found, it iterates over the langage directory and checks each translation file to see if it has the i18n keys expected
// if any don't, then they are noted
// after iterating over all language files, the resulting misses are printed to the command line
// but if everything is translated, then it prints a success message instead.

if (process.argv.length !== 4) {
  console.error(
    `unexpected arguments; expected 2, saw ${process.argv.length - 2}`,
  );
  return;
}
console.log(
  'scanning internationalization keys in',
  process.argv[2],
  'against language files in',
  process.argv[3],
);

function getAllFiles(dirPath, fileArray) {
  fs.readdirSync(dirPath).forEach(function (file) {
    let filePath = path.join(dirPath, file);
    let stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileArray);
    } else {
      fileArray.push(filePath);
    }
  });
  return fileArray;
}

const fileArray = getAllFiles(process.argv[2], []);
const languageFiles = getAllFiles(process.argv[3], []);

const regex = /(\s|\{)t\(\'(\w*)\'/;
const keys = [];
const rejects = [];
fileArray.forEach((filePath) => {
  const fileContents = fs.readFileSync(filePath, {
    encoding: 'utf-8',
    flag: 'r',
  });
  fileContents.split('\n').forEach((textLine) => {
    const result = regex.exec(textLine);
    if (result) {
      keys.push(result[2]);
    }
  });
});

// now reduce to uniques
const uniqueKeys = [...new Set(keys)];
const missTracker = {};

// and now we can check our translations for these keys
languageFiles.forEach((filePath) => {
  const fileContents = fs.readFileSync(filePath, {
    encoding: 'utf-8',
    flag: 'r',
  });
  // turn that filecontent back into an object and get its keys
  const contentObject = JSON.parse(fileContents);
  uniqueKeys.forEach((key) => {
    if (!contentObject[key]) {
      if (!missTracker[filePath]) {
        missTracker[filePath] = [];
      }
      missTracker[filePath].push(key);
    }
  });
});

if (Object.keys(missTracker).length > 0) {
  Object.keys(missTracker).forEach((fileName) => {
    // red: \x1b[31m%s\x1b[0m
    // yellow: \x1b[33m%s\x1b[0m
    console.error('\x1b[31m%s\x1b[0m', `Missing keys in ./${fileName}:`);
    console.log('\x1b[33m%s\x1b[0m', `[${missTracker[fileName].join(', ')}]\n`);
  });
} else {
  console.log('Success! i18n scan found no missing keys');
}
