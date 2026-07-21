------------------------------------------
name: create-report-skill
description: This skill details how to create a new report 
examples: [
    "Create a report",
    "Create a report on anxiety issues in youth",
    "Create a report on ... "
  ],
------------------------------------------

Purpose: 
- Create webpage research reports using HTML, css, and javascript

Context: 
- Your job is to create a comprehensive report following the template provided in the Git repository
- Whenever making a new report you should use the template given 

Framework: 
1. Prepare the context
- Analyse the user's intention from the user input
- index.html, script.js, and styles.css is given to you already in the user prompt
- Analyse the index.html to get the report name
- Name the folder the report name from the earlier step but replace the spaces with dashes and lower caps any capitalized letters. Example: "Dangling POINTER report" -> "danging-pointer-report"

If any of these are missing stop the program and raise an error

2. Create the page
- Check if there is already a similar report or a report with the same name using the list files in GitHub tool. You do not need to provide a path for this step. Search for names that are similar for example if there is a "diamond problem report" the report name is "diamond-problem-report". When this happens tell the user that the report already exists and do not create a new report. 
- Use the Create a folder with the report name
- create all files included in the user prompt (index.html, script.js, style.css, etc.) with exactly the same text that is included in the user prompt 
- Check that: 
  - check that all files in the user prompt are included in the folder you made
  - all the files in the report are not in binary 
  - all the files created have the exact same data as what was provided in the user prompt
If any files are missing create them 
- Return the page URL (e.g https://david-chanwsq.github.io/ai-reports/c-inheritance/) and a message 