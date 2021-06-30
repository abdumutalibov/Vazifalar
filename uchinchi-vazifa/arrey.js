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

console.log('=============================')

let arra = ['Kolya', 'Vadim', 'OLya']
arra[0]='Galin'
arra[3]='Bob'
arra[4]='Power'


arra.push('Dima ','Igor','jony')
console.log(arra)
arra.shift();
arra.pop();

console.log(arra)

arra.unshift('Kolay')
delete arra[6]

console.log(arra)
console.log('=============================')
let arrOne =['Vanya', 'ishtvan', 'Olya'];
arrOne.splice(1,1);
console.log(arrOne)

let arrTwo =['Vanya', 'ishtvan', 'Olya'];
let removed = arrTwo.splice(1,1);
console.log(removed);

let arrThree = ['Vanya', 'Ishtvan', 'Ola'];
arrThree.splice(0,1,'aasa')
console.log(arrThree,'j')

let arrFour=['Vanya', 'Ishtvan', 'Ola']
arrFour.splice(3,0 ,'KOlya','Ruslan')
console.log(arrFour)

let arrFive=['Vanya', 'Ishtvan', 'Ola'];
arrFive.splice(2,1)
console.log(arrFive)