const { build } = require("./build");

build("homeopathy").catch((error) => {
  console.error("Build failed:", error);
  process.exitCode = 1;
});
