const jdown = require("jdown");
const fs = require("fs");

jdown("src/homeopathy")
  .then(content => {
    let result = [];
    for (let i in content) result.push({ id: i, ...content[i] });
    fs.writeFile("docs/homeopathy.json", JSON.stringify(result), er => {
      if (er) {
        console.log("Write file error:", er);
      }
      console.log("Done.");
    });
  })
  .catch(er => console.log("JDown error:", er));
