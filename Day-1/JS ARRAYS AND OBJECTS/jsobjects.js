let person = {
    name: "Alice",
    age: 30,
    city: "London",
    hobbies: ["reading", "traveling"],
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

console.log(person.name); 
console.log(person["age"]); 


person.age = 31;


person.job = "Developer";


delete person.city;

for(let key in person) {
    console.log(key + ":", person[key]);
}

person.greet();
