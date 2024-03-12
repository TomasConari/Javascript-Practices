//For


    //String
    const quote = "Tomas";
    console.log("For String: ");
    for(let i = 0; i < quote.length; i += 1){
        console.log(quote[i]);
    };

    //Array
    const exampleArray = [0, 5, 10, 15, 20, 25];
    console.log("For Array: ");
    for(let i = 0; i < exampleArray.length; i += 1){
        console.log(exampleArray[i]);
    };


//While


    let counter = 1;
    console.log("While: ");
    while(counter <= 5){
        counter += 1;
        console.log(counter);
    };


//Nested Loops


    console.log("Nested For: ");
    for(let i = 0; i <= 3; i += 1){
        for(let x = 0; x <= 3; x += 1){
            console.log([i], [x]);
        };
    };
    /*In nested loops, the inner loops run every time 
    for each execution of the outer loop that contains it*/