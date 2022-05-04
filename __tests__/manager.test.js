const manager = require("../Employee/manager");
const jest = require("jest");
test("should creates an manager object", () => {
	const employee = new manager("Jared", "1", "jared@fakemail.com", "1");

	expect(employee.name).toBe("Jared");
	expect(employee.id).toBe("1");
	expect(employee.email).toBe("jared@fakemail.com");
	expect(employee.officeNumber).toBe("1");
});

test("should gets manager's office number", () => {
	const employee = new manager("Jared", "1", "jared@fakemail.com", "1");

	expect(employee.getOfficeNumber()).toEqual(
		expect.stringContaining(employee.officeNumber.toString())
	);
});

test("should gets manager's role", () => {
	const employee = new manager("Jared", "1", "jared@fakemail.com", "1");

	expect(employee.getRole()).toEqual(expect.stringContaining("manager"));
});
