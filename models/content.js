const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'contents.json'
);

const getContentsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Content {
 constructor(id, title, description, firstIcon, firstLink, firstLinkText, secondIcon, secondLink, secondLinkText, thirdIcon, thirdLink, thirdLinkText, sourceTitle, sourceDescription, githubLinkText, gitHubIcon) {
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
    this.sourceTitle = sourceTitle;
    this.sourceDescription = sourceDescription;
    this.githubLinkText = githubLinkText;
    this.gitHubIcon = gitHubIcon;

  }

  save() {
    getContentsFromFile(contents => {
      if (this.id) {
        const existingContentIndex = contents.findIndex(
          cont => cont.Id === this.id
        );
        const updatedContents = [...contents];
        updatedContents[existingContentIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedContents), err => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        contents.push(this);
        fs.writeFile(p, JSON.stringify(contents), err => {
          console.log(err);
        });
      }
    });
  }

  static deleteById(id) {
    getContentsFromFile(contents => {
      const updatedContents = contents.filter(cont => cont.id !== id);
      fs.writeFile(p, JSON.stringify(updatedContents), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getContentsFromFile(cb);
  }

  static findById(id, cb) {
    getContentsFromFile(contents => {
      const content = contents.find(p => p.id === id);
      cb(content);
    });
  }
};
