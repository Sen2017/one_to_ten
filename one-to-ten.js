//hero [[BROKEN]]
	var hero = 'James T. Kirk';
	var gender = 'Male';
	var age = 26;
	var ship = 'the U.S.S. Enterprise';
	var pronoun
	var xp
	var rank
	//conditional to set pronoun

		if (gender == 'Male'){
			pronoun = 'his';
		}

		else if (gender == 'Female'){
			pronoun = 'her';
		}else{
			pronoun = 'they';
		}

	//conditional to set age

		if (age >= 18){
			xp = 'enlists in Starfleet';
			rank = 'Cadet';
		}

		else if (age > 21 && age < 40){
			xp = 'begins his five year mission';
			rank = 'Captain';
		}

		else if (age > 40){
			xp = 'has boldy gone where no one has gone before'
			rank = 'Admiral';
		}

	//statements 

	console.log(rank + ' ' + hero + ' ' + xp + ' ' + 'aboard' + ' ' + pronoun + ' ' + 'ship' + ship)

	}

//1 Fish 2 Fish [[BROKEN]]
	var count;
	var animal = 'husky';

	function animalHouse(a,b){
		count = (a + b);
		console.log(count);
	}

	animalHouse();

	if (count > 2){
		console.log('We have too many ' + animal +'s');
	}else{
		console.log('Welcome to the club');
	}

//avengers [[BROKEN]]
	var hero = 'Black Widow';

	function avengersAssemble(hero){
		if (hero == 'Ironman'){
			console.log('Tony Stark: How does Fury see these? *covers one eye*');
		}
		else if (hero == 'Captain America'){
			console.log('Steve Rogers: Seriously?');
		}
		else if (hero == 'Black Widow')
			console.log('Agent Romanov: Hello? What? I am in the middle of an interrogation and this guy is giving me everything...');
	}else{
		console.log('Director Fury: Sorreh, you ah NOT needed fo THIS mission.');
	}

	avengersAssemble(hero);

//lights out
	var lights = true;

	if (lights === true){
		console.log('And then there was light');
	}else{
		console.log('Lights out');
	}

//Vroom vroom
	var carType = 'Tesla';
	var color = 'red';
	var num = 7;

	if (carType == 'Toyota' && color == 'blue'){
		console.log('We have a blue Toyota');
	}
	else if (carType == 'Lamborghini' && color == 'red'){
		console.log('We have a red Lamborghini');
	}
	else if (carType == 'Tesla' && color == 'black'){
		console.log('We have a black Tesla');
	}else{
		console.log("We don't have any blue Toyotas in stock");
	}
