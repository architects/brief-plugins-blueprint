define("Project")

description("Projects usually correspond to a single codebase. Different types of projects typically used are APIs, Websites, Mobile Applications, but can be anything.")

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
