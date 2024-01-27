var display = document.getElementById('resultinputtag');

function equation(value) {
    display.value += value;
}

function allclear() {
  display.value = "";
}

function clearone() {
  var str = display.value;
  display.value = str.slice(0, str.length - 1)
}

function solve() {
  var str = display.value;
  display.value = eval(str);
}