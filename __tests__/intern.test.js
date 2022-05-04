const intern = require("../Employee/intern");
const jest = require("jest");
test("creates an intern object", () => {
	const employee = new intern("john", "5", "john@fakeemail.com", "2University");

	expect(employee.name).toBe("Xavier");
	expect(employee.id).toBe("23");
	expect(employee.email).toBe("test@email.com");
	expect(employee.school).toBe("UW");
});

test("gets intern's school", () => {
	const employee = new intern("john", "5", "john@fakeemail.com", "2University");

	expect(employee.getSchool()).toEqual(
		expect.stringContaining(employee.school)
	);
});

test("gets intern role", () => {
	const employee = new intern("john", "5", "john@fakeemail.com", "2University");

	expect(employee.getRole()).toEqual(expect.stringContaining("Intern"));
});
