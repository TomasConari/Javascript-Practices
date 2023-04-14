/* 
I'm not very proud of this solution

https://www.codewars.com/kata/536e9a7973130a06eb000e9f

It's a Pokemon battle! Your task is to calculate the damage that a particular move would do using the following formula (not the actual one from the game):

damage = 50 * (attack / defense) * effectiveness
Where:

attack = your attack power
defense = the opponent's defense
effectiveness = the effectiveness of the attack based on the matchup (see explanation below)
Effectiveness:

Attacks can be super effective, neutral, or not very effective depending on the matchup. For example, water would be super effective against fire, but not very effective against grass.

Super effective: 2x damage
Neutral: 1x damage
Not very effective: 0.5x damage
To prevent this kata from being tedious, you'll only be dealing with four types: fire, water, grass, and electric. Here is the effectiveness of each matchup:

fire > grass

fire < water

fire = electric

water < grass

water < electric

grass = electric

For this kata, any type against itself is not very effective. Also, assume that the relationships between different types are symmetric (if A is super effective against B, then B is not very effective against A).

The function you must implement takes in:

your type
the opponent's type
your attack power
the opponent's defense
*/
const calculateDamage = (yourType, opponentType, attack, defense) => {
    let effectiveness = 0;
    switch (yourType){
        case "fire":
            switch (opponentType){
                case "fire":
                    effectiveness = 0.5;
                    break;
                case "water":
                    effectiveness = 0.5;
                    break;
                case "grass":
                    effectiveness = 2;
                    break;
                case "electric":
                    effectiveness = 1;
                    break;
                default:
                    return "error";
            };
            break;
        case "water":
            switch (opponentType){
                case "fire":
                    effectiveness = 2;
                    break;
                case "water":
                    effectiveness = 0.5;
                    break;
                case "grass":
                    effectiveness = 0.5;
                    break;
                case "electric":
                    effectiveness = 0.5;
                    break;
                default:
                    return "error";
            };
            break;
        case "grass":
            switch (opponentType){
                case "fire":
                    effectiveness = 0.5;
                    break;
                case "water":
                    effectiveness = 2;
                    break;
                case "grass":
                    effectiveness = 0.5;
                    break;
                case "electric":
                    effectiveness = 1;
                    break;
                default:
                    return "error";
            };
            break;
        case "electric":
            switch (opponentType){
                case "fire":
                    effectiveness = 1;
                    break;
                case "water":
                    effectiveness = 2;
                    break;
                case "grass":
                    effectiveness = 1;
                    break;
                case "electric":
                    effectiveness = 0.5;
                    break;
                default:
                    return "error";
            };
            break;
        default:
            return "error";
    };
    return (50 * (attack/defense) * effectiveness)
};
console.log(calculateDamage("fire","water",120,100));
