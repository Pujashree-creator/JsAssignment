const gimli =
{ 
  name: "Gimli",
  race: "dwarf",
  weapon: "axe",
  greet: function() { return `Hi, my name is ${this.name}!`; }, };
 
//call a function
var a = gimli.greet();
console.log(a);

//Expected output                                                                                                                         
//"Hi, my name is Gimli!"