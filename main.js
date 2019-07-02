




let responce;
let arrive;
let needGas;
let drinks;
let basement;
let antique;

let mernman;
let tortureFam;
let ghosts;
let rndNum;
//this determines the players path later in the game
let playerState = 0;
let awake;
let dead;
//this determines what monster appears if the player falls asleep
let rndMonster = monsterPicker();

let person = prompt("First what is your name?");


alert(
  "You are travelling with a group of friends to visit a cabin your friend Rob has rented for the weekend. "
);


// forces the game to end
function gameOver(g){
    return ;
}

//This function picks a monster if the player state is set to 1


function monsterPicker() {
     rndNum = Math.floor(Math.random() * 3 + 1);
    
    return rndNum;
}



function lowGas(){
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


function stop4Gas() {
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

function arriveCabin() {
    alert(
      "You and your friends arrive at the cabin. It is quiet and quaint. See the gas attendant was full of it."
    );
     arrive = prompt(
      person + ", You are tired from the trip. Do you want to take a nap?"
    );
    
    if(arrive === "yes" || arrive === "yes") {
        
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
if (playerState === 0) {
arriveCabin();
}


function drink(){

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

if (playerState === 0){
drink();
}
//monster appears

function basementChoice() {
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

if(playerState === 0){
basementChoice();
}

while(playerState === 1) {
    function yousaGunaDie(){
        dead = prompt("Do you leave your room?");

        if (dead === "yes" || dead === "Yes"){
            alert(
              "As you leave your room, fear parlyses you. An unknown terror Creeps behind you. As you turn around the creature tears you apart."
            );
            gameOver(g);
        } else if (dead === "No" || dead === "no") {
            alert(
              "The lights are cut. You sit in pitch blackness. The door creaks open. Parylysed with fear you don't move, you don't breath. An impossibly heavy weight pounces on your chest. You're unable to breathe as sharp objects rips out your throat."
            );
            gameOver(g);
        }

        }
    alert(" You wake from your slumber to the sounds of screams and terror.");

     awake = prompt("Do you leave your room?")
     if (awake === "yes" || awake === "Yes"){
         playerState = 2;
     } else if (awake === "no" || awake === "No"){
        alert(
          "You stay in your room as the sounds of a terrible monster makes quick work of your friends. Each one of them brutally and horribly torn apart. All is quiet."
        );
        yousaGunaDie();
     }




}

while(playerState === 2){
    console.log("you made it to the last step");
    playerState++
}















//monster choice

while (playerState === 0){

function antiquesPicker() {
    
    antique = prompt(
      "You see three items that stand out to you. A Conch Shell, a Old leather bound Diary, and a old looking necklace. Do you want to pick up one of these items? 1 for Conch, 2 for Diary, 3 for Necklace"
    );
    if (antique === "1") {
         alert(
        "An uncontrollable urge compels you to pick up the conch. You feel as if you should blow it. Yes of course you should."
        
      );
    } else if (antique === "2") {
        alert(
          "The smell of old leather draws you to this ancient looking diary. You take it and are compelled to open it. As you begin to read the diary, it recounts the story of a young girl with a terrible father. The descriptions of pain and horror make your stomach turn. There is a latin phrase written. You are compelled to read it for your friends."
        );
    } else if (antique === "3") {
        alert(
          "The shine of the necklace catches your eye. You pick up the necklace and feel the quality of the workmanship in the piece. You can tell a lot of love and craftsmanship went into making it. It would look nice on you."
        );
    }
    else {
        alert("Invalid Choice")
    }

    return antique;
}


// this section allow player to pick their fate

function pointOfNoReturn() {
    let choose;

    switch (antique) {
      case "1": {
        choose = prompt("Do you want to blow the conch?");
        if (choose === "yes" || choose === "Yes") {
          alert(
            "You place the shell to your lips and give the shell a might blow. Your friends look on in horror. There is a loud cry in the distance!"
          );
        } else if (choose === "no" || choose === "no") {
          antiquesPicker();
        }
        break;
      }
      case "2": {
        choose = prompt("Do you want to read the words?");
        if (choose === "yes" || choose === "Yes") {
          alert(
            "The words seem to sear into your mind as you begin to read the latin words for all in the room to hear 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' The walls shudder, lights flicker. A low moan fills your hearts with dread!"
          );
        } else if (choose === "No" || choose === "no") {
          antiquesPicker();
        }
        break;
      }
      case "3": {
        choose = prompt("Do you put on the necklace?");
        if (choose === "yes" || choose === "Yes") {
          alert(
            "As the chain of the necklace touches your skin, it burns with coldness. You feel suddenly drained and weak. Your friends look at you with concern. In the distance you hear a peircing wail!"
          );
        } else if (choose === "No" || choose === "no") {
          antiquesPicker();
        }
        break;
      }
    }

}

antiquesPicker();

pointOfNoReturn();
playerState = 1;
}
