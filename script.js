document.getElementById('calculateButton').addEventListener('click', function() {
  const birthdate = document.getElementById('birthdate').value;
  const resultElement = document.getElementById('result');

  if (birthdate) {
    const birthDateObj = new Date(birthdate);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDateObj.getFullYear();

    // Adjust if the current date is before the birthdate in the year
    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDateObj.getMonth();
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDateObj.getDate())) {
      age--;
    }

    resultElement.textContent = `You are ${age} years old.`;
  } else {
    resultElement.textContent = 'Please enter your birthdate.';
  }
});
