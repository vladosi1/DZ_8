// Задача 1

let userBirth = prompt("Введите ваш год рождения");
let city = prompt("Введите город в котором вы живете");
let favoriteSport = prompt("Напишите ваш любимиый вид спорта");


let age = new Date().getFullYear() - userBirth;

if (city === "Киев") {
	city = "Украины";
	alert(`Вы живете в столице ${city}!`);
 } else if (city === "Вашингтон") {
	city = "США";
	alert(`Вы живете в столице ${city}!`);
 } else if (city === "Лондон") {
	city = "Великобритании";
	alert(`Вы живете в столице ${city}!`);
 } else {
	alert(`Вы живете в городе ${city}.`);
 }


 alert(`Вам ${age} лет (года), и ваш любимый вид спорта - это ${favoriteSport}.`);
 

 // Задача 2


const selectedSport = prompt("Пожалуйста, выберете вид спорта. Например: Бокс, Футбол или Баскетбол");

if (selectedSport) {

  let champion;
  switch (selectedSport.toLowerCase()) {
    case "футбол":
      champion = "Криштиану Роналду";
      break;
    case "баскетбол":
      champion = "Майкл Джордан";
      break;
    case "бокс":
      champion = "Владимир Кличко";
      break;
    default:
      alert(`Извините, выбраный вами ${selectedSport} недоступен.`);
      break;
  }

  if (champion) {
    alert(`Отлично! Хочешь быть таким же крутым как ${champion}?`);
  }
} else {
  alert("Желаем вам найти свой вид спорта");
}

if (!userBirth || !city || !selectedSport) {
	alert("Нам очень жаль, что вы ввели не все данные😞. Может давайте заново?");
 }

