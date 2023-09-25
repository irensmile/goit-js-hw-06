let counterValue = 0;
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener('click', (e) => {
    counterValue += 1;
    document.querySelector("#value").innerHTML = counterValue;
});

decrementBtn.addEventListener('click', (e) => {
    counterValue -= 1;
    document.querySelector("#value").innerHTML = counterValue;
});