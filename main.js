var input = document.querySelector('#value');
const output = document.querySelector('#fact');
const out = document.querySelector('#out');

input.addEventListener('input',input =>{


const value = input.target.value

fetch('http://numbersapi.com/'+value )
.then(res =>{ return  res.text()})
.then(data=>{ output.textContent= data})



if(value){
  out.className='white-text'
  output.className='flow-text'
}
else{
  out.className='hide'
}


})