class Hero{
    #health;

    constructor (name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
        this.item = [];

    }
    getHealth(){
        return this.#health;  
    }
    getAttack(){
        console.log(this.attack);
    }
    getName(){
        console.log(this.name);
    }
    getStats(){
        console.log("/n");
    }
        
    getStats(){
        console.log("Name: " + this.name);
        console.log("Health: " + this.#health);
        console.log("Attack: " + this.attack);   
    }

addItem(item){
    this.Item.push(item);
}
totalAttack(){
    return this.attack +this.DataTransferItemList.reduce((sum,i)=>sum + i.bonusAttack,0);
}
}

class Warrior extends Hero{

    useAbility(){
        console.log(`${this.name} uses power Strike`);
    }
}

class Mage extends Hero{
    constructor(name,health,attack,mana){
    super(name,health,attack);
    this.mana = mana;
}

useAbility(){
    console.log(`${this.name} casts Fireball`);
    }
}
class Item{
    constructor(name,bunosAttack){
        this.name = name;
        this.bunosAttack = bunosAttack;
    }
}

function performAbality(Hero){
    console.log("\n");
    Hero.useAbility();
}
const sword =  new Item("Sword, 5");
const staf = new Item("staff", 3);

const warrior = new Warrior("Thorin",100,10);

//Thorin.useAbility();
//Thorin.getStats();
//Thorin.getAttack();
Thorin.getName();
thorin.addItem(sword);
console.log(Thorin.totalAttack());
Thorin.addItem(sword);
onsole.log(Thorin.totalAttack());
Thorin.addItem(sword);
onsole.log(Thorin.totalAttack());
Thorin.addItem(sword);
onsole.log(Thorin.totalAttack());

//const mage = new Mage("Gandalf",80,8,50);
//Gandalf.useAbility();
//Gandalf.getStats();

//performAbality(Thorin);
//performAbality(Gandalf);

