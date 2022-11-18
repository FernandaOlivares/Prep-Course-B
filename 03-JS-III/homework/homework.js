// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var suma = numeros.reduce(function(acumulador, elemento) {
	return acumulador + elemento;
    },0);
    return suma;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
let arraydepares = [];
  for(let i = 0; i < array.length ; i++){
  if(array[i] % 2 == 0){
      arraydepares.push(array[i]);
    }
  }
  return arraydepares;
}


function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  let arrayalcuadrado = [];
  for(let i = 0; i < array.length ; i++){
        let elevando = Math.pow(array[i], 2);
        arrayalcuadrado.push(elevando);
      }
    return arrayalcuadrado;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  let sumadetodosloselemento = 0
  for(let i = 0; i < array.length ; i++){
    sumadetodosloselemento+= array[i]
    };
    return sumadetodosloselemento;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  convertirnumastring = num.toString();
  totaldigitos = convertirnumastring.length;
  return totaldigitos;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
