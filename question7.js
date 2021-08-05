//It initialises an object
const operatingSystem = {
  name: 'Ubuntu',
  version: 18.04,
  license: 'Open Source'
}
//It gets the object key
const get = Object.entries(operatingSystem);
console.log(get);
// Loop through the results
for(let i=0;i<get.length;i++){
  let entry=get[i];
  let key = entry[0];
    let value = entry[1];
  console.log(`${key}: ${value}`);
}

/*Expected Output(When we print console.log(get);)                                                                                        
[// [object Array]                                                                                                                     
 ["name", "Ubuntu"]                                                                                                                      
 ["version", 18.04]                                                                                                                     
 ["license", "Open Source"]]
 
 Expected Output (when we print console.log(`${key}: ${value}`);)                                                                         
 "name: Ubuntu"                                                                                                                         
 "version: 18.04"                                                                                                                       
 "license: Open Source" 
 */