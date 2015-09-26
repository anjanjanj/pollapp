'use strict';

describe('Service: pollFactory', function () {

  // load the service's module
  beforeEach(module('voteapp2App'));

  // instantiate service
  var pollFactory;
  beforeEach(inject(function (_pollFactory_) {
    pollFactory = _pollFactory_;
  }));

  it('should do something', function () {
    expect(!!pollFactory).toBe(true);
  });

});
