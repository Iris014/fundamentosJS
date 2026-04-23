console.log("Conexion exitosa con js");
/*
========================
1.- ¿Qué es una condición en JS?
========================
Una condición nos permite tomar decisiones en el código: Separando dos caminos el si ()if) y el no (else)

Estructura básica:(     Sintasis    --> Reglas del lenguaje de progrmación)
if (condición) {
    //codigo que se ejecuta si la condición es verdadera.
}
else{
    //código que se ejecuta si la condicio´n es falsa.
}

*/

//Ejemplo 1: (numérico)
let edad = 18;
if (edad >= 17) { //Condición Si
    console.log("Eres mayor de edad");
}

//Ejemplo 2: Dos caminos posibles
let temperatura = 10;

if (temperatura > 20){
    console.log("Hace calor");
} else {
    console.log("Hace frío");
}

//Ejemplo 3: IF - ELSE IF - ELSE (Mu´ltiples condiciones)

let nota = 5.5;

if (nota >= 6.0){ //Primera condición
    console.log("Excelente! Sigue así")
} else if (nota >= 5.0){ //Segunda condición
    console.log("Aprobado, puedes mejorar!")
} else { //Valor si no cumple anteriores
    console.log("Reprobado, estudia más!")
}

//Ejemplo 4: Condiciones con STRING
let nombre = "Name";

//Combinación exacta (===)
if (nombre === "Name"){
    console.log("Hola, " + nombre);
} else {
    console.log("Tu no eres Name");
}
/*
OPERADORES DE COMPARACIÓN
> mayor que
< menor que
>= mayor o igual
<= menor o igual
=== estricta igualdad
!== distinto estricto
=== igualdad
!= distinto
*/

// Ejemplo de distinto
let num = 10;
let num2 = 5;
if (num !== num2){ //Comparación con distinto
    console.log(`El número: ${num} es distinto que ${num2}`)
} else{
    console.log("Son iguales!")
}