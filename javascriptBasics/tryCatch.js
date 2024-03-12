//Try/Catch/Finally


    try{
        throw "Intentional error";
    }catch(error){
        console.log("An error ocurred:", error);
    }finally{
        console.log("Program ended");
    };