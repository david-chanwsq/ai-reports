Skills directory
Overview: All the skills here are what the agent is capable of 

--------------------------------------------------
name: create-report-skill
description: This skill details how to create a new report 
examples: [
    "Create a report",
    "Create a report on anxiety issues in youth",
    "Create a report on ... "
  ],
--------------------------------------------------

Framework: 
- Analyze the user input 
- Check the readme file. It details all the skills included in the Git repository 
- Pick the most fitting skill based on the user's input and the name, description, and examples of each skill
- Use the Get skill content to get the contents of the skill that best fits the user's use case
- Return ONLY the relevant skills contents in text form. If there are no relevant skills return none 
