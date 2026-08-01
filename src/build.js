const fs = require("node:fs/promises");
const path = require("node:path");
const jdown = require("jdown");

const categories = new Set(["homeopathy", "rsp", "fk"]);
const assetExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function normalizeEntry(id, entry) {
  const gallery = Array.isArray(entry.gallery)
    ? entry.gallery
    : entry.gallery
      ? [entry.gallery]
      : [];

  return { id, ...entry, gallery };
}

async function copyAssets(category) {
  const source = path.join("src", category);
  const destination = path.join("docs", "img");
  const files = await fs.readdir(source, { withFileTypes: true });
  const assets = files.filter(
    (file) => file.isFile() && assetExtensions.has(path.extname(file.name).toLowerCase())
  );

  await fs.mkdir(destination, { recursive: true });
  await Promise.all(
    assets.map((file) =>
      fs.copyFile(path.join(source, file.name), path.join(destination, file.name))
    )
  );

  return assets.length;
}

async function build(category) {
  if (!categories.has(category)) {
    throw new Error(`Unknown category: ${category}`);
  }

  const content = await jdown(path.join("src", category));
  const result = Object.entries(content)
    .filter(([, entry]) => entry.title)
    .map(([id, entry]) => normalizeEntry(id, entry));

  const [, assetCount] = await Promise.all([
    fs.writeFile(
      path.join("docs", `${category}.json`),
      JSON.stringify(result),
      "utf8"
    ),
    copyAssets(category),
  ]);

  console.log(`${category}: ${result.length} entries, ${assetCount} assets copied.`);
}

if (require.main === module) {
  build(process.argv[2]).catch((error) => {
    console.error("Build failed:", error);
    process.exitCode = 1;
  });
}

module.exports = { build };
