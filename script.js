var delay = 1000;
document.body.style.width = "100%";
document.body.style.height = "100%";
// document.body.style.backgroundColor = "blue";
var a = 0.0;
color();
// everyTwoSeconds()
function removeColor() {
  document.getElementsByTagName("BODY")[0].innerHTML = "";
  //GOD it took me forever to figure this one out
}
function color() {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      var random1 = Math.floor(Math.random() * 256);
      var random2 = Math.floor(Math.random() * 256);
      var random3 = Math.floor(Math.random() * 256);
      var checker = document.createElement("div");
      checker.style.height = "11.1%";
      checker.style.width = "11.1%";
      checker.style.float = "left";
      checker.style.paddingBottom = "11.1%";
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          checker.style.backgroundColor =
            "rgb(" + random1 + "," + random2 + "," + random3 + ")";
        } else {
          checker.style.backgroundColor =
            "rgb(" + random1 + "," + random2 + "," + random3 + ")";
        }
      } else {
        if (j % 2 === 0) {
          checker.style.backgroundColor =
            "rgb(" + random1 + "," + random2 + "," + random3 + ")";
        } else {
          checker.style.backgroundColor =
            "rgb(" + random1 + "," + random2 + "," + random3 + ")";
        }
      }
      document.body.appendChild(checker);
    }
  }
  everyTwoSeconds();
}
console.log("done");

function everyTwoSeconds() {
  setTimeout(function () {
    removeColor();
    color();
  }, 2000);
}
