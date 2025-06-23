/**
 * Jest Configuration Docs: https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
    testEnvironment: "node",
    testMatch: [
        "src/**/*.test.js",
        "src/**/*.spec.js"
    ],
    clearMocks: true,
    collectCoverage: false,
    verbose: true,
    maxWorkers: "50%",
    transform: {},
    moduleFileExtensions: ["js", "json", "ts"],
    rootDir: "./src"
};

export default config;
