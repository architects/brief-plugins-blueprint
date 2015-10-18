define("Diagram")

attributes(
  "title",
  "service",
  "path",
  "status",
  "format",
  "asset",
  "project"
)

belongsTo("project", {references:"title"})

exports = close()
