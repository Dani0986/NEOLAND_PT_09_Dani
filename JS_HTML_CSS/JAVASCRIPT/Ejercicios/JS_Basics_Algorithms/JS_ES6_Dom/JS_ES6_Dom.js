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

document.getElementById('ES6');

/*function filtrarStreamer(stream) {
	const filtrar = streamers.filter(streamer => streamer.name.includes(stream));
	return filtrarStreamer;
}
const ES6 = document.getElementById('ES6');
ES6.addEventListener("click", () => document.getElementById("alert").show());

const streamings = 'Ru'; 
const filteredStreamers = filtrarStreamer(stream);

console.log();	
*/

/*
const ru = [];
const twitch = streamers.filter(streamer => {
    if (streamer.gameMorePlayed.toLowerCase().includes('ru')) {
        ru.push(streamer);
        return true;
    }
    return false;
});
*/






//!--- 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, 
//!--- si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.En este caso, muestra 
//!--- solo los streamers filtrados cuando hagamos click en el button.
 
const streamers0 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
