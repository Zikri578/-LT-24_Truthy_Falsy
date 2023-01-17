# -LT-24_Truthy_Falsy

Truthy dan falsy adalah konsep dalam JavaScript yang menentukan apakah suatu ekspresi atau nilai dianggap benar atau salah dalam konteks boolean. Suatu nilai dianggap `"truthy"` jika dianggap benar atau true dalam konteks boolean, sedangkan suatu nilai dianggap `"falsy"` jika dianggap salah atau false dalam konteks boolean. Beberapa nilai yang dianggap `"falsy"` di JavaScript adalah:

* `false`
* `0`
* `"" atau string kosong`
* `null`
* `undefined`
* `NaN`

Semua nilai lainnya dianggap `"truthy"`. Sebagai contoh, `"hello"` dianggap `truthy`, `1` dianggap `truthy`, `{}` dianggap `truthy`, dan `[]` dianggap `truthy`.

Truthy dan falsy sering digunakan dalam pernyataan if-else dan pernyataan logika lainnya untuk mengevaluasi apakah suatu ekspresi benar atau salah. Sebagai contoh, jika Anda ingin mengecek apakah suatu variabel `x` tidak kosong, Anda dapat menulis pernyataan seperti ini:

    if(x){
      console.log("x tidak kosong");
    } else {
      console.log("x kosong");
    }

karena jika x dianggap truthy maka akan masuk ke dalam if statement dan jika x dianggap falsy maka akan masuk ke dalam else statement.

Sebagai catatan, beberapa kondisi yang dianggap truthy atau falsy dapat terlihat tidak intuitif. Sebagai contoh, angka 0 dianggap falsy, walaupun 0 adalah angka yang valid dan digunakan secara luas dalam aplikasi. Oleh karena itu, sebaiknya menghindari penggunaan truthy dan falsy dalam kondisi yang rumit dan menggunakan operator perbandingan yang lebih sesuai seperti `==` atau `===`.

Selain itu, truthy dan falsy juga digunakan dalam beberapa fungsi JavaScript yang mengharapkan boolean sebagai argumennya. Sebagai contoh, fungsi `Boolean()` akan mengembalikan boolean dari suatu nilai yang diberikan sebagai argumennya. Jika argumen yang diberikan adalah `"falsy"`, maka fungsi akan mengembalikan `false`, jika argumen yang diberikan adalah "truthy", maka fungsi akan mengembalikan `true`. Contoh:

    console.log(Boolean(0));   // false
    console.log(Boolean(""));  // false
    console.log(Boolean(1));   // true
    console.log(Boolean({}));  // true

Beberapa operator logika lainnya seperti `&&` dan `||` juga mengevaluasi argumennya menjadi boolean. `&&` akan mengembalikan argumen `"truthy"` pertama yang ditemukan, sedangkan `||` akan mengembalikan argumen `"falsy"` pertama yang ditemukan. Ini berguna ketika Anda ingin menentukan default value dari suatu variabel. Contoh:

    let name = user.name || "John Doe";

`name` akan diisi dengan `user.name` jika `user.name` dianggap `truthy`, atau `"John Doe"` jika user.name dianggap `falsy.

Secara keseluruhan, truthy dan falsy adalah konsep yang penting dalam JavaScript yang digunakan dalam berbagai konteks untuk mengevaluasi kebenaran suatu ekspresi atau nilai. Namun, sebaiknya menghindari penggunaan truthy dan falsy dalam kondisi yang rumit dan menggunakan operator perbandingan yang lebih sesuai seperti == atau === untuk menghindari kesalahan yang tidak sengaja.

Selain itu, truthy dan falsy juga digunakan dalam operasi konversi tipe data. Sebagai contoh, jika Anda menambahkan string `"1"` dengan number 2, hasilnya akan menjadi `"12"` karena JavaScript secara otomatis mengonversi string `"1"` menjadi number 1 sebelum melakukan operasi penjumlahan. Hal ini disebut sebagai `"type coercion"`. Contoh:

    console.log("1" + 2); // "12"

Truthy dan falsy juga digunakan dalam operasi konversi tipe data yang lain seperti pada pernyataan if, while, dan pernyataan logika lainnya. Sebagai contoh, jika Anda menulis pernyataan if seperti ini:

    if (name) {
      console.log("Name is not empty");
    }

Pernyataan if di atas akan di eksekusi jika `name` dianggap truthy, jika `name` dianggap falsy maka pernyataan if tidak akan di eksekusi.

Truthy dan falsy juga digunakan dalam fungsi yang mengambil boolean sebagai argumen, seperti fungsi `Boolean()` dan `if()` yang mengevaluasi argumennya dan mengembalikan boolean sesuai dengan kondisi truthy atau falsy dari argumen yang diberikan.

Secara keseluruhan, truthy dan falsy adalah konsep yang penting dalam JavaScript yang digunakan dalam berbagai konteks untuk mengevaluasi kebenaran suatu ekspresi atau nilai dan untuk konversi tipe data. Namun, sebaiknya menghindari penggunaan truthy dan falsy dalam kondisi yang rumit dan menggunakan operator perbandingan yang lebih sesuai seperti == atau === untuk menghindari kesalahan yang tidak sengaja.

Selain itu, truthy dan falsy juga digunakan dalam beberapa fungsi JavaScript yang memerlukan boolean sebagai argumen. Sebagai contoh, fungsi `if()` akan mengevaluasi argumennya dan mengeksekusi pernyataan dalam kurung kurawal jika argumen dianggap truthy, atau mengeksekusi pernyataan dalam kurung kurawal else jika argumen dianggap falsy.

    if(name){
      console.log(`Hello, ${name}`)
    }else{
      console.log("Name is not defined")
    }

Truthy dan falsy juga digunakan dalam beberapa fungsi JavaScript yang mengharapkan boolean sebagai argumen, seperti fungsi `assert()` yang digunakan untuk melakukan validasi pada argumen yang diterima dan melempar error jika argumen dianggap falsy.

    function divide(a,b) {
      assert(b!=0, "Cannot divide by zero");
      return a/b;
    }

Secara keseluruhan, truthy dan falsy adalah konsep yang penting dalam JavaScript yang digunakan dalam berbagai konteks untuk mengevaluasi kebenaran suatu ekspresi atau nilai dan untuk konversi tipe data. Namun, sebaiknya menghindari penggunaan truthy dan falsy dalam kondisi yang rumit dan menggunakan operator perbandingan yang lebih sesuai seperti == atau === untuk menghindari kesalahan yang tidak sengaja.

Jadi, truthy dan falsy digunakan dalam berbagai konteks seperti dalam pernyataan if-else, operator logika, fungsi, dan lainnya untuk mengevaluasi kebenaran suatu ekspresi atau nilai. Namun, sebaiknya menghindari penggunaan truthy dan falsy dalam kondisi yang rumit dan menggunakan operator perbandingan yang lebih sesuai seperti == atau === untuk menghindari kesalahan yang tidak sengaja.
