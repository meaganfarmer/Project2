alert("JavaScript works!");
//
//meagan farmer
//project2
//august 10,2014
//SDI 1408

//NOTES: update regularly through git and add comments of functions throughout the code
//cd ~/Desktop/
//ls
//cs Project2

//start
//start




//variables (string number boolean)

var yourUnicorns = parseInt(prompt("How many unicorns do you have with magical fanny-packs?"));



//prompt



if (yourUnicorns > 0 && yourUnicorns < 100) {
    console.log("Yay, what magical fun can we have with our unicorns");
    
} else 

if (yourUnicorns >= 100) {
    console.log("You lie, no one has that many unicorns with magical fanny-packs");
    
}


//number function

var yourNumber= yourUnicorns;
var myNumber= 60;
var ourUnicorns = yourUnicorns + myNumber
console.log("Together we have "+ ourUnicorns + " unicorns")


var ourUnicorns= function(output) {
var outcome= myNumber + yourNumber;


return ourUnicorns

}   


//number function loop


console.log("let's feed our unicorns!")


var costPerUnicorn = 50
var moneyInPocket = 7000


    if (moneyInPocket/costPerUnicorn >= ourUnicorns) {
              
     
    console.log("yay, happy unicorns! " + moneyInPocket/costPerUnicorn + " unicorns finished their dinner!");
}
else{
    
    
    console.log(" we dont have enough to feed all unicorns ");
     
    }

//boolean function
//to fly we need more than 100 unicorns

if (ourUnicorns => 100) {
    console.log("yay, our magical unicorns can fly us where every you like to go!")
}


var trip= 100;
while(trip > 0) {
    console.log( trip + " How many miles do you want to fly?");
    
    trip--;

};

console.log ("I guess we will not go fly!");



//String function
var trade = (prompt("would you like to trade unicorns"))
var conditionalTrade = yourUnicorns/2
    
if (trade == "yes") {
    

    console.log("great will you trade " + yourUnicorns/2 + " for 1 of mine?");
        
}else
{
    (trade == "no"); {
    console.log("well, perhaps next time");

}
}










