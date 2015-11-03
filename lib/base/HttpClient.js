'use strict';

var http = require('http');

class HttpClient {
  request(method, url, params, data, headers, auth, timeout, allow_redirects) {
    var request = http.request({
    }, function(response) {
    });

    request.end();
  }
}
