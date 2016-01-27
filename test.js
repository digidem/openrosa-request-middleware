var test = require('tape')
var httpMocks = require('node-mocks-http')

var middleware = require('./')()

test('Middleware accepts requests with X-OpenRosa-Version header', function (t) {
  t.plan(1)

  var req = httpMocks.createRequest()
  var res = httpMocks.createResponse()

  req.headers['x-openrosa-version'] = '1.0'

  middleware(req, res, function (err) {
    t.error(err, 'should not throw error')
  })
})

test('Middleware rejects requests without X-OpenRosa-Version header', function (t) {
  t.plan(2)

  var req = httpMocks.createRequest()
  var res = httpMocks.createResponse()

  middleware(req, res, function (err) {
    t.ok(err, 'got an error')
    t.equal(err.status, 400, 'correct error status code')
  })
})

test('Middleware accepts requests without X-OpenRosa-Version header if options.strict === false', function (t) {
  t.plan(1)

  var unstrictMiddleware = require('./')({strict: false})
  var req = httpMocks.createRequest()
  var res = httpMocks.createResponse()

  unstrictMiddleware(req, res, function (err) {
    t.error(err, 'should not throw error')
  })
})

test('Middleware adds X-OpenRosa-Version header to response', function (t) {
  t.plan(1)

  var req = httpMocks.createRequest()
  var res = httpMocks.createResponse()

  middleware(req, res, function () {
    t.equal(res.get('X-OpenRosa-Version'), '1.0', 'correct header on response')
  })
})
