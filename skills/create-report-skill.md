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
- Analyse the user's intention from the message
- Name all the folders the name given by the user but replace the spaces with dashes and lower caps any capitalized letters. Example: "Dangling POINTER report" -> "danging-pointer-report"

2. Create the page
- Check if there is already a similar report or a report with the same name using the list files in GitHub tool. You do not need to provide a path for this step. Search for names that are similar like "diamond problem" and the user asks you to make "diamond-problem-report". When this happens tell the user that the report already exists and do not create a new report. 
- Use the Create a folder with the name of the report, and all files included in the template inside that folder (index.html, script.js, style.css, etc.)
- Follow the template for each file, and adjust according to the report that the user wants by editting the files. DO NOT change the script.js and style.css files
- Check that: 
  - all the files in the report are not in binary 
  - the script.js file and style.css files have the exact same contents as the template 
use the get file contents tool of each file to check, if they are use the Edit a file in GitHub tool to edit the files relevant to creating the webpage 
  - Also check that all the template files are included in the folder you made using the list files tool
If any files are missing create them 
- Check each file you created, ensuring that all files that are supposed to be included are there and that they are populated. If they are empty, make necessary changes 
- Return the page URL in the chat, or if unsuccessful suggest what went wrong and what you can do about it. 