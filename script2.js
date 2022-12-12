const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#result')

//Cuando se llama una funcion, se llama SIN parentesis
btn.addEventListener('click', btnOnClick)

 //Una de las formas de escuchar eventos de HTML desde JS es con el atributo onclick='' u onchange=''
 function btnOnClick(){
     //console.log(Number(input1.value) + parseInt(input2.value));  
    const sumaInputs = input1.value + input2.value; 
    resultado.innerText = "Resultado: " + sumaInputs;
 }