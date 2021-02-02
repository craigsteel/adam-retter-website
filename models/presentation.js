const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'presentations.json'
);

const getPresentationsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Presentation {
 constructor(id, title, description, firstIcon, firstLink, secondIcon, secondLink, thirdIcon, thirdLink) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.firstIcon = firstIcon;
    this.firstLink = firstLink;
    this.secondIcon = secondIcon;
    this.secondLink = secondLink;
    this.thirdIcon = thirdIcon;
    this.thirdLink = thirdLink;
  }

  save() {
    getPresentationsFromFile(presentations => {
      presentations.push(this);
      fs.writeFile(p, JSON.stringify(presentations), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getPresentationsFromFile(cb);
  }
};
