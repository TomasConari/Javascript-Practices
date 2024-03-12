//Conditionals


    //If/Else if/Else


        const selectedOption = 2;
        let result = "";

        if (selectedOption === 1) {
            result = "Option 1 selected";
        } else if (selectedOption === 2) {
            result = "Option 2 selected";
        } else {
            result = "Invalid Option";
        };

        console.log(result);


    //Switch/Case


        const dayOfWeek = 7;
        let dayName = "";

        switch (dayOfWeek) {
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            case 6:
                dayName = "Saturday";
                break;
            case 7:
                dayName = "Sunday";
                break;
            default:
                dayName = "Invalid day";
        };

        console.log(`The day is ${dayName}`);