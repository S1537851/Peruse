"use strict";

/*
        Paden Ruckman
        Instructor McDavitt
        CSIS 228
        10/20/2024
        
        Survey/questionnaire form for the Photographer website.
        It will gather the user questions and store them for review. 
        The user will be allowed to do multiple survey forms. 
        
        Filename: SurveyForm.js
*/

// The initial HTML document has been completely loaded and parsed.
document.addEventListener("DOMContentLoaded", function() {
    // Define all variables for form fields
    let fName = document.getElementById("fName");
    let lName = document.getElementById("lName");
    let age = document.getElementById("age");
    let email = document.getElementById("email");
    let contact = document.getElementById("contact");
    let packs = document.getElementById("favorite-product");
    let experience = document.getElementById("customer-experience");
    let capture = document.getElementById("capture");
    let startTime = document.getElementById("startTime");
    let locationShoot = document.getElementById("locationShoot");
    let price = document.getElementById("price");
    let recommend = document.getElementById("recommend");
    let feedback = document.getElementById("feedback");
    let nextPageButton1 = document.getElementById("nextPage1");

    // SurveyResponse constructor to create survey response objects
    function SurveyResponse(fName, lName, age, email, contact, packs, experience, capture, startTime, locationShoot, price, recommend, feedback) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.email = email;
        this.contact = contact;
        this.packs = packs;
        this.experience = experience;
        this.capture = capture;
        this.startTime = startTime;
        this.locationShoot = locationShoot;
        this.price = price;
        this.recommend = recommend;
        this.feedback = feedback;
    }

    // Retrieve existing survey responses from localStorage or initialize an empty array
    let surveyResponses = JSON.parse(localStorage.getItem("surveyResponses")) || [];

    // Save state on button click
    if (nextPageButton1) {
        nextPageButton1.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent default form submission

            try {
                // Validation checks for required fields and correct data formats
                if (fName.value === "" || lName.value === "") { 
                    throw "First and last name are required.";
                }
                let ageValue = parseInt(age.value, 10); 
                if (isNaN(ageValue) || ageValue < 18 || ageValue > 135) { 
                    throw "Age must be between 18 and 135.";
                }
                if (!email.value.includes("@")) {
                    throw "Email must contain '@'.";
                }
                let contactPattern = /^\d{10}$/;
                if (!contactPattern.test(contact.value)) { 
                    throw "Contact number must match the pattern. Ex. 8168535505";
                }
                
                // Create a new SurveyResponse object with form data
                let newResponse = new SurveyResponse(
                    fName.value,
                    lName.value,
                    age.value,
                    email.value,
                    contact.value,
                    packs ? packs.value : "",
                    experience ? experience.value : "",
                    capture ? capture.value : "",
                    startTime ? startTime.value : "",
                    locationShoot ? locationShoot.value : "",
                    price ? price.value : "",
                    recommend ? recommend.value : "",
                    feedback ? feedback.value : ""
                );

                // Add the new response to the array
                surveyResponses.push(newResponse);

                // Save the array to localStorage
                localStorage.setItem("surveyResponses", JSON.stringify(surveyResponses));

            } catch (error) {
                alert(error); // Display validation error message
                return false; // Prevent form submission if validation fails
            }
            document.forms[0].submit(); // Submit the form if validation passes
            return true;
        });
    }

    // Add event listener to 'experience' field if it exists
    if (experience) {
        experience.addEventListener("change", function(e) {
            let noExperience = experience.value;
            if (noExperience === "no") {
                const followUp1 = document.createElement("div");
                followUp1.className = "question";
                followUp1.id = "poor";
                followUp1.innerHTML = `
                    <label for="reason">Why did you rate your experience as poor?</label>
                    <textarea id="reason1"></textarea>`;
                document.getElementById("additional-questions").appendChild(followUp1);
            }
        });
    }

    // Add event listener to 'capture' field if it exists
    if (capture) {
        capture.addEventListener("change", function(e) {
            let noCapture = capture.value;
            if (noCapture === "no") {
                const followUp2 = document.createElement("div");
                followUp2.className = "question";
                followUp2.id = "noCapture";
                followUp2.innerHTML = `
                    <label for="reason">What did you want to capture?</label>
                    <textarea id="reason2"></textarea>`;
                document.getElementById("additional-questions").appendChild(followUp2);
            }
        });
    }

    // Retrieve saved state (if any) when loading a new page
    if (fName) fName.value = localStorage.getItem("fName") || "";
    if (lName) lName.value = localStorage.getItem("lName") || "";
    if (age) age.value = localStorage.getItem("age") || "";
    if (email) email.value = localStorage.getItem("email") || "";
    if (contact) contact.value = localStorage.getItem("contact") || "";
});
