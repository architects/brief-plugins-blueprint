define("Sitemap")

description("Sitemaps lay out the hierarchy of pages on a Website, but can also be used to display API routes, Mobile App Screens, etc.")

attributes(
  "title",
  "project",
  "asset"
)

belongsTo("project", {references:"title"})
hasMany("wireframes", {key:"title", foreignKey:"sitemap"})

exports = close()
