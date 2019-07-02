


let txt;
let responce;
let arrive;
let needGas;
let drinks;
let basement;
let mernman;
let tortureFam;
let ghosts;
let rndNum;
//this determines the players path later in the game
let playerState = 1;
let person = prompt("First what is your name?");


alert(
  "You are travelling with a group of friends to visit a cabin your friend Rob has rented for the weekend. "
);


// forces the game to end
function gameOver(g){
    return ;
}

//This function picks a monster if the player state is set to 1


function monsterPicker(playerState) {
     mernman = 1;
     tortureFam = 2;
     ghosts = 3;
     rndNum = Math.floor(Math.random() * 3 + 1);
    
    return rndNum;
}


function lowGas(needGas){
needGas = prompt(
  person +
    ", Your gas is getting low, your group is coming up to a run down gas station. Do you stop for gas?"
);

    if(needGas === "yes" || needGas === "Yes"){
        alert("You pull into a run down gas station.")
    } else if (needGas === "no" || needGas === "No"){
        alert("You run out of gas and have to be towed home. Game Over.");
        gameOver(g);
    }

}

lowGas();


function stop4Gas(responce) {
    responce = prompt(
      "The gas station attendant warns the group that ghosts haunts the cabin they are heading too. Do you heed his warning?"
    );
    
    if (responce === "no" || responce=== "No") {
        alert("You continue on your way. The gas attendant was crazy");    
    } else if (responce === "Yes" || responce === "yes") {
         alert ("You listen to the gas station attendant's advice and go home. Game Over");
         gameOver(g);
    }
}

stop4Gas();

function arriveCabin(arrive) {
    alert(
      "You and your friends arrive at the cabin. It is quiet and quaint. See the gas attendant was full of it."
    );
     arrive = prompt(
      person + ", You are tired from the trip. Do you want to take a nap?"
    );
    
    if(arrive === "yes" || arrive === "yes") {
        
        alert("The player wakes up to an attack");
        playerState = 1;
        console.log(playerState);
    } else if (arrive === "no" || arrive === "No") {
        alert(
          "You decide that you can sleep later. So your group unpacks and decides to have a barbaque outside and have some drinks."
        );
    } else {
        return alert("invalid choice");
    }
}

arriveCabin();


function drink(drinks){

 drinks = prompt("Do you drink with your friends?");

    if (drinks === "Yes" || drinks === "yes"){
        alert("You have too many and pass out.")
        playerState = 1;

    } else if (drinks === "No" || drinks === "no"){
        alert(
          "You decide not to drink,instead you just take in nature. Time passes and starts to get dark. Your group heads inside. The sun sets."
        )}
        else {
            return alert("invald choice");
        }
    }

drink();

//monster appears

function basementChoice(basement) {
    basement = prompt ("Your friends are sitting around the fireplace when you hear a loud slam, the basement trap door has open up. Do you investigate with your friends?");
    if (basement === "Yes" || basement === "yes"){
        alert("Your group heads down to the spacious basement where a bunch of antiques are spread about")
    } else if (basement === "no" || basement === "No") {
        alert("You wait upstairs for your friends to investigate")
        playerState = 1;
    } else {
        return alert("invalid choice");
    }
} 


