//create specific variables
let PHealth=5;
let DHealth=10;
let PDamage;
let DDamage;
let PInput;
let victory = "The Player Is Victorious";
let loss = "The Dragon Has Slain The Player";
let PResult = "Player Damage=";
let DResult = "Dragon Damage=";

//create input for player. while loop + conditionals
while (PHealth > 0 && DHealth > 0){
    PInput = Number(prompt("Enter a number (1-5) to deal damage to the dragon!"))
    PDamage = Math.floor((Math.random() * PInput) + 1)
    if(PInput > 5){
        DHealth = DHealth-1;
    }else{
        DHealth = DHealth-PDamage;
    }
    if(DHealth > 0){
        DDamage = Math.floor((Math.random() * 2) + 1)
        PHealth = PHealth-DDamage;
    }
    if(PHealth > 0){
        document.body.innerHTML=PResult+" "+PDamage+" "+DResult+" "+DDamage+" "+victory;
    }
    if(PHealth < 0){
        document.body.innerHTML=PResult+" "+PDamage+" "+DResult+" "+DDamage+" "+loss;
    }
}
//math.random went wrong. it's not calculating correct damage. sorry.