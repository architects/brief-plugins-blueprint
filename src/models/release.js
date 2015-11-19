define("Release")

description("Releases can communicate the delivery of functionality to an environment, staging, production, whatever.")

attributes(
  "title",
  "status",
  "release_date",
  "version",
  "sha",
  "environment"
)

action("publish", function(params){
  var release = this;
  release.setStatus("published")
})
