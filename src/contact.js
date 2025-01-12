document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Gather form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simple validation check
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      // You can also send data to a backend here if needed.
      document.getElementById('contactForm').reset();
    } else {
      alert('Please fill in all fields before sending.');
    }
  });
  