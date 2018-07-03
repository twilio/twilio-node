'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Composition', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.video.v1.compositions('CJXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {sid: 'CJXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var url = _.template('https://video.twilio.com/v1/Compositions/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'completed',
          'date_created': '2015-07-30T20:00:00Z',
          'date_completed': '2015-07-30T20:01:33Z',
          'date_deleted': null,
          'sid': 'CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'audio_sources': [
              'PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'user*'
          ],
          'audio_sources_excluded': [
              'RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          ],
          'video_layout': {
              'grid': {
                  'video_sources': [
                      '*'
                  ],
                  'video_sources_excluded': [
                      'MTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  ],
                  'reuse': 'show_oldest',
                  'x_pos': 100,
                  'y_pos': 600,
                  'z_pos': 10,
                  'width': 0,
                  'height': 0,
                  'max_columns': 0,
                  'max_rows': 0,
                  'cells_excluded': []
              },
              'pip': {
                  'video_sources': [
                      'RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
                  ],
                  'video_sources_excluded': [],
                  'reuse': 'none',
                  'x_pos': 100,
                  'y_pos': 600,
                  'z_pos': 10,
                  'width': 0,
                  'height': 0,
                  'max_columns': 0,
                  'max_rows': 0,
                  'cells_excluded': []
              }
          },
          'resolution': '1280x720',
          'format': 'webm',
          'bitrate': 64,
          'size': 4,
          'duration': 6,
          'trim': true,
          'media_external_location': null,
          'encryption_key': null,
          'url': 'https://video.twilio.com/v1/Compositions/CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'media': 'https://video.twilio.com/v1/Compositions/CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.compositions('CJXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'compositions': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'completed',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_completed': '2015-07-30T20:01:33Z',
                  'date_deleted': null,
                  'sid': 'CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'audio_sources': [
                      'RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'user*'
                  ],
                  'audio_sources_excluded': [],
                  'video_layout': {
                      'grid': {
                          'video_sources': [
                              'user*'
                          ],
                          'video_sources_excluded': [],
                          'reuse': 'show_oldest',
                          'x_pos': 100,
                          'y_pos': 600,
                          'z_pos': 10,
                          'width': 0,
                          'height': 0,
                          'max_columns': 0,
                          'max_rows': 0,
                          'cells_excluded': []
                      },
                      'pip': {
                          'video_sources': [
                              'RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
                          ],
                          'video_sources_excluded': [],
                          'reuse': 'none',
                          'x_pos': 100,
                          'y_pos': 600,
                          'z_pos': 10,
                          'width': 0,
                          'height': 0,
                          'max_columns': 0,
                          'max_rows': 0,
                          'cells_excluded': []
                      }
                  },
                  'resolution': '1280x720',
                  'format': 'webm',
                  'bitrate': 64,
                  'size': 4,
                  'duration': 6,
                  'trim': true,
                  'media_external_location': null,
                  'encryption_key': null,
                  'url': 'https://video.twilio.com/v1/Compositions/CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'media': 'https://video.twilio.com/v1/Compositions/CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Compositions?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Compositions?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'compositions'
          }
      });
      holodeck.mock(new Response(200, body));
      client.video.v1.compositions.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'compositions': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'completed',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_completed': '2015-07-30T20:01:33Z',
                  'date_deleted': null,
                  'sid': 'CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'audio_sources': [
                      'RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'user*'
                  ],
                  'audio_sources_excluded': [],
                  'video_layout': {
                      'grid': {
                          'video_sources': [
                              'user*'
                          ],
                          'video_sources_excluded': [],
                          'reuse': 'show_oldest',
                          'x_pos': 100,
                          'y_pos': 600,
                          'z_pos': 10,
                          'width': 0,
                          'height': 0,
                          'max_columns': 0,
                          'max_rows': 0,
                          'cells_excluded': []
                      },
                      'pip': {
                          'video_sources': [
                              'RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
                          ],
                          'video_sources_excluded': [],
                          'reuse': 'none',
                          'x_pos': 100,
                          'y_pos': 600,
                          'z_pos': 10,
                          'width': 0,
                          'height': 0,
                          'max_columns': 0,
                          'max_rows': 0,
                          'cells_excluded': []
                      }
                  },
                  'resolution': '1280x720',
                  'format': 'webm',
                  'bitrate': 64,
                  'size': 4,
                  'duration': 6,
                  'trim': true,
                  'media_external_location': null,
                  'encryption_key': null,
                  'url': 'https://video.twilio.com/v1/Compositions/CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'media': 'https://video.twilio.com/v1/Compositions/CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Compositions?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Compositions?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'compositions'
          }
      });
      holodeck.mock(new Response(200, body));
      client.video.v1.compositions.each({}, () => done());
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'compositions': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'completed',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_completed': '2015-07-30T20:01:33Z',
                  'date_deleted': null,
                  'sid': 'CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'audio_sources': [
                      'RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'user*'
                  ],
                  'audio_sources_excluded': [],
                  'video_layout': {
                      'grid': {
                          'video_sources': [
                              'user*'
                          ],
                          'video_sources_excluded': [],
                          'reuse': 'show_oldest',
                          'x_pos': 100,
                          'y_pos': 600,
                          'z_pos': 10,
                          'width': 0,
                          'height': 0,
                          'max_columns': 0,
                          'max_rows': 0,
                          'cells_excluded': []
                      },
                      'pip': {
                          'video_sources': [
                              'RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
                          ],
                          'video_sources_excluded': [],
                          'reuse': 'none',
                          'x_pos': 100,
                          'y_pos': 600,
                          'z_pos': 10,
                          'width': 0,
                          'height': 0,
                          'max_columns': 0,
                          'max_rows': 0,
                          'cells_excluded': []
                      }
                  },
                  'resolution': '1280x720',
                  'format': 'webm',
                  'bitrate': 64,
                  'size': 4,
                  'duration': 6,
                  'trim': true,
                  'media_external_location': null,
                  'encryption_key': null,
                  'url': 'https://video.twilio.com/v1/Compositions/CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'media': 'https://video.twilio.com/v1/Compositions/CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Compositions?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Compositions?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'compositions'
          }
      });
      holodeck.mock(new Response(200, body));
      client.video.v1.compositions.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.video.v1.compositions.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://video.twilio.com/v1/Compositions';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'compositions': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Compositions?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Compositions?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'compositions'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.compositions.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_results response',
    function() {
      var body = JSON.stringify({
          'compositions': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'completed',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_completed': '2015-07-30T20:01:33Z',
                  'date_deleted': null,
                  'sid': 'CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'audio_sources': [
                      'RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'user*'
                  ],
                  'audio_sources_excluded': [],
                  'video_layout': {
                      'grid': {
                          'video_sources': [
                              'user*'
                          ],
                          'video_sources_excluded': [],
                          'reuse': 'show_oldest',
                          'x_pos': 100,
                          'y_pos': 600,
                          'z_pos': 10,
                          'width': 0,
                          'height': 0,
                          'max_columns': 0,
                          'max_rows': 0,
                          'cells_excluded': []
                      },
                      'pip': {
                          'video_sources': [
                              'RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
                          ],
                          'video_sources_excluded': [],
                          'reuse': 'none',
                          'x_pos': 100,
                          'y_pos': 600,
                          'z_pos': 10,
                          'width': 0,
                          'height': 0,
                          'max_columns': 0,
                          'max_rows': 0,
                          'cells_excluded': []
                      }
                  },
                  'resolution': '1280x720',
                  'format': 'webm',
                  'bitrate': 64,
                  'size': 4,
                  'duration': 6,
                  'trim': true,
                  'media_external_location': null,
                  'encryption_key': null,
                  'url': 'https://video.twilio.com/v1/Compositions/CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'media': 'https://video.twilio.com/v1/Compositions/CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
                  }
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Compositions?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Compositions?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'compositions'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.compositions.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.video.v1.compositions('CJXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {sid: 'CJXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var url = _.template('https://video.twilio.com/v1/Compositions/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.video.v1.compositions('CJXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.video.v1.compositions.create();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://video.twilio.com/v1/Compositions';

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'processing',
          'date_created': '2015-07-30T20:00:00Z',
          'date_completed': null,
          'date_deleted': null,
          'sid': 'CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'audio_sources': [
              'RTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'user*'
          ],
          'audio_sources_excluded': [
              'RTbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          ],
          'video_layout': {
              'custom': {
                  'video_sources': [
                      'user*'
                  ],
                  'video_sources_excluded': [
                      'RTcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                  ],
                  'reuse': 'show_oldest',
                  'x_pos': 100,
                  'y_pos': 600,
                  'z_pos': 10,
                  'width': 800,
                  'height': 0,
                  'max_columns': 0,
                  'max_rows': 0,
                  'cells_excluded': [
                      2,
                      3
                  ]
              }
          },
          'trim': true,
          'format': 'mp4',
          'resolution': '1920x1080',
          'bitrate': 0,
          'size': 0,
          'duration': 0,
          'media_external_location': null,
          'encryption_key': null,
          'url': 'https://video.twilio.com/v1/Compositions/CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'media': 'https://video.twilio.com/v1/Compositions/CJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Media'
          }
      });

      holodeck.mock(new Response(201, body));

      var promise = client.video.v1.compositions.create();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

