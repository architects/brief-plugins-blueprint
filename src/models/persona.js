define("Persona")

attributes(
  "title",
  "project",
  "aliases"
)

belongsTo("project", {references:"title"})
hasMany("features", {key:"title", foreignKey:"persona"})

exports = close()
