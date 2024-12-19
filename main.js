window.alert('Smash that fitness goal')

// JavaScript to show the button when scrolling down and scroll to top on click
document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var backToTopButton = document.getElementById('back-to-top');
    
    if (scrollPosition > 200) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Scroll to top function
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// BMI calculator
function calculateBMI() {
    const fullName = document.getElementById('fullName').value;
    const age = parseInt(document.getElementById('age').value);
    const email = document.getElementById('email').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const comments = document.getElementById('comments').value;
    const resultDiv = document.getElementById('result');

    if (!fullName || isNaN(age) || !email || isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      resultDiv.textContent = 'Please fill out all required fields with valid data.';
      return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let status;

    if (bmi < 18.5) {
      status = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      status = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      status = 'Overweight';
    } else {
      status = 'Obese';
    }

    const userData = {
      fullName: fullName,
      age: age,
      email: email,
      bmi: bmi,
      status: status,
      comments: comments
    };

    sendEmail(userData);

    resultDiv.innerHTML = `<p>Name: ${fullName}</p>
                           <p>Age: ${age}</p>
                           <p>Email: ${email}</p>
                           <p>Your BMI is ${bmi} (${status}).</p>
                           ${comments ? `<p>Comments: ${comments}</p>` : ''}`;
  }

  function sendEmail(data) {
    const emailBody = `Name: ${data.fullName}\nAge: ${data.age}\nEmail: ${data.email}\nBMI: ${data.bmi} (${data.status})\nComments: ${data.comments}`;

    const mailtoLink = `mailto:chisomsomtochi@gmail.com?subject=BMI%20Calculation%20Result&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  }