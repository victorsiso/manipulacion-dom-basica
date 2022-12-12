let nombre = "Juan";
let apellido = "Perez";
let dineroAhorrado = 50;
let deudas = 49;

let nombreCompleto = nombre + " " + apellido;
let dineroReal = dineroAhorrado - deudas;

console.log(nombreCompleto);



function funcion (name, lastname, nickname){
    
    const completeName = name + lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

funcion ("Victor", "Siso", "Cuica")



const tipoDeSuscripcion = "Basic";
  if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los gratis");
} else if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos");
} else if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes todos los cursos por un año");
} else if (tipoDeSuscripcion === "ExpertDuo"){
    console.log("Tu y alguien mas pueden tomar cursos");
}



function suscripcion(tipoDeSuscripcion);
  if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los gratis");
    return;
} if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos");
    return;
} if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes todos los cursos por un año");
    return;
} if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tu y alguien mas pueden tomar cursos");
    return;
}



const i = 0;
while (i > 5) {
    console.log("El valor de i es: " + i);
    i++;
}


let i = 10
while (i >= 2){
    console.log("El valor de i es: "+ i)
    i--
}



let answer = prompt("2 + 2");
    while (answer != 4){
        answer = prompt("Intenta de nuevo") 
    }
    alert("felicidades")


function arreglo(arr){
    console.log(arr[0])
}

function imprime(to){
    console.log(to.length)
}
