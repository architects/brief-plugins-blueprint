define("Estimate")

description("Estimates can be used to capture estimates of features")

attribute(
  "title",
  "submitted_by",
  "target_type",
  "unit"
)

section("Estimates")
  .aka("Items", "Features")
  hasMany("Estimates", {
    title: "h3"
  })

exports = close()
