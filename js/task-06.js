document.querySelector("#validation-input").addEventListener('blur', (e) => {
    if (e.target.value.length.toString() === e.target.dataset.length) {
        e.target.classList.add("valid");
        e.target.classList.remove("invalid");
    }
    else {
        e.target.classList.add("invalid");
        e.target.classList.remove("valid");
    }
})