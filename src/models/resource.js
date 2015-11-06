define("Resource")

description("Resources are important data models that are important to a project.") 

attributes(
  "title",
  "project_title"
)

belongsTo("project", {references:"title"})

exports = close()
