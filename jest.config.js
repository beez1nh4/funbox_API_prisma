module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleDirectories: ["node_modules", "src"],
    transform: {
      ".+\\.ts$": "ts-jest",
    },
    testTimeout: 20000,
    testMatch: ["<rootDir>/tests/integration/*.(test|spec).ts"],
  };

