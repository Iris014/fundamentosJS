console.log("Conexion exitosa con js...")
// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
    let estudiante = "Juan";
    let notaFinal = 6.5;
    if (notaFinal > 6.0) {
        alert(`El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`);
    } else if (notaFinal > 4.0) {
        alert(`Estudiante aprobado`);
    } else {
        alert(`Estudiante reprobado`);
    }
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
    let nombreCompleto = "Daniel Pérez";
    alert(`El nombre convertido es: ${nombreCompleto.toUpperCase()} y tiene ${nombreCompleto.length} caracteres`)
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`
//Más de 15 caracteres → correo válido
//15 o menos caracteres → correo demasiado corto


function ejercicio13() {
    let correo = "liceovvh@gmail.com"
    if (correo.length > 15) {
        alert(`El correo convertido es: ${correo} 
            \ny el resultado es: correo válido`)
    } else {
        alert(`correo inválido`)
    }
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
    let frase = "Estoy aprendiendo JavaScript";
    if (frase.length > 20) {
        alert(`La frase "Estoy aprendiendo JavaScript" tiene ${frase.length} caracteres y corresponde a una Frase larga`);
    } else if (frase.length > 11) {
        alert(`Frase mediana`);
    } else {
        alert(`Frase corta`);
    }
}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
    let producto = "teclado";
    let precioProducto = 50000;
    let descuento = 0;
    if (precioProducto >= 50000) {
        descuento = precioProducto * 0.10;
    } else if (precioProducto >= 20000) {
        descuento = precioProducto * 0.10;
    } else {
        descuento = 0;
    }
    let precioFinal = precioProducto - descuento;
    alert(`El producto ${producto.toUpperCase()} tiene un precio final de $${precioFinal}`);
}