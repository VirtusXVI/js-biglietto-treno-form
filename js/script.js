// VARIABLES
let userKilometers = document.querySelector("userKm");
let userAge = document.getElementById("userAge").value;


// EXECUTING ACTIONS
let userPrice = userKilometers * 0.21;
if(userAge === "Over"){
    userPrice = userPrice - (userPrice * 0.4);
} else if(userAge < 18){
    userPrice = userPrice - (userPrice * 0.2);
}

let generateButton = document.getElementById("ms_generate_button");
let cancelButton = document.getElementById("ms_cancel_button");
console.log(generateButton)
console.log(cancelButton)

generateButton.addEventListener( "click" ,
    function(){
        console.log(userKilometers)
        console.log(userAge)
    }
)