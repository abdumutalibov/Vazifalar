// let str = "Pdp Academy";
// let n = 0;
// for (i = 0; i <= 10; i++) {
//   n++;
//   // console.log(str +' '+n);
//   // str=str.substr(0,1)
//   str = str.substring(1, 2);
//   console.log(str + " " + n);
// }

let str = "pdp Academy";
        // let yigindisi = 0;
        let d = 0;
        let p = 0;
        for ( i = 0; i < str.length; i++) {
                if (str.charAt(i) == 'd') {
                    d++;
                    console.log("d ni indeksi: " + (i + 1));
                } else if (str.charAt(i) == 'p') {
                    p++;
                    console.log("p ni indeksi: " + (i + 1));
                }
        }
        console.log("text uzunligi: "+ str.length);
        
        console.log("p: " , p);
        console.log("d: " , d);
////////////////////////////////////
//
       
           console.log('O`rta arifmetigi:',(p+d)/2 );
           console.log('O`rta geometrik:',(p+d)**0.5);
           console.log('Yig`indisi:' ,2+2)

