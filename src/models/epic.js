define("Epic")

description("Epics are logical groupings of user stories that belong to or span multiple projects.") 

attributes(
  "title", 
  "status", 
  "project",
  "subheading"
)

attribute("subheading").extract("main h2")

belongsTo("project", {references:"title"})

hasMany("features", {key:"title", foreignKey:"epic_title"})

section("Features")
  .aka("Stories", "User Stories")
  .hasMany("User Stories", {
    title: "h3"
  })

action("publish", function (params) {
  var epic = this;
  epic.setStatus("published")
})

exports = close()
