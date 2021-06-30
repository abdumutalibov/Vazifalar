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

// let a = "ABC";
// let b = "BCA";
// let c = a+b
// let d = b+a
// function test(d, c) {
//   for (let i = 0; i < c.length; i++) {
//      c++
//     for (let j = 0; j < d.length; j++) {
//      d++
//       if (c === d) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
  
// }
// console.log(test(c, d));

//  let a = 'ABC'
// let b = 'BCA'
 

//  function test(c,d){
// for( let i=0;i<c.length;i++ ){
//   for( let j=0;j<d.length;j++ ){
//     if(c.charAt(i)===d.charAt(j)){
//    return(true)
//     }else{
//     return(false)
//     }
//   }
// }
// }


// console.log(test(c,d))

// function map(f, a) {
//    var result = [],  Create a new Array
//        i;
//    for (i = 0; i != a.length; i++)
//      result[i] = f(a[i]);
//    return result;
//  }  


// let a = 'ABC'
// let b = 'BCA'
// let a1 = a.split('').sort()
// let a2 = b.split('').sort()
// function test(){
//     for(let i=0; i<a1.length; i++){
//         for(let j=0; j<a2.length; j++){
//             if(a1[i]===a2[i]) return true;
//             else return false;
//         }
//     }
   
// }
// console.log(test(a1,a2)) 


// for(let i=0; i<100; i++){
//   if(i%3===0 ||i%5===0){
//     console.log(i)
//   }

// }
// let count =0 
// for(let i =0; i<100; i++){
//   if(i%3==0||i%5==0){
//     count+=i
//   }
// }
// console.log(count)

// str1='abcd'
// str2='cdba'
// if(str1.length===str2.length && str1.split('').sort().join()==str2.split('').sort().join()){
//   console.log(true)
// }else{
//   console.log(false)
// }
function test(name ,age, email ){
  name.length<=4 ? console.log('error'):console.log('kelingiz')
age <=15 ? console.log('yoqol'):console.log('welcom')
email.length<=10 ? console.log('noto`g`ri'): console.log('to`g`ri')
} 
test('AZree',17,'abdumu@gmail')