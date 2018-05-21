// You may modify this for testing purposes.
const data = [
	{
		"id": 272822514,
		"firstName": "Billy",
		"lastName": "Bob",
		"gender": "male",
		"dob": "1/18/1949",
		"height": 71,
		"weight": 175,
		"eyeColor": "brown",
		"occupation": "programmer",
		"parents": [],
		"currentSpouse": 401222887 //uma bob
	},
	{
		"id": 401222887,
		"firstName": "Uma",
		"lastName": "Bob",
		"gender": "female",
		"dob": "4/1/1947",
		"height": 65,
		"weight": 162,
		"eyeColor": "brown",
		"occupation": "assistant",
		"parents": [],
		"currentSpouse": 272822514 // billy bob
	},
	{
		"id": 409574486,
		"firstName": "Michael",
		"lastName": "Walkens",
		"gender": "male",
		"dob": "5/9/1951",
		"height": 76,
		"weight": 250,
		"eyeColor": "brown",
		"occupation": "landscaper",
		"parents": [],
		"currentSpouse": 260451248 // jon walkens
	},
	{
		"id": 260451248,
		"firstName": "Jon",
		"lastName": "Walkens",
		"gender": "male",
		"dob": "9/6/1945",
		"height": 62,
		"weight": 115,
		"eyeColor": "brown",
		"occupation": "assistant",
		"parents": [],
		"currentSpouse": 409574486 // michael walkens
	},
	{
		"id": 629807187,
		"firstName": "Jack",
		"lastName": "Pafoy",
		"gender": "male",
		"dob": "3/16/1938",
		"height": 70,
		"weight": 207,
		"eyeColor": "black",
		"occupation": "nurse",
		"parents": [],
		"currentSpouse": 464142841 // jen pafoy
	},
	{
		"id": 464142841,
		"firstName": "Jen",
		"lastName": "Pafoy",
		"gender": "female",
		"dob": "4/10/1940",
		"height": 72,
		"weight": 256,
		"eyeColor": "black",
		"occupation": "student",
		"parents": [],
		"currentSpouse": 629807187 // jack pafoy
	},
	{
		"id": 982411429,
		"firstName": "Mister",
		"lastName": "Potatoo",
		"gender": "male",
		"dob": "12/18/1952",
		"height": 66,
		"weight": 170,
		"eyeColor": "hazel",
		"occupation": "architect",
		"parents": [],
		"currentSpouse": 595767575 // missuz potatoo
	},
	{
		"id": 595767575,
		"firstName": "Missuz",
		"lastName": "Potatoo",
		"gender": "female",
		"dob": "10/28/1948",
		"height": 59,
		"weight": 137,
		"eyeColor": "blue",
		"occupation": "architect",
		"parents": [],
		"currentSpouse": 982411429  // mister potatoo
	},
	{
		"id": 693243224,
		"firstName": "Joy",
		"lastName": "Madden",
		"gender": "female",
		"dob": "4/20/1939",
		"height": 69,
		"weight": 199,
		"eyeColor": "hazel",
		"occupation": "doctor",
		"parents": [],
		"currentSpouse": null // had children with mader madden
	},
	{
		"id": 888201200,
		"firstName": "Mader",
		"lastName": "Madden",
		"gender": "male",
		"dob": "5/6/1937",
		"height": 76,
		"weight": 205,
		"eyeColor": "black",
		"occupation": "landscaper",
		"parents": [],
		"currentSpouse": null // had children with joy madden
	},
	{
		"id": 878013758,
		"firstName": "Jill",
		"lastName": "Pafoy",
		"gender": "female",
		"dob": "2/8/1972",
		"height": 74,
		"weight": 118,
		"eyeColor": "brown",
		"occupation": "programmer",
		"parents": [401222887], // mother is uma bob
		"currentSpouse": 294874671 // dave pafoy
	},
	{
		"id": 951747547,
		"firstName": "Ralph",
		"lastName": "Bob",
		"gender": "male",
		"dob": "12/23/1969",
		"height": 66,
		"weight": 179,
		"eyeColor": "blue",
		"occupation": "nurse",
		"parents": [401222887], // mother is uma bob
		"currentSpouse": 159819275 // jasmine bob
	},
	{
		"id": 159819275,
		"firstName": "Jasmine",
		"lastName": "Bob",
		"gender": "female",
		"dob": "12/18/1969",
		"height": 58,
		"weight": 156,
		"eyeColor": "blue",
		"occupation": "assistant",
		"parents": [409574486, 260451248], // michael and jon walkens
		"currentSpouse": 951747547 // ralph bob
	},
	{
		"id": 348457184,
		"firstName": "Annie",
		"lastName": "Pafoy",
		"gender": "female",
		"dob": "11/4/1970",
		"height": 62,
		"weight": 235,
		"eyeColor": "hazel",
		"occupation": "landscaper",
		"parents": [629807187, 464142841], // jack and jen pafoy
		"currentSpouse": null
	},
	{
		"id": 294874671,
		"firstName": "Dave",
		"lastName": "Pafoy",
		"gender": "male",
		"dob": "8/5/1967",
		"height": 61,
		"weight": 112,
		"eyeColor": "green",
		"occupation": "doctor",
		"parents": [629807187, 464142841], // jack and jen pafoy
		"currentSpouse": 878013758 // jill pafoy
	},
	{
		"id": 931247228,
		"firstName": "Amii",
		"lastName": "Pafoy",
		"gender": "female",
		"dob": "3/13/1963",
		"height": 74,
		"weight": 184,
		"eyeColor": "brown",
		"occupation": "landscaper",
		"parents": [629807187, 464142841], // jack and jen pafoy
		"currentSpouse": null
	},
	{
		"id": 822843554,
		"firstName": "Regina",
		"lastName": "Madden",
		"gender": "female",
		"dob": "7/26/1959",
		"height": 71,
		"weight": 249,
		"eyeColor": "brown",
		"occupation": "nurse",
		"parents": [693243224, 888201200], // joy and mader madden
		"currentSpouse": null
	},
	{
		"id": 819168108,
		"firstName": "Hana",
		"lastName": "Madden",
		"gender": "female",
		"dob": "10/7/1953",
		"height": 70,
		"weight": 187,
		"eyeColor": "brown",
		"occupation": "politician",
		"parents": [693243224, 888201200], // joy and mader madden
		"currentSpouse": null
	},
	{
		"id": 969837479,
		"firstName": "Eloise",
		"lastName": "Madden",
		"gender": "female",
		"dob": "12/11/1961",
		"height": 63,
		"weight": 241,
		"eyeColor": "brown",
		"occupation": "assistant",
		"parents": [693243224, 888201200], // joy and mader madden
		"currentSpouse": null
	},
	{
		"id": 313207561,
		"firstName": "Mattias",
		"lastName": "Madden",
		"gender": "male",
		"dob": "2/19/1966",
		"height": 70,
		"weight": 110,
		"eyeColor": "blue",
		"occupation": "assistant",
		"parents": [693243224, 888201200], // joy and mader madden
		"currentSpouse": 313997561 // ellen madden
	},
	{
		"id": 313997561,
		"firstName": "Ellen",
		"lastName": "Madden",
		"gender": "female",
		"dob": "2/19/1970",
		"height": 67,
		"weight": 100,
		"eyeColor": "blue",
		"occupation": "doctor",
		"parents": [],
		"currentSpouse": 313207561 // mattias madden
	},
	{
		"id": 313998000,
		"firstName": "Joey",
		"lastName": "Madden",
		"gender": "female",
		"dob": "2/02/1987",
		"height": 67,
		"weight": 100,
		"eyeColor": "blue",
		"occupation": "doctor",
		"parents": [313207561, 313997561], // mattias and ellen madden
		"currentSpouse": null
	}
];
