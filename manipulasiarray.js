// manipulasi array


// menambah array
// var array = []
// array = ['yogi', 'kharisma', 1, true, 'putra'];
// array[0] = "yogu";
// console.log(array);

// menghapus isi array
// var array = []
// array = ['yogi', 'kharisma', 1, true, 'putra'];
// array[0] = undefined;
// console.log(array);

// menampilkan isi array
// var array = ['yogi', 'dwi', 'eki', 'ari', 'denok'];
// for ( var i = 0; i < array.length; i++  ) {
//     console.log('mahasiswa ke-' + (i+1) + ' : ' +  array[i]);
// }

// method pada array (join)
// var array = ['Yogi', 'kharisma', 'putra']
// console.log(array.join('-'));


// method pada array (push, pop, shift, join)
// var array = ['Yogi', 'kharisma', 'putra']
// console.log(array.join('>'));

// push (menambah dibarisan akhir) & pop
var array = ['Yogi', 'kharisma', 'putra']
// array.push('putri', 'indonesia');



// pop (mengeluarkan yang paling akhir)
// array.pop();
// console.log(array.join('-'));

// unshift (menambah pertama) & shift
// array.unshift('yoga');
// console.log(array.join('-'));

// shift (menghapus pertama)
// array.shift();
// console.log(array.join('-'));

// splice (menambah ditengah)
// arti splice dibawah (mulai dari index 0, dengan menghapus 2 elemen pertama dari kiri dan membuat kata yoga yang dimulai dari index 0)
array.splice(0, 2,'yoga'); 
console.log(array.join('-'));
