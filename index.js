//assigning each button using the id
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

//assigning the countLabel

const countLabel = document.getElementById("countLabel");

let count = 0;
//handling the decrease button
decrease.onclick= function(){
    count--;
    countLabel.textContent=count;
}

//handling the reset button to be 0
reset.onclick=function(){
    count=0;
    countLabel.textContent=count;
}

//handling the increase button
//it will increase with tha value of one
//and update the countLabel on the screen
increase.onclick =function(){
    count++;
    countLabel.textContent =count;
}



