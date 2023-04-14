/*
A hotel needs to know if it can accept more people based on these conditions:

1. That there are rooms available.

2. That the time is not later than the designated time for check-in.

And the software has to register that the user is in.
*/
const fullRooms = [];
const maxRooms = 20;
const requiredRooms = 20;//The user introduces how much rooms does he need
checkinHour = 11;//The current hour
if ((requiredRooms <= 20) && (checkinHour < 12)) {
    if ((fullRooms.length + requiredRooms) <= maxRooms) {
        for (let i = 0; i < requiredRooms; i += 1) {
            fullRooms.push(i);
        };
        console.log("Succesfully made reservation for room " + fullRooms.join(","))
    }else{
        console.log("There isn't enough rooms");
    };
}else{
    if (requiredRooms > maxRooms) {
        console.log("I'm sorry, we don't have rooms avaliable at the moment.");
    } else {
        console.log("I'm sorry, the Checkin hour has ended.");
    };
};
console.log("Program Ended");
