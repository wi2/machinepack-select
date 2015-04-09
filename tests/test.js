var should = require('should')
  , select = require("../index.js");

describe('First', function(){
  it('get the first', function(done){
    select.first({
      collection: [5, 6, 7]
    }).exec(function(err, result) {
      should(result.first).be.equal(5)
      should(result.collection.length).be.equal(3)
      done();
    });
  });
  it('get the first with shift', function(done){
    select.first({
      collection: [5, 6, 7],
      shift: true
    }).exec(function(err, result) {
      should(result.first).be.equal(5)
      should(result.collection.length).be.equal(2)
      done();
    });
  });
  it('empty error', function(done){
    select.first({
      collection: []
    }).exec(function(err, result) {
      should(result).be.equal(undefined)
      should(err).not.be.equal(undefined)
      done();
    });
  });
  it('error', function(done){
    select.first({
      collection: null
    }).exec(function(err, result) {
      should(result).be.equal(undefined)
      should(err).not.be.equal(undefined)
      done();
    });
  });
});

describe('Last', function(){
  it('get the last', function(done){
    select.last({
      collection: [5, 6, 7]
    }).exec(function(err, result) {
      should(result.last).be.equal(7)
      should(result.collection.length).be.equal(3)
      done();
    });
  });
  it('get the last with pop', function(done){
    select.last({
      collection: [5, 6, 7],
      pop: true
    }).exec(function(err, result) {
      should(result.last).be.equal(7)
      should(result.collection.length).be.equal(2)
      done();
    });
  });
  it('empty error', function(done){
    select.last({
      collection: []
    }).exec(function(err, result) {
      should(result).be.equal(undefined)
      should(err).not.be.equal(undefined)
      done();
    });
  });
  it('error', function(done){
    select.last({
      collection: null
    }).exec(function(err, result) {
      should(result).be.equal(undefined)
      should(err).not.be.equal(undefined)
      done();
    });
  });
});

describe('Slice', function(){
  it('get a slice', function(done){
    select.slice({
      collection: [5, 6, 7, 8, 9],
      start: 1,
      end: 4
    }).exec(function(err, result) {
      should(result[0]).be.equal(6)
      should(result[2]).be.equal(8)
      should(result.length).be.equal(3)
      done();
    });
  });
  it('get a slice with include last', function(done){
    select.slice({
      collection: [5, 6, 7, 8, 9],
      start: 1,
      end: 4,
      include: true
    }).exec(function(err, result) {
      should(result[0]).be.equal(6)
      should(result[2]).be.equal(8)
      should(result[3]).be.equal(9)
      should(result.length).be.equal(4)
      done();
    });
  });
  it('empty error', function(done){
    select.slice({
      collection: []
    }).exec(function(err, result) {
      should(result).be.equal(undefined)
      should(err).not.be.equal(undefined)
      done();
    });
  });
  it('error', function(done){
    select.slice({
      collection: null
    }).exec(function(err, result) {
      should(result).be.equal(undefined)
      should(err).not.be.equal(undefined)
      done();
    });
  });
});
