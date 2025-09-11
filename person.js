class person{
     
    constructor(name,age,occupition){
        this.name = name;
        this.age = age;
        this.occupition = occupition;

    }
     getname(){
        console.log(this.name);
    }
    displayInfo(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: + this.occupation");
        console.log("----------")

    }  
}

const person1 = new person("Coco Martin",24,"Masahista");

person1.getName();
person1.displayInfo();
