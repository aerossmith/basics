//Бросок кубиков

var random = function(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var dice1 = 6;
var dice2 = 6;
var count = 0;

while (dice1 != 1 || dice2 != 1){	//Оператор (||) "или" используется как "и".
    dice1 = random(1, 6);
	dice2 = random(1, 6);
	count++;
}

document.write ("Первый кубик " + dice1 + "<br />" + "Второй кубик " + dice2);
document.write ("<br />" + count)

document.write ("<br />" + "<hr />") /*

var cost = parseInt(prompt("Введите стоимость арбуза"));
var num = parseInt(prompt("Введите количество арбузов"));
var product = "арбуз";

for (i = 1; i < num; i++){
	var ending = "ов";
	if (num == 1){
	ending = "а";
	}
	
}
document.write ("Цена " + num + product + ending + " равна " + cost*num + " сум");

document.write ("<br />" + "<hr />") */

//Генератор паролей

var maxlength = 8;//parseInt(prompt ("Введите длину пароля", "1"));
var getPassword = function(maxlength){
	var alf = "qwertyuioplkjhgfdsazxcvbnm";
	
	var result = "";
	
	for (var i = 0; i < maxlength; i++){
			var position = random (0, (alf.length-1));
			switch (random (0,2)){
				case 0:
					result +=  random(0,9);
					break;
				case 1:
					result += alf.substr(position, 1).toUpperCase();
					break;
				case 2:
					result += alf.substr(position, 1);
					break;
			}
		}
	
	return result;

}
document.write(getPassword(maxlength));



/* var array = [];
array.push("Hello World");

document.write(array);
document.write("Hello World");

var Student = function(name, age){
	this.name = name;
	this.age = age;
}

var University = {
	students: [],
	subjects: [],
	
	getStudentsCount: function(){
		return University.students.length;
	},
	
	getSubjectsCount: function(){
		return University.subjects.length;
	}
}

University.students.push( new Student("Vasya", 20) ); */

//human.buy(magazine, ["Яблоко", 10, "Мандарин", 20]);

document.write ("<br />" + "<hr />")

//Магазин

var product = function (title, price, count) {  //Продукт
	this.title = title;	// Наименование
	this.price = price; // Цена
	this.count = count; // Общее количество данного продукта на складе
}

var human = function (name, cash, discount){ //Покупатель
	this.name = name;
	this.cash = cash;
	//this.bought = bought;	//Корзина, количество товаров по: "Цена" ["Количество"];
	this.discount = discount;
}
var submit = document.querySelector (".submit")
	submit.onclick = function() {
		/*console.log(findProductByName(document.querySelector ("#prod").value));
		console.log(findHumanByName(document.querySelector ("#h_name").value));*/
		store.buy(findHumanByName(document.querySelector ("#h_name").value),findProductByName(document.querySelector("#prod").value));
	}; 
	
var findProductByName = function(name){
	for(var i = 0, length = store.products.length; i < length; i++){
		var product = store.products[i];
		if(product.title == name){
			return product;
		}
	}
	return null;
}

var findHumanByName = function(name){
	
	for(var i = 0, length = store.customers.length; i < length; i++){
		var human = store.customers[i];
		if(human.name == name){
			return human;
		}
	}
	return null;
}

	
var store = {
	products: [],
	customers: [],
	cashbox : 0,
	
	buy: function (human, product){
	
	var not = document.querySelector(".not");
	var name = document.querySelector(".cust_name");
	var ostatki = document.querySelector(".ostatki");
	var humancash = document.querySelector(".humancash");
	var boughtcount = document.querySelector(".boughtcount");
	var cashbox = document.querySelector(".cashbox");
	var h_payed = document.querySelector(".payed");
	var ostatokdeneg = document.querySelector(".ostatokdeneg");
	
	var buck = document.querySelector ("#buck");
		var bucket = buck.value;//parseInt(prompt("Желаемое количество товара"),"...");
	var h_cash = document.querySelector ("#h_cash");
			human.cash = h_cash.value;//parseInt(prompt("Количество наличных денег"),"...");
		
		if (human.cash >= (bucket*product.price) && product.count >= bucket) {
			product.count = product.count - bucket;
			var payed = human.cash - bucket*product.price;
			store.cashbox = store.cashbox + payed;
		}
		else {not.textContent = "Нельзя купить это!";}
		
		name.textContent = "Имя покупателя "+human.name;	
		ostatki.textContent = "Остатки на складе " + product.count;
		humancash.textContent = "Наличка "+human.cash;
		boughtcount.textContent = "Количество купленного товара "+bucket;	
		cashbox.textContent = "Касса "+store.cashbox;
		h_payed.textContent = "Куплено на сумму "+payed;
		ostatokdeneg.textContent = "Осталось у покупателя " + (human.cash-payed); 
		}
	}


store.products.push ( new product("Сыр",    20,	1000), 
					  new product("Молоко", 10,	100), 
					  new product("Творог", 15,	100)
					  );

store.customers.push ( new human ("Алексей", human.cash, 0),
					   new human ("Иван", 	 human.cash, 0),
					   new human ("Оля", 	 human.cash, 0)
					   );
//store.buy(store.customers[0], store.products[0]);
					   