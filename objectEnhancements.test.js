it("should create an object with the same keys and values", () => {
	expect(createInstructor("Quentin", "Ikeno")).toEqual({
		firstName: "Quentin",
		lastName: "Ikeno",
	});
});

it("rewrite object to use computed property names", () => {
	expect(instructor).toEqual({
		42: "That is my favorite!",
		firstName: "Colt",
	});
});

it("should use object methods", () => {
	expect(instructor2.sayHi()).toEqual("Hi!");
	expect(instructor2.sayBye()).toEqual("Colt says bye!");
});

it("should create an animal object", () => {
	const d = createAnimal("dog", "bark", "Woooof!");
	expect(d.bark()).toEqual("Woooof!");
});
