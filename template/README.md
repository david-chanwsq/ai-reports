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

Framework: 
- Analyze the templates
- Choose the best template based on the user input
- use the "Get template" tool (e.g path = "template/c-plus-plus") to get the contents of the template 
- use the "Get template file" tool to get the contents of all the files in the template (e.g template/c-plus-plus/index.html)
- output the template's contents in string 

output in this JSON structure
{
	"template": "c-plus-plus", 
    "contents": {
      "index.html": "<!DOCTYPE html>\n<!--\n  ...",
      "script.js": "/* ============================================================================\n   IT RESEARCH REPORT TEMPLATE — BEHAVIOR\n   ...",
      "styles.css": "/* ============================================================================\n   IT RESEARCH REPORT TEMPLATE — STYLE SYSTEM\n   ..."
    }
}
