function sumNumbers(a, b) {
  if (a != b) {
    console.log(a + b);
  } else {
    console.log((a + b) * 3);
  }
}
sumNumbers(1, 2);
sumNumbers(2, 2);
function checkNumbers(a, b) {
  if (a === 50 || b === 50 || a + b === 50) {
    console.log("true");
  } else {
    console.log("false");
  }
}
checkNumbers(50, 40);
checkNumbers(10, 40);
checkNumbers(10, 10);

function checkSum(a, b) {
  if (a === 8 || b === 8 || a + b === 8 || a - b === 8) {
    console.log("true");
  } else {
    console.log("false");
  }
}
checkSum(7, 1);
checkSum(9, 1);
checkSum(8, 1);
checkSum(10, 1);

function checkStart(str) {
  if (str.startsWith("Los") || str.startsWith("New")) {
    console.log("true");
  } else {
    console.log("false");
  }
}
checkStart("Travnik");
checkStart("New York");

function removeChar (str, a) {
    newstr=str.substr(a)
    console.log(newstr)
}
removeChar("ivor", 1)

function alphabeticalOrder (str) {
    console.log (str.split("").sort().join(""))
}
alphabeticalOrder("ivor")

function checkChar (str1, str2) {
let str10 = str1.substr(1)
let str20 = str2.substr(1)
let newstring = str10.concat(str20)
console.log(newstring)
}
checkChar ("jasmin", "ivor")

function checkArr (arr) {
    let last = arr.length - 1
    if (arr[0] === arr[last]) {
        console.log ("true")
    }
    else {
        console.log("false")
    }
}
checkArr (["ivor", "jasmin", "ivor"])
checkArr (["ivor", "jasmin", "haris"])

function changeLetters (str) {
    let start = str.charAt()
    let end = str.charAt(str.length-1)
    let middle = str.slice(1, -1)
        if (str.length > 1) {
        let newstring = end.concat(middle).concat(start)
        console.log (newstring)
    }
    else {
        console.log (str)
    }
}
changeLetters ("ivor")
