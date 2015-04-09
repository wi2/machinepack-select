var should = require('should')
  , select = require("../index.js");

describe('First', function(){
  it('get the first', function(){
    var result = select.first({
      collection: [5, 6, 7]
    }).execSync();
    should(result.first).be.equal(5)
    should(result.collection.length).be.equal(3)
  });
  it('get the first with shift', function(){
    var result = select.first({
      collection: [5, 6, 7],
      shift: true
    }).execSync();
    should(result.first).be.equal(5)
    should(result.collection.length).be.equal(2)
  });
});

describe('Last', function(){
  it('get the last', function(){
    var result = select.last({
      collection: [5, 6, 7]
    }).execSync();
    should(result.last).be.equal(7)
    should(result.collection.length).be.equal(3)
  });
  it('get the last with pop', function(){
    var result = select.last({
      collection: [5, 6, 7],
      pop: true
    }).execSync();
    should(result.last).be.equal(7)
    should(result.collection.length).be.equal(2)
  });
});

describe('Slice', function(){
  it('get a slice', function(){
    var result = select.slice({
      collection: [5, 6, 7, 8, 9],
      start: 1,
      end: 4
    }).execSync();
    should(result[0]).be.equal(6)
    should(result[2]).be.equal(8)
    should(result.length).be.equal(3)
  });
  it('get a slice with include last', function(){
    var result = select.slice({
      collection: [5, 6, 7, 8, 9],
      start: 1,
      end: 4,
      include: true
    }).execSync();
    should(result[0]).be.equal(6)
    should(result[2]).be.equal(8)
    should(result[3]).be.equal(9)
    should(result.length).be.equal(4)
  });
});
