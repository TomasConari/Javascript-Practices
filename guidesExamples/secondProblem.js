const flavors = ["Natural", "Coconut", "Almond", "Vanilla"];
const price = [14000,14000,16000,16000];
const stock = [5,5,2,0];

console.log("Select a flavor: " + flavors.join(","));
const selectedFlavor = "Natural";//Introduced by user
if (flavors.includes(selectedFlavor)){
    console.log("Are you sure that you want: " + selectedFlavor + "?")
    const userConfirmation = "yes";//Introduced by user
    if (userConfirmation === "yes"){
        console.log("How many do you want?");
        const selectedQuantity = 3;//Introduced by user
        if ((selectedFlavor === flavors[0] || selectedFlavor === flavors[1]) && (selectedQuantity <= 5)){
            //simplified first to flavors due they have the same caracteristics
            console.log(`${selectedQuantity} ${selectedFlavor}, total: $ ${selectedQuantity * 14000}`);
        }else if ((selectedFlavor === flavors[2]) && (selectedQuantity <= 2)){
            console.log(`${selectedQuantity} ${selectedFlavor}, total: $ ${selectedQuantity * 16000}`);
        }else{
            console.log("Not stock left for that flavor");
        }
    }else{
        console.log("program ended")
    };
}else{        
    console.log(selectedFlavor + " is not a flavor");
};
