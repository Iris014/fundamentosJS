console.log("Conexion exitosa con js")

// 🔹 Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en consola.

function edadProyectada(){
    let edad = 16;
    alert(`Mi edad es: ${edad}
        \nEn cinco años tendré: ${edad} + 5
        \nHace 10 años tenía: ${edad} - 10`)
}
// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado
function compraDescuento(){
    let producto = 25000;
    let descuento = 0.20;
    let precioFinal = 25000*0.8;
    alert(`Un producto cuesta $25000 y tiene un descuento del 20%.
        \nEl precio final es: $${precioFinal}`)
}

// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()
function promedioNotas(){
    let notaDecimal1 = 5.5;
    let notaDecimal2 = 6.0;
    let notaDecimal3 = 6.5;
    let promedio = (5.5 + 6.0 + 6.5)/3;
    alert(`Las notas decimales son: ${notaDecimal1}; ${notaDecimal2}; ${notaDecimal3}
        \nSu promedio es ${promedio}`)
}

// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final
function calcularTemperatura(){
    let temperaturaActual = 13;
    let aumenta = 13 + 3;
    let disminuye = 16 - 5;
    alert(`La temperatura actual es: ${temperaturaActual}°C
        \nAumenta a ${aumenta}°C
        \nDisminuye a ${disminuye}°C`)
}

// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo
function sueldoSemanal(){
    let sueldoHora = 8000;
    let horas = 45;
    let sueldo = 8000*45;
    let horasExtra = 5;
    sueldo+=(5 * sueldoHora)
    alert(`El nuevo sueldo de un trabajador es: $${sueldo}`)
}

// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en consola
function divisionYresto(){
    let numero1 = 8;
    let numero2 = 2;
    let division = (numero1/numero2);
    let modulo = (numero1%numero2);
    alert(`La division de "${numero1}/${numero2}" da como resultado ${division}. Se reparte 8 en 2 partes donde cada una equivale a 4.
        \nEl modulo de "${numero1}%${numero2}" da como resultado ${modulo}. Se hace la division "8/2", y su resto o lo que queda es 0.`)
}
// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Muestra si el primero es mayor que el segundo
// Verifica si uno de ellos es igual a 10
function compararNumeros(){
    let numero01 = 5;
    let numero02 = 7;
    alert(`Es el primer numero mayor que el segundo:`, numero01 > numero02);
    console.log("Es 5 igual a 10:", numero01 === 10);
    console.log("Es 7 igual a 10:", numero02 === 10);
}
// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado
function aplicarNotacion(){
    let poblacion = 1e6;
    let notacion = 1e6/4;
    alert(`Una poblacion usando notacion cientifica de 1e6 se divide en 4: ${notacion}`)
}
// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final
function potenciaCalculo(){
    let potencia = 3**4;
    let combinacion = potencia*2
    let calculo = combinacion-10;
    alert(`3**4 = ${potencia}
        \n${potencia}*2 = ${combinacion}
        \n${combinacion} - 10 = ${calculo}`)
}
// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)
function dadoAleatorio(){
    let aleatorio = Math.random(); // entre 0 y 1
    let dado = Math.floor(Math.random()*6)+1; // 
    alert(`Tirar dados: ${dado}`);
}
