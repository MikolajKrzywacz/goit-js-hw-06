const slider = document.querySelector('#font-size-control');
let sliderValue = document.querySelector('#font-size-control').value;
const text = document.querySelector('#text');
text.style.fontSize = `${sliderValue}px`;
slider.addEventListener("input", () =>{
    sliderValue = slider.value;
    text.style.fontSize = `${sliderValue}px`;
})
