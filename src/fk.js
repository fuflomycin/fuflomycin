const jdown = require("jdown");
const fs = require("fs");
const copy = require("copy");

/**
 * Convert md files to json
 */
jdown("src/fk")
  .then((content) => {
    let result = [];
    for (let i in content) {
      if (!content[i].title) continue;
      result.push({ id: i, ...content[i] });
    }
    fs.writeFile("docs/fk.json", JSON.stringify(result), (er) => {
      if (er) {
        console.log("Write file error:", er);
      }
      console.log("Done.");
    });
  })
  .catch((er) => console.log("JDown error:", er));

/**
 * Copy static assets
 */
copy(
  ["./src/fk/*.jpg", "./src/fk/*.png", "./src/fk/*.webp"],
  "./docs/img",
  (err, files) => {
    console.log("Log", err, files.length);
  }
);
