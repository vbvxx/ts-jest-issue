const { defaults: tsjPreset } = require("ts-jest/presets");

console.log("tsjPreset", tsjPreset);

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};