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
        alert(`El correo convertido es: ${correo} y el resultado es: correo válido`)
    } else {
        alert(`El correo convertido es: ${correo} y el resultado es: correo inválido`)
    }
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
    let frase = "Estoy aprendiendo JavaScript";
    if (frase.length > 20) {
        alert(`La frase "${frase}" tiene ${frase.length} caracteres y corresponde a una Frase larga`);
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


// Ejercicios extras:

// Ejercicio 16: Boleta de compra con clasificación de cliente

// Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
// Convertir el nombre del cliente a mayúsculas
// Determinar el tipo de cliente según el precio:
// Mayor o igual a 100.000 → Cliente Premium (20% descuento)
// Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
// Menor a 50.000 → Cliente Normal (sin descuento)
function ejercicio16() {
    let cliente = "Alex";
    let productoCliente = "Jabon";
    let precioProducto = 2000;
    let porDescuento = 0;
    let compra = 0
    if (productoCliente => 100000) {
        porDescuento = 0.80;
        compra = precioProducto*porDescuento;
        alert(`${cliente.toUpperCase()}
        \nCliente Premium (20% descuento)
        \nPrecio de compra: $${compra}`);
    } else if (productoCliente => 50000) {
        porDescuento = 0.90;
        compra = precioProducto*porDescuento;
        alert(`${cliente.toUpperCase()}
        \nCliente Frecuente (10% descuento)
        \nPrecio de compra: $${compra}`);
    } else {
        porDescuento = 0;
        alert(`${cliente.toUpperCase()}
        \nCliente Normal (sin descuento)
        \nPrecio de compra: $${compra}`);
    }
}

// Mostrar:
// Nombre del cliente en mayúsculas
// Producto en minúsculas
// Precio original
// Precio final
// Tipo de cliente

// Ejercicio 17: Análisis de frase con puntuación
// Crear una función que almacene una frase y un puntaje numérico. Luego:
// Convertir la frase a minúsculas
// Contar la cantidad de caracteres
// Clasificar el puntaje:
// 90 o más → Excelente
// 70 o más → Bueno
// Menor a 70 → Insuficiente

// Mostrar:
// Frase transformada
// Largo de la frase
// Puntaje
// Clasificación
function ejercicio17() {
    let fraseAnalisis = "Análisis de frase con puntuación";
    let puntajeNumerico = 75;
    let clasificacion = "";
    if (fraseAnalisis.length > 90) {
        clasificación = "Excelente";
    } else if (fraseAnalisis.length > 70) {
        clasificación = "Bueno";
    } else {
        clasificación = "Insuficiente";
    }
    alert(`${fraseAnalisis}
    \nFrase transformada: "${frase.toLowerCase()}"
    \nLargo de la frase: ${fraseAnalisis.length}
    \nPuntaje: ${puntajeNumerico}
    \nClasificación: ${clasificacion}`);
}

// Ejercicio 18: Evaluación de tres notas con estado final

// Crear una función que almacene el nombre de un estudiante y tres notas. Luego:

// Calcular el promedio
// Convertir el nombre a mayúsculas
// Determinar el estado:
// Promedio ≥ 6.0 → Destacado
// Promedio ≥ 4.0 → Aprobado
// Promedio < 4.0 → Reprobado

// Además:
// Contar la cantidad de caracteres del nombre

// Mostrar:
// Nombre en mayúsculas
// Cantidad de caracteres del nombre
// Promedio
// Estado final