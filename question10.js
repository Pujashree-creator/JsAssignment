function Hero(name, level)
{
name = name;
level = level;
console.log(name);
}
Hero();
//If an enclosed function defines a variable with the same name as a variable in the outer scope, then there is no way to refer to the variable in the outer scope again.It does not give any output because we do not assign any value. So, this is not correct.

/*Expected output                                                                                                                       
    undefined
*/