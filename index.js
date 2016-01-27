'use strict'

// These headers are required according to https://bitbucket.org/javarosa/javarosa/wiki/OpenRosaRequest
var OpenRosaHeaders = {
  'X-OpenRosa-Version': '1.0'
}

/**
 * Creates middleware to add OpenRosa headers to any response, and only accept requests from clients sending the correct headers, as per the [OpenRosaRequest spec](https://bitbucket.org/javarosa/javarosa/wiki/OpenRosaRequest)
 * @param {object} [options]
 * @param {boolean} [options.strict=true] If true, only respond to requests with the correct OpenRosa headers. If false, does not care about request headers. Default=true
 * @return {[type]} [description]
 */
module.exports = function (options) {
  options = options || {}
  if (options.strict !== false) options.strict = true

  return function (req, res, next) {
    var err, prop

    for (var header in OpenRosaHeaders) {
      res.setHeader(header, OpenRosaHeaders[header])
    }

    for (prop in OpenRosaHeaders) {
      if (options.strict && req.headers[prop.toLowerCase()] !== OpenRosaHeaders[prop]) {
        err = new Error('Request missing required header "' + prop + "'")
        err.status = 400
        return next(err)
      }
    }

    next()
  }
}
