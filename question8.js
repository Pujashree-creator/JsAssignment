const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};

//copy & merge the data
const nameDetails= Object.assign(name,details);

//print the data
console.log("Copy, merge & print the info : ", nameDetails);

/*Expected output                                                                                                                         
"Copy, merge & print the info : " // [object Object]   
{                                                                                                                                         
    "firstName": "Philip",                                                                                                                 
    "lastName": "Fry",                                                                                                                     
    "job": "Delivery Boy",                                                                                                                 
    "employer": "Planet Express"                                                                                                         
}*/