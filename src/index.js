const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]')
}

refs.startBtn.addEventListener('click', startChangeColor)
refs.stopBtn.addEventListener('click',stopChangeColor)
// refs.startBtn.addEventListener('click', () => {
//    timerId = setInterval(() => {
//     // console.log(randomIntegerFromInterval(0, colors.length - 1));
//     document.body.style.backgroundColor = "colors[randomIntegerFromInterval(0, colors.length - 1)]";
//   }, 1000);
// });
function startChangeColor() {
  refs.startBtn.setAttribute('disabled',true)
  timerId = setInterval(() => {    
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}

function stopChangeColor() {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled')
  
}