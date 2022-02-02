var delay = 1000;
document.body.style.width = "100%";
document.body.style.height = "100%";

for (var i = 0; i < 9; i++) {
    
  for (var j = 0; j < 9; j++) {
    
    var checker = document.createElement("div");
    checker.style.height = "11.1%";
    checker.style.width = "11.1%";
    checker.style.float = "left";
    checker.style.paddingBottom = "11.1%";
    if (i % 2 === 0) {
      if (j % 2 === 0) {
        checker.style.backgroundColor = 'black';
      } else {
        checker.style.backgroundColor = "red";
      }
    } else {
      if (j % 2 === 0) {
        checker.style.backgroundColor = "red";
      } else {
        checker.style.backgroundColor = "black";
      }
    }
    document.body.appendChild(checker);
  }
}

