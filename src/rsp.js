const { build } = require("./build");

build("rsp").catch((error) => {
  console.error("Build failed:", error);
  process.exitCode = 1;
});
