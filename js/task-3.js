const inputItem = document.querySelector("#name-input");
const spanItem = document.querySelector("#name-output");

inputItem.addEventListener("input", () => {
  const trimmedValue = inputItem.value.trim();

  spanItem.textContent = trimmedValue || "Anonymous";
});

// console.dir(input);
