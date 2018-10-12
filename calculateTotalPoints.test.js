const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('positive or negative points', () => {
		it('gate and wind add points', () => {
            const actual = calculateTotalPoints(93, 'normalHill', 90, [14, 16, 15, 15.5, 15.5], 4, 6);
    
            const expected = 122;
    
            assert.equal(actual, expected);
        });
		
		it('gate and wind add points with comma', () => {
            const actual = calculateTotalPoints(93, 'normalHill', 95, [18, 18, 19, 15.5, 19], 1.2, 3.7);

            const expected = 115.9;

            assert.equal(actual, expected);
        });
      
        it('gate and wind subtract points', () => {
            const actual = calculateTotalPoints(103, 'bigHill', 120, [14, 16, 15, 15.5, 15.5], -4, -6);

            const expected = 65.4;

            assert.equal(actual, expected);
        });
    });

    describe('0 points for wind or gate', () => {
        it('0 for wind', () => {
            const actual = calculateTotalPoints(215, 'mammothHill', 180, [14, 16, 15, 15.5, 15.5], 0, -6);

            const expected = 202;

            assert.equal(actual, expected);
        });

        it('0 for gate', () => {
            const actual = calculateTotalPoints(182, 'mammothHill', 190, [18, 18, 19, 15.5, 19], -1.4, 0);

            const expected = 164;

            assert.equal(actual, expected);
        });
    });
});