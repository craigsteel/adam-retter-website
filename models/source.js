const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'source.json'
);

const getSourcesFromFile = cb => {
  fs.readFile(p, (err, fileSources) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileSources));
    }
  });
};

module.exports = class Source {
 constructor(id, title, description, gitHubLink, gitHubIcon, githubLinkText) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.gitHubIcon = gitHubLink;
    this.gitHubIcon = gitHubIcon;
    this.githubLinkText = githubLinkText;

  }

  save() {
    getSourcesFromFile(sources => {
      if (this.id) {
        const existingSourceIndex = sources.findIndex(
          source => source.Id === this.id
        );
        updatedSources[existingSourceIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedSources), err => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        sources.push(this);
        fs.writeFile(p, JSON.stringify(sources), err => {
          console.log(err);
        });
      }
    });
  }

  static deleteSourcesById(id) {
    getSourcesFromFile(sources => {
      const updatedSources = sources.filter(source => source.id !== id);
      fs.writeFile(p, JSON.stringify(updatedSources), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getSourcesFromFile(cb);
  }

  static findSourceById(id, cb) {
    getSourcesFromFile(contents => {
      const source = sources.find(p => p.id === id);
      cb(source);
    });
  }
};
