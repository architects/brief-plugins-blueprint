define("Resource")

attributes(
  "title",
  "project_title"
)

belongsTo("project", {references:"title"})

exports = close()
