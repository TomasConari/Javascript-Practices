function Comparation (num1,num2){/*creates the function "Comparation" with 2 parameters
  */
  if(num1 < num2){ //if num1 is less than num2 
    console.log(num1 + " is less than " + num2)
  }else if(num1 > num2){ //if num1 is more than num2
    console.log(num1 + " is more than " + num2);
  }else { //if none of the other conditions are True
    console.log(num1 + " is equal to " + num2);
  };
}

const inputNumber = 5;

let comparationNumber = 50;
Comparation(inputNumber,comparationNumber);/*calls "Comparation" with inputNumber's value: 5 and assigns it
to num1, comparationNumber's value equal to 50 and assigns it to num2
*/

comparationNumber = 1;
Comparation(inputNumber,comparationNumber);/*calls "Comparation" with inputNumber's value: 5 and assigns it
to num1, comparationNumber's value equal to 1 and assigns it to num2
*/

comparationNumber = 5;
Comparation(inputNumber,comparationNumber);/*calls "Comparation" with inputNumber's value: 5 and assigns it
to num1, comparationNumber's value equal to 5 and assigns it to num2
*/

const colorSwitch = (firstColor) => {
  switch (firstColor){
    case "red": //if color value is red
      console.log("The color is red."); //Logs that the color is red
      break;
    case "blue": //if color value is blue
      console.log("The color is blue."); //Logs that the color is blue
      break;
    case "green": //if color value is green
      console.log("The color is green."); //Logs that the color is green
      break;
    default: //if color value is none of the above conditions
      console.log("The color is not red, blue, or green."); //Logs the default: "the color isn't red, blue or green"
  };  
};

let color = "red";
colorSwitch(color);//calls "colorSwitch" and assigns "color"'s value "red" to "firstColor"
color = "blue";
colorSwitch(color);//calls "colorSwitch" and assigns "color"'s value "blue" to "firstColor"
color = "green";
colorSwitch(color);//calls "colorSwitch" and assigns "color"'s value "green" to "firstColor"
color = "purple";
colorSwitch(color);//calls "colorSwitch" and assigns "color"'s value "purple" to "firstColor"


const age = 18;
//defines age value
const checkedAge = age >= 18 ? "you are an adult" : "you are a minor"; /* checks if age is more or equal to 18, 
if True: assigns "you are an adult" to checkedAge, if False: assigns "you are a minor" yo checkedAge */
console.log(checkedAge); // logs the checkedAge const wich can be: "you are an adult" or "you are a minor"


const colors = {
    firstColor : "red",
    secondColor : "blue"
};
//defines an object called colors with 2 objects in it
const hasColor = colors?.firstColor;//checks if colors is defined and assigns firstColor to hasColor
console.log(hasColor);

const undefinedError = colors?.secondColor === undefined ? "Is Undefined" : "Is Defined"; /*checks if secondColor 
is undefined, if True: assings "Is Undefined" to undefinedError, if False assigns: "Is Defined" to undefinedError
*/
console.log(undefinedError);// logs the undefinedError const wich can be: "Is Undefined" or "Is Defined"


console.log("Select a number between 1 and 5")
const switchNumber = 2

switch(switchNumber){
  case 1:
    console.log("you selected 1");
    break;
  case 2:
    console.log("you selected 2");
    break;
  case 3:
    console.log("you selected 3");
    break;
  case 4:
    console.log("you selected 4");
    break;
  case 5:
    console.log("you selected 5");
    break;
  default:
    console.log("Invalid number")
}

