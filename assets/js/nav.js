function showMenu() {
    var x = document.getElementById("myTopNav");
    if (x.className === "navigator") {
      x.className += " responsive";
    } else {
      x.className = "navigator";
    }
  } 