console.log("¡Archivo vinculado correctamente!");
// --- NIVEL: VARIABLES Y CONSOLA ---

// 1. Presentación
const nombre = "Dany"; 
let edad = 25; // Puedes cambiar este valor por el tuyo
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


// --- NIVEL: TIPOS DE DATOS ---

// 4. El Menú
const plato = "Pizza Margarita";
let precio = 12000;
console.log("Plato:", plato, "- Precio: $" + precio);

// 5. Verificador de tipos
let valorNumero = 100;
let valorTexto = "100";
console.log(typeof valorNumero);
console.log(typeof valorTexto);

// 6. Caja vacía
let comentarios;
console.log(comentarios); // Mostrará undefined
comentarios = null;
console.log(comentarios); // Mostrará null


// --- NIVEL: OPERACIONES Y FORMATO ---

// 7. Suma de strings
let saludo = "Hola";
let nombreAmigo = "Dany";
let saludoCompleto = saludo + " " + nombreAmigo;
console.log(saludoCompleto);

// 8. Plantilla Dinámica
let ciudad = "Santiago";
let pais = "Chile";
console.log(`Bienvenido a ${ciudad}, ${pais}`);

// 9. Calculadora de IVA
let precioProducto = 1000;
let iva = precioProducto * 0.19;
let totalFinal = precioProducto + iva;
console.log("El total final con IVA es: " + totalFinal);

const paisOrigen = "Chile";
paisOrigen = "Ecuador";
