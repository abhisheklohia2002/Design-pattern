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
// console.log(builder)

// const user= new User("bob",undefined,undefined,new Address("North Delhi","Aman Vihar"));
// console.log(user)


// Example for 2 
//define a class for main object you want to build 
class Product{
    constructor(name,price,description){
        this.name = name;
        this.price = price;
        this.description = description
    }

    displayInfo(){
        console.log(`Product name is ${this.name} and Price value is ${this.price}. you can read Description ${this.description}`)
    }
}


class ProductBuilder{
    constructor(name,price,description){
        this.name = name || "";
        this.price = price || 0;
        this.description = description || ""
    };

    SetName(name){
        this.name = name;
        return this // Return 'this' to support method chaining
    };
    setPrice(price){
        this.price = price;
        return this
    };

    setDescription(description){
this.description = description;
return this;

    };
    Build(){
    return new Product(this.name,this.price,this.description)
    }
}

const ProductBuilde_chain = new ProductBuilder().setPrice(500).SetName("BitCoins").setDescription("it's is Cryptocurreny coins");
console.log(ProductBuilde_chain.Build());
ProductBuilde_chain.Build().displayInfo()
