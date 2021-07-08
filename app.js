/* Write an ES2015 Version */
const createInstructor = (firstName, lastName) => {
	return {
		firstName,
		lastName
	};
};

/* Write an ES2015 Version */
const favoriteNumber = 42;
const instructor = {
	firstName        : 'Colt',
	[favoriteNumber] : 'That is my favorite!'
};

/* Write an ES2015 Version */
const instructor2 = {
	firstName : 'Colt',
	sayHi() {
		return 'Hi!';
	},
	sayBye() {
		return this.firstName + ' says bye!';
	}
};

//create function which generates an animal object
function createAnimal(species, verb, noise) {
	return {
		species,
		[verb]() {
			return this.noise;
		},
		noise
	};
}
