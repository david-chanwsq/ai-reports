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

Tools needed: 
- A tool to get file contents in GitHub
- A tool to get all the file names in a folder in GitHub
- A tool to create folders and files in GitHub
- A tool to edit files in GitHub

If any of these tools are missing raise an error

Context: 
- Your job is to create a comprehensive report following the template provided in the Git repository
- Whenever making a new report you should use the template given 

Framework: 
1. Prepare the context
- Analyse the user's intention from the message
- Analyse the template that should already have been received from the Acquire template tool. If missing call the Acquire template tool
- Name all the folders the name given by the user but replace the spaces with dashes and lower caps any capitalized letters. Example: "Dangling POINTER report" -> "danging-pointer-report"

2. Create the page
- Check if there is already a similar report or a report with the same name using the list files in GitHub tool. You do not need to provide a path for this step. Search for names that are similar like "diamond problem" and the user asks you to make "diamond-problem-report". When this happens tell the user that the report already exists and do not create a new report. 
- Use the Create a folder with the name of the report, and all files included in the template inside that folder
- Follow the template for each file, and adjust according to the report that the user wants by editting the files
- Check that all the files in the report are not in binary, if they are use the Edit a file in GitHub tool to edit the files relevant to creating the webpage 
- Return the page URL in the chat, or if unsuccessful suggest what went wrong and what you can do about it. 