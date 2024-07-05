let btnSignup=document.getElementById("btnsign");
let btnLogin=document.getElementById("btnlog");
let nameField=document.getElementById("nameField");
let nameField2=document.getElementById("nameField2");
let title=document.getElementById("title");
let fpass=document.getElementById("fpass");
let f1=document.getElementById("f1");
let otpForm=document.getElementById("otpForm");

document.addEventListener('DOMContentLoaded', function () {
  const NameInput = document.getElementById('Name');
  const phoneInput = document.getElementById('phone');
  
  emailInput.addEventListener('input', function () {
    if (NameInput.value !== '') {
        phoneInput.disabled = false;
    } else {
        phoneInput.disabled = true;
        phoneInput.value = '';
        //submitButton.disabled = true; 
        //submitButton2.disabled = true;  
    }
  });
  NameInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
       // event.preventDefault(); // Prevent form submission
        if (NameInput.value !== '') {
            phoneInput.focus();
        }
    }
 });
});

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const submitButton = document.getElementById('btnlog');
  const submitButton2 = document.getElementById('btnsign');
  const NameInput = document.getElementById('Name');
  const phoneInput = document.getElementById('phone');

  emailInput.addEventListener('input', function () {
      if (emailInput.value !== '' && emailInput.validity.valid) {
          passwordInput.disabled = false;
      } else {
          passwordInput.disabled = true;
          passwordInput.value = '';
          //submitButton.disabled = true; 
          //submitButton2.disabled = true;  
      }
  });

  passwordInput.addEventListener('input', function () {
      if (passwordInput.value.length>=8) {
        if (NameInput.value !== '') {
          submitButton2.disabled = false;
          submitButton2.style.background = 'red';
          submitButton.disabled = true;
          submitButton.style.background='rgba(65, 78, 78, 0.278)';
        }
        else {
          submitButton.disabled = false;
          submitButton.style.background = 'red';
          submitButton2.disabled = true;
          submitButton2.style.background='rgba(65, 78, 78, 0.278)';
        }
      }
      else if (passwordInput.value.length>=1 && passwordInput.value.length<8) {
        if (NameInput.value !== '') {
          submitButton2.disabled = true;
          submitButton2.style.background = 'rgb(93, 155, 243)';
          submitButton.disabled = true;
          submitButton.style.background='rgba(65, 78, 78, 0.278)';
        }
        else {
          submitButton.disabled = true;
          submitButton.style.background = 'rgb(93, 155, 243)';
          submitButton2.disabled = true;
          submitButton2.style.background='rgba(65, 78, 78, 0.278)';
        }
      }
  });

  // Event listener for Enter key
  emailInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
          event.preventDefault(); // Prevent form submission
          if (emailInput.value !== '' && emailInput.validity.valid) {
              passwordInput.focus();
          }
      }
  });

  passwordInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
          event.preventDefault(); // Prevent form submission
          if (passwordInput.value !== '') {
              submitButton.focus();
          }
          if (passwordInput.value !== '' && phoneInput.value!=='') {
            submitButton2.focus();
          }
      }
  });
});



document.getElementById('btnlog').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const NameInput = document.getElementById('Name');
    // Change the CSS design of the button
    nameField.style.maxHeight="0";
    nameField2.style.maxHeight="0";
    fpass.style.maxHeight="20px";
    fpass.style.height="20px"
    title.innerHTML="Log-in";
    btnSignup.classList.add("disable");
    btnLogin.classList.remove("disable");
    //email.focus();
    if (NameInput.value!==''){
      NameInput.value='';
      NameInput.value.length="0";
    }
     
    // Check if email and password are provided
    if (email && password) {
        // Redirect to Google after a short delay
        setTimeout(function() {
            window.location.href = 'https://www.google.com';
        }, 500); // 1 second delay for demonstration
    }
});
 

document.getElementById('btnsign').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('email').value;
    const Name = document.getElementById('password').value;

    nameField.style.maxHeight="80px";
    nameField2.style.maxHeight="80px";
    fpass.style.maxHeight="0px";
    fpass.style.height="0px";
    title.innerHTML="Sign-Up";
    btnSignup.classList.remove("disable");
    btnLogin.classList.add("disable");
    
    // Change the CSS design of the button
    // Check if email and password are provided
    if (Name && phone && email && password) {
        btnSignup.classList.add('active1');
        // Redirect to Google after a short delay
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 1000); // 1 second delay for demonstration
    }
});



 