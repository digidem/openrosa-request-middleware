OpenRosa Request Middleware
===========================
[![travis][travis-image]][travis-url]
[![js-standard-style][js-standard-image]][js-standard-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[travis-image]: https://travis-ci.org/digidem/openrosa-request-middleware.svg?branch=master
[travis-url]: https://travis-ci.org/digidem/openrosa-request-middleware
[js-standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[js-standard-url]: http://standardjs.com/
[npm-image]: https://img.shields.io/npm/v/openrosa-request-middleware.svg?style=flat
[npm-url]: https://npmjs.org/package/openrosa-request-middleware
[downloads-image]: https://img.shields.io/npm/dm/openrosa-request-middleware.svg?style=flat
[downloads-url]: https://npmjs.org/package/openrosa-request-middleware

Very simple middleware to check for OpenRosa headers on a request and add OpenRosa headers to a response in an [Express](http://www.expressjs.com) app, as defined by https://bitbucket.org/javarosa/javarosa/wiki/OpenRosaRequest

## Usage

```javascript
var OpenrosaMiddleware = require('openrosa-request-middleware');

app.use(OpenrosaMiddleware());
```

Note that it exports a factory that creates the middleware when invoked.

pass `options = {strict: false}` to ignore request headers
