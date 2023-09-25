document.querySelector("#name-input").addEventListener('input', (e) => {
    //console.log(e.target.value);
    if (e.target.value === "")
        document.querySelector("#name-output").innerHTML = "Anonymous";
    else
        document.querySelector("#name-output").innerHTML = e.target.value;
});