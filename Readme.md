# rocketrip-test

This is the repo for my rocketrip code test. See the instructions below for all uses.

Notes:

* About 4 hours of effort
* No external runtime dependencies
* Does not handle timezones

## Prerequisites

* node
* npm
* Java

## Install and run

* `git clone git@github.com/jacopotarantino/rocketrip-test.git`
* `cd rocketrip-test`
* `npm install`
* `npm test`

## Testing

This will run standard, karma, protractor, nsp, and jsdoc. Webpack uses sass, jade, and babel to wire up your components/requires. jsdoc outputs a compiled static site to `/docs`. Babel transpile the ES6 in `index.js` to ES5 in `dist/index.js` and creates a sourcemap.

* `npm run unit`

(You can also run `npm test` for the full test suite but this isn't recommended for this project.)

## Run a watcher for development

This starts a browsersync server running on `localhost:3000`. It serves files out of the current directory and automatically opens a tab in your browser showing off the index page. The `index.html` file is mostly intended for local testing and manual QA.

* `npm start`

## Build only

Run the build to generate dist files and use them as you please.

* `npm run build`

## Contributing

* Checkout new branch - `git checkout feature/intent-of-feature`
* Make changes
* Run tests - `npm test`
* Commit changes - `npm run commit` - This uses commitizen and also checks that your commits are valid on the other side.
* Push changes - `git push`
* Create pull request
* Get review
* Merge changes
