//!--- 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
//!--- los streamers que incluyan la palabra introducida en el input. De esta forma, si 
//!--- introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//!--- introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.


const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const inputElement = document.getElementById('Es6');


const ru = 'ru';
const i = 'i';
const stream = streamers.filter(names => names.name.toLowerCase().includes(ru));
console.log(stream);

const stream2 = streamers.filter(names => names.name.toLowerCase().includes(i));
console.log(stream2);



//!--- 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, 
//!--- si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.En este caso, muestra 
//!--- solo los streamers filtrados cuando hagamos click en el button.
 
const streamers0 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
