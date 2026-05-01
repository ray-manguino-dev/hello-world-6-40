// Hello World 6.40 - Name Input Form
// This file handles the name input form and welcome message display

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("name-form");
  const nameInput = document.getElementById("name-input");

  if (form && nameInput) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = nameInput.value.trim();

      if (!name) {
        nameInput.focus();
        return;
      }

      // Show welcome message (placeholder — full logic in task 2)
      const card = document.querySelector(".card");
      card.innerHTML = `
        <h1>Welcome!</h1>
        <p class="subtitle">Hello, <strong>${escapeHtml(name)}</strong></p>
        <p class="hint">Full welcome message coming soon</p>
      `;
    });
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
});