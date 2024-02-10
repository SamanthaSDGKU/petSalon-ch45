let salon={//object
    name:"The fashion pet",
    phone:"999-999-9999",
    address:{
        street:"Palm",
        number:"262-K",
        zip:"22333"
    },
    pets:[] //array
}
function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} is located in ${salon.address.street} ${salon.address.number} ${salon.address.zip}</p>
    `;
}

displayFooterInfo();
