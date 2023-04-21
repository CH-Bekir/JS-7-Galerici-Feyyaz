let cars = ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota", "renault", "tesla", "volvo", "skoda", "nissan", "ferrari", "volkswagen", "alfa romeo", "mitsubishi"];

// 1) Icinde "o" harfi gecen arabalari ve bu arabalarin sayisini bulun.
let carsWithO = cars.filter(car => car.includes("o"));
console.log("1) Icinde 'o' harfi gecen arabalar: ", carsWithO);
console.log("Toplam araba sayisi: ", carsWithO.length);

// 2) Icinde iki defa "o" harfi gecen arabalarin sayisini bulun.
let carsWithTwoOs = cars.filter(car => (car.match(/o/g) || []).length === 2);
console.log("2) Icinde iki defa 'o' harfi gecen arabalar: ", carsWithTwoOs);
console.log("Toplam araba sayisi: ", carsWithTwoOs.length);

// 3) Araba isim uzunlugu 5'den kücük olan arabalari listeleyin.
let carsWithLengthLessThanFive = cars.filter(car => car.length < 5);
console.log("3) Araba isim uzunlugu 5'den kücük olan arabalar: ", carsWithLengthLessThanFive);

// 4) Ilk harfi "f" olan arabalarin son harfini x olarak degistirin.
let carsStartingWithF = cars.filter(car => car.charAt(0) === "f");
let modifiedCars = carsStartingWithF.map(car => car.substring(0, car.length-1) + "x");
console.log("4) Ilk harfi 'f' olan arabalar: ", modifiedCars);

// 5) Uzunlugu 3 ile 6 arasinda olan arabalardan isminin icinde "a" harfi olanlari, isimlerinin önüne "my favorite " gelecek sekilde degistirin ve html icerisinde listeleyin.
let myFavoriteCars = cars.filter(car => car.includes("a") && car.length >= 3 && car.length <= 6).map(car => "my favorite " + car);
let carList = "<ul>";
myFavoriteCars.forEach(car => {
  carList += "<li>" + car + "</li>";
});
carList += "</ul>";
document.body.innerHTML += carList;

// 6) Ismi icinde "o" ve "a" gecen arabalari bulunuz.
let carsWithOAndA = cars.filter(car => car.includes("o") && car.includes("a"));
console.log("6) Ismi icinde 'o' ve 'a' gecen arabalar: ", carsWithOAndA);

// 7) Ismi icinde "o" veya "i" gecen arabalari bulunuz.
let carsWithOOrI = cars.filter(car => car.includes("o") || car.includes("i"));
console.log("7) Ismi icinde 'o' veya 'i' gecen arabalar: ", carsWithOOrI);

// Feyyaz Bey'in Özel Notu
console.log();
