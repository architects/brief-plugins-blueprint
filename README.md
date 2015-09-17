# The Software Blueprint

This is a plugin that allows you to create software blueprints using 
an Active Writing Framework like
[Brief](https://github.com/architects/brief-node).

A Software Blueprint is a tool that is used to achieve clarity and
alignment on the goals, strategy, and objectives for a software
undertaking.

This plugin defines document types that are used in the every day
collaboration between designers, developers, and product owners.
Together, these documents make up a living document that captures the
intent and status in realtime.

You can work with the blueprint from the CLI, which is how you would do
things like create new documents, publish them to your collaboration
tools, or interact with current documents.  

You can also work with the blueprint from a javascript project, which is
how you would embed content from the blueprint in another website or
integrate it with other APIs.

## Documents

Here are some of the documents that are available:

### Domain Modeling
- Concepts
- Diagrams

### Project Planning
- Epics
- Features
- Projects
- Roadmaps

### User Experience 
- Personas
- Sitemaps
- Wireframes

### Data Modeling
- Data Models
- Resources

# Getting Started

Install the modules.

```
npm install brief-node
npm install brief-plugins-blueprint
```

Create a blueprint

```
brief create briefcase my-project --using-plugin blueprint
```

This will initialize a project file structure.  

```
var brief = require('brief-node')
var blueprint = require('brief-plugins-blueprint')
var briefcase = brief.use(blueprint).load("/path/to/my-project")
```
