//Same keys and values ES2015
/* Write an ES2015 Version */
function createInstructor(firstName, lastName) {
	return { firstName, lastName };
}

//Computed Property Names ES2015
/* Write an ES2015 Version */
let favoriteNumber = 42;
let instructor = {
	firstName: "Colt",
	[favoriteNumber]: "That is my favorite!",
};

//Object Methods ES2015
/* Write an ES2015 Version */
let instructor2 = {
	firstName: "Colt",
	sayHi() {
		return "Hi!";
	},
	sayBye() {
		return this.firstName + " says bye!";
	},
};

//createAnimal function
function createAnimal(species, verb, noise) {
	return {
		species,
		[verb]() {
			return noise;
		},
	};
}
