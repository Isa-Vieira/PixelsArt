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