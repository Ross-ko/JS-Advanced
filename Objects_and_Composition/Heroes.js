function solve() {

    function fighter(name) {

        let warrior = {
            name,
            health: 100,
            stamina: 100,
            fight() {
                console.log(`${warrior.name} shashes at the foe!`);
                warrior.stamina--;
            }
        }
        return warrior;
    }

    function mage(name) {

        let sorcerer = {
            name,
            health: 100,
            mana: 100,
            cast(spell) {
                console.log(`${sorcerer.name} cast ${spell}`);
                sorcerer.mana--;
            }
        }
        return sorcerer;
    }
    return { mage, fighter };
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
console.log(scorcher2.stamina);
console.log(scorcher.mana);