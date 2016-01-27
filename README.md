OpenRosa Request Middleware
===========================

Very simple middleware to check for OpenRosa headers on a request and add OpenRosa headers to a response in an [Express](http://www.expressjs.com) app, as defined by https://bitbucket.org/javarosa/javarosa/wiki/OpenRosaRequest

## Usage

```javascript
var OpenrosaMiddleware = require('openrosa-request-middleware');

app.use(OpenrosaMiddleware());
```

Note that it exports a factory that creates the middleware when invoked.

pass `options = {strict: false}` to ignore request headers
