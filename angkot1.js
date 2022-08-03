
// while yang dihentikan oleh program kita sendiri (dengan nama console lognya sesuai namanya)
// var nilaiAwal = 1;
// while( nilaiAwal <= 10 ) {
//     console.log('angkot no 1 beroprasi dengan baik ');
//     nilaiAwal++;
// }


// while dan for di javascript (untuk 2 blok) untuk kondisi tetapi menggunakan 2 looping
// var jmlAngkot = 10;
// var angkotBeroprasi = 6;
// var noAngkot = 1;
// while ( noAngkot <= angkotBeroprasi ) {
//     console.log("angkot no " + noAngkot + " beroprasi dengan baik")
// noAngkot++
// }

// for ( noAngkot = angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++ ) {
//     console.log("angkot ke "+ noAngkot +" tidak beroprasi dengan baik")
// }

// looping untuk menampilan console.log poenkondisian (for) untuk 1 2 3 4 5 6 (beroprasi) 8 10 (lembur) 7 9 (tidak beroprasi)
// var jmlAngkot = 10;
// var angkotBeroprasi = 6;

// for (  var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++  ) {
//     if ( noAngkot <= 6) {
//         console.log(' angkot no ' + noAngkot + ' sedang beroprasi')
//     } else if ( noAngkot === 8 || noAngkot === 10) {
//         console.log(' angkot no ' + noAngkot + ' sedang lembur ')
//     } else {
//         console.log(' angkot no ' + noAngkot + ' tidak beroprasi ' )
//     }
// }

// user memasukan angka ke dan akan diperlihatkan angka tersebut ganjul atau genap
// var angka = prompt('masukan angka yang ingin anda masukan');
// if ( angka % 2 === 0 ) {
//     alert('angka ' + angka + ' adalah angka genap')
// } else if ( angka % 2 === 1 ) {
//     alert('angka ' + angka + ' adalah angka ganjil')
// } else {
//     alert('yang bisa dimasukan hanyalah angka')
// }


// looping untuk menampilan console.log poenkondisian (for) untuk 1 2 3 4 6 (beroprasi) 5 8 10 (lembur) 7 9 (tidak beroprasi)
// var jmlAngkot = 10;
// var angkotBeroprasi = 6;

// for ( noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
//     if ( noAngkot <= 6 && noAngkot !== 5 ) {
//         console.log('angkot ' + noAngkot + ' beroprasi dengan baik')
//     } else if ( noAngkot === 8 || noAngkot === 10 || noAngkot === 5  ) {
//         console.log('angkot ' + noAngkot + ' sedang lembur')
//     } else {
//         console.log('angkot ' + noAngkot + ' tidak beroprasi')
//     }
// }

// pengkondisian switch pada javascript

// var angka = prompt('masukkan angka');

// switch ( angka ) {
//     case '1' :
//         alert('angka yang anda masukan adalah angka 1');
//         break;
//     case '2' :
//         alert('angka yang adna masukan adalah angka 2');
//         break;
//     default :
//         alert('angka yang anda masukan tidak terbaca');
//         break;2
// }   

var item = prompt('masukan nama makanan / minuman : \n (cth : nasi,daging,susu,hamburger,softdrink) ');

switch ( item ) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('makanan / minuman SEHAT!')
        break;
    case 'hamburger' :
    case 'softdrink' :
        alert('makanan / minuman TIDAK SEHAT')
        break;
    default :
        alert('makanan / minuman tidak terdaftar!')
        break;
}  
