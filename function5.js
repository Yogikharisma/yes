function tambah() {
    console.log(arguments);
    var hasil = 0;
    for ( var i = 0; i < arguments.length; i++ ) {
        hasil += arguments[i];
    }
    return hasil;
}

// tabel penyelesaian looping
//  i = 0
// 0 kurang dari argumen length (3) 
// hasil = 0 + 1 (argumen i = 0 berarti argumen index ke 0 = 1) berarti 0 + 1 hasil = 1
// hasil = 1
// i = 1
// 1 kurang dari argumen length (3) hasil = 3
// i = 2
// hasil jadi 6

var coba = tambah(1,2,3,4);
console.log(coba);
