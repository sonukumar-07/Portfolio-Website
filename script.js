// === Navbar Toggle for Mobile ===
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// === Contact Form ===
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("✅ Thank you! Your message has been sent.");
  this.reset();
});

