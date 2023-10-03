function Developer(name){
    this.name = name;
    this.type = "developer";

}

function Tester(name){
    this.name = name;
    this.type = "tester";

};

function Employfactory(){
    this.create = (name,type)=>{
switch(type){
    case 1:
        return new Developer(name);

    case 2:
        return new Tester(name);
    
}
    }
}

function Say(){
    console.log("Hi I am "+this.name + " and I am "+this.type)
}



const employfactory = new Employfactory();
const arr_employ = [];
arr_employ.push(employfactory.create("Abhishek",1));
arr_employ.push(employfactory.create("akshay",2));


arr_employ.forEach((e,i)=>{
    Say.call(e)
})



