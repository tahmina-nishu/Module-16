var a = isNaN("11");
console.log(a);
/*Explanation:

--> The isNaN function is used to determine whether a value is Not-a-Number.
--> In this case, '11' is a string, not a number. --> However, isNaN performs type coercion to try to convert the argument to a number.
--> When '11' is converted to a number, it becomes --> 11, which is a valid number.
--> Since 11 is a number, it is not NaN.
Therefore, isNaN('11') will return false.
*/
var b = isNaN(2-10);
console.log(b);
/*Explanation:

--> Here, 2 - 10 is a mathematical expression that evaluates to -8.
--> -8 is a valid number.
--> isNaN checks if its argument is NaN. Since -8 is not NaN, isNaN(2 - 10) will return false.
*/