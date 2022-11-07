let number1 = Math.round(Math.random() * 255)
let number2 = Math.round(Math.random() * 255)
let number3 = Math.round(Math.random() * 255)

function criandocores(){
const colors = document.getElementsByClassName('color')
colors[0].style.backgroundColor = 'black'
colors[1].style.backgroundColor = 'rgb('+number1+ ',' + number2+ ',' +number3 +  ')'
colors[2].style.backgroundColor = 'rgb('+number2+ ',' + number3+ ',' +number1 +  ')'
colors[3].style.backgroundColor = 'rgb('+number3+ ',' + number1+ ',' +number2 +  ')'

}
criandocores() 
document.get

const palletColor = document.getElementById('color-palette');
function selectColor(event) {
  const colors = document.getElementsByClassName('color');
  const cl = event.target;
  for(const value of colors){
      value.className = 'color';
  }  
   cl.className += ' selected';
}

palletColor.addEventListener('click', selectColor);


const pixelGrid = document.getElementById('pixel-board');
function setColor(event) {
  const cl = event.target;
  const colorInPallet = document.querySelector('.selected')
  .style.backgroundColor;
  cl.style.backgroundColor = colorInPallet;
  }  
 pixelGrid.addEventListener('click', setColor);

 
 const botao = document.getElementById('clear-board')
 botao.innerText = 'Limpar'
 function clear(event){
 const pixels = document.querySelectorAll('.pixel')
 for(index = 0; index < pixels.length; index +=1){
 pixels[index].style.backgroundColor = 'white';
 }
 }
 botao.addEventListener('click', clear)
 