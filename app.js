
function app(people){
	let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    searchByName(people);
    break;
    case 'no':
    searchByTraits(people);
    break;
   default:
    alert("You entered an invalid search type! Please try again.");
    app(people);
    break;
  }
}

function searchByTraits(people) {
  let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation', 'multiple traits'.");
  let filteredPeople;

  switch(userSearchChoice) {
    case "height":
      let userInputHeight = prompt("What is the person's height in inches?");
      filteredPeople = searchByHeight(people, userInputHeight);
      break;

    case "weight":
      let userInputWeight = prompt("How much does the person weigh?");
      filteredPeople = searchByWeight(people, userInputWeight);
      break;

    case "eye color":
    let userInputEyeColor = prompt("What is the person's eye color?");
      filteredPeople = searchByEyeColor(people, userInputEyeColor);
      break;

    case "gender":
      filteredPeople = searchByGender(people);
      break;

    case "age":
      let userInputAge = prompt("What is the person's age?");
      filteredPeople = searchByAge(people, userInputAge);
      break;

    case "occupation":
      userInputOccupation = prompt("What is the person's occupation?");
      filteredPeople = searchByOccupation(people, userInputOccupation);
      break;

    case "multiple traits":

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
          filteredPeople = searchByOccupation(filteredPeople, userInputOccupation);
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

  if (filteredPeople.length > 1) {
   	alert("Multiple people found. A list of matching people will display on the next screen.")
   	displayPeople(filteredPeople);
   	let userInput = prompt("Would you like to search by name or trait? Please enter 'name' or 'trait'.");
   		if (userInput == 'name'){
   			searchByName(people);
   		}
   		else if (userInput == 'trait'){
   			searchByTraits(people);
   		}
   		else {
   			alert("You entered an invalid search type! Please try again.");
   			app(people);
   		}
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
    	if(el.gender === userInputGender) {
     	return true;
    	}
  });

  return newArray;
}

function searchByAge(people, userInput) {
  let newArray = people.filter(function (el) {
    if(getAge(el) == userInput) {
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

function mainMenu(person, people){

  if(!person){
    alert("Could not find that individual.");
    return app(people);
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
    app(people);
    break;
    case "quit":
    return; 
    default:
    return mainMenu(person, people);
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

  mainMenu(person, people);
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

function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person, people){
  let personInfo = "First Name: " + person.firstName + "\n";
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

  alert(personInfo); 

  mainMenu(person, people);
}

function listFullNames(people){

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

  mainMenu(person, people);
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

function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));

  return response;
}

function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

function chars(input){
  return true;
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