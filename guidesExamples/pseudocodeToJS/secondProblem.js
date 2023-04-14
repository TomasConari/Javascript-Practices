/*
A customer wants to buy a yogurt and must select the
flavor and quantity. For select a flavor there must to exist
an id of the yogurt flavor.

After selecting the flavor, there must to be a confirmation,
if the client isn't sure, it must return to select a flavor.

NOTE: If the id flavor isn't available. send an error
notification to the customer and end the process.

If the quantity selected is non-existent, you need to
send a notification to the customer (End process) and
to the seller (to restock).

Plus: New yogurt flavors can be added by the seller
*/
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
