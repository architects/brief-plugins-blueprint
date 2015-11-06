define("Diagram")

description("Diagrams are any kind of visual, usually clickable SVG, that explain concepts.") 

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
