// Write your JS here

const hero = {}
hero.name = "";
hero.heroic = true;
hero.inventory = [];

hero.health = 10;
hero.weapon = { type: "", damage: 2 }

function rest(hero) {
    if (hero.health == 10) {
        alert("message")
    }
    else {
        hero.health = 10;
    }

  
    return hero;
}

function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon)
}
function equipWeapon(hero) {
    if (hero.inventory.length != 0) {
        hero.weapon = hero.inventory[0]
    }
}

function addDagger () {
    hero.weapon={type:'dagger', damage:2}
    hero.inventory.push(hero.weapon)
}

function displayStats() {
    
}
