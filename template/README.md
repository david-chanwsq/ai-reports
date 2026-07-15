name: template analysis
purpose: How to select the best template to use for report writting

## Templates: 
--------------------------------------------------
name: tech-reports-academic-style
description: Techy, university research, and dark theme. 
animations: terminal looking animated text at the top, colourful progress bar animation at the top, segment fade in animations 
contents: 
- title
- subtitle
- authors & date
- abstract
- introduction
- background & related work
- methodology 
- results
- disucssion
- conclusion
- references
- appendix
notes: there are table examples, and code snippet examples. Use where needed. 
examples: [
    "wrtie an acedemic style report on _ C++ concept", 
    "write a report on the diamond problem in C++"
]
--------------------------------------------------

ONLY pick from the templates above do not come up with your own templates. 

Framework: 
- Analyze the Templates shown above 
- Choose the best template based on the user input
- Output the name of the template and its full path name

If there are no fitting templates raise an error and say that there aren't any fitting templates. 

