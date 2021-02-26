# Adam Retter App

These are the files that generate the http://www.adamretter.org.uk website.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Requirements

* NPM
* Express.js
* NodeJS
* Gulp.js
* ejs (templating language)

### Installing

From your Terminal, run:

```bash
git clone https://github.com/craigsteel/adam-retter-website.git

cd adam-retter-website
npm install
```

### Running

```bash
npm start
```

* Starts live server
* Compile scss to compress css and move to public folder/stylesheets/style.css.
* Watch for changes

```bash
gulp
```

* Compress images and move to public folder/images.
* Move fonts to public folder
* Create svg sprite in public folder/images/svgs.

### Building

If you want to build a distribution for uploading to the webserver you can run:

```bash
npm run build
```

The `public/` folder will contain the generated website

## Authors

The initial design was created under contract by - [Craig Steel Design](https://craigsteel-design.com)
