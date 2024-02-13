let petID=0;
//constructor
function Pet(n,a,g,s){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.service=s;
    this.id=petID++;//internal id
}

function getE(id){
    return document.getElementById(id);
}
//get elements from HTML
let inputName= getE("txtName");
let inputAge= getE("txtAge");
let inputGender= getE("txtGender");
let inputService=getE("txtService");

function isValid(aPet){
    let validation=true;
    //clear the style
    //document.querySelectorAll("inputs");
    getE("txtName").classList.remove("alert-error");
    getE("txtAge").classList.remove("alert-error");
    if(aPet.name==""){
        //the pet is not valid
        validation=false;
        getE("txtName").classList.add("alert-error");
    }
    if(aPet.age==""){
        validation=false;
        getE("txtAge").classList.add("alert-error");
    }
    return validation;
}

function showNotifications(msg,type){
    getE("notifications").classList.remove("hidden");
    getE("notifications").innerHTML=`<p class="${type}">${msg} </p>`;
    
    setTimeout(function(){
        getE("notifications").classList.add("hidden");
    },3000);
}
function register(){
    //1)getting value
    //2) create the newPet using the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputService.value);
    console.log(newPet);

    if(isValid(newPet)==true){
        //3) push the newPet to the array
        salon.pets.push(newPet);
        //4) call display function
        displayPetCards();
        //5) clear the input
        inputName.value="";
        inputAge.value="";
        inputGender.value="";
        inputService.value="";

        showNotifications("Successful registration","alert-success");
    }else{
        showNotifications("Please fill out all the required fields","alert-error");
    }
}
function deletePet(petID){
    let deleteIndex;// to get the index of the array (position of the obj)
    for(let i=0;i<salon.pets.length;i++){
        let pet = salon.pets[i];
        if(pet.id==petID){
            deleteIndex=i;
            break;
        }
    }
    getE(petID).remove();//remove from the HMTL
    salon.pets.splice(deleteIndex,1);//remove the pet from the array
}
function init(){
    //creating predefined obj
    
    let pet3=new Pet("Speedy",70,"Male","Grooming");
    let pet4=new Pet("Scooby",60,"Male","Vaccine");
    let pet5=new Pet("Scrappy",50,"Male","Nails");
    let pet6=new Pet("Tweety",70,"Male","Grooming");
    salon.pets.push(pet3,pet4,pet5,pet6);
    //exacuting fn
    displayPetCards();
}
window.onload=init;// wait to render the HTML

