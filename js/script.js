// VARIABLES
let generateButton = document.getElementById("ms_generate_button");
let cancelButton = document.getElementById("ms_cancel_button");

generateButton.addEventListener( "click" ,
    function(){
        let userName = document.getElementById("userName").value;
        let userKm = document.getElementById("userKm").value;
        let userAge = document.getElementById("userAge").value;
        document.getElementById('output').classList.remove('ms_output');
        // EXECUTING ACTIONS
        let userPrice = userKm * 0.21;
        if(userAge === "Over"){
            userPrice = userPrice - (userPrice * 0.4);
        } else if(userAge === "Minorenne"){
            userPrice = userPrice - (userPrice * 0.2);
        }
        document.getElementById("op_userName").innerHTML = `Nome: ${userName}`;
        document.getElementById("op_userKm").innerHTML = `Chilometri: ${userKm}`;
        document.getElementById("op_userAge").innerHTML = `Età: ${userAge}`;
        document.getElementById("op_userPrice").innerHTML = `Prezzo: ${userPrice}`;
        }
);