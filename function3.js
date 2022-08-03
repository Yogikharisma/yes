// function tambah(a,b) {
//     return a + b;

// }

// var a = parseInt(prompt('masukan nilai 1'));
// var b = parseInt(prompt('masukan nilai 2'));
// var hasil = tambah(a,b);
// alert(hasil);


// kali dan tambah

function tambah(a,b) {
    return a + b;
}

function kali(a,b) {
    return a * b;
}


var hasil = kali(tambah(2,1), tambah(2,1));
alert(hasil);