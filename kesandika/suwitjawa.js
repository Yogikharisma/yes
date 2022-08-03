var tanya = true;
while ( tanya ) {




    // menentukan pilihan player
    var p = prompt("masukan pilihan anda: ( gajah, semut, orang)! ");

    // menentukan pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if ( comp < 0.34 ) {
        comp = "gajah";
    } else if ( comp >= 0.34 && comp < 0.66 ) {
        comp = "orang";
    } else {
        comp = "semut";
    }


    var hasil = '';
    if ( p == comp ) {
        alert('kamu seri dengan computer')
    } else if ( p == 'gajah' ) {
        // if ( comp == 'orang' ) {
        //     hasil = 'menang!';
        // } else {
        //     hasil = 'kalah!';
        // }
        hasil = ( comp == 'orang' ) ? 'menang' : 'kalah';
    } else if ( p == 'orang' ) {
        hasil = ( comp == 'gajah' ) ? 'kalah' : 'menang'; 
    } else if ( p == 'semut' ) {
        hasil = ( comp == 'orang' ) ? 'kalah' : 'menang';
    } else {
        hasil = 'memasukan pilihan yang salah!';
    }

    // tampilkan hasilnya

    alert('kamu memilih : ' + p + ' dan komputer memilih : ' + comp + ' maka kamu ' + hasil + ' ')


    tanya = confirm('lagi?');
}


alert('terimaksih sudah bermain!');