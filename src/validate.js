const fs = require("node:fs");
const path = require("node:path");

const categories = ["homeopathy", "rsp", "fk"];
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const urlPattern = /^https?:\/\/\S+$/;
const errors = [];

function report(message) {
  errors.push(message);
}

for (const category of categories) {
  const sourceDir = path.join("src", category);
  const entries = JSON.parse(
    fs.readFileSync(path.join("docs", `${category}.json`), "utf8")
  );
  const ids = new Set();
  const titles = new Set();

  for (const file of fs.readdirSync(sourceDir)) {
    if (!file.endsWith(".md")) continue;

    const slug = path.basename(file, ".md");
    if (!slugPattern.test(slug)) {
      report(`${category}/${file}: slug must use Latin kebab-case`);
    }
  }

  for (const entry of entries) {
    const prefix = `${category}/${entry.id}`;
    if (!entry.id || ids.has(entry.id)) report(`${prefix}: duplicate or empty id`);
    ids.add(entry.id);

    const title = entry.title?.trim().toLocaleLowerCase("ru");
    if (!title || titles.has(title)) report(`${prefix}: duplicate or empty title`);
    titles.add(title);

    if (!urlPattern.test(entry.source || "")) {
      report(`${prefix}: source must be an http(s) URL`);
    }

    if (!Array.isArray(entry.gallery)) {
      report(`${prefix}: gallery must be an array`);
    }

    for (const asset of [entry.photo, ...(entry.gallery || [])].filter(Boolean)) {
      if (!fs.existsSync(path.join(sourceDir, asset))) {
        report(`${prefix}: missing source asset ${asset}`);
      }
      if (!fs.existsSync(path.join("docs", "img", asset))) {
        report(`${prefix}: missing generated asset ${asset}`);
      }
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Validation passed.");
}
