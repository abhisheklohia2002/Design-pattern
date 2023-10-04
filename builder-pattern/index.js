class Address{
    constructor(zip,street){
this.zip  = zip;
this.street = street;

    }
}

class User {
    constructor(name,age,phone,address){
this.name = name;
this.age = age;
this.phone = phone;
this.address = address;

    }
}
class UserBuilder{
    constructor(name){
        this.user =new User(name)

    };
    SetAge(age){
        this.user.age = age;
        return this;

    };
    SetPhone(phone){
        this.user.phone = phone;
        return this;
        
    }
    ;
    SetAddress(address){
        this.user.address = address;
        return this
    };
    Build(){
        return this.user;

    }

}

const builder = new UserBuilder("abhishek");
builder.SetAge(20);
builder.SetAddress(new Address("North Delhi","Aman Vihar"))
builder.SetPhone(987456321)
console.log(builder)

// const user= new User("bob",undefined,undefined,new Address("North Delhi","Aman Vihar"));
// console.log(user)