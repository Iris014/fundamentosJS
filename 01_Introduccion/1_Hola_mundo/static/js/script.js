console.log("conexion con js correcta...");
/*
Dato: Tipo texto (string)
1.- Concatanación de texto con el signo +
Podemos unir texto y variables
*/
// Contatenacion: unir texto y/o variables
const nombre = "Iris";
const apellido = "Ccallomamani";
//Unimos ambas constantes con un texto extra.
console.log("Hola, mi nombre es: " + nombre + " " + apellido);

/* 
2.- Ver el tipo de dato (typeof)
*/
console.log("La variable nombre es un tipo de dato" + typeof nombre);

// Template literals (forma moderna para concatenar)
console.log(`Hola, mi nombre es: ${nombre} ${apellido}`)

//Mostrar el largo de un string (texto) - Contar los caracteres
let palabra = "paralelepipedo";
console.log(`La palabra ${palabra} tiene ${palabra.length} letras.`)

// Crear una frase y contar con caracteres.
let word = "orrinolaringologo"
console.log(`La palabra ${word} tiene ${word.length} letras.`)

// Metodos comunes de JS para formatear texto
// Transformar texto en Mayúsculas . toUpperCase()
let texto1 = "JAVasCRIPT Es LO mejor"
console.log(texto1.toUpperCase());

// Transformar texto en minuscu´las toLowerCase
console.log(texto1.toLowerCase());

// Buscar un texto dentro de un string
let texto2 = "Leche, azucar, peras, huevos, harina"
console.log(texto1.includes("peras")); //true

// Convertir una variable a texto
let telefono = 89102920;
let telefono_texto = String(telefono);
console.log(`Mi numero de telefono ${telefono_texto}
    es de tipo: ${typeof telefono_texto}`);
