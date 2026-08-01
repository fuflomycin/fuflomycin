const { build } = require("./build");

build("fk").catch((error) => {
  console.error("Build failed:", error);
  process.exitCode = 1;
});
