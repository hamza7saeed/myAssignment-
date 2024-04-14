document.title = "Assignmet 1"

/*
Prototype Assignments

1. *Basic Understanding of Prototypes:*
   - Create a simple JavaScript constructor function for a "Car" object with properties like make, model, and year.
   - Add a method to the Car prototype called "startEngine" that logs "Engine started" to the console.
   - Create two instances of the Car object and demonstrate using the "startEngine" method.

2. *Prototype Chain Exploration:*
   - Create a constructor function for a "Animal" object with properties like name and type.
   - Add a method to the Animal prototype called "eat" that logs "Eating food" to the console.
   - Create another constructor function for a "Dog" object that inherits from Animal and adds a property "breed."
   - Instantiate a Dog object and demonstrate using both inherited methods and properties.

3. *Modifying Prototypes:*
   - Extend the previous Animal example by adding a method to the Animal prototype called "sleep" that logs "Sleeping" to the console.
   - Instantiate a Dog object and demonstrate calling the "sleep" method inherited from Animal.
   - Override the "eat" method in the Dog object to log "Eating bones" instead of "Eating food."

4. *Understanding Object.create():*
   - Use Object.create() to create a prototype object called "Shape" with properties like "color" and a method "draw" that logs "Drawing a shape" to the console.
   - Create a new object "Circle" using Object.create(Shape) and add a property "radius" to it.
   - Demonstrate calling the "draw" method from the Circle object.

5. *Prototype Inheritance and Performance:*
   - Create a constructor function for a "Person" object with properties like name and age.
   - Add a method to the Person prototype called "greet" that logs a greeting message including the person's name.
   - Create a new constructor function "Student" that inherits from Person and adds a property "major."
   - Compare the memory consumption and performance of methods between objects created using prototypes versus objects with methods defined in constructors.

These assignments cover a range of topics related to prototypes in JavaScript, including inheritance, method overriding, and performance considerations. Adjust the complexity based on the students' proficiency level.
*/
// Question 1
// class Car {
//     constructor(make,model,year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     startEngine(){
//         console.log("Engine started");
//     }
//   }

//   let car = new Car("Honda",7,2017);
//   let truck = new Car("Mazda",4,2020)
//   console.log(car);
//   console.log(truck);
//   car.startEngine()
// truck.startEngine()

// Question 2

// class Animal {
//     constructor(name,type){
//         this.name = name;
//         this.type = type;
//     }

//     eat(){
//         console.log("Eating food");
//     }
//  }

// class Dog extends Animal{
//     constructor(name,type, breed,birth){
//         super(name,type);
//         this.breed = breed;
//         this.birth = birth;
//     }
//     Ddog(){
//       console.log( `My dog name is ${this.name} and it is type of ${this.type}. Moreover, it is breed of ${this.breed} and its birth of year is ${this.birth}`);
//     }
// }

//  let dog = new Animal("Toni","Dog");
//  dog.eat()
//  let ddog = new Dog("moni","cross pitbull","pitbull",2019);
// ddog.Ddog();
 
// Question 3 
//    class Animal{
//     constructor(name,type){
//         this.name = name;
//         this.type = type;
//     }
//     eat(){
//         console.log(`${this.name} is type of ${this.type} who eats bones`);
//     }
    
//    }

//    class Dog extends Animal{
//     constructor(name,type){
//         super(name,type)
//     }
    
//     sleep(){
//         console.log(`${ this.name} is sleeping`);
//     }
//    }

// let d = new Dog("Toni","Pitbull");
// d.eat()
// d.sleep()

// Question 4
// let Shape = {
//     color: "green",
//     draw(){
//        console.log(`Drawing a shape with ${this.color} color and which radious is ${this.radious}`);
//     }
   
//    }
   
//    let x = Object.create(Shape);
   
//    let Circle = {
//        radious: "2mm",
//        __proto__: x
//    }
//    Circle.draw();

// Question 5
// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Assalam-o-Alaikum, ${this.name} how are you. I know your major subjects is ${this.major}`);
//     }
// }
// class Student extends Person{
//     constructor(name,age,major){
//         super(name,age)
//         this.major = major;
//     }
// }
// let y = new Student("Hamza",27,"COMPUTER SCIENCE, MATHEMATICES,PHYSICS");
// console.log(y);

// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Assalam-o-Alaikium, ${this.name}. I know your age is ${this.age}.`);
//     }
// }

// Person.prototype.Student = function(major){
//     this.major = major;

//     return (`Assalam-o-Alaikium, ${this.name}. I know your age is ${this.age} and your major subject is ${this.major}`);
// }
// let x = new Person("Hamza",27)
// let g = x.Student("Computer");
// console.log(g);

/*
Class Based OOP Assignments 

1. *Basic Class Creation:*
   - Create a class called "Person" with properties like name, age, and gender.
   - Add a method to the class called "introduce" that logs an introduction message including the person's name and age.
   - Instantiate two instances of the Person class and call the "introduce" method for each instance.
   

2. *Inheritance with Classes:*
   - Create a class called "Student" that inherits from the Person class. Add an additional property called "major."
   - Override the "introduce" method in the Student class to include the major in the introduction message.
   - Instantiate a Student object and demonstrate calling the overridden "introduce" method.

3. *Encapsulation and Accessors:*
   - Create a class called "BankAccount" with properties like accountNumber, balance, and ownerName.
   - Add methods to the class for depositing and withdrawing money, ensuring proper encapsulation (e.g., balance cannot be accessed directly).
   - Create an instance of the BankAccount class and demonstrate depositing and withdrawing money.

4. *Static Methods and Properties:*
   - Add a static property called "bankName" to the BankAccount class and set it to a specific bank name.
   - Add a static method called "getBankInfo" that logs the bank's name and a message about the type of account (e.g., "Checking Account").
   - Call the static method to display the bank's information without instantiating an object.

5. *Class Composition:*
   - Create a class called "Address" with properties like street, city, state, and zipCode.
   - Modify the Person class to include an Address object as a property.
   - Demonstrate creating a Person object with an associated Address and accessing the address properties.

6. *Class Inheritance and Method Overriding:*
   - Create a base class called "Shape" with properties like color and a method "draw" that logs "Drawing a shape" to the console.
   - Create derived classes such as "Circle" and "Rectangle" that inherit
    from Shape and override the "draw" method to log shape-specific messages.
   - Instantiate objects of Circle and Rectangle classes and demonstrate calling the overridden "draw" methods.

These assignments cover various concepts related to classes, inheritance, encapsulation, static members, composition, and method overriding in JavaScript. Adjust the complexity based on your students' familiarity with object-oriented programming concepts.
*/

// Question 1
// class Person {
//     constructor(name, age, gender){
// this.name = name;
// this.age = age;
// this.gender = gender;
//     }
//     introduce(){
//         console.log(`Hi, ${this.name} how are you. I know your age is ${this.age} and you are a ${this.gender}`);
//     }
// }
    
// let p = new Person("John",27,"male");
// let p2= new Person("Juliya",24,"female")
// p.introduce();
// p2.introduce()

// Question 2
// class Person {
//     constructor(name,age,gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     introduce(){
//                 console.log(`Hi, ${this.name} how are you. I know your age is ${this.age} and you are a ${this.gender}`);
//             }
// }

// class Student extends Person{
//     constructor(name,age,gender,major){
//         super(name,age,gender)
//         this.major = major;
//     }
//     introduce(){
//         console.log(`Hi, ${this.name} how are you. I know your age is ${this.age} and you are a ${this.gender} and your major subjects is ${this.major}`);
//     }
// }

// let x = new Student("Hamza saeed",27,"male","Computer Science");
// x.introduce();

// Question 3
// class BankAccount{
//     constructor(accountNumber, balance,ownerName){
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//         this.ownerName = ownerName;
//     }
//     get accNum(){
//         return this.accountNumber;
//     }

//     get bal(){
//         return this.balance
//     }
//     get ownerN(){
//         return this.ownerName
//     }
//     deposit(amount){
//         this.balance += amount;
//         console.log(`${amount}`);
//     }
//     withdraw(amount){
//         this.balance -= amount
        
//     }
// }
//   let accBln = new BankAccount(123456,1500,"Hamza saeed")
//   accBln.deposit(200);
//   console.log(`Amount after deposit ${accBln.bal}`);
//   accBln.withdraw(500);
//   console.log(`Amount after widthdraw ${accBln.bal}`);

// Question 4
// class BankAccount{
//     constructor(accountNumber, balance,ownerName){
//         this.accountNumber = accountNumber;
//         this._balance = balance;
//         this.ownerName = ownerName;
//     }
//     get bal(){
//         return this._balance
//     }
     
//     depositing(amount){
//          this._balance += amount 
//         console.log(`your balance is ${this._balance}`);
//     }
//     bankNm(){
//      let bankknm = "Helifex";
//      let accType = "Current account"
//      return (`Bank name: ${bankknm}  Account Type: ${accType}`);
//  }
//     getBankInfo = function(nm){
//      console.log(nm);
//     }
// }
//   let x = new BankAccount(1234,1500,"hamza saeed");
//   x.depositing(300);
//   console.log(x.bal);
//   let v =  x.bankNm()
//  x.getBankInfo(v);

// Question 5
// class Address {
//     constructor(street, city, state, zipCode){
//         this._street = street;
//         this._city = city;
//         this._state = state;
//         this._zipcode = zipCode
//     }
//     addInfo(){
//         console.log(`${this._street}`);
//         console.log(`${this._city}`);
//         console.log(`${this._state}`);
//         console.log(`${this._zipcode}`);
//     }
//  }
//  class Person{
//     constructor(addrss){
//         this._address = addrss
//     }
    
//  }

//  let a = new Address(12,"luton","bedforshire","LU4 9DY");
//  let p = new Person(a.addInfo());

// Question 6

// class Shape {
//     constructor(color){
//         this._color = color;
//     };
//     draw(){
//         console.log(`Drawing a shape`);
//     }
// }
// class Circle extends Shape{
//     constructor(color){
//         super(color);
//     }
//     draw(){
//         console.log(`Drawing a circle`);
//     }
// }
// class Rectangle extends Shape{
//     constructor(color){
//         super(color);
//     }
//     draw(){
//         console.log(`Drawing a rectangle`);
//     }
// }

//  let v = new Shape ("green");
//  v.draw();
//  let w = new Circle("red");
//  w.draw();
//  let x = new Rectangle("black");
// x.draw();


/*
Getters And Setters Assignment

1. *Bank Account with Getter and Setter:*
   - Create a class called "BankAccount" with private properties: _accountNumber, _balance, and _ownerName.
   - Implement getters and setters for _balance and _ownerName properties. The getter for _balance should return the balance with a currency symbol, and the setter should ensure that the balance is not set to a negative value.
   - Implement a getter for _accountNumber that generates a unique account number when accessed for the first time.
   - Create an instance of the BankAccount class, set the owner's name and balance using the setters, and demonstrate accessing the account number and balance using getters.

2. *Temperature Converter with Getter and Setter:*
   - Create a class called "TemperatureConverter" with private properties: _celsius and _fahrenheit.
   - Implement getters and setters for _celsius and _fahrenheit. The setter for _celsius should update _fahrenheit accordingly, and vice versa.
   - Implement a getter for _celsius that returns the temperature in Celsius and a getter for _fahrenheit that returns the temperature in Fahrenheit.
   - Create an instance of the TemperatureConverter class, set the temperature in Celsius using the setter, and demonstrate accessing the temperature in both Celsius and Fahrenheit using getters.

These assignments will help your students practice implementing getters and setters in JavaScript classes, understanding their purpose in maintaining data integrity, and using them to perform conversions or validations.
*/
// Question 1
// class BankAccount {
//     constructor(accountNumber,balance,ownerName){
//         this._accountNumber = accountNumber;
//         this._balance = balance;
//         this._ownerName = ownerName;
//     }
//     get accNum () {
//         return this._accountNumber;
//     }
//     get accBln (){
//         return (`£${this._balance}`)
//     }
//     get ownNam (){
//         return  this._ownerName
//     }
//     set acnum (num){
//         this._accountNumber = Math.round( Math.random() * num);

//         console.log(this._accountNumber);
//     }
//     set blnsAcc (bl){
//         this._balance = bl;
//         if ( this._balance > 0 || this._balance < 0 ){
//             console.log(`£${this._balance}`);
//         }
//     }
//     set ownname (oName){
//         this._ownerName  = oName;
//         console.log(this._ownerName);
//     }

// }

// let x = new BankAccount (12345,1500,"Hamza Saeed");
// console.log(x.accNum);
// console.log(x.accBln);
// console.log(x.ownNam);
// x.acnum = 452212334
// x.blnsAcc = 1
// x.ownname = "Umer Saeed";

// Question 2
// class TemperatureConverter{
//     constructor(celsius,fahrenheit){
//         this._celsius = celsius;
//         this._fahrenheit = fahrenheit
//     }
// (10°C × 9/5) + 32 = 50°F

// get cel (){
//    return (`${this._celsius}°C`);
// }

// set ce(val){
//     this._celsius = val;
//     console.log(`${this._celsius}°C`);
// }
// get fah (){
//     this._fahrenheit = ((this._celsius * 9/5) + 32);
//     return ( this._fahrenheit + "°F")
// }
// }
// let x = new TemperatureConverter(1);
// console.log(x.cel);
// x.ce = 31;
// console.log(x.fah);


/*
Rest And Spread Operator Assignments

*Array Assignments:*

1. *Array Concatenation with Spread Operator:*
   - Create two arrays: firstArray and secondArray containing elements of your choice.
   - Use the spread operator to concatenate firstArray and secondArray into a new array called concatenatedArray.
   - Display concatenatedArray to verify that it contains all elements from both arrays.

2. *Array Filtering with Rest Parameter:*
   - Create a function called filterNumbers that takes a rest parameter ...numbers representing an array of numbers.
   - Implement the function to filter out even numbers from the array and return a new array containing only odd numbers.
   - Demonstrate calling the filterNumbers function with an array of numbers and display the filtered result.

*Object Assignments:*

1. *Object Merging with Spread Operator:*
   - Create two objects: firstObject and secondObject with different key-value pairs.
   - Use the spread operator to merge firstObject and secondObject into a new object called mergedObject.
   - Display mergedObject to verify that it contains properties from both objects.

2. *Object Destructuring with Rest Parameter:*
   - Create an object called student with properties like name, age, and grade.
   - Create a function called displayStudentInfo that takes an object as an argument and uses object destructuring with a rest parameter to extract the name and age properties.
   - Implement the function to log the extracted name and age to the console.
   - Demonstrate calling the displayStudentInfo function with the student object as an argument.

These assignments will help your students practice using the rest and spread operators with both arrays and objects, showcasing their versatility in handling data structures efficiently.
*/

// *Array Assignments:*
//Question 1

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];
// let arr3 = [...arr1,...arr2];
// console.log(arr3);

//Question 2
// function filterNumbers(...arr){
//     let v = arr.filter(num => num % 2 === 1)
//     return (v);
// }
// let x = filterNumbers(1,2,3,4,5,6);
// console.log(x);

// *Object Assignments:*

// Question 1

// let firstObject = {
//     name : "Hamza Saeed",
//     age: 27
//     }
//     let secondObject = {
//         subject: "Computer Science, Physics, Mathamatics",
//         level : "Post graduate",
//     }
    
//     let mergedObject = {
//         ...firstObject,
//         ...secondObject
//     }
    
//     console.log(mergedObject);

// Question 2
// let student = {
//     name: "Hamza Saeed",
//     age: 27,
//     grade: "Post graduate"
// }

// function displayStudentInfo(val){

//     let {name,age} = val
//     console.log(name);
//     console.log(age);
// }
// displayStudentInfo(student)
/*
Array Advance Methods Assignments Map,Filter And Reduce With Method Chaining

*1. Array Transformation with Map and Filter:*
- Create an array of numbers called numbersArray containing both even and odd numbers.
- Use the filter method to filter out odd numbers from numbersArray.
- Use the map method to square each remaining even number in the filtered array.
- Display the final transformed array.

*2. Array Summation with Reduce:*
- Create an array of numbers called sumArray.
- Use the reduce method to calculate the sum of all numbers in sumArray.
- Display the sum.

*3. Array of Objects Transformation with Map and Filter:*
- Create an array of objects called students where each object represents a student and has properties like name, age, and score.
- Use the filter method to filter out students with a score below 60.
- Use the map method to transform the remaining student objects into a new array containing only their names and scores.
- Display the final transformed array of names and scores.

*4. Method Chaining:*
- Create an array of strings called wordsArray.
- Chain the filter, map, and reduce methods together to perform the following operations:
  - Filter out words with less than 5 characters.
  - Map each remaining word to its length.
  - Reduce the mapped array to calculate the total length of all remaining words.
- Display the total length of words after the method chaining.

These assignments will help your students understand and practice using map, filter, reduce, and method chaining in JavaScript for array transformations, data filtering, and calculations.
*/

// Question 1
// let numbersArray = [1,2,3,4,5,6,7,8,9,10];

// let filt = numbersArray.filter(num => num % 2 === 1)
// console.log(filt);
// let sqr =numbersArray.filter(num => num % 2 === 0).map(num => num * num);
// console.log(sqr);

// Question 2
// let sumArray = [1,2,3,4,5];

//  let ar = sumArray.reduce((num,index) => num + index )
//  console.log(ar);

// Question 3 
// let student = [
//     {name:"Hamza Saeed",age: 27,score: 25},
//     {name:"Umer Saeed",age: 24,score: 30},
//     {name:"Ali Saeed",age: 23,score: 250},
//     {name:"Naeem Saeed",age: 28,score: 60},
//     {name:"John Saeed",age: 21,score: 24},
//     {name:"Johnson Saeed",age: 21,score: 77}

// ]
//  let fil = student.filter(num => num.score <= 60)
//  console.log(fil);
//  let fil2 = student.filter(num => num.score >= 60).map(nam =>({name: nam.name , score: nam.score}))
//  console.log(fil2);

// Question 4

// let wordsArray = ["hamza","umer","ali","naeem","elon musk","imran"];
// let fil = wordsArray.map(num => num.length).filter(e => e < 5)
// console.log(fil);
// let fil1 = wordsArray.map(num => num.length).filter(e => e >= 5).reduce((ee,i) => ee + i)
// console.log(fil1);