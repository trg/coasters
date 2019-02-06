import compile from "@marko/compile";

compile({
  files: "./built/**/*.marko"
}).then(() => {
  // All files are written to disk.
  console.log("Compiled all files");
});