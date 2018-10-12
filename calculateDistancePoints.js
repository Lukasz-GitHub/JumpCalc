const calculateDistancePoints = (distance, hillSize, kPoint) => {
  
  if (hillSize === 'normalHill') {
		return ((distance - kPoint) * 2) + 60;
	}
	else if (hillSize === 'bigHill') {
		return ((distance - kPoint) * 1.8) + 60;
	}
	else if (hillSize === 'mammothHill') {
		return ((distance - kPoint) * 1.2) + 120;
	}
	else {
		return 'Hill size unidentified!';
	}
};

module.exports = calculateDistancePoints;
  