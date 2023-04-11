function calculateDamage(yourType, opponentType, attack, defense){
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
