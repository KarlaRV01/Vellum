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
        document.getElementById('results').innerHTML = "This is a weak password!";
      isSecure = false;
      console.log("Your password is weak");
    }
  }
  if (isSecure == true) {
    console.log("Your password is strong");
    document.getElementById('results').innerHTML = "This is a strong password!";
  }
}
