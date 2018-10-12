const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
  describe('the size of the hill is not given', () => {
    it('hill is undefined', () => {
      const actual = calculateDistancePoints(120, "", 100);
    
      const expected = 'Hill size unidentified!';
    
      assert.equal(actual, expected);
    });
  });
  
  describe('normal hill', () => {
    it('k-point reached', () => {
      const actual = calculateDistancePoints(93, 'normalHill', 90);
    
      const expected = 66;
    
      assert.equal(actual, expected);
    });
		
    it('k-point not reached', () => {
      const actual = calculateDistancePoints(93, 'normalHill', 95);

      const expected = 56;

      assert.equal(actual, expected);
    });
  });
  
  describe('bigHill', () => {
    it('jump cancel', () => {
      const actual = calculateDistancePoints(0, 'bigHill', 0);

      const expected = 60;

      assert.equal(actual, expected);
    });

    it('k-point reached', () => {
      const actual = calculateDistancePoints(122.5, 'bigHill', 120);

      const expected = 64.5;

      assert.equal(actual, expected);
    });

    it('equal k-point', () => {
      const actual = calculateDistancePoints(125, 'bigHill', 125);

      const expected = 60;

      assert.equal(actual, expected);
    });
  });

  describe('mammothHill', () => {
    it('jump more than k-point', () => {
      const actual = calculateDistancePoints(215, 'mammothHill', 180);

      const expected = 162;

      assert.equal(actual, expected);
    });

    it('jump less than k-point', () => {
      const actual = calculateDistancePoints(182, 'mammothHill', 190);

      const expected = 110.4;

      assert.equal(actual, expected);
    });
  });
});
