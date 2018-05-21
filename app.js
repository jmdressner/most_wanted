/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
	displayPeople(people);
	let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    // TODO: search by name
    searchByName(people);
    break;
    case 'no':
    searchByTraits(people);
    break;
   default:
    alert("You entered an invalid search type! Please try again.");
    app(people);//restart app
    break;
  }
}

function searchByTraits(people) {
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation'.");
  let filteredPeople;

  switch(userSearchChoice) {
    case "height":
      filteredPeople = searchByHeight(people);
      break;
    case "weight":
      filteredPeople = searchByWeight(people);
      break;
    // so on and so forth
    case "eye color":
      filteredPeople = searchByEyeColor(people);
      break;
    case "gender":
      filteredPeople = searchByGender(people);
     break;
    case "age":
      filteredPeople = searchByAge(people);
      break;
    case "occupation":
      filteredPeople = searchByOccupation(people);
      break;

    default:
      alert("You entered an invalid search type! Please try again.");
      searchByTraits(people);
      break;
  }  


  let foundPerson = filteredPeople[0];

  mainMenu(foundPerson, people);

}

function searchByWeight(people) {
  let userInputWeight = prompt("How much does the person weigh?");

  let newArray = people.filter(function (el) {
    if(el.weight == userInputWeight) {
     // for(i = 0; i < newArray.length; i++){
       // newArray.push(filteredPeople);
     // }
      return true;
    }
  });
}

function searchByHeight(people) {
  let userInputHeight = prompt("What is the person's height in inches?");

  let newArray = people.filter(function (el) {
    if(el.height == userInputHeight) {
      return true;
    }
  });

  return newArray;
}

function searchByEyeColor(people) {
  let userInputEyeColor = prompt("What is the person's eye color?");

  let newArray = people.filter(function (el) {
    if(el.eyeColor == userInputEyeColor) {
      return true;
    }
  });

  return newArray;
}

function searchByGender(people) {
  let userInputGender = prompt("What is the person's gender?");

  let newArray = people.filter(function (el) {
    if(el.gender == userInputGender) {
      return true;
    }
  });

  return newArray;
}

function searchByAge(people) {
  let userInputAge = prompt("What is the person's age?");

  let newArray = people.filter(function (el) {
    if(el.age == userInputAge) {
      return true;
    }
  });

  return newArray;
}

function searchByOccupation(people) {
  let userInputOccupation = prompt("What is the person's occupation?");

  let newArray = people.filter(function (el) {
    if(el.occupation == userInputOccupation) {
      return true;
    }
  });

  return newArray;
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
  let usersResponse;

  switch(displayOption){
    case "info":
    usersResponse = displayPerson(person);
    break;
    case "family":
    usersResponse = displayFamily(person, people);
    break;
    case "descendants":
    // TODO: get person's descendants
    usersResponse = displayDescendants(person);
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  
  var firstName = promptFor("What is the person's first name?", chars).toLowerCase();
  var lastName = promptFor("What is the person's last name?", chars).toLowerCase();
  let filteredPeople = people.filter(function(el){
    if(el.firstName.toLowerCase() === firstName && el.lastName.toLowerCase() === lastName){
    	return true;
    }
  });

  let foundPerson = filteredPeople[0];
  mainMenu(foundPerson, people);
}

function displayFamily(person, people) {
	let familyInfo = "Parents: " + person.parents + "\n";
  	familyInfo += "Current Spouse: " + person.currentSpouse + "\n";
  	familyInfo += "Siblings: " + searchForSiblings(person, people) + "\n";
  	familyInfo += "Child/Children: " + searchForChildren(person, people) + "\n";
  alert(familyInfo);
}


function searchForSiblings(person, people){
	let filteredSiblingsArray = people.filter(function(el){
		if (el.parents === person.parents){
			return true;
		}
	});
	return filteredSiblingsArray;

	// for (i = 0; i < people.length; i++){
	// 	console.log(people[i].parents);
	// 	if (people[i].parents === person.parents){
	// 		filteredSiblingsArray.push(people.parents);
	// 	}
	// }
	// return filteredSiblingsArray;

	//let foundSiblings = filteredSiblingsArray;
	//displayFamily(foundSiblings, people);
}

function searchForChildren(person, people){
	let filteredChildrensArray = [];
	for(i = 0; i < people.length; i++) {
		if (person.id === people[i].parents){
			filteredChildrensArray.push(people.id);
		}
		return filteredChildrensArray;
	}
	let foundChildren = filteredChildrensArray;
	displayFamily(foundChildren, people);
}



// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender " + person.gender + "\n";
  personInfo += "Age: " + person.age + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Parents: " + person.parents + "\n";
  personInfo += "Current Spouse" + person.currentSpouse + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function displayDecendants(person, people) {
// 	let nextPerson = people[i++]
// 	if (person.id !=== people.parents) {
// 		alert("This person does not have any descendants.");
// 	}

// }

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
