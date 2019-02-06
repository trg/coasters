const compile = require("@marko/compile");

// Compiles .marko -> .js

compile.run({
    patterns: ["./src/**/*.marko"]
}).then(() => {
    // All files are written to disk.
    console.log("Compiled all .marko files.");
});