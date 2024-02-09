let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreTow(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

let homeStoreEl2 =document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreOne(){
    guestScore += 1
    homeStoreEl2.textContent = guestScore
}

function increaseGuestScoreTow(){
    guestScore += 2
    homeStoreEl2.textContent = guestScore
}

function increaseGuestScoreThree(){
   guestScore += 3
   homeStoreEl2.textContent = guestScore
}
let homeStoreEl3 =document.getElementById("reset")
function reset(){
    homeScore=0
    guestScore=0
    homeStoreEl2.textContent = guestScore
    homeStoreEl.textContent = homeScore
    document.getElementById("demo").innerHTML="Game restarted!"
}

let homeStoreEl4 =document.getElementById("result")
function result(){
    if(homeScore===guestScore){
        document.getElementById("demo").innerHTML="Tie!!!"
    }
    else if(homeScore>guestScore){
        document.getElementById("demo").innerHTML="Home is the winner! "
    }
    else{
        document.getElementById("demo").innerHTML="Guest is the winner!"
    }
}