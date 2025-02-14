// function greeter(person) {
//     return "Hello, " + person;
//   }
   
//   let user = [0, 1, 2];
   
//   document.body.textContent = greeter(user);

interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person){

    return "Hello " + person.firstName + " " + person.lastName
}

let user2 = {firstName: "Bobby", lastName: "mcNeil"}

document.body.textContent = greeter(user)