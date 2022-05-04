const engineer = require("../Employee/engineer");
const jest = require("jest");
test("creates an engineer object", () => {
	const employee = new Engineer("Alec", "2", "alec@fakemail.com", "ibealec");

	expect(employee.name).toBe("Alec");
	expect(employee.id).toBe("2");
	expect(employee.email).toBe("alec@fakemail.com");
	expect(employee.github).toBe("ibealec");
});

test("gets employee github", () => {
	const employee = new Engineer("Alec", "2", "alec@fakemail.com", "ibealec");

	expect(employee.getGithub()).toEqual(
		expect.stringContaining(employee.github)
	);
});

test("gets employee role", () => {
	const employee = new Engineer("Alec", "2", "alec@fakemail.com", "ibealec");

	expect(employee.getRole()).toEqual(expect.stringContaining("engineer"));
});
