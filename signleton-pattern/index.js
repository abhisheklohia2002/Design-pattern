
// (function() {
// this function is look like Useeffect hook . what the name is function is Immediately Invoked Function Expression (IIFE)  and also kown as self executing anonymous function
// })();

function Process(state){
    this.state = state;
}
const Singleton = (()=>{
function ProcessManager(){
    this.numprocess = 0;

}
let pManager;
function CreateProcessManager(){
    pManager = new ProcessManager();
    return pManager;

}

return {
    getProcessManager:()=>{
       if(pManager){
        pManager = CreateProcessManager();
        return pManager
       } 
    }
}
})() 


const Process_Manager =  Singleton.getProcessManager();
const Process_Manager2 = Singleton.getProcessManager();
console.log(Process_Manager === Process_Manager2)