console.log("Hello, World")

//querySelector selecciona los elementos que tenemos en HTML y los llama poniedo entre parentesis
//la etiqueta o la proiedad que tengan (id, class, etc) seleccionando al primero que JS encuentre.

//Para selecionar todos, usamos querySelectorAll

//La forma de hacerlo es creando variables que representen a los selectores

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parra = document.querySelector('.parra'); //Tiene la 'class' parra.
const pid = document.querySelector('#pid'); //Tiene el 'id' pid
const input = document.querySelector('input');

console.log(input.value);  //'value' esta dentro del navegador intrinseco en él.



/*ESCRIBIENDO HTML DESDE JS*/

h1.innerHTML = "Ahi <br> na' <br> ma'"
h1.innerText = "Ahi <br> na' <br> ma'"  //Lo toma todo como texto, incluso codigo HTML
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

input.value = "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

pid.appendChild(img); //Para meter la imagen al documento HTML