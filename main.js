const scrollButton = document.getElementById("scrollrsvp");
const targetSection = document.getElementById("rsvp");
const iframe = document.getElementById("google-form");

scrollButton.addEventListener("click", function() {
  targetSection.scrollIntoView({
    behavior: "smooth" // For smooth scrolling
  });
});