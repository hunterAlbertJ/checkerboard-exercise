var delay = 1000;
document.body.style.width = "100%";
document.body.style.height = "100%";
document.body.style.backgroundColor = "blue";
var a = 0.0;

for (var i = 0; i < 9; i++) {
    
  for (var j = 0; j < 9; j++) {
    var random1 = Math.floor(Math.random() * 256)
    var random2 = Math.floor(Math.random() * 256)
    var random3 = Math.floor(Math.random() * 256)
    var checker = document.createElement("div");
    checker.style.height = "11.1%";
    checker.style.width = "11.1%";
    checker.style.float = "left";
    checker.style.paddingBottom = "11.1%";
    if (i % 2 === 0) {
      if (j % 2 === 0) {
        checker.style.backgroundColor = "rgb("+ random1 +","+random2+"," + random3 + "," + a + ")";
        a += .015;
      } else {
        checker.style.backgroundColor = "rgb("+ random1 +","+random2+"," + random3 + "," + a + ")";
        a += .015;
      }
    } else {
      if (j % 2 === 0) {
        checker.style.backgroundColor = "rgb("+ random1 +","+random2+"," + random3 + "," + a + ")";
        a += .015;
      } else {
        checker.style.backgroundColor = "rgb("+ random1 +","+random2+"," + random3 + "," + a + ")";
        a += .015;
      }
    }
    document.body.appendChild(checker);
  }
}

