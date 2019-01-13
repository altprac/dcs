module.exports = {
    globals: {
        "ts-jest": {
              "tsConfigFile": "tsconfig.json"
        }
    },
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js"
    ],
    rootDir: "src",
    testEnvironment: "node",
    testMatch: [
        "**/*.+(test.ts)"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    collectCoverage: true,
    coverageDirectory: "../coverage",
    coverageReporters: ["html","json","text","text-summary"],
};