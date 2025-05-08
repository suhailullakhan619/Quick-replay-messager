const messageBox = document.getElementById("message-box");
const addBtn = document.getElementById("add-btn");
const input = document.getElementById("custom-input");
const predefinedButtons = document.querySelectorAll(".msg-btn");
const customButtonsContainer = document.getElementById("custom-buttons");

// Click predefined message buttons
predefinedButtons.forEach(button => {
button.addEventListener("click", () => {
messageBox.value += button.textContent + " ";
});
});

// Add custom message button
addBtn.addEventListener("click", () => {
const text = input.value.trim();
if (!text) return;

const wrapper = document.createElement("div");
wrapper.className = "msg-wrapper";
wrapper.style.backgroundColor="transparent";
const newBtn = document.createElement("button");
newBtn.className = "msg-btn";
newBtn.textContent = text;

newBtn.addEventListener("click", () => {
messageBox.value += newBtn.textContent + " ";
});

const deleteBtn = document.createElement("button");
deleteBtn.className = "delete-btn";
deleteBtn.textContent = "×";
deleteBtn.addEventListener("click", () => {
wrapper.remove();
});

wrapper.appendChild(newBtn);
wrapper.appendChild(deleteBtn);
customButtonsContainer.appendChild(wrapper);

input.value = "";
});