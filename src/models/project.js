define("Project")

attributes(
  "title",
  "status",
  "platform",
  "tags"
)

hasMany("epics", {key: "title", foreignKey: "project"})
hasMany("sitemaps", {key: "title", foreignKey: "project"})
hasMany("wireframes", {key: "title", foreignKey: "project"})

exports = close()
