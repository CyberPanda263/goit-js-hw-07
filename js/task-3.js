const input = document.querySelector("#name-input");
input.addEventListener("input", event => {
    const getName = event.target;
    const name = getName.value.trim();
    const setName = document.querySelector("#name-output");
    setName.textContent = name.length > 0 ? name : "Anonymous";
})