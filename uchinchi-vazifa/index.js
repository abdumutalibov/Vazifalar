
//    var number = 123456
//     var str = number.toString()
//   var count = 0;
// for(var i= 0; i < str.length; i++){
//     // count += +str[i]
//  if(+str[i]%3==0){
//    count++
//  }
// }
// console.log(count)
// function compareStr(){
// let a = 'ABC'
// let b = 'BCA'

//  let c= a.localeCompare(b)
// console.log(c)
// }
// if(a.localeCompare(b)){
//    console.log(true)
// }else {
// console.log(false)
// }
// if(a===b){
//   console.log(true)
// }else{
//   console.log(false)
// } 


// let a = 'ABC'
// let b = 'BCA'

// for( let i=0;i<a.length;i++ ){
//   for( let j=0;j<b.length;j++ ){
//     if(a.charAt(i)===b.charAt(j)){
//       c=
//       console.log(true)
//     }else{
//       console.log(false)
//     }
//   }
// }

//  let a = 'ABC'
//  let b = 'BCA'
// function strcmp(a, b) {
//   a = a.localeCompare(b), b =b.localeCompare (a);
//   for (var i=0,n=Math.max(a.length, b.length); i<n && a.charAt(i) === b.charAt(i); ++i){
//   if (i === n){
//    return true;
    
//   } else{
//      return false;
//        return a.charAt(i) > b.charAt(i) ? -1 : 1;
//   }
//  }
//  console.log(a,b)
// }

// let a = ['ABC'];
// let b = ['BCA'];

// console.log(typeof a);
// console.log(typeof b);


// if (a.localeCompare(a===b)){
//   console.log(true)
  
// }else{
 
//   console.log(false)
// }


// let a = 'ABC'
// let b = 'BCA'
// let c = a
// let d = b
// function test(){
//    for(let i=0; i< a.length; i++){
//       for (let j=0; i< b.length; j++){
// if(c===d){
//    return true;
// }else {
//    return false;
// }
//  }
//  }
// }
//  console.log(test(c,d))



 let a = 'ABC'
let b = 'BCA'
 let c = a+b;
let d = a+b;
 function test(c,d){
for( let i=0;i<c.length;i++ ){
  for( let j=0;j<d.length;j++ ){
    if(c.charAt(i)===d.charAt(j)){
   return(true)
    }else{
    return(false)
    }
  }
}
}
console.log(test(c,d))


// function map(f, a) {
//    var result = [],  Create a new Array
//        i;
//    for (i = 0; i != a.length; i++)
//      result[i] = f(a[i]);
//    return result;
//  }