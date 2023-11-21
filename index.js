

  <script>
    document.addEventListener('DOMContentLoaded', function () {
      const form = document.getElementById('user_form');

      form.addEventListener('submit', function (event) {
        if (!validateForm()) {
          event.preventDefault();
        }
      });

      function validateForm() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const dobInput = document.getElementById('dob');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || passwordInput.value.trim() === '' || dobInput.value.trim() === '') {
          alert('Please fill in all fields.');
          return false;
        }

       

        return true;
      }
    });
  </script>

 
