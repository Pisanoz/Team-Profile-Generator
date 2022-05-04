const employee = require("../Employee/employee");
const jest = require("jest");
test("should creates an employee object", () => {
	const employee = new employee("zane", "6", "fake@email.com");

	expect(employee.name).toBe("zane");
	expect(employee.id).toBe("6");
	expect(employee.email).toBe("fake@email.com");
});

test("gets employee's name", () => {
	const employee = new employee("zane", "6", "fake@email.com");

	expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("gets employee's ID Name", () => {
	const employee = new employee("zane", "6", "fake@email.com");

	expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test("gets employee's role", () => {
	const employee = new employee("zane", "6", "fake@email.com");

	expect(employee.getRole()).toEqual(expect.stringContaining("employee"));
});
