//Functions


    const add = (num1, num2) => {
        return num1 + num2;
    };

    console.log("Addition calculator");

    const firstNumber = 5;
    const secondNumber = 10;
    let sumResult = add(firstNumber, secondNumber);

    console.log(`First number: ${firstNumber}\nSecond number: ${secondNumber}\nAddition result: ${sumResult}`);

    const thirdNumber = 7;
    const fourthNumber = 8;
    sumResult = add(thirdNumber, fourthNumber);

    console.log(`Third number: ${thirdNumber}\nFourth number: ${fourthNumber}\nAddition result: ${sumResult}`);

    //Functions can be reused as many times as desired.