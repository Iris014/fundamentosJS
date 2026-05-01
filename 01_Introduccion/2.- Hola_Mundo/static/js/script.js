console.log("¡Archivo vinculado correctamente!");

// 1. Presentación
const nombre = "Iris"; 
let edad = 17;
console.log("Mi nombre es " + nombre + " y tengo " + edad + " años");

// 2. Año de nacimiento
const anioActual = 2026;
let anioNacimiento = anioActual - edad;
console.log("Nací en el año: " + anioNacimiento);

// 3. Estado de suscripción
let estaSuscrito = true;
console.log("Estado de suscripción:", estaSuscrito);
estaSuscrito = false;
console.log("Estado de suscripción:", estaSuscrito);


// 4. Menú
const plato = "Pizza Italiana";
let precio = 3500;
console.log("Plato:", plato, "- Precio: $" + precio);

// 5. Verificador de tipos
let valorNumero = 100;
let valorTexto = "100";
console.log(typeof valorNumero);
console.log(typeof valorTexto);

// 6. Caja vacía
let comentarios;
console.log(comentarios);
comentarios = null;
console.log(comentarios);

// 7. Suma de strings
let saludo = "Hola";
let nombreAmigo = "Elian";
let saludoCompleto = saludo + " " + nombreAmigo;
console.log(saludoCompleto);

// 8. Plantilla Dinámica
let ciudad = "Santiago";
let pais = "Chile";
console.log(`Bienvenido a ${ciudad}, ${pais}`);

// 9. Calculadora de IVA
let precioProducto = 2500;
let iva = precioProducto * 0.19;
let totalFinal = precioProducto + iva;
console.log("El total final con IVA es: " + totalFinal);

const paisOrigen = "Chile";
// paisOrigen = "Ecuador";

console.log("País de origen:", paisOrigen);