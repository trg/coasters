const compile = require("@marko/compile");

compile.run({
  clean: true
}).then(() => {
  console.log("Cleaning complete.");
});