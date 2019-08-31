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

function addDagger() {
    hero.weapon = { type: 'dagger', damage: 2 }
    hero.inventory.push(hero.weapon)
}


function submitName(event) {
    event.preventDefault()
    const inputName = document.getElementById('inputName')
    hero.name = inputName.value
    displayStats()

}

function displayStats() {

    document.getElementById('heroName').innerHTML = "Name: " + hero.name
    document.getElementById('heroHealth').innerHTML = "Health: " + hero.health
    document.getElementById('heroWeaponType').innerHTML = "Weapon type: " + hero.weapon.type
    document.getElementById('heroWeaponDamage').innerHTML = "Weapon Damage: " + hero.weapon.damage
}
let kills = 0
function killEnemy(event) {
    event.preventDefault()
    let tgt = event.target;
    kills += 1
    document.getElementById('p').innerHTML = "Kills: " + kills
    tgt.parentNode.parentNode.removeChild(tgt.parentNode)
}




function fightEnemy(event) {
    event.preventDefault()
    let tgt = event.target;
    let enemyHealth = tgt.parentNode.getAttribute('health')
    
    if (enemyHealth - hero.weapon.damage <= 0) {
        killEnemy(event)
    }
    else {
        enemyHealth -= hero.weapon.damage
        tgt.parentNode.setAttribute('health', enemyHealth)
        tgt.parentNode.getElementsByTagName('p')[0].innerHTML = enemyHealth;
    }
}
displayStats()




