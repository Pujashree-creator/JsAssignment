function foo1()
{
  return {
    bar: "hello"
  };
}
function foo2()
{
  return              // a semicolon is automatically inserted immediately after the return statement.
  {
    bar: "hello"
  };
}
//Here, these two functions will not return the same thing.
console.log("foo1 returns:");
console.log(foo1());          //It gives the output- Object {bar: "hello"}
console.log("foo2 returns:");
console.log(foo2());         /*It gives the output- undefined - foo2() returns undefined without any error 
                               being thrown because the JavaScript warning "unreachable code after return 
                               statement" occurs when using an expression after a return statement. */