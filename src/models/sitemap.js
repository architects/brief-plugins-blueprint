define("Sitemap")

attributes(
  "title",
  "project",
  "asset"
)

belongsTo("project", {references:"title"})
hasMany("wireframes", {key:"title", foreignKey:"sitemap"})

exports = close()
