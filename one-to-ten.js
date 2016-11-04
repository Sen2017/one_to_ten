//hero
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

		if (gender == 'Female'){
			pronoun = 'her';
		}else{
			pronoun = 'they';
		}

	//conditional to set age

		if (age >= 18){
			xp = 'enlists in Starfleet';
			rank = 'Cadet';
		}

		if (age > 21 && age < 40){
			xp = 'begins his five year mission';
			rank = 'Captain';
		}

		if (age > 40){
			xp = 'has boldy gone where no one has gone before'
			rank = 'Admiral';
		}

	//statements 

	console.log(rank + ' ' + hero + ' ' + xp + ' ' + 'aboard' + ' ' + pronoun + ' ' + 'ship' + ship)

	}

//animal
	var count;
	var animal = 'husky';

	function animalHouse(a,b){
		count = (a + b)
		console.log(count)
	}

	animalHouse();

	if (count > 2){
		console.log('We have too many ' + animal +'s')
	}else{
		console.log('Welcome to the club')
	}


//avengers
	var hero = 'Black Widow';

	function avengersAssemble(a){
		if (a == 'Ironman'){
			console.log('Tony Stark: How does Fury see these? *covers one eye*');
		}
		if (a == 'Captain America'){
			console.log('Steve Rogers: Seriously?');
		}
		if (a == 'Black Widow')
			console.log('Agent Romanov: Hello? What? I am in the middle of an interrogation and this guy is giving me everything...')
	}else{
		console.log('Director Fury: Sorreh, you ah NOT needed fo THIS mission.')
	}

	avengersAssemble(hero);

//lights out