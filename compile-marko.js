const compile = require("@marko/compile");

compile.run({
  files: "./built/**/*.marko"
}).then(() => {
  // All files are written to disk.
  console.log("Compiled all files");
});