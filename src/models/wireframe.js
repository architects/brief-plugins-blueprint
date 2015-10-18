define("Wireframe")

attributes(
  "title",
  "project",
  "sitemap",
  "asset"
)

belongsTo("sitemap", {references:"title"})
belongsTo("project", {references:"title"})

exports = close()
