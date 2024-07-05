function generateOTP() {
  return  Math.floor(Math.random() * (9999-1000+1) + 1000);
}

const otp = generateOTP();
localStorage.setItem('otp', otp);
//console.log(`OTP generated and stored: ${otp}`);



