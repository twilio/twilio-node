module.exports.setupCustomMatchers = function(jasmine) {
  jasmine.addMatchers({

    /**
     * Assert expected and actual are within precision of each other
     */
    toAlmostEqual: function(actual) {
      return {
        compare: function(expected, precision) {
          precision = precision || 0;
          var result = {
            pass: (actual <= (expected + precision)) && (actual >= (expected - precision))
          };

          if (!result.pass) {
            result.message = 'Expected ' + actual + ' to be within ' + precision + ' of ' + expected;
          }
          return result;
        }
      };
    }
  });
};
