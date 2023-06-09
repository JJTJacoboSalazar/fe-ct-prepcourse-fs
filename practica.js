// function buscarAmigo(amigos, nombre) {
    // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
    // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
    // recibe un string llamado 'nombre'.
    // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
    // Ej:
    //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
    //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };
  
    // Tu código aca:
  
  //   for (let i = 0; i < amigos.length; i++){
  //     if(amigos[i].nombre === nombre){
  //       return amigos[i];
  //     }
  //   }
  //   return null;
  // }

  // const amigos = [
  //   { nombre: "Juan", edad: 25 },
  //   { nombre: "María", edad: 30 },
  //   { nombre: "Pedro", edad: 40 }
  // ];
  
  // const resultado = buscarAmigo(amigos, "María");
  // console.log(resultado); // Output: { nombre: "María", edad: 30 }
  

  // function filtrar(funcion) {

  //  Array.prototype.filtrar = function(funcion) {
  //   var newArray = [];
    
  //   for (var i = 0; i < this.length; i++) {
  //     if (funcion(this[i])) {
  //       newArray.push(this[i]);
  //     }
  //   }
    
  //   return newArray;
  // };


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

 var objeto = { 
  nombre: 'Juan', 
  edad: 30, 
  ciudad: 'Madrid' };

var resultado = deObjetoAarray(objeto);
console.log(resultado);
// Output: [['nombre', 'Juan'], ['edad', 30], ['ciudad', 'Madrid']]
