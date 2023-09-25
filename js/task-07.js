document.querySelector("#font-size-control").addEventListener('input', (e) => {
    document.querySelector("#text").style.fontSize = `${e.target.value}px`;
    
});