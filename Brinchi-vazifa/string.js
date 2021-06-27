let ball =66;
if (ball >=95){
  console.log('A+');
}
else if (ball>=90){
  console.log('A')
}
else if (ball>=85){
  console.log('B+')
}
else if (ball>=80){
  console.log('B')
}
else if (ball>=75){
  console.log('C+')
}
else if (ball>=70){
  console.log('C')
}
else if (ball>=65){
  console.log('D')
}
else if (ball>=60){
  console.log('F')
}

let input = '123'
if (input.length >= 4 && input.length <=12){
  console.log('Tog`ri')
}else{
  console.log('Notog`ri')
}




let input = '323@'

 if((input.includes('@') || input.includes('#') || input.includes('$')) && input.length>=6) {
  console.log('correct')
}

else if (input.length >= 4 && input.length <=12){

  console.log('Tog`ri')
}
else{
  console.log('Notog`ri')
}


let input = prompt('Parol kritin')

 if((input.includes('@') || input.includes('#') || input.includes('$')) && input.length>=6) {
  console.log('correct')
}

else if (input.length >= 4 && input.length <=12){

  console.log('Tog`ri')
}
else{
  console.log('Notog`ri')
}




let input = prompt('Parol kritin')

 if((input.includes('@') || input.includes('#') || input.includes('$')) && input.length>=6) {
  document.write('correct')
}

else if (input.length >= 4 && input.length <=12){

  document.write('Tog`ri')
}
else{
 document.write('Notog`ri')
}