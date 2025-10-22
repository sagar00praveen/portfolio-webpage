
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

     if (name && email && message) {
     alert(`Thank you, ${name} message sent`);
    this.reset();
  } else {
    alert("fill the form");
  }
});
