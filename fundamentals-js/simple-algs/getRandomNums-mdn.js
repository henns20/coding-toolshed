/** 
Actually Pseudorandom #'s Generator  PRNG - bc theoretically predictable compared to true scientific randomness

in JS its done with built in Math.random()

**/


// Returns a random number btwn 0 and 1

function getRandom() {
	return Math.random();
}


// Returns a random # btwn min & max

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min; 
}

// Returns a random int
// Using Math.round(); will give a non uniform distribution

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min; 
}

// Returns a randm int including the max

function getRandomIntInclusive(min, max) {
	return Math.floor( Math.random() * (max - min + 1) ) + min; 
}


console.log(getRandomIntInclusive(1, 5));
 
