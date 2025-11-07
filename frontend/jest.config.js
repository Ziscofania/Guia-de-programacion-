export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  roots: ["<rootDir>/test"],
};
