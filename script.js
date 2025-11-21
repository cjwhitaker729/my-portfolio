// ===== Elements =====
const recSubmitBtn = document.getElementById("rec-submit");
const recNameInput = document.getElementById("rec-name");
const recMessageInput = document.getElementById("rec-message");
const recList = document.getElementById("recommendation-list");

const popup = document.getElementById("popup");
const popupClose = document.getElementById("popup-close");

const homeBtn = document.getElementById("home-btn");

// ===== Task 7 + Task 9: Add recommendation + popup =====
recSubmitBtn.addEventListener("click", () => {
  const name = recNameInput.value.trim();
  const message = recMessageInput.value.trim();

  if (message.length === 0) {
    alert("Please write a recommendation message first.");
    return;
  }

  const newCard = document.createElement("div");
  newCard.classList.add("recommendation-card");

  newCard.textContent = name
    ? `“${message}” — ${name}`
    : `“${message}”`;

  recList.appendChild(newCard);

  // Clear inputs
  recNameInput.value = "";
  recMessageInput.value = "";

  // Show popup confirmation
  popup.classList.remove("hidden");
});

// Close popup
popupClose.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Click outside popup to close
popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.classList.add("hidden");
});

// ===== Task 8: Home icon scroll to top =====
homeBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
