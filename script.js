document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menu');
  const clock = document.getElementById('clock');
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');

    // בודק אם התפריט פתוח או סגור
    const isMenuOpen = menu.classList.contains('active');

    // מציג או מסתיר את השעון וכפתור מצב כהה בהתאם
    clock.style.display = isMenuOpen ? 'none' : '';
    darkModeToggle.style.display = isMenuOpen ? 'none' : '';
  });
});

// פונקציה לעדכון השעון
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
}

// הפעלת השעון והעדכון כל שניה
window.onload = function() {
  updateClock(); // הפעלת השעון מיד עם טעינת הדף
  setInterval(updateClock, 1000); // עדכון כל שניה
};


// פונקציה שמבצע את המעבר בין מצב כהה למצב בהיר
const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // שמירת הבחירה של המשתמש ב-LocalStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// טעינת מצב הבחירה מהמקומי
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    // ניקוי הודעות
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';
    successMessage.style.display = 'none';

    // אימות
    if (name.value.trim() === '') {
      nameError.style.display = 'block';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      emailError.style.display = 'block';
      valid = false;
    }

    if (message.value.trim() === '') {
      messageError.style.display = 'block';
      valid = false;
    }

    if (valid) {
      successMessage.style.display = 'block';
      form.reset(); // איפוס הטופס
    }
  });
});


// להאזין לאירוע שליחת הטופס
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();  // מונע שליחה רגילה של הטופס

  // אתחול EmailJS עם ה-user_id שלך
  emailjs.init("qP8vsF6eeI_mnkGKQ");  // הוסף את ה-user_id שלך כאן

  // לשלוח את הטופס באמצעות EmailJS
  emailjs.sendForm("service_id7as4k", "template_icxjm4m", this)
    .then(function(response) {
      console.log("Sent successfully", response);
      alert("ההודעה נשלחה בהצלחה!");  // הצגת הודעה שההודעה נשלחה בהצלחה
      document.getElementById("contactForm").reset();  // איפוס הטופס לאחר השליחה
    }, function(error) {
      console.log("Error: ", error);  // הצגת שגיאה אם יש בעיה
      alert("הייתה בעיה בשליחה. אנא נסה שוב.");  // הצגת הודעת שגיאה
    });
});






