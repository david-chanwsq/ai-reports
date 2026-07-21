name: template analysis
purpose: How to select the best template to use for report writting

## Templates: 
--------------------------------------------------
name: tech-report-academic-style
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
name: anxiety-social-enterprise-style
description: Warm, light editorial "field journal" style for mixed-methods mental health research — specifically social anxiety in a population (e.g. youth/young adults) in Singapore, written for the audience most likely to act on it: Singapore's community/mental-health social enterprises, their funders, and policymakers. The population studied is people experiencing social anxiety, not the enterprises' own founders/staff. Moss-green sidebar styled as a printed contents page (serif italic labels, not a system console), and a card-free serif manuscript body with large margin numerals per section and automatic drop caps.
animations: typed italic epigraph line at the top, calm breathing-pulse status dot in the sidebar (no blinking alert), colourful progress bar animation at the top, segment fade in animations
contents:
- title
- subtitle
- authors & date
- abstract
- introduction
- literature review
- conceptual framework
- methodology
- findings
- discussion
- implications for practice
- conclusion
- references
- appendix
notes: placeholders reference Singapore-specific context (IMH, the Singapore Mental Health Study, PDPA consent, SIAS/LSAS scales, funders like Tote Board/Community Chest, policy bodies like MOH/MSF/NCSS). There are demographic/results table examples, and a participant-quote block (pull-quote with attribution) for verbatim interview or survey data — use it in place of a code block wherever the report needs qualitative evidence.
examples: [
    "write a report on social anxiety among youth in Singapore and what mental health social enterprises can do about it",
    "write a mixed-methods report on social anxiety and help-seeking for a Singapore-based mental health social enterprise"
]
--------------------------------------------------

ONLY pick from the templates above do not come up with your own templates. 

Framework: 
- Analyze the Templates shown above 
- Choose the best template based on the user input
- Output the name of the template and its full path name

If there are no fitting templates raise an error and say that there aren't any fitting templates. 

