let salon={
    name:"The fashion pet",
    phone:"999-999-9999",
    address:{
        street:"Palm",
        number:"262-K",
        zip:"22333"
    },
    pets:[
        {
            name:"Scooby",
            age:60
        },
        {
            name:"Scrappy",
            age:50
        },
        {
            name:"Tweety bird",
            age:80
        }
    ]  //pets array
}

console.log(salon.pets[0].name);
console.log(salon.pets[1].name);
console.log(salon.pets[2].name);
console.log(salon.pets.length);

//use a for loop to travel the array

function displayFooterInfo(){
    
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} is located in ${salon.address.street} ${salon.address.number} ${salon.address.zip}</p>
    `;
    
}
displayFooterInfo();