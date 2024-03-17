const scrollButton = document.getElementById("scrollrsvp");
const targetSection = document.getElementById("rsvp");

scrollButton.addEventListener("click", function() {
  targetSection.scrollIntoView({
    behavior: "smooth" // For smooth scrolling
  });
});