const compile = require("@marko/compile");

// Cleans up after ./compile-marko.js

compile.run({
  clean: true
}).then(() => {
  console.log("Marko Cleaning complete.");
});