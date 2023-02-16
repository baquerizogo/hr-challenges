module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	verbose: true,
	transform: {
		"^.+\\.ts?$": "ts-jest",
	},
	transformIgnorePatterns: ["<rootDir>/node_modules/"],
};