/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var largoDelArray = array.length;
   return largoDelArray;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

//OPCION ITERATIVA

   // let nuevoArray = [];

   // for (let i = 0; i < array.length; i++) {
   //    nuevoArray.push(array[i] + 1);
   // }
   // return nuevoArray;

//OPCION CON METODOS  
let nuevoArray = array.map((el) => el + 1);
  return nuevoArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push (elemento);
   return array; 
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift (elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   // var palabras = ['Hello','world!'];
   var frase = palabras.join (' ');
   return frase; 
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

// for (let i= 0; i< array.length;i++){
//    if (array[i] === elemento){
//       return true;
//    }
// }
// return false;

   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   // var suma = 0
   // for (let i=0; i< arrayOfNums.length; i++){
   //    suma = suma + arrayOfNums[i];
   // }
   // return suma;

   return arrayOfNums.reduce((acumulador, item) => acumulador + item, 0);
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

   // var suma = 0
   // for (let i=0; i< resultadosTest.length; i++){
   //    suma = suma + resultadosTest[i];
   // }
   // return suma / resultadosTest.length;

   var suma = resultadosTest.reduce ((acumulador, item) => acumulador + item, 0);
   return suma/resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var result = arrayOfNums [0];

   for (let i=1; i< arrayOfNums.length; i++){
      if(arrayOfNums[i] > result){
         result = arrayOfNums[i];
      }
   } return result;

}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   
   if (arguments.length === 0) return 0;
   if (arguments.length === 1) return arguments[0];
   var resultado = 1;
   for (let i=0; i< arguments.length; i++){
      resultado = resultado * arguments [i];
   } return resultado;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   var acumulador = 0; 
   for (let i=0; i<array.length; i++){
      if (array[i] > 18){
         acumulador ++
      }
   }
   return acumulador;

   // return array.filter(num => num > 18).length;

}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   if (numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
    } else{
   return "Es dia laboral";
    }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   
   var str = num.toString();
   return str[0] === "9";

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   for (i=0; i< array.length -1; i++){

      if (array[i] === array[i+ 1]){
         return true;
      }
   
   } return false;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   var arrayN = [];

  for (let i=0; i< array.length; i++){
   if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      arrayN.push(array[i])
   }
  }
  if (arrayN.length === 3){
   return arrayN;

  } else{
   return "No se encontraron los meses pedidos";
  }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tablaSeis = [];

   for (let i =0; i< 11; i++){
      tablaSeis[i] = 6 * i
   }
   return tablaSeis;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   var arrayN = [];
   for (let i= 0; i< array.length; i++)
   if( array[i] > 100){
      arrayN.push(array[i])
   }
   return arrayN;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   var suma = num;
   var iterate = 0;
   var array = [];
   for (let i = 0; i < 10; i++) {
      suma = suma + 2;
      iterate++;
      array.push(suma);
      if (suma === iterate) break;
   }
   if (suma === iterate) {
      return 'Se interrumpió la ejecución';
   } else {
      return array;
   }

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arrayN = []
   var suma = num;
   
   for (let i= 0; i<10; i++){
      
      if (i === 5) continue;

      else {
         suma = suma + 2
         arrayN.push(suma);
      }
   }  
   return arrayN;
}     

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
