const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
  describe('Diffrent notes', () => {
    it('integer numbers', () => {
      const actual = calculateStylePoints([12, 16, 8, 10, 15]);
    
      const expected = 37;
    
      assert.equal(actual, expected);
    });
      
    it('non-integer numbers', () => {
    const actual = calculateStylePoints([12.5, 16.5, 8.5, 10.5, 15.5]);
    
    const expected = 38.5;
    
    assert.equal(actual, expected);
    });
  });
  describe('two same notes', () => {
    it('two same', () => {
      const actual = calculateStylePoints([18, 17, 18, 19, 20]);

      const expected = 55;

      assert.equal(actual, expected);
    });

    it('two same non-integer', () => {
      const actual = calculateStylePoints([18.5, 17.5, 17.5, 19.5, 20]);

      const expected = 55.5;

      assert.equal(actual, expected);
    });
  });

  describe('The same notes', () => {
    it('three same', () => {
      const actual = calculateStylePoints([16, 20, 18, 16, 16]);

      const expected = 50;

      assert.equal(actual, expected);
    });

    it('three same non-integer', () => {
      const actual = calculateStylePoints([16, 15.5, 15.5, 15.5, 20]);

      const expected = 47;

      assert.equal(actual, expected);
    });
    
    it('five same notes with comma', () => {
      const actual = calculateStylePoints([12.5, 12.5, 12.5, 12.5, 12.5]);

      const expected = 37.5;

      assert.equal(actual, expected);
    });

    it('five same notes', () => {
      const actual = calculateStylePoints([15, 15, 15, 15, 15]);

      const expected = 45;

      assert.equal(actual, expected);
    });
  });
});
