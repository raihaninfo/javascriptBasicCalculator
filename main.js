var num1 = prompt ("Enter your Frist Number : ");
var num2 = prompt (" Enter your secent Number : ");

num1 = parseInt (num1,10);
num2 = parseInt (num2,10);

var sum, sub, mul, div, rem,

sum = num1 + num2;
document.write(num1 + " + "  + num2 + " = " + sum + "<br/>");

sub = num1 - num2;
document.write(num1 + " - "  + num2 + " = " + sub +  "<br/>");

mul = num1 * num2;
document.write(num1 + " * "  + num2 + " = " + mul +  "<br/>");

div = num1 / num2;
document.write(num1 + " / "  + num2 + " = " + div +  "<br/>");

rem = num1 / num2;
document.write(num1 + " % "  + num2 + " = " + rem +  "<br/>");