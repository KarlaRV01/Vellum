for(p = 0; p < 354985; p++) {
    if (password== wordsList[p]){
      securePass = false;
      document.getElementById("badResults").innerHTML="That's quite the weak password. Maybe it should consider doing some layups?";
      console.log("That's quite the weak password. Maybe it should consider doing some layups?");

    }
  }
    if (securePass==true) {
        document.getElementById("results").innerHTML="What a great password! You're good to go.";
      console.log ("What a great password! You're good to go.");
    }
