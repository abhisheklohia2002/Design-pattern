//example for 1 
// class Shape{
//     draw(){

//     }
// }

// class Rule extends Shape{
//     draw(){
//         console.log("Rule 1 is Execute ");
//     }
// }
//  class step extends Shape{
//     draw(){
//         console.log("Step1 is importants")
//     }
//  }

//  class Null_object extends Shape{
//     draw(){
//         // Nothing here 
//         return null
//     }
//  }


//  function Draw_Say(state){
//     state.draw()
//  }


//  const check = new Rule();
//  const check2 = new step();
//  const check3 = new Null_object();
// Draw_Say(check)
// Draw_Say(check2)
// console.log(typeof Draw_Say(check3))


//example 2 for Null Object
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    hasAccess() {
        return this.name === "bob";
    }
}

class NullUser {
    constructor() {
        this.id = -1; // Or any other suitable default value for id
        this.name = "Guest"; // Or any other suitable default value for name
    }
    hasAccess() {
        return false; // A null user does not have access
    }
}

const users = [
    new User(1, "bob"),
    new User(2, "john"),
];

function getUser(id) {
    const user = users.find((user) => user.id === id);
    return user || new NullUser(); // Return a NullUser if user is not found
}

function PrintUser(id) {
    const user = getUser(id);
    console.log(user);

    console.log("hello" + " " + user.name);

    if (user.hasAccess()) {
        console.log("You Have Access");
    } else {
        console.log("You are not allowed here");
    }
}

PrintUser(1); // This will now use a NullUser object for non-existent users
