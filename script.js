// Toggle dark/light theme
const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Change icon based on mode
  if (document.body.classList.contains("light-mode")) {
    toggleButton.textContent = "🌞";
  } else {
    toggleButton.textContent = "🌙";
  }
});
