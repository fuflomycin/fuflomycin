const jdown = require("jdown");
const fs = require("fs");

jdown("src/homeopathy")
  .then(content => {
    fs.writeFile("docs/homeopathy.json", JSON.stringify(content), er => {
      if (er) {
        console.log("Write file error:", er);
      }
      console.log("Done.");
    });
  })
  .catch(er => console.log("JDown error:", er));
