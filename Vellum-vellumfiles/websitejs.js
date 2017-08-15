function checkPassword() {
  var password = document.getElementById("pw").value;
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
