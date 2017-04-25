document.weapon_entry = [];
document.weaponList_array = [];

elem = React.createElement;


$.getScript("src/items/melee-redeemer.js", function () {
    console.log("Loaded Redeemer");
    console.log(document.weaponList_array.length +" weapons loaded.");
    /*ReactDOM.render(weapon,
                    document.getElementById("weapon_anchor")
                   );*/
    console.log(typeof document.weaponList_array);
    console.log(document.weaponList_array.length);
    console.log(typeof weaponList);
    
    console.log(weaponList);
    
    ReactDOM.render(weaponList,
                    document.getElementById("weaponlist_anchor"),
                    function () {console.log("HI")}
                   );
});

weapon = elem('div', {key: "Weapon Display"}, document.weapon_entry);
weaponList = elem('div', {key: "Weapon List"}, document.weaponList_array);

console.log(document.getElementById("weapon_anchor")+" exists");

console.log(document.weaponList_array.length +" weapons loaded");

/*
ReactDOM.render(weaponList,
                document.getElementById("weapon_anchor")
               );
*/