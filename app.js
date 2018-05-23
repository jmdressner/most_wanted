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
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation', 'multiple traits'.");
  let filteredPeople;

  switch(userSearchChoice) {
    case "height":
      let userInputHeight = prompt("What is the person's height in inches?");
      filteredPeople = searchByHeight(people, userInput);
      break;
    case "weight":
      let userInputWeight = prompt("How much does the person weigh?");
      filteredPeople = searchByWeight(people, userInputWeight);
      break;
    // so on and so forth
    case "eye color":
    let userInputEyeColor = prompt("What is the person's eye color?")
      filteredPeople = searchByEyeColor(people, userInputEyeColor);
      break;

    case "gender":
      filteredPeople = searchByGender(people);
      break;

    case "age":
      let userInputAge = prompt("What is the person's age?")
      filteredPeople = searchByAge(people, userInputAge);
      break;
    case "occupation":
      userInputOccupation = prompt("What is the person's occupation?")
      filteredPeople = searchByOccupation(people, userInputOccupation);
      break;
    case "multiple traits":
      // 5, 120, blue, male, 65, farmer
      // Parse by ','
      // 0,0,0,farmer
      let userInput = prompt("Please enter the traits as a list seperated by commas and enter a '0' for any values not used. (age, height, weight, occupation, eye color).");
      let inputArray = userInput.split(",");
      if(inputArray.length != 5) {
        alert("Please enter five valid traits. If you have no value, please enter '0' in it's place.");
        searchByTraits(people);
      }
      else {
        let userInputAge = inputArray[0].trim();
        let userInputHeight = inputArray[1].trim();
        let userInputWeight = inputArray[2].trim();
        let userInputOccupation = inputArray[3].trim();
        let userInputEyeColor = inputArray[4].trim();
        filteredPeople = people;

        if(userInputAge != 0){
          filteredPeople = searchByAge(filteredPeople, userInputAge);
        }
        
        if(userInputHeight != 0){
          filteredPeople = searchByHeight(filteredPeople, userInputHeight);
        }
        
        if(userInputWeight != 0){  
          filteredPeople = searchByWeight(filteredPeople, userInputWeight);
        }

        if(userInputOccupation != 0) {
          filteredPeople = searchByOccuptaion(filteredPeople, userInputOccupation);
        }

        if(userInputEyeColor != 0) {
          filteredPeople = searchByEyeColor(filteredPeople, userInputEyeColor);
        }
      }
      break;

    default:
      alert("You entered an invalid search type! Please try again.");
      searchByTraits(people);
      break;
  }  

  let foundPerson = filteredPeople[0];

  mainMenu(foundPerson, people);
}

function searchByWeight(people, userInput) {
  let newArray = people.filter(function (el) {
    if(el.weight == userInput) {
      return true;
    }
  });

  return newArray;
}

function searchByHeight(people, userInput) {
  let newArray = people.filter(function (el) {
    if(el.height == userInput) {
      return true;
    }
  });

  return newArray;
}

function searchByEyeColor(people, userInput) {
  let newArray = people.filter(function (el) {
    if(el.eyeColor == userInput) {
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

function searchByAge(people, userInput) {
  let newArray = people.filter(function (el) {
    if(el.age == userInput) {
      return true;
    }
  });

  return newArray;
}

function searchByOccupation(people, userInput) {
  let newArray = people.filter(function (el) {
    if(el.occupation == userInput) {
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
    usersResponse = displayPerson(person, people);
    break;
    case "family":
    usersResponse = displayFamily(person, people);
    break;
    case "descendants":
    usersResponse = displayDescendants(person, people);
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
  let foundParentsArray = searchForParents(person, people);
	let familyInfo = "Parents: " + listFullNames(foundParentsArray) + "\n";

  let foundSpouseArray = searchForSpouse(person, people);
	familyInfo += "Current Spouse: " + listFullNames(foundSpouseArray) + "\n";

  let foundSiblingsArray = searchForSiblings(person, people);
  familyInfo += "Siblings: " + listFullNames(foundSiblingsArray) + "\n";

	let foundChildrenArray = searchForChildren(person, people);
  familyInfo += "Child/Children: " + listFullNames(foundChildrenArray) + "\n";

  alert(familyInfo);
}

function searchForParents(person, people){
  let filteredParentsArray = people.filter(function(el) {
    for(i = 0; i < person.parents.length; i++) {
      if(el.id === person.parents[i]) {
        return true;
      }
    }
  });
  return filteredParentsArray;
}

function searchForSpouse(person, people){
  let foundSpouseArray = people.filter(function(el) {
    if(el.id === person.currentSpouse) {
      return true;
    }
  });
  return foundSpouseArray;
}

function searchForSiblings(person, people){
	let filteredSiblingsArray = people.filter(function(el){
		for(i = 0; i < person.parents.length; i++) {
      if(el.parents.includes(person.parents[i])){
        if(el.id !== person.id)
        {
          return true;
        }
		  }
    }
	});
	return filteredSiblingsArray;
}

function searchForChildren(person, people){
	let filteredChildrenArray = people.filter(function(el){
    if(el.parents.includes(person.id)) {
      return true;
    }
  });
  return filteredChildrenArray;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person, people){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender " + person.gender + "\n";
  personInfo += "Age: " + getAge(person) + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  let foundParentsArray = searchForParents(person, people);
  personInfo += "Parents: " + listFullNames(foundParentsArray) + "\n";
  let foundSpouseArray = searchForSpouse(person, people);
  personInfo += "Current Spouse: " + listFullNames(foundSpouseArray) + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo); 
}

function listFullNames(people){
  if(people.length == 0) {
    return "No Data Found";
  }

  let fullNameList = "";
  for(let i = 0; i < people.length; i++){
    fullNameList += people[i].firstName + " " + people[i].lastName + " ";
  }

  return fullNameList;
}

function displayDescendants(person, people) {
  let foundDescendantsArray = getDescendants(person, people);
  let descendantInfo = "Descendants: " + listFullNames(foundDescendantsArray) + "\n";
  alert(descendantInfo);
}

function getDescendants(person, people){
  let foundChildrenArray = searchForChildren(person, people);

  if(foundChildrenArray.length === 0) {
    return foundChildrenArray; 
  }

  let resultDescendantsArray = foundChildrenArray;
  for(let i = 0; i < foundChildrenArray.length; i++) {
    let foundDescendantsArray = getDescendants(foundChildrenArray[i], people);
    resultDescendantsArray = resultDescendantsArray.concat(foundDescendantsArray);
  }

  return resultDescendantsArray;
}

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

function getAge(person){
  let dob = new Date(person.dob);
  let currentDate = new Date();

  let age = currentDate.getYear() - dob.getYear();
  if(dob.getMonth() > currentDate.getMonth()) {
    age--;
  }

  if(dob.getMonth() == currentDate.getMonth()) {
    if(dob.getDate() > currentDate.getDate()) {
      age--;
    }
  }

  return age;
}