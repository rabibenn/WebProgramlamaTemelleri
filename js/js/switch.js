// let sayi = 5; 

// switch(sayi){
//     case 1:
//         console.log("Girilen sayı 1'dir.");
//         break;
//     case 2:
//         console.log("Girilen sayı 2'dir.");
//         break;
//     case 3:
//         console.log("Girilen sayı 3'tür.");
//         break;
//     case 4:
//         console.log("Girilen sayı 4'tür.");   
//         break;
//     default:
//         console.log("Girilen sayı 4 sayının dışındadır.");
   
// }



let gun = new Date().getDay();
console.log(gun); 

switch(gun){
    case 0:
        console.log("Pazar");
        break;
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");   
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");   
        break;

    default:
        console.log("Böyle bir gün yok.");
   
}