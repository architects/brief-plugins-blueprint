define("Milestone")

description("Milestones are used to describe due dates in the future.  Epics or features can be associated with a milestone to communicate a deadline or desired completion date")

attributes(
  "title",
  "due_date"
)

hasMany("epics", {key: "title", foreignKey: "milestone"})
hasMany("features", {key: "title", foreignKey: "milestone"})

exports = close()
