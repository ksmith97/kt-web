'use strict';

const expect = require('chai').expect;

describe('Index', () => {
  it('Returns correct string', () => {
    const value = require('./');
    expect(value).to.eql('Hello, World!'); 
  });
});
