var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company 
Console.log(emp1.company);
/*Expected Output                                                                                                 
    employee is not defined. 
*/