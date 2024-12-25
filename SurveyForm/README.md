This program is to ask the client several questions regarding their photography appointment. 
It will gather the user questions and store them for review. The user will be allowed to do multiple survey forms. 
I will be documenting the steps I took and the reasons why. This program will include four HTML files, one CSS file, and one JavaScript file.   

***HTML*** 

  The first step was designing how I wanted to display the survey questions. 
  I started by creating a list of basic questions for the user, including fields for first and last name, age, country, state, address, zip code, email, and contact number. 
  For the age input, I implemented a restriction to ensure that only users aged 18 or older could complete the survey. This logic was handled in JavaScript. 
  Adding functionality for the reset and next buttons was a bit challenging. The reset button needed to clear the form, while the next button had to navigate to a new webpage. I encountered some difficulties with the navigation aspect but resolved them through research. 

Resources used for HTML: 
  https://www.w3schools.com/html/default.asp 
  https://www.youtube.com/watch?v=BzYMFd-lQL4 

***CSS*** 

Global Styling: 
  Centers content vertically and horizontally using flexbox. 
  Applies a light gray background and sets the font to Arial. 

Containers: 
  Adds padding, white background, rounded corners, and a subtle shadow to sections like #personInfo, #survey-form, etc. 

Typography: 
  Sets dark gray color for headings and paragraphs for readability. 

Form Fields: 
  Adds padding, rounded corners, and light borders to inputs, dropdowns, and text areas. 
  Separates questions with margin for spacing. 

Responsive Design: 
  Ensures elements scale well using relative units and consistent styling. 

Resources used for CSS: 
  https://www.w3schools.com/css/default.asp 

***JavaScript*** 

Initialization: 
  Waits for the DOM to fully load before executing scripts. 
  Defines variables to reference form fields and buttons by their id. 

SurveyResponse Constructor: 
  Creates objects to store user survey responses, including personal details, preferences, and feedback. 

LocalStorage: 
  Loads existing survey responses from localStorage or initializes an empty array to store new responses. 
  Saves new responses to localStorage when submitted. 

Validation: 
  Validates input fields for required data (e.g., name, age, email, and contact number). 
  Enforces specific rules, such as age between 18 and 135 and a 10-digit contact number. 
  Uses try-catch blocks to handle and display validation errors. 

Dynamic Questions: 
  Adds follow-up questions dynamically based on user selections (e.g., poor experience or unmet expectations). 
  Event Handlers: 
  Handles the "Next" button to save user responses and navigate to the next page. 
  Updates the form dynamically when users select specific options. 
  Pre-filling Data: 
  Retrieves and pre-fills saved data into fields when returning to a form page. 

Reusability: 
  Uses an array of objects to organize multiple survey responses, enabling scalability and efficient data handling. 

Resources used for JavaScript: 
  https://www.geeksforgeeks.org/how-to-validate-phone-numbers-using-javascript-with-regex/ 
  https://www.w3schools.com/js/default.asp 
