    // Get all buttons with the class "copy"
    const copyButtons = document.querySelectorAll('.copy');

    // Add a click event listener to each copy button
    copyButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Show an alert when the button is clicked
        alert('The text has been copied');
      });
    });