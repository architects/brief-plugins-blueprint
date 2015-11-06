define("Wireframe")

description("Wireframes show what a screen should look like.  Wireframes typically belong to a node on the sitemap.")

attributes(
  "title",
  "project",
  "sitemap",
  "asset"
)

belongsTo("sitemap", {references:"title"})
belongsTo("project", {references:"title"})

exports = close()
