Closure is one of important concept in JavaScript.
Closure means that an inner function always has access to the variables and parameters of its outer function, even after the outer function is returned.


Example 1: --> [a link](https://github.com/Praddy27/nodejs-learning/blob/main/Closure/example-1.js)

return innerFunction() --> return innerFunction from outerFunction when you call outerfunction().
Variable innerFunc reference is created and points innerFunction() not to outerFunction(). When we call innerFunc(), it access outerVariable which is declared in outerFunction() 

Note: 
1. Outer variable keep the state between multiple calls.
2. Inner function wont keep seperate copy of inner function. Just a ref of outer variable
3. If value is changed, outer variable value also gets changed

When to use Closure?
1. Hiding implementation details 
2. To have private variables or function and just expose values.


Example 2: [a_link](https://github.com/Praddy27/nodejs-learning/blob/main/Closure/counter2.js)
increment(), decrement() and value() are public accessible function
changeBy() is private and used by increment/decrement function

