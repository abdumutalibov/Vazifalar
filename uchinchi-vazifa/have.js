// let a = 'A'
// let b = 'BCA'
// let a1 = a.split('').sort();
// let b1 = b.split('').sort();
// function test(){
// for(let i=0; i<a1.length; i++){
//   for(let j=0; i<b1.length; j++){
//     if(a1[i]===b1[i]) return true;
//     else return false;
    
//   }
// }
// }
// console.log(test())

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
// console.log(test())


let str1 = "ABC";
let str2 = "ABV";
        console.log(test(str1, str2));


  let  as =str1
  let  bs = str2
        let a = "";
        let b = "";
        for (let i = 0; i < as.length(); i++) {
            for (let j = 0; j < bs.length(); j++) {
                if (Objects.equals(i, j)) {
                    a += as.charAt(i);
                    b += bs.charAt(j);
                }
            }
        }
        if (a.equals(b)) {
            return true;
        } else
            return false;
    //         String str1 = "ABC";
    //         String str2 = "ABV";
    //         System.out.println(test(str1, str2));
    
    
    // private static boolean test(String as, String bs) {
    //         String a = "";
    //         String b = "";
    //         for (int i = 0; i < as.length(); i++) {
    //             for (int j = 0; j < bs.length(); j++) {
    //                 if (Objects.equals(i, j)) {
    //                     a += as.charAt(i);
    //                     b += bs.charAt(j);
    //                 }
    //             }
    //         }
    //         if (a.equals(b)) {
    //             return true;
    //         } else
    //             return false;
    //     }




    
