const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'presentations.json'
);

const getPresentationsFromFile = cb => {
  fs.readFile(p, (err, filePresentations) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(filePresentations));
    }
  });
};

module.exports = class Presentation {
 constructor(id, title, description, firstIcon, firstLink, firstLinkText, secondIcon, secondLink, secondLinkText, thirdIcon, thirdLink, thirdLinkText) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.firstIcon = firstIcon;
    this.firstLink = firstLink;
    this.firstLinkText = firstLinkText;
    this.secondIcon = secondIcon;
    this.secondLink = secondLink;
    this.secondLinkText = secondLinkText;
    this.thirdIcon = thirdIcon;
    this.thirdLink = thirdLink;
    this.thirdLinkText = thirdLinkText;
  }

  save() {
    getPresentationsFromFile(presentations => {
      if (this.id) {
        const existingPresentationIndex = presentations.findIndex(
          pres => pres.Id === this.id
        );
        const updatedPresentations = [...presentations];
        updatedPresentations[existingPresentationIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedPresentations), err => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        presentations.push(this);
        fs.writeFile(p, JSON.stringify(presentations), err => {
          console.log(err);
        });
      }
    });
  }

  static deleteById(id) {
    getPresentationsFromFile(presentations => {
      const updatedPresentations = presentations.filter(pres => pres.id !== id);
      fs.writeFile(p, JSON.stringify(updatedPresentations), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getPresentationsFromFile(cb);
  }

  static findById(id, cb) {
    getPresentationsFromFile(presentations => {
      const presentation = presentations.find(p => p.id === id);
      cb(presentation);
    });
  }
};
