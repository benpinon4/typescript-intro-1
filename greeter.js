// function greeter(person) {
//     return "Hello, " + person;
//   }
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Bobby", lastName: "mcNeil" };
document.body.textContent = greeter(user);
