# Expression vs Statement

## Write down if the code is valid or not with reason.

1. What is the output or error of the code below.

```js
function add(var a = 0,var b = 0){
  return a + b;
}
add(21, 23);
```
Error: variable declaration inside function argument.

2. What is the output or error of the code below.

```js
function add(a = 0; b = 0) {
  return a + b;
}
add(21, 23);
```
Error: expression inside function argument.

3. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(21, 23);
```
Output: 44
4. What is the output or error of the code below.

```js
function add(a = 0, b) {
  return a + b;
}
add(21);
```
output: 

5. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(undefined, 21);
```
Output: 21

6. What is the output or error of the code below.

```js
function knowWhy(value) {
  return if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
add(211);
```
Error: if statement cannot be used with return statement, add not declared.
7. What is the output or error of the code below.

```js
function knowWhy(value) {
  return if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
add(21);
```
Error: if statement cannot be used with return statement, add not declared.
8. What is the output or error of the code below.

```js
function isItIf(ifElse) {
  return ifElse;
}
add(if(true){console.log('Testing')});
```
Error: ifelse cannot be used inside function argument