// const map = new Map();
// map.set('HTML','HyperText Markup Language')
// .set('CSS','Cascading Style')
// .set('JS', 'JavaScript')

//const map2 = new Map(map.entries());
//console.log([map2])

// const[first,second,third]=map
// console.log(first,second,third);

// for(let [kv ,val]of map ){
//   console.log(kv,val);
// }
// map.forEach((value,key,map)=>
// console.log(value,key,map))

//////..............boshqa variant..............................

// const temp =[0,4,4,6,8,10,6,4,4,3,-2,-2]
// const tF = temp.map(item => {
//  // console.log(item);
//   return 10+item*1.8
// })
// console.log(tF);

// let a =[33,45,78,44];
// let b= a.map((item,index,array)=>{
//   if (index == 0){
//     array[index+4] =66
//   }
//   return item;
// })
// console.log(b);
// console.log(a);

//..........................................................

const z = [
  { name: " Ivan  ", " order  ": 12, " sum": "123,5 " },
  { name: " Sergey  ", " order  ": 12, " sum": "123,5 " },
  { name: " Ivan  ", "  order  ": 12, " sum": "123,5 " },
  { name: " MAtilda", "  order  ": 12, " sum": "123,5 " },
  { name: " Ivan PEta  ", "  order  ": 12, " sum": "123,5 " },
];

let zBack = z.map((item) => {
  item.name = item.name.trim().toLocaleLowerCase();
  
  return item;
});
console.log(zBack);
