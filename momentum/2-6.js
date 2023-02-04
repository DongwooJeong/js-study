const playerName = "dw";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit";

const player = {
    name: "dw",
    points: 10,
    fat: true
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

console.log(player.fat);
player.fat = false;
console.log(player.fat);

player.lastname = "j";
console.log(player);
