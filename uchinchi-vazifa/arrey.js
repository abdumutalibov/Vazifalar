let arr =[34,65,123,656,12344,65656,233,]
let arr1= arr[4] ;
console.log(arr1)
let arr2 =['Finktion','uchinchi', 'arrey.js']
console.log(arr2[0])
console.log(arr2[1])
let arr3 = arr2.length;
console.log(arr3)

function make(){
let word1=['24/7 ','every day ','today ','go to schoole ']
let word2=['I am workaholic','hello yopya ','blablablaaa','I`am studiy ']
let word3=['every 5 hours','our work','nu naxer','С этим бесплатным']
let random1 = Math.floor(Math.random()* word1.length)
let random2 = Math.floor(Math.random()* word2.length)
let random3 = Math.floor(Math.random()* word3.length)

let phrase = word1[random1] + ' ' +word2[random2] + ' ' + word3[random3];
console.log(phrase)
}
make()