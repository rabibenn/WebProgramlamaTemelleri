let sayilar = [1, 2, 5, 76, 13, 4763, 324];

sayilar.pop(); //Sonda yazanı siler.
sayilar.push(1723); //Sona ekler.
sayilar.shift(); //Başta yazanı siler.
sayilar.unshift("rabi"); //Başa ekler.
sayilar.sort(); //Küçükten büyüğe sıralar.
console.log(sayilar);

// function ekranaadimiyaz(){
//     alert("ben rabii");
// }

// let kullaniciadi;
// kullaniciadi = "rabibenn";
// ekranaadimiyaz();


// function bugun(){
//     switch(new Date().getDay()) {
//         case 0:
//             console.log("Pazar");
//             break;
//         case 1:
//             console.log("Pazartesi");
//             break;
//         case 2:
//             console.log("Salı");
//             break;
//         case 3:
//             console.log("Çarşamba");   
//             break;
//         case 4:
//             console.log("Perşembe");
//             break;
//         case 5:
//             console.log("Cuma");
//             break;
//         case 6:
//             console.log("Cumartesi");   
//             break;
//     }
// }

//bugun();


// function karesinial(sayi, bolen){
//     return sayi/bolen;
// }

// karesinial(52,4);
// console.log(karesinial(25,5)**6)


let sehir = "Washington"
function toCelcius(fahrenheit){
    return (fahrenheit - 32)*5/9;
}

// let text = `Hava Sıcaklığının ${sehir}'da bugünki değeri ${toCelcius(101)}'dir.`;
// alert(text);

let text = `Hava Sıcaklığının ${sehir}'da bugünki değeri ${Math.round(toCelcius(101))}'dir.`;
alert(text);