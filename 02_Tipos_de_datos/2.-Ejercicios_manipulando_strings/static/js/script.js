console.log("Conexión correcta con js");

//  Comentario: Control + C + K
// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
const nombre = "Camila";
// edad: 25
const edad = "25";
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.
console.log(`Hola, mi nombre es ${nombre}, tengo ${edad} años
    \nTipo de dato (edad) es: ${typeof edad}`);
// /n salto de linea en consola o textos

// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas
let comuna = "Maipú";
let region = "Metropolitana";
console.log(`Vive en la comuna de ${comuna} en la región ${region}`);

// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato
let lenguaje = "Python"
console.log(`El lenguaje ${lenguaje} tiene ${lenguaje.length} caracteres.`);

// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas
let texto1 = "Me encanta programar en JavaScript";
console.log(texto1.toLowerCase());
console.log(texto1.includes("JavaScript"));
// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres
let texto2 = "arroz, fideos, aceite, sal";
console.log(`La lista de compras ${texto2.toUpperCase()}.
\nEl texto tiene ${texto2.length} caracteres.
\nEncuentra la palabra: ${texto2.includes("aceite")}`);

// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene
let numeroCasa = "456";
let numeroCasaTexto = "";
numeroCasaTexto = String(numeroCasa);
console.log(`El ${numeroCasa} es ${numeroCasaTexto}.
    \nEl ${numeroCasaTexto} tiene ${numeroCasaTexto.length} caracteres.
    \nTipo de dato es: ${typeof numeroCasaTexto}`);

// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS
const nombre_ = "Diego ";
const apellido_ = "Rojas";
const nombreCompleto = `${nombre_}${apellido_}`
console.log(`Nombre completo ${nombreCompleto}`)
console.log(`${nombre_}${apellido_} tiene ${nombreCompleto.length} caracteres.`.toUpperCase())
// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres
let frase = "Hoy aprenderemos sobre strings";
console.log(`Hoy aprenderemos sobre strings`);
console.log(frase.includes("strings"));
console.log(frase.toUpperCase());
console.log(`Tiene ${frase.length} caracteres.`);
// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres
let texto3 = "Programar es divertido";
console.log(`Texto original: ${texto3}`);
console.log(texto3.toLowerCase());
console.log(texto3.toUpperCase());
console.log(`Tiene ${texto3.length} caracteres.`);
// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 4C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS
let curso = "4C";
let anio = "2026";
let anioTexto = String(anio); // anio a texto
console.log(`El tipo de dato de Año es: ${typeof anio}`);
console.log = (`Curso: ${curso}
    \nAño: ${anio}
    \nEl tipo de dato de Año es ${typeof anio}.toUpperCase()`);
// Desafío extra (nivel alto)
const textoFinal = "Estoy listo para el desafio"
console.log(`El texto final tiene ${textoFinal.length} caracteres.`);
console.log(textoFinal.includes("desafio"));
console.log(`${textoFinal} 
\nTipo de dato: ${typeof textoFinal}`.toUpperCase());
