'use strict';

describe('Index', () => {
  it('Returns correct string', () => {
    const value = require('./');
    expect(value).toEqual('Hello, World!'); 
  });
});
