// BMI calculator
function submitBMI() {
    const fullName = document.getElementById('fullName').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const comments = document.getElementById('comments').value;

    if (!fullName || !age || !email || !weight || !height) {
      alert('Please fill out all required fields.');
      return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let status;

    if (bmi < 18.5) status = 'Underweight';
    else if (bmi < 24.9) status = 'Normal weight';
    else if (bmi < 29.9) status = 'Overweight';
    else status = 'Obese';

    const queryString = new URLSearchParams({
      fullName,
      age,
      email,
      bmi,
      status,
      comments
    }).toString();

    window.location.href = `result.html?${queryString}`;
  }


//Result
function displayResult() {
    const params = new URLSearchParams(window.location.search);
    document.getElementById('name').textContent = `Name: ${params.get('fullName')}`;
    document.getElementById('age').textContent = `Age: ${params.get('age')}`;
    document.getElementById('email').textContent = `Email: ${params.get('email')}`;
    document.getElementById('bmi').textContent = params.get('bmi');
    document.getElementById('status').textContent = params.get('status');

    const comments = params.get('comments');
    document.getElementById('comments').textContent = comments ? `Comments: ${comments}` : '';
  }

  


  function goBack() {
    window.history.back();
  }

  displayResult();

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