const config = {
  clearMocks: true,
  coveragePathIgnorePatterns: ["/node_modules/", "config/tests"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },

  roots: ["<rootDir>"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.app.json" }],
  },
};

export default config;
