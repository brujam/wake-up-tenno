# wake-up-tenno
Information, inventory-tracking, and goal-tracking for Warframe.

No formal license yet available. However, I ask that this source code be used
for demonstration purposes only; I do not yet want it forked or used by anyone
else just yet.

# User Stories

## General UI principles:
* "Hot link" form: name, underline, pop up tooltip with a one line description
  * Seer BP. Drops from Captain Vor on Saturn
* "Short" form item: 
  * Name: Seer BP
  * Obtained by: drops from Vor
  * Crafts: Seer
* Short form weapon:
  * Name: Redeemer
  * Summary: "Melee: gunblade, shotgun"
  * Stat split: "(slash) 40% / (impact) 30% / (puncture) 30%"
* "Long" form:
  * Name: Seer
  * All stats unmodded
    * If you have it; your build's stats next to it and its level
  * Weapon special notes (Zenistar disc, etc) (so, for Seer, enhanced zoom stats)
    * Unique mods (firestorm, tether grenade, etc)
  * YouTube coverage: Brozime "Why would you use", MCGamerCZ quick look, Quiette Shy posts
  
* Long form relic: 
  * Name: Axi A2
  * Vaulted: No/Yes (yes: grey background, no: gold background?)
  * Common drops: a a%, a a%, a a%
  * Uncommon drops: forma b%, b b%
  * Rare drops: c c%

## Organisation of stuff-to-do:
### Three Panel Layout
* Done / Goals Achieved. Examples:
  * Nightwave weeklies achieved last week
  * 34/30 Orokin Cells for Ooblex Prime
  * _34 more... clear history?_
* To Do / Current Goals. Examples:
  * 2/5 Argon Crystals for Ooblex Prime Neuroptics
  * _Open Text Field: "Kill Eidolon Barrylist"_
* "Can Do" / "Goals to Adopt"
  * Farm Dublix Prime
  * MR: level Kuva Akstubbak
  * This week's nightwave: Adopt all goals
    * Scan 25 enemies or items. Hover text recommendation: "Use the Heliocor/Synoid Heliocor as they scan on kills" (doesn't actually seem to count...) 
    * Kill enemies with radiation. Recommendation: "Use a wide hitting weapon like Ignis Wraith set for Radiation"

## Weapons/Frames/"Stuff" List: 

Settings for list:
* Stuff I've Mastered
  * Button: "Simulate a Build" (Icon: Cephalon Personal Space icon?)
    * Opens the weapon in its current build / forma status in the builder
  * Button: "Forma" (Icon: Forma, obvs)
    * Sets the "saved" version to be rank 0 again
* Stuff I've Got
  * Button: "Simulate a Build"
  * Add to Levelling Queue (+To Do) (Icon: + MR logo (two swirly up arrows))
    * Current favourite for levelling: Saturn>Helene
* Stuff I Haven't Got
  * Add to part farming queue

## Search Bar: "The Big One"

Basically stealing Brozime's UI rant here: https://www.youtube.com/watch?v=3gSSAlhj2MU
Try to be "10/10 Power" :)

* Show weapon stats up front
* Search by material: "Orokin Cell" shows what maps drop them
  * "Brujam Recommends": Saturn>Helene
  * "Youtuber Recommends": MCGamerCZ says Saturn>??? (+link to Youtube farming video)
* Search "Baro": says "Kronia Relay" for example (probably cull this from the worldstate xml stuff)
* Search "Seer": says BP and parts are drops from 
* Search "Lua Spy": shows Pavlov mission. Click through for enemy types, special drops from hacking, etc
* Search "Kuva Fortress": results show the eight missions 
  * Name of mission - Mission type
  * Type: Name of Mission?
* Search "Condition Overload": drops from X, Brujam Recommends: "Lua Spy: Pavlov"
* Search 

User journey:
Atlas Prime -> Systems -> Neo A3 -> Planets it drops on, rotations, drop chances
"You don't have to go to the drop tables. What if it was in the game?"

Probably can't do: search Lich, it populates everything that has that lich on it

## "New Player Experience"
Have a "guided path" - start on earth, earth junction objectives shown, players can adopt and complete those
Clear view of what's to be done to "advance"
Checkbox for "finished Earth: Everest for the first time!" -> unlocks X, Y, Z

## Builder (because none of the online builders have features I want)

* Unmodded stats
* Is the weapon "special"?
  * Zenistar Disc, Sancti Magistar healing, Gunblade bullets, gas pools from some infested weapons
  * Shotguns: per-pellet status, "no headshots" Arca Plasmor
  * "Breakpoints" for weapons;
    * can it hit 100% status pre-multishot
    * can it hit 100% crit pre-slide-attacks
