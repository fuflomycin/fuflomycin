const jdown = require("jdown");
const fs = require("fs");
const copy = require("copy");

/**
 * Convert md files to json
 */
jdown("src/homeopathy")
  .then((content) => {
    let result = [];
    for (let i in content) result.push({ id: i, ...content[i] });
    fs.writeFile("docs/homeopathy.json", JSON.stringify(result), (er) => {
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
  [
    "./src/homeopathy/*.jpg",
    "./src/homeopathy/*.png",
    "./src/homeopathy/*.webp",
  ],
  "./docs/img",
  (err, files) => {
    console.log("Log", err, files.length);
  }
);
