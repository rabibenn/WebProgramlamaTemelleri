// 1. Yöntem callback fonksiyonları

let sayilar = [1, 23, 4, 654, 342, 45];

function karesi(sayi){
    console.log(sayi*sayi);
}

sayilar.forEach(karesi);
console.log("");

//2. Yöntem anonymous(isimsiz) fonksiyonlar

sayilar.forEach(function(sayi){
    console.log(sayi*sayi);
})
console.log("");


// 1. Yöntem arrow fonksiyonlar

sayilar.forEach(r => console.log(r*r));