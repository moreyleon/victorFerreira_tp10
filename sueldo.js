let nombre="Bartolo"
let apellido="Cruz"
let sueldoActual=5000
let porcetajeAumento=50

let calculoAumento=(sueldoActual*porcetajeAumento/100)
console.log(calculoAumento);

let nuevoSueldo=(calculoAumento+sueldoActual)
console.log(nuevoSueldo);

console.log("Hola, estimado"+" " +nombre+" " +apellido+
    "En base a su sueldo actual:"+ sueldoActual+" "+
   "Ha recibido un aumento del 50%:"+ calculoAumento +" "+
    "y su nuevo sueldo es de:"+ nuevoSueldo);
