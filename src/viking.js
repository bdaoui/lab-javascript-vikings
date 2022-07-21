// Soldier
class Soldier {

    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health -= damage;
    }

}

// Viking
class Viking extends Soldier {
   constructor(name, health, strength){
    super(health, strength);
    this.name = name;

   }

   receiveDamage(damage){
    this.health -= damage;
    // dont't understand why does not work -->this.health > 0 ? return `${this.name} has received ${this.damage} points of damage` : return `${this.name} has dies in act of combat`;
    if(this.health >0){ 
        return `${this.name} has received ${damage} points of damage`;
    }

    else{
        return `${this.name} has died in act of combat`;
    }


}

 battleCry(){
    return "Odin Owns You All!"
 }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){

        this.health = this.health - damage;

        if(this.health >0){ 

            return `A Saxon has received ${damage} points of damage`;
        }
    
        else{
         return  "A Saxon has died in combat";
        }
    
    }
}

// War
class War {

    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking){

        this.vikingArmy.push(Viking);

    };
    
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    };

    vikingAttack(){
        
        // take vikingArmy, and extract a single Viking
        // viking strengh should be used to activate Saxon received damage
        // create a random var for Saxon


        let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length*Math.random())]; 
        let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length*Math.random())]; 
        let check = randomSaxon.receiveDamage();
        
        if(check === "A Saxon has died in combat"){
           this.saxonArmy = this.saxonArmy.splice(indexOf(randomSaxon),1);
           console.log(this.saxonArmy)
         }

        const result = randomSaxon.receiveDamage(randomViking.attack());
        
        return result;
    };

    saxonAttack(){

    };

    showStatus(){

        if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }

        else if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }

        else{
            return "Vikings and Saxons are still in the thick of battle.";
        }
    };

}


let soldier1 = new Soldier(10, 10);
let viking1 = new Viking("Ragnar",15,10);
let saxon1 = new Saxon(10, 10);
let war1 = new War();

// //  console.log(viking1.health);
// //   console.log(viking1.receiveDamage(5));

// // console.log(saxon1.health);

// console.log(saxon1.health);
// console.log(saxon1.receiveDamage(5));

war1.vikingAttack();