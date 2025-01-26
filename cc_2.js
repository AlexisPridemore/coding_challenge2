// Task 1 Working with Arrays

let products = ["phone", "laptop", "airpods", "speaker", "tablet"]; //Array of products

products.push("charger");  //Add new product to the end of the array

console.log(products);    //Print the Array of products

products.pop();     //Remove the last product from the array

console.log("Updated products:", products);   //Print the array of products

 // Task 2 Accessing and Modifying Arrays

 let scores = [100, 90, 80, 70, 60];   //Array of scores
 scores[1] = 65;   //Modify the second element of the array
 let total = scores.reduce((a, b) => a + b, 0);    //Calculate the total of the scores
 let average = total / scores.length;     //Calculate the average of the scores 

 console.log("Updated Scores:", scores);   //Print the updated array of scores
 console.log(total);    //Print the sum of the scores
 console.log("Average Score:", average);     //Print the average of the scores

 // Task 3 Working with Objects

 let employee = {
    name: "Micheal Jordan",
    age: 45,
    department: "HR",
    isActive: true
 };     //Obeject of employee

 console.log(employee);     //Print the object of employee

 employee.department = "Customer Service";    //Modify the department of the employee
 employee.position = "Manager";      // Add a new property to the employee

 console.log(employee);    //Print the obbject of employee

 // Task 4 Array of Objects
 
 let customers = [
    {name: "Caitlyn Clark", email: "Clark22@gmail.com", purchaseAmount: 125},
    {name: "Nikola Jokic", email: "Joker15@gmail.com", purchaseAmount: 285},
    {name: "Jamal Murray", email: "Murray27@gmail.com", purchaseAmount: 750}
 ];    // Array of objects of customers

 console.log(customers);    //Print the array of objects of customers

 customers.push({name: "Christian Braun", email: "Braun2@gmail.com", purchaseAmount: 125});    //Add a new customer to the array 

 console.log(customers);    //Print the array of objects of customers
 