document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');
  const appointmentForm = document.getElementById('appointmentForm');

  if (registerForm) {
    registerForm.addEventListener('submit', e => {
      const email = registerForm.email.value;
      const password = registerForm.password.value;
      if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        e.preventDefault();
      } else if (password.length < 6) {
        alert('Password must be at least 6 characters.');
        e.preventDefault();
      }
    });
  }

if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault(); // prevent default form submission
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    
    if (!email || !password) {
      alert('Please fill in all fields.');
    } else {
      // Simulate successful login and redirect
      alert('Login successful!');
      window.location.href = 'book.html'; // redirect to appointment page
    }
  });
}

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', e => {
      const date = new Date(appointmentForm.date.value);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (date < today) {
        alert('Appointment date cannot be in the past.');
        e.preventDefault();
      }
    });
  }
});
