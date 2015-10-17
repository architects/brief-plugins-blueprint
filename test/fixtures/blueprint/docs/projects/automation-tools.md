---
type: project
title: Automation Tools
---

# Automation Tools

Blueprints describe software work in a way which is machine readable.
Because of this, the Blueprint can serve as an input for a build
automation tool.

A Mobile Application blueprint, for example, may reference a bunch of
different UI Screens, Navigation Components.  These different UI screens
may be dependent on certain backend microservices.

We can parse all of this information from the Blueprint itself, and use
it to automate the creation of the project's codebase, the inclusion of
of various dependencies, and so on.

We do not reinvent the wheel here.  We just use the information
contained in the blueprint to power different scripts and automation
tools we already use manually in different projects.
