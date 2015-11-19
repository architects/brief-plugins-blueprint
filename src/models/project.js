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

section("Epics")
  .aka("Modules")
  .hasMany("Epics",{
    title: "h3"
  })

section("Milestones")
  .hasMany("Milestones",{
    title: "h3"
  })

action("create_epics", function(){
  var project = this;
})

exports = close()
