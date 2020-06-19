console.log("test test")


// var insertProperty = function (string, propName, propValue) {
//   var propToReplace = "{{" + propName + "}}";
//   console.log(propToReplace);
//   string = string.replace(new RegExp(propToReplace, "g"), propValue);
//   return string;
// }
//
// propName = '"name"';
// propValue = '"id"';
// newStr = insertProperty(strA, propName, propValue);
//
// console.log(strA);
// console.log(newStr);

var jsonObj = {
  firstName: "Poyen",
  lastName: "Hsieh",
  age: 29,
  hobby: {
    sport: "golf",
    game: "league of legends",
    music: "R&B"
  }
}

jsonStr = JSON.stringify(jsonObj);
console.log(jsonStr);
newJsonObj = JSON.parse(jsonStr);
console.log(newJsonObj);
