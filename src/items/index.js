/*

jQuery Loading

The jQuery library provides loading functionality in one line:

$.getScript("my_lovely_script.js", function(){

   alert("Script loaded but not necessarily executed.");

});

*/

document.weapons = [];

elem = React.createElement;

$.getScript("src/items/melee-redeemer.js", function () {
    console.log("Loaded Redeemer");
    console.log(document.weapons.length +" weapons loaded.");
    ReactDOM.render(weaponList,
                    document.getElementById("weapon_anchor")
                   );
});

weaponList = elem('div', {key: "Weapon List"}, document.weapons);

console.log(document.getElementById("weapon_anchor")+" exists");

console.log(document.weapons.length +" weapons loaded");

/*
ReactDOM.render(weaponList,
                document.getElementById("weapon_anchor")
               );
*/