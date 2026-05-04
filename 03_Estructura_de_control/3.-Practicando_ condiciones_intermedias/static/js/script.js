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

// Mostrar:

// Nombre del cliente en mayúsculas
// Producto en minúsculas
// Precio original
// Precio final
// Tipo de cliente
function ejercicio16() {
    let cliente = "Alex";
    let productoCliente = "Jabon";
    let precioProducto = 2000;
    let porDescuento = 0;
    let compra = 0
    if (productoCliente >= 100000) {
        porDescuento = 0.80;
        compra = precioProducto*porDescuento;
        alert(`Cliente: ${cliente.toUpperCase()}
        \nProducto: ${productoCliente.toLowerCase()}
        \nPrecio original: ${precioProducto}
        \nPrecio final: $${compra}
        \nCliente Premium (20% descuento)`);
    } else if (productoCliente >= 50000) {
        porDescuento = 0.90;
        compra = precioProducto*porDescuento;
        alert(`Cliente: ${cliente.toUpperCase()}
        \nProducto: ${productoCliente.toLowerCase()}
        \nPrecio original: ${precioProducto}
        \nPrecio final: $${compra}
        \nCliente Frecuente (10% descuento)`);
    } else {
        porDescuento = 0;
        alert(`Cliente: ${cliente.toUpperCase()}
        \nProducto: ${productoCliente.toLowerCase()}
        \nPrecio original: ${precioProducto}
        \nPrecio final: $${compra}
        \nCliente Normal (sin descuento)`);
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
    let analisis = "Análisis de frase con puntuación";
    let puntajeNumerico = 75;
    let clasificacion = "";
    let largo = analisis.length;
    if (puntajeNumerico >= 90) {
        clasificacion = "Excelente";
    } else if (puntajeNumerico >= 70) {
        clasificacion = "Bueno";
    } else {
        clasificacion = "Insuficiente";
    }
    alert(`Frase transformada: "${analisis.toLowerCase()}"
    \nLargo de la frase: ${analisis.length}
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
function ejercicio18() {
    let estudiante = "Luna";
    let n1 = 4.9;
    let n2 = 5.7;
    let n3 = 7.0;
    let promedio = (n1 + n2 + n3)/3;
    if (promedio >= 6.0) {
        alert(`Estudiante:${estudiante.toUpperCase()} 
        \nCantidad de caracteres: ${estudiante.length}
        \nPromedio: ${promedio}
        \nDestacado`);
    } else if (promedio >= 4.0) {
        alert(`Estudiante: ${estudiante.toUpperCase()} 
        \nCantidad de caracteres: ${estudiante.length}
        \nPromedio: ${promedio}
        \nAprobado`);
    } else {
        alert(`Estudiante:${estudiante.toUpperCase()} 
        \nCantidad de caracteres: ${estudiante.length}
        \nPromedio: ${promedio}
        \nReprobado`);
    }
}

// Ejercicio 19: Clasificación de desempeño con más niveles
// Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:

// Convertir el nombre a mayúsculas
// Clasificar el rendimiento según:
// ≥ 6.5 → Sobresaliente
// ≥ 6.0 → Muy buen rendimiento
// ≥ 5.0 → Buen rendimiento
// ≥ 4.0 → Suficiente
// < 4.0 → Insuficiente

// Además:

// Mostrar la cantidad de caracteres del nombre

function ejercicio19() {
    let estudianteNivel = "Rosa";
    let n01 = 5.6;
    let n02 = 6.8;
    let promedioFinal = (n01 + n02 + n03)/ 3;
    let rendimiento = "";
    if (promedioFinal >= 6.5) {
        rendimiento = "Sobresaliente";
    } else if (promedioFinal >= 6.0) {
        rendimiento = "Muy buen rendimiento";
    } else if (promedioFinal >= 5.0) {
        rendimiento = "Buen rendimiento";
    } else if (promedioFinal >= 4.0) {
        rendimiento = "Suficiente";
    } else {
        rendimiento = "Insuficiente";
    }
    alert(`Nombre: ${estudianteNivel.toUpperCase()}
    \nPromedio final: ${promedioFinal}
    \nRendimiento: ${rendimiento}`)
}