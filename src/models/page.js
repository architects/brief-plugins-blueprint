define("Page")

attributes(
  "title",
  "aliases",
  "outline",
  "summary",
  "body"
)

attribute("body").extract("main p")

exports = close()
