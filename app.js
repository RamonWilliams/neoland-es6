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


/*2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.*/

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruta1,fruta2,fruta3] = fruits;
console.log(fruta1);

/*2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.*/

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

let {name} = animalFunction()
let {race} = animalFunction()

console.log(name)

/*2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.*/

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };

const{nombre,itv} = car;
console.log(itv);


const[itv1,itv2,itv3] = itv;
console.log(itv3)


/*Iteración #3: Spread Operator
3.1 Dado el siguiente array, crea una copia usando spread operators.*/

const pointsList = [32, 54, 21, 64, 75, 43];
 const copyPointList = [...pointsList];


console.log(copyPointList);

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copyToy = {...toy};
console.log(copyToy);

/*3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.*/
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsLis3 = [54,87,99,65,32];

 const generalPointlist = [... pointsList2, ...pointsLis3];
 console.log(generalPointlist);

 /*3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.*/
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};


const generalToy ={...toy1,...toyUpdate}
console.log(generalToy);

/*3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.*/
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const copyColor = [...colors];
console.log(copyColor);
copyColor.splice(2,1);
console.log(colors);
console.log(copyColor);

/*Iteración #4: Map
4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map().*/
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


const onlyName = users.map(user =>({name:user.name}));
console.log(onlyName);

/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/

const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

//Ayuda de Segio
 /*users1.map(user => user.name.startsWith("A")?user.name="Anacleto":user.name)
console.log(users1);*/

const listValues = users1.map(user=>(({name:user.name})));
console.log(listValues);
listValues.map(nombre=>{
   if(nombre.name.startsWith("A")){
      nombre.name="Anacleto";
   }else{
      console.log("Valor por default");
   }
})
console.log(listValues);

/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name |y añade al valor de .name el string '(Visitado)' 
cuando el valor de la propiedad isVisited = true.*/


const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
   

cities.map(value => (value.isVisited === true)? value.name = value.name ="(Visitado)": value.name)
console.log(cities);


/*5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18*/
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];


const maxAges = ages.filter(value =>
     value > 18
)
console.log(maxAges);


/*5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.*/


const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const parValues = ages1.filter(value =>
   value % 2 == 0
   )
console.log(parValues);

/*5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


const streamers1 = streamers.filter(value => value.gameMorePlayed == 'League of Legends' )
console.log(streamers1);


/*5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.*/


const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


const streamers3 = streamers2.filter(person =>{
   if(person.name.includes("u")){
     return person.name
   }
})
console.log(streamers3);



/*5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.*/

const streamers4 = streamers2.filter((streamer) => {
   const toReturn = streamer.gameMorePlayed.toLowerCase().includes("legends");
 //Aqui comparamos que el streamer incluya legends en el juego más jugado y lo pasamos 
 //a minuscula para que de igual si lo buscamos con mayuscula o minuscula
   if (toReturn && streamer.age > 35) {
 //Ademas de esto lo que vamos a hacer aqui es con un condicional ve que se cumple lo anterior 
 //y la condicion de la edad, y le transformamos el juego mas jugado en mayuscula
     streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
   } 
   return toReturn;

 });
 
 console.log(streamers4);
 
   
/*5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/
const streamers6 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
  
  //! SIN TERMINAR ESTE EJERCICIO


  //6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
  const numbers = [32, 21, 63, 95, 100, 67, 43];

 const findNumber = numbers.find(number => number > 95 )

   console.log(findNumber);


   //6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
]

const findMovie = movies.find(movie => {
   movie.date === 2010
   return movie.date === 2010
}       
      
)
console.log(findMovie);


/*6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
lo queremos meter en la propiedad .mutation del objeto fusionado.*/
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];


const alienName = aliens.find(alien =>{
   alien.name === "Cucushumushu"
   return alien.name ==="Cucushumushu"
})
console.log(alienName);



const mutationName = mutations.find(mutant =>{
   mutant.name ==="Porompompero"
   return mutant.name === "Porompompero"
})
console.log(mutationName);



const alienMutation = {...alienName, mutationName}
console.log(alienMutation);

//Iteración #7: Reduce

/*7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce().*/

const exams = [
   {name: 'Yuyu Cabeza Crack', score: 5}, 
   {name: 'Maria Aranda Jimenez', score: 1}, 
   {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
   {name: 'Mercedez Regrera Brito', score: 7},
   {name: 'Pamela Anderson', score: 3},
   {name: 'Enrique Perez Lijó', score: 6},
   {name: 'Pedro Benitez Pacheco', score: 8},
   {name: 'Ayumi Hamasaki', score: 4},
   {name: 'Robert Kiyosaki', score: 2},
   {name: 'Keanu Reeves', score: 10}
];

const scores = exams.map(nota => nota.score )
console.log(scores);
 const total =scores.reduce((acc,actualValue)=>{
    return acc = acc + actualValue
})

console.log( total);

/*7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce().*/


  const approved = exams.reduce((acc,exam)=>{
     if(exam.score >= 5){
        return acc + exam.score;
     }{
        return acc
      }       
     
  },0)
 console.log(approved);

 //7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce()


 const notas = exams.map( nota => nota.score);
 console.log(notas)

 
const  media = notas.reduce((acc,nota)=>{
    return acc + nota / notas.length
},0

)
console.log(media);
/*6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
.filter() y usa .reduce() para conseguir la media de sus .score. 
La función .find() también podría ayudarte para encontrar el genero 'RPG' en el 
array .gender.*/

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]

const videGameFiltro = videogames.filter(game => game.genders.includes("RPG"));
console.log(videGameFiltro);


const meadia1 = videGameFiltro.reduce((acc, game) => acc + game.score /videGameFiltro.length, 0);
console.log(meadia1)







