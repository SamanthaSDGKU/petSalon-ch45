var globalVar="I'm in global scope";

function myFunction(){
    //this fn can access globalVar
   
    console.log(globalVar);
}

myFunction();

function myFunction2(){
    var localVar="I'm in a local scope";
    
    console.log(localVar);
    
    if(true){
        let blockVar = "I am block scope";
        console.log(blockVar);
    }
    
}

myFunction2();

function planeTicket(destination,price){
    console.log("Traveling to ... " + destination);
    return price*1.11;
}

function calculateProfits(){
    var price1=planeTicket("Italy",100);
    var price2=planeTicket("Amsterdam",200);
    var price3=planeTicket("Barcelona",150);
    
    console.log(price1+price2+price3);
}

calculateProfits();
