define("Feature")

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
