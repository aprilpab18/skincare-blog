const form = document.getElementById("contact-form");
/* Creating variable 'form' which has the value of the id 'contact-form'*/

// Prevent the form from submitting if any required fields are empty
form.addEventListener("submit", function (event) {
  /* function only executes when submit event is triggered */
  if (!form.checkValidity()) { // if the statement is not valid
    event.preventDefault(); // the 'fill out required field' function is called on the event object
    return false; // cannot go to thanks.html yet
  }

  // If all required fields are filled, the form can be submitted
  return true;
});