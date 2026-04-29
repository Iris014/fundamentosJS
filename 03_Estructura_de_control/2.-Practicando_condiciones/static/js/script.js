console.log("Conexion exitosa con js...")
// EJERCICIO 1
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
    let nombre = "Juan";
    let bienvenida = "Bienvenido " + nombre;
    alert(`${bienvenida}`);
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
    let num1 = 10;
    let num2 = 5; 
    let suma = num1 + num2;
    alert(`La suma es: ${suma}`);
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
    let num3 = 18;
    let num4 = 6;
    let resta = num3 - num4;
    alert(`La resta es: ${resta}`);
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
    let num5 = 8;
    let num6 = 3;
    let multiplicacion = num5 * num6;
    alert(`La multiplicación es: ${multiplicacion}`);
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
    let nota1 = 6.5;
    let nota2 = 5.8;
    let nota3 = 4.8;
    let promedio = (nota1 + nota2 + nota3)/3;
    alert(`El promedio es: ${promedio}`);
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
let edad = 18;
if (edad >= 18) {
    alert(`Es mayor de edad`);
}
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
    let num = 10;
    if (num % 2 === 0) {
        alert(`El número ${num} es par`);
    } else {
    alert(`El número ${num} es impar`);
    }
}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
    let nota = 7.0;
    if (nota >= 4.0) {
        alert(`Estudiante aprobado`);
    } else {
        alert(`Estudiante desaprobado`);
    }
}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
    let precio = 20000;
    let descuento = precio*0.10;
    let precioFinal = precio - descuento;
    alert(`Precio final con descuento: $${precioFinal}`);
}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
let num7 = 9;
let num8 = 4;
if (num7 > num8) {
    alert(`El número mayor es: ${num7}`);
} else {
    alert(`El número mayor es: ${num8}`);
    }
}


