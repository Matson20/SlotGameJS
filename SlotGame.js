var wallet = 0;
var bet = 0;
var randomNum1 = "";
var randomNum2 = "";
var randomNum3 = "";


function addMoney() {
//Tallennetaan käyttäjän syöte muuttujaan
    wallet += Number(document.getElementById("money").value);
    if (wallet > 0) {
        document.getElementById("wallet").innerHTML = wallet + " $";
        document.getElementById("answer").innerHTML = "";
    } else {
        document.getElementById("answer").innerHTML = "Inserted amount has to be more than 0.";
    }
}

function chooseBet() {
    bet = Number(document.getElementById("bet").value);
    if (bet > 0) {  
        
        document.getElementById("betStatus").innerHTML = "Your bet " + bet + " $";
        document.getElementById("answer").innerHTML = "";
    } else if (bet == 0) {
        document.getElementById("answer").innerHTML = "The bet has to be more than 0 $";
    } else {
        document.getElementById("answer").innerHTML = "Can't add negative bet.";
    }
}

function rollDices() {
    
    if (wallet >= 0 && bet > 0) {

        randomNum1 = Math.round((Math.random()*5)+1);
        randomNum2 = Math.round((Math.random()*5)+1);
        randomNum3 = Math.round((Math.random()*5)+1);

        if (randomNum1 == 6 && randomNum2 == 6 && randomNum3 == 6) {
            wallet += bet *6;
        } else if (randomNum1 == 6 && randomNum2 == 6 && randomNum3 != 6 ||
            randomNum1 != 6 && randomNum2 == 6 && randomNum3 == 6 || 
            randomNum1 == 6 && randomNum2 != 6 && randomNum3 == 6) {
                wallet += bet * 4;
        } else if (randomNum1 == 6 && randomNum2 != 6 && randomNum3 != 6 ||
            randomNum1 != 6 && randomNum2 == 6 && randomNum3 != 6 ||
            randomNum1 != 6 && randomNum2 != 6 && randomNum3 == 6) {
                wallet += bet * 2;
        }

        document.getElementById("dice1").innerHTML = randomNum1;
        document.getElementById("dice2").innerHTML = randomNum2;
        document.getElementById("dice3").innerHTML = randomNum3;

        document.getElementById("wallet").innerHTML = wallet + " $"
        
    } else if (bet == 0) {
        document.getElementById("answer").innerHTML = "Please insert the bet first."
    } else {
        document.getElementById("answer").innerHTML = "You can't play. You don't have any money.";
    }

    wallet = wallet - bet;
  
}