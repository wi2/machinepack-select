var should = require('should')
  , select = require("../index.js");

describe('First with both', function(){
  it('get the first', function(){
    var result = select.first({
      collection: [5, 6, 7],
      both: true
    }).execSync();
    should(result.first).be.equal(5)
    should(result.collection.length).be.equal(3)
  });
  it('get the first with array', function(){
    var result = select.first({
      collection: [5, 6, 7],
      shift: true,
      both: true
    }).execSync();
    should(result.first).be.equal(5)
    should(result.collection.length).be.equal(2)
  });
});

describe('First without array', function(){
  it('get the first', function(){
    var result = select.first({
      collection: [5, 6, 7]
    }).execSync();
    should(result).be.equal(5)
  });
  it('get the first with shift', function(){
    var result = select.first({
      collection: [5, 6, 7],
      shift: true
    }).execSync();
    should(result).be.equal(5)
  });
});

describe('Last with array', function(){
  it('get the last', function(){
    var result = select.last({
      collection: [5, 6, 7],
      both: true
    }).execSync();
    should(result.last).be.equal(7)
    should(result.collection.length).be.equal(3)
  });
  it('get the last with pop', function(){
    var result = select.last({
      collection: [5, 6, 7],
      pop: true,
      both: true
    }).execSync();
    should(result.last).be.equal(7)
    should(result.collection.length).be.equal(2)
  });
});

describe('Last without array', function(){
  it('get the last', function(){
    var result = select.last({
      collection: [5, 6, 7]
    }).execSync();
    should(result).be.equal(7)
  });
  it('get the last with pop', function(){
    var result = select.last({
      collection: [5, 6, 7],
      pop: true
    }).execSync();
    should(result).be.equal(7)
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
  it('get a slice without end', function(){
    var result = select.slice({
      collection: [5, 6, 7, 8, 9],
      start: 1
    }).execSync();
    should(result[0]).be.equal(6)
    should(result[2]).be.equal(8)
    should(result[3]).be.equal(9)
    should(result.length).be.equal(4)
  });
});

describe('Take', function(){
  it('get a 3 first item', function(){
    var result = select.take({
      collection: [5, 6, 7, 8, 9],
      num: 3
    }).execSync();
    should(result[0]).be.equal(5)
    should(result[2]).be.equal(7)
    should(result.length).be.equal(3)
  });
  it('get a 3 last item', function(){
    var result = select.takeRight({
      collection: [5, 6, 7, 8, 9],
      num: 3
    }).execSync();
    // should(result[0]).be.equal(7)
    should(result[2]).be.equal(9)
    should(result.length).be.equal(3)
  });
});

describe('Sample', function(){
  it('get a random list with 3 items', function(){
    var result = select.sample({
      collection: [5, 6, 7, 8, 9, 10, 11, 12],
      num: 3
    }).execSync();
    should(result.length).be.equal(3)
  });
  it('get a random list with 4 items', function(){
    var result = select.sample({
      collection: [5, 6, 7, 8, 9, 10, 11, 12],
      num: 4
    }).execSync();
    should(result.length).be.equal(4)
  });
  it('get a random list with 1 item', function(){
    var result = select.sample({
      collection: [9, 10, 11, 12],
      num: 1
    }).execSync();
    should(result.length).be.equal(1)
  });
  it('get a random list with 4 items', function(){
    var result = select.sample({
      collection: [9, 10, 11, 12],
      num: 4
    }).execSync();
    should(result.length).be.equal(4)
  });
});
