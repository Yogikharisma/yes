var s = "";
for ( var i = 0; i < 20; i++ ) {
    for ( var j = 0; j < 10; j++ ) {
        s = s + "*";
    }
    s = s + "\n";
   
}
    console.log(s);
    // console.log(s);
// s = 0
// masuk loop
// s = "" + '*' = '*'
// s = '*' + '*' = '**'
// s = '**' + '*' = '***'
// s = '*** + '*' = '****
// s = '****' + '*' = '*****'


// nilai awal || benar atau salah || output
// 0 < 5      || benar            || karna didalam pengulangan ada fungsi s = s + "*"  jadi isinya * 
// 1 < 5      || benar            || karna didalam pengulangan ada fungsi s = s + "*"  jadi isinya **
// 2 < 5      || benar            || karna didalam pengulangan ada fungsi s = s + "*"  jadi isinya ***
// 3 < 5      || benar            || karna didalam pengulangan ada fungsi s = s + "*"  jadi isinya ****
// 4 < 5      || benar            || karna didalam pengulangan ada fungsi s = s + "*"  jadi isinya *****

// karna disitu ada fungsi consol.log(s) ( maka akan di outpun kan satu persatu)