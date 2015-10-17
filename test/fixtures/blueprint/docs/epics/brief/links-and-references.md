---
type: epic
project: Brief
title: Links and References
---

# Links and References

A Brief document should be able to link to other documents easily using
relative paths which are shortened and easy to type.  For example if I
want to link to another epic I should be able to do so by using a
the standard markdown link syntax with a value of `epics/brief/links-and-references`


## Features

### Intelligent Document Linking

As a **Writer** I want to be able to **reference other documents
easily** so that I can **communicate clearly and specifically without
repeating myself too often**

I should be able to link to another document in the briefcase using some
sort of shorthand notation based on the relative path of that document
(relative to the `briefcase.docs_path`)

When this document is rendered on the web, or in the editing
environment, the exact HREF value should automatically reflect this.  If
I am rendering a document in a PDF, the same should be true.

### Document Inclusion

As a **Writer** I want to be able to **include the content from other
documents** in other documents.  

This is useful when referencing concepts, for example, and not repeating
yourself while doing so.  This also ensures that as concepts become
updated, that you do not need to update the different references to those
concepts.

### Inline SVG Inclusion

As a **Writer** I want to be able to **inline SVG content into the
rendered output**  so that I can **incorporate visuals such as diagrams
or charts**

Similar to the short hand reference for documents which are linked or
embedded, I should be able to reference an SVG asset the same way.
