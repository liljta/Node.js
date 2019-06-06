class Dog {
    constructor(name, age = 1, breed = "Taksa") {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    ShowDog() {
        console.log(`Name: ${this.name} Age: ${this.age} Breed: ${this.breed}`)
    }
}

module.exports  = Dog;