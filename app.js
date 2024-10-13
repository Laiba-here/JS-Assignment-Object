//         .... QUESTION 1 ....
// var itemsArray = [
//     { name: "juice", price: 50, quantity: 3 },
//     { name: "cookie", price: 30, quantity: 9 },
//     { name: "shirt", price: 880, quantity: 1 },
//     { name: "pen", price: 100, quantity: 2 }
// ];

// let totalPriceAllItems = 0;

// itemsArray.forEach(item => {
//     let totalPriceEachItem = item.price * item.quantity;
//     console.log(`Total price of ${item.name} is: ${totalPriceEachItem}`);
//     totalPriceAllItems += totalPriceEachItem;
// });

// console.log(`Total price of all items: ${totalPriceAllItems}`);


//         .... QUESTION 2 ....
// var user = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     password: "password123",
//     age: 25,
//     gender: "Male",
//     city: "Karachi",
//     country: "Pakistan"
// };

// if ("age" in user) {
//     console.log("Age property exists in the object.");
// } else {
//     console.log("Age property does not exist in the object.");
// }

// if ("country" in user) {
//     console.log("Country property exists in the object.");
// } else {
//     console.log("Country property does not exist in the object.");
// }
// if ("firstName" in user) {
//     console.log("firstName property exists in the object.");
// } else {
//     console.log("firstName property does not exist in the object.");
// }

// if ("lastName" in user) {
//     console.log("lastName property exists in the object.");
// } else {
//     console.log("lastName property does not exist in the object.");
// }


//         .... QUESTION 3 ....
// function User(name, email, age, gender, city, country) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.gender = gender;
//     this.city = city;
//     this.country = country;

//     this.displayDetails = function() {
//         console.log(`Name: ${this.name}, Email: ${this.email}, Age: ${this.age}, Gender: ${this.gender}, City: ${this.city}, Country: ${this.country}`);
//     };
// }

// var user1 = new User("John Doe", "john@example.com", 25, "Male", "New York", "USA");
// var user2 = new User("Jane Smith", "jane@example.com", 30, "Female", "London", "UK");
// var user3 = new User("Ali Khan", "ali@example.com", 28, "Male", "Karachi", "Pakistan");

// user1.displayDetails();
// user2.displayDetails();
// user3.displayDetails();


//       ..... QUESTION 4 ....
function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Function to save records in local storage
function saveRecord(person) {
    let records = JSON.parse(localStorage.getItem('populationRecords')) || [];
    records.push(person);
    localStorage.setItem('populationRecords', JSON.stringify(records));
}

// Function to display stored records
function displayRecords() {
    const recordsList = document.getElementById('recordsList');
    recordsList.innerHTML = '';
    let records = JSON.parse(localStorage.getItem('populationRecords')) || [];

    records.forEach((record, index) => {
        let li = document.createElement('li');
        li.textContent = `${record.name} | ${record.gender} | ${record.address} | ${record.education} | ${record.profession}`;
        recordsList.appendChild(li);
    });
}

// Handle form submission
document.getElementById('surveyForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const profession = document.getElementById('profession').value;

    // Create a new person record using constructor
    const person = new Person(name, gender, address, education, profession);

    // Save the record to local storage
    saveRecord(person);

    // Clear form fields after submission
    this.reset();

    // Display updated records
    displayRecords();
});

// Display records when the page loads
window.onload = function() {
    displayRecords();
};