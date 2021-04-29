const infos = require('./information.js');
const cowsay = require ("cowsay");
console.log(cowsay.say({
    text : infos.name,
    e : infos.campus
}));