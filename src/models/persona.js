define("Persona")

description("Personas are used to describe categories or roles of people who use the software.")

attributes(
  "title",
  "project",
  "aliases"
)

belongsTo("project", {references:"title"})
hasMany("features", {key:"title", foreignKey:"persona"})

exports = close()
