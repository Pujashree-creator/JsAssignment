const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin']);
// delete a string from a set
set.delete('Beethoven');

// iterate over each element using a callback

set.forEach((el) => {
  console.log(el);
});

/*Expected Output                                                                                                                        
 "Mozart"                                                                                                                               
 "Chopin"
*/