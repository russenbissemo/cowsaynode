const myobject = require('./information');
const cowsay = require ("cowsay");
//const (name, campus) = require('./information')
console.log(cowsay.say({
    text : `I'm ${myobject.name} from ${myobject.campus} campus`,
    e : "oO",
    T : "U "
}));