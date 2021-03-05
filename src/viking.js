// Soldier
class Soldier {
    constructor(health,strength){ 
    this.health =health;
    this.strength =strength;
    this.attack = function (){
        return strength;
    }; 
    this.receiveDamage = function(damage){
        this.health =this.health - damage;
}
}}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super(health, strength);
        this.name= name;
        this.strength;
        this.receiveDamage = function(damage){
            this.health =this.health - damage;  
            if (this.health > 0) {
                return `${this.name} has received ${damage} points of damage`;
            } else {
                return `${this.name} has died in act of combat`;
            }
        };
        this.battleCry = function (){
            return "Odin Owns You All!";
        };

        
}};



// Saxon

class Saxon extends Soldier {
        receiveDamage = function(damage){
            this.health= this.health - damage;
            if (this.health > 0) {
                return `A Saxon has received ${damage} points of damage`
            } else {
                return `A Saxon has died in combat`
            };
        };
    }



// War

class War {
    constructor(){
        this.vikingArmy= [];
        this.saxonArmy= []
    
}

addViking(Viking){
    this.vikingArmy.push(Viking)
}

addSaxon(Saxon){
 this.saxonArmy.push(Saxon)
}



vikingAttack(){

    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let result = randomSaxon.receiveDamage(randomViking.strength);

    if(randomSaxon.health <=0) {
        this.saxonArmy.pop(randomSaxon);
    }

    return result;
}

saxonAttack(){
//Saxon chosen at random
let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
//Viking chosen at random
let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
//Receive damage called with the damage equal to the strengh of a Viking
let result = randomViking.receiveDamage(randomSaxon.strength);

//should remove dead saxons from the army
//dead saxon = randomSaxon.health <=0 
if (randomViking.health <=0) {
    this.vikingArmy.pop(randomViking)
}

return result;

}

showStatus(){

if(this.saxonArmy.length === 0){
    return 'Vikings have won the war of the century!'
} else if (this.vikingArmy.length === 0){
    return 'Saxons have fought for their lives and survived another day...'
} else {
    return 'Vikings and Saxons are still in the thick of battle.';
}
}
}