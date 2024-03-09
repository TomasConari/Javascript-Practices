const items = [1,2,3,4,5,"hi"];
const hasSome = items.some(item => typeof item === "string");
console.log(hasSome);