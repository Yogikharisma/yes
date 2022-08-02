// function tampilAngka(n) {
//     if ( n === 0 ) {
//         return;
//     }

//     console.log(n)
//     tampilAngka(n-1);
// }

// tampilAngka(10);


// looping faktorial
function faktorial(n) {
    var hasil = 1;
    for(  var i = n; i > 0; i--  ) {
        hasil = hasil * i;
    }
    return hasil;
}
console.log(faktorial(3));




// rekursif faktorial
// function faktorial(n) {
//     if ( n === 0 ) return 1;
//     return n * faktorial(n-1);
// }

// console.log(faktorial(5));