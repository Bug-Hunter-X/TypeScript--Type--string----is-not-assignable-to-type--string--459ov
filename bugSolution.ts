function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(", ");
}

let user = ["Alice", "Bob"];
console.log(greeterArray(user)); //Correct, handles array

let singleUser = "Charlie";
console.log(greeter(singleUser)); // Correct, handles single string