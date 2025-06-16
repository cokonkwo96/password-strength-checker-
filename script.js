const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");
const suggestions = document.getElementById("suggestions");

passwordInput.addEventListener("input", () => {
  const pwd = passwordInput.value;
  let score = 0;
  suggestions.innerHTML = "";

  if (pwd.length >= 8) score++;
  else addSuggestion("Use at least 8 characters");

  if (/[A-Z]/.test(pwd)) score++;
  else addSuggestion("Add an uppercase letter");

  if (/[a-z]/.test(pwd)) score++;
  else addSuggestion("Add a lowercase letter");

  if (/[0-9]/.test(pwd)) score++;
  else addSuggestion("Add a digit");

  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  else addSuggestion("Add a special character (!@#$)");

  updateBar(score);
});

function addSuggestion(text) {
  const li = document.createElement("li");
  li.textContent = text;
  suggestions.appendChild(li);
}

function updateBar(score) {
  const colors = ["#ccc", "#f44336", "#ff9800", "#ffeb3b", "#4caf50", "#2e7d32"];
  const messages = ["Too Weak", "Weak", "Fair", "Good", "Strong", "Very Strong"];
  const width = ["5%", "20%", "40%", "60%", "80%", "100%"];

  strengthBar.style.backgroundColor = colors[score];
  strengthBar.style.width = width[score];
  strengthBar.classList.add("active");
  strengthText.textContent = messages[score];
}
