const inputs = document.querySelectorAll("input"),
button = document.querySelector("button");
 
inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    
    const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;
    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }


    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          input.value = "";
          prevInput.focus();
        }
      });
    }
    if (!inputs[3].disabled && inputs[3].value !== "") {
      button.classList.add("active");
      button.classList.remove("disabled");
      
      console.log(inputs[0].value);
      console.log(inputs[1].value);
      console.log(`otp[2] is ${inputs[2].value}`);
      console.log(inputs[3].value);
      return;
    }
    button.classList.remove("active");
  });
});
window.addEventListener("load", () => inputs[0].focus());


document.addEventListener('DOMContentLoaded', (event) => {
  let timerElement = document.getElementById('timer');
  let time = 59; // 1 minute in seconds

  const startTimer = () => {
      let minutes, seconds;
      const countdown = setInterval(() => {
          minutes = parseInt(time / 60, 10);
          seconds = parseInt(time % 60, 10);

          minutes = minutes < 10 ? '0' + minutes : minutes;
          seconds = seconds < 10 ? '0' + seconds : seconds;

          timerElement.textContent = `your OTP will expire in ${seconds}s`;

          if (--time < 0) {
              clearInterval(countdown);
              // Handle timer expiration (e.g., disable the verify button, prompt user to request a new OTP)
              //document.getElementById('verifyBtn').disabled = true;
              timerElement.textContent = `OTP Expired!`;
              button.classList.remove("active");
          }
      }, 1000);
  };

  startTimer();
});

/*
let otp_val = '0';
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:', data);
    otp_val =  `${data}`;
    console.log(otp_val);
    alert(otp_val);
    alert(inputs.value);
  }
});
*//*
function vrfy() {
    alert("R K O");
    if (inputs.value == otp_val) {
      alert("Email address verified...");
    }
    else {
      alert("Invalid OTP");
    }
    setTimeout(function() {
          window.location.href = 'index.html';
      }, 1000); // 1 second delay for demonstration
}
*/
