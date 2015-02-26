'use strict';

// These headers are required according to https://bitbucket.org/javarosa/javarosa/wiki/OpenRosaRequest
var OpenRosaHeaders = {
  "X-OpenRosa-Version": "1.0"
};

module.exports = function(options) {
  return function(req, res, next) {
    var err, prop;

    res.set(OpenRosaHeaders);

    for (prop in OpenRosaHeaders) {
        if (req.headers[prop.toLowerCase()] !== OpenRosaHeaders[prop]) {
            err = new Error('Request missing required header "' + prop + "'");
            err.status = 400;
            return next(err);
        }
    }
    
    next();
  };
};
