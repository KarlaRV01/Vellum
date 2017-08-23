var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

function checkPassword() {
  var password = document.getElementById("exampleInputPassword").value; //instead of ElementbyID => elementsbyclassname
  var isSecure = true;
  for (word=0; word <=wordsList.length; word++) {
    if (password==wordsList[word]) {
      console.log("your password is weak");
      isSecure = false;
      alert("This password is not strong enough. Use at least one uppercase letter and a symbol for the strongest possible password!");

    }
  }
    if (isSecure == true) {
      console.log("Your password is strong");
      alert("Your password is strong. You're good to go!");

  }
}


function onsubmitbutton() {
  var first = document.getElementById("fname").value;
  //alert(first);

  var last = document.getElementById("lname").value;
  //alert(last);

  var genres = document.getElementById("genre").value;
  //alert(genres);

  var importance = document.getElementById("important").value;
  //alert(importance);

  var size = document.getElementById("length").value;
  //alert(size);

  var colors = document.getElementById("color").value;
  //alert(colors);

  var requestURL = 'https://raw.githubusercontent.com/KarlaRV01/Vellum/gh-pages/Vellum-vellumfiles/database.json';
  var requesfunction onsubmitbutton() {
  var first = document.getElementById("fname").value;
  //alert(first);

  var last = document.getElementById("lname").value;
  //alert(last);

  var genres = document.getElementById("genre").value;
  //alert(genres);

  var importance = document.getElementById("important").value;
  //alert(importance);

  var size = document.getElementById("length").value;
  //alert(size);

  var colors = document.getElementById("color").value;
  //alert(colors);

  var data = {
    "books" : [
      {
        "name" : "Pride and Prejudice",
        "author": "Jane Austen",
        "genre" : "Romance",
        "color": "red",
        "length" : "medium",

      },
      {
        "name" : "Fifty Shades of Grey",
        "author": "E.L. James",
        "genre" : "Romance",
        "color": "red",
        "length" : "medium",
      },
      {
        "name" : "The Notebook",
        "author": "Nicholas Sparks",
        "genre" : "Romance",
        "color": "red",
        "length" : "short",
      },
      {
        "name" : "Jane Eyre",
        "author": "Charlotte Bronte",
        "genre" : "Romance",
        "color": "red",
        "length" : "medium",
      },
      {
        "name" : "Ender's Game",
        "author": "Orson Scott Card",
        "genre" : "Sci-Fi/Fantasy",
        "color": "blue",
        "length" : "short",
      },
      {
        "name" : "Game of Thrones",
        "author": "George R.R. Martin",
        "genre" : "Sci-Fi/Fantasy",
        "color": "blue",
        "length" : "short",
      },
      {
        "name" : "Fahrenheit 451",
        "author": "Ray Bradbury",
        "genre" : "Sci-Fi/Fantasy",
        "color": "blue",
        "length" : "short",
      },
      {
        "name" : "Outlander",
        "author": "Diana Gabaldon",
        "genre" : "Sci-Fi/Fantasy",
        "color": "blue",
        "length" : "long",
      },
      {
        "name" : "The Immortal Life of Henrietta Lacks",
        "author": "Rebecca Skloot",
        "genre" : "Non-Fiction",
        "color": "orange",
        "length" : "short",
      },
      {
        "name" : "Tuesdays with Morrie by Mitch Albom",
        "author": "Mitch Albom",
        "genre" : "Non-Fiction",
        "color": "orange",
        "length" : "short",
      },
      {
        "name" : "Blink",
        "author": "Malcolm",
        "genre" : "Non-Fiction",
        "color": "orange",
        "length" : "short",
      },
      {
        "name" : "Fast Food Nation: The Dark Side of the All American Meal",
        "author": "Eric Schlosser",
        "genre" : "Non-Fiction",
        "color": "orange",
        "length" : "short",
      },
      {
        "name" : "The Girl with the Dragon Tattoo",
        "author": "Steig Larsson",
        "genre" : "Action/Thriller",
        "color": "black",
        "length" : "medium",
      },
      {
        "name" : "The Girl on the Train",
        "author": "Paula Hawkins",
        "genre" : "Action/Thriller",
        "color": "black",
        "length" : "short",
      },
      {
        "name" : "Murder on the Orient Express",
        "author": "Agatha Christie",
        "genre" : "Action/Thriller",
        "color": "black",
        "length" : "short",
      },
      {
        "name" : "The Da Vinci Code",
        "author": "Dan Brown",
        "genre" : "Action/Thriller",
        "color": "black",
        "length" : "medium",
      }
    ]
  };
  console.log(data["books"])
}t = new XMLHttpRequest();
//request.open
  request.open("GET", requestURL, true);
  request.responseType = 'text';
  request.send();
  // var books = request.response;
  // alert(books);
  request.addEventListener("readystatechange", processRequest, false);
  request.onload = function() {
    var books = request.response;
    alert(books);
    // printBook(books);
  }

  function printBook(jsonObj){
    var books = jsonObj["books"];
    console.log(books[0]);
  }
}

