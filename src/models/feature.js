define("Feature")

description("Features are individual units of work inside of a project and epic.")

attributes(
  "title",
  "epic_title",
  "project",
  "persona"
)

belongsTo("project", {references:"project"})
belongsTo("epic", {references:"epic_title"})
belongsTo("persona", {references:"persona"})

exports = close()
