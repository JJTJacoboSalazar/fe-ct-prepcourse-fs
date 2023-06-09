/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   var nuevoArray = [];

   for(let clave in objeto){
      if(objeto.hasOwnProperty(clave)){
         var par = [clave, objeto[clave]];
         nuevoArray.push(par);
      }
   }
   return nuevoArray;
}
// var objeto = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };
// var resultado = deObjetoAarray(objeto);
// console.log(resultado);
// Output: [['nombre', 'Juan'], ['edad', 30], ['ciudad', 'Madrid']]


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

      var count = {};
    
      // Contar la cantidad de veces que se repite cada letra
      for (var i = 0; i < string.length; i++) {
        var letter = string[i];
        if (count[letter]) {
          count[letter]++;
        } else {
          count[letter] = 1;
        }
      }
    
      // Ordenar las propiedades alfabéticamente
      var sortedKeys = Object.keys(count).sort();
    
      // Crear un nuevo objeto con las propiedades ordenadas
      var sortedCount = {};
      for (var j = 0; j < sortedKeys.length; j++) {
        var key = sortedKeys[j];
        sortedCount[key] = count[key];
      }
    
      return sortedCount;
    }
    
    // Ejemplo de uso
   //  var string = "adsjfdsfsfjsdjfhacabcsbajda";
   //  var result = numberOfCharacters(string);
   //  console.log(result);
    


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var mayusculas = "";
   var minusculas = "";

   for (let i = 0; i < string.length; i++){
      var caracter = string[i];
   

   if (caracter === caracter.toUpperCase()) {
      mayusculas += caracter;
   } else {
      minusculas += caracter;
   }
   }
   return mayusculas + minusculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var palabras = frase.split(' ')

   var palabrasInvertidas = palabras.map(function(palabra){
      var palabraInvertida = palabra.split('').reverse().join('');
      return palabraInvertida;
   })

   var fraseInvertida = palabrasInvertidas.join(' ');
   return fraseInvertida;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   var cadenaOriginal = numero.toString();
   var cadenaInvertida = cadenaOriginal.split('').reverse().join('');

   if(cadenaOriginal === cadenaInvertida){
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   var newString = '';

   for(let i = 0; i < string.length; i++){
      var char = string[i];
      if (char !== 'a' && char !== 'b' && char !== 'c')
      newString += char;
   }
   return newString;

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

      return arrayOfStrings.sort(function(a, b) {
        return a.length - b.length;
      });
    
   
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   
   var interseccion = [];

   for(let i = 0; i < array1.length; i++){
   for(let j = 0; j < array2.length; j++){
      if(array1[i] === array2[j]){
         interseccion.push(array1[i]);
         break;
      }
   }

   }
   return interseccion;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
