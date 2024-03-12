//Operators


    //Mathematical Operators

        console.log("Mathematical Operators");

        //Addition
            let num1 = 5;
            let num2 = 5;
            const addition = num1 + num2;
            console.log(`${num1} + ${num2}: ${addition}`);

        //Substraction
            num1 = 10;
            num2 = 8;
            const subtraction = num1 - num2;
            console.log(`${num1} - ${num2}: ${subtraction}`);

        //Multiplication
            num1 = 2;
            num2 = 2;
            const multiplication = num1 * num2;
            console.log(`${num1} * ${num2}: ${multiplication}`);

        //Division
            num1 = 20;
            num2 = 2;
            const division = num1 / num2;
            console.log(`${num1} / ${num2}: ${division}`);

        //Modulo
            num1 = 10;
            num2 = 2;
            const modulo = num1 % num2;
            console.log(`${num1} % ${num2}: ${modulo}`);

        //Exponentiation
            num1 = 2;
            num2 = 2;
            const exponentiation = num1 ** num2;
            console.log(`${num1} ** ${num2}: ${exponentiation}`);


    //Logical Operators

        console.log("Logical Operators");

        //And operator
            let bool1 = true;
            let bool2 = true;
            let logicalOperation = bool1 && bool2;
            console.log(`${bool1} && ${bool2}: ${logicalOperation}`);

        //Or operator
            bool1 = true;
            bool2 = false;
            logicalOperation = bool1 || bool2;
            console.log(`${bool1} || ${bool2}: ${logicalOperation}`);

        //Not operator
            bool1 = false;
            bool2 = false;
            logicalOperation = !(bool1 && bool2);
            console.log(`!(${bool1} && ${bool2}): ${logicalOperation}`);


    //Comparison Operators

        console.log("Comparison Operators");

        //Greater than
            num1 = 6;
            num2 = 5;
            let comparison = num1 > num2;
            console.log(`${num1} > ${num2}: ${comparison}`);

        //Greater than or equal to
            num1 = 1;
            num2 = 0;
            comparison = num1 >= num2;
            console.log(`${num1} >= ${num2}: ${comparison}`);

        //Smaller than
            num1 = 10;
            num2 = 15;
            comparison = num1 < num2;
            console.log(`${num1} < ${num2}: ${comparison}`);

        //Less than or equal to
            num1 = 3;
            num2 = 7;
            comparison = num1 <= num2;
            console.log(`${num1} <= ${num2}: ${comparison}`);

        //Equal to
            num1 = 4;
            num2 = 4;
            comparison = num1 === num2;
            console.log(`${num1} === ${num2}: ${comparison}`);

        //Not equal to
            num1 = 5;
            num2 = 4;
            comparison = num1 !== num2;
            console.log(`${num1} !== ${num2}: ${comparison}`);