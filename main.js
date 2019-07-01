let txt;

let person = prompt("First what is your name?");

alert(
  "You are travelling with a group of friends to visit a cabin your friend Rob has rented for the weekend. "
);
          
let responce = prompt(
  person +
    ", Your gas is getting low, your group is coming up to a run down gas station. Do you stop for gas?"
);


function stop4Gas(n) {
    if (n === "yes") {
        responce = n;
        alert("you said yes");
        console.log(responce);
    } else {
        return console.log("Wrong entry");
    }
}

stop4Gas(responce);