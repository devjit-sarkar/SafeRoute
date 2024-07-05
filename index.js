function sendMail() {
  let otp_val = localStorage.getItem('otp');
	let message1 = `Your OTP is ${otp_val}`;
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value = message1,
    //OTP: document.getElementById("OTP").value,
  };

  const serviceID = "service_scbhgcm";
  const templateID = "template_xiw9m97";
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value ="";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("OTP send to your email address. Check your email for the OTP.");
        console.log("hi");
        setTimeout(function() {
          window.location.href = 'otp_html.html';
      }, 500); 
    })
    .catch(err=>console.log(err));
}

/*
const fs = require('fs');
const content = `${otp_val}`;
  fs.writeFile('example.txt', content, (err) => {
    if (err) {
     console.error('Error writing to file:', err);
    } else {
    console.log('File written successfully.');
    }
  });*/
/*
export {otp_val};*/
/*
export {otp_val};
console.log(otp);
console.log(otp_val);*/
