/* Function to toggle dropdown menu */
function toggleDropdown() {
    var dropdown = document.getElementById("dropdown-menu");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }
  
  /* Event listener for dropdown menu */
  var dropdownButton = document.getElementById("dropdown-button");
  dropdownButton.addEventListener("click", toggleDropdown);
  
  /* Function to submit donation form */
  function submitDonationForm() {
    /* Code to submit form goes here */
    alert("Thank you for your donation!");
  }
  
  /* Event listener for donation form submit button */
  var donationForm = document.getElementById("donation-form");
  donationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    submitDonationForm();
  });
  
  /* Function to validate volunteer login form */
  function validateVolunteerLoginForm() {
    /* Code to validate form goes here */
    return true;
  }
  
  /* Event listener for volunteer login form submit button */
  var volunteerLoginForm = document.getElementById("volunteer-login-form");
  volunteerLoginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateVolunteerLoginForm()) {
      /* Code to log in user goes here */
      alert("Logged in successfully!");
    }
  });
  
  /* Function to validate volunteer signup form */
  function validateVolunteerSignupForm() {
    /* Code to validate form goes here */
    return true;
  }
  
  /* Event listener for volunteer signup form submit button */
  var volunteerSignupForm = document.getElementById("volunteer-signup-form");
  volunteerSignupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateVolunteerSignupForm()) {
      /* Code to sign up user goes here */
      alert("Signed up successfully!");
    }
  });
  