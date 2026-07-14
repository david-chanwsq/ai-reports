name: template analysis
purpose: How to select the best template to use for report writting

## Templates: 
--------------------------------------------------
name: c-plus-plus
description: For reports that are about c-plus-plus concepts written in a acedemic style
examples: [
    "wrtie an acedemic style report on _ C++ concept", 
    "write a report on the diamond problem in C++"
]
--------------------------------------------------

## Framework: 
- Analyze the input 
- Based on the input and assumptions that can be made, select ONLY 1 most likely template that would fit the user's need using the information from the templates section above
- If there is a best template, get the names of all the files in the folder using the get files tool (e.g path: "template/c-plus-plus/index.html"). If there is no template, return none and don't do anything else
- Decode the contents of each file and return a json with e.g
{
  "template": {
    "index.html": "<!DOCTYPE html>\n<html>...</html>",
    "style.css": "body { margin: 0; }",
    "script.js": "function init() { ... }"
  }
}