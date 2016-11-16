//hero
	var hero = "powerman ";
	var gender = "male ";
	var age = 33;
	var weapon = "battery";
	var pronoun;
	var xp;

	//pronoun set
	if (gender == "male "){
	  pronoun = "his ";
	}else{
	  pronoun = "her ";
	}

	//age
	if (age <= 18){
	  xp = "is just beginning "
	}
	else if (age > 21 && age < 40){
	  xp = "has seen a few battles "
	}
	else if (age > 40){
	  xp = "has lived through many epic battles "
	}

	console.log(hero + "is our lovable hero," + " who " + xp + "with " + pronoun + "trusty " + weapon + ".")

//1 Fish 2 Fish
	var count;
	var animal = "huskie";

	function animalHouse(a,b){
	  count = a+b;
	  console.log(count)
	}

	animalHouse(1,2)

	if (count > 2){
	  console.log("We have too many" + " " + animal + "s!");
	}else{
	  console.log("Welcome to the club.")
	}

//avengers
	var hero = "Vision";

	function avengersAssemble(avenger){
	  if (avenger == "Ironman"){
	      console.log("Kiss my shiny metal a$$!");
	  }else if (avenger == "Captain America"){
	      console.log("I am Captain America.");
	  }else if (avenger == "Black Widow"){
	      console.log("I am Black Widow");
	  }else if (avenger == "Vision"){
	      console.log("You can just pass right through me :(");
	  }else{
	    console.log("You are not needed for this mission");
	  }
	}

	avengersAssemble(hero)

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
