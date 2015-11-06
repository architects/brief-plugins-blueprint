define("Page")

description("Pages are for capturing free form content.")

attributes(
  "title",
  "aliases",
  "outline",
  "summary",
  "body"
)

attribute("body").extract("main p")

exports = close()
