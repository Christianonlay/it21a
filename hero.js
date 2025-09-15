class hero{
    #health;

    contructor (name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;

    }
    getHealth(){
        return this.#health;
    }
}

const hero = new hero("Thorin",100,10);

hero.health();
console.log(hero.getHealth());

