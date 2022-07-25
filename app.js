/*Iteración #1: Arrows

Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros*/


 const sumar = (a =10,b= 20) =>{
    console.log( a + b)
 }

 let resultado = sumar();
 console.log(resultado)

 //1.1 Ejecuta esta función sin pasar ningún parametro
 const sumar1 = () =>{
    console.log("Hola ")
 }

 sumar1();

//1.2 Ejecuta esta función pasando un solo parametro
const sumar2 = (c) =>{
    console.log("Hola" +" "+ c)
 }
 sumar2();


 //1.3 Ejecuta esta función pasando dos parametros

 const sumar3 = (c) =>{
    console.log("Hola" +" "+ c)
 }
 sumar2();

 //Iteración #2: Destructuring
/* 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto.*/

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

let {title,gender,year} = game;
console.log(title)
console.log(title)
console.log(year)



