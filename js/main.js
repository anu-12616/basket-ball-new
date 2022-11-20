let homePts = document.getElementById("home-pts");
homeCount=0;
let guestPts = document.getElementById("guest-pts");
guestCount=0;

function homeAddPoint(){
    homePts.textContent = homeCount;
    homeCount+=1;
}

function homeAddTwoPoints(){
    homePts.textContent = homeCount;
    homeCount+=2;
}
function homeAddThreePoints(){
    homePts.textContent = homeCount;
    homeCount+=3;
}

function guestAddPoint(){
    guestPts.textContent=guestCount;
    guestCount+=1;
}

function guestAddTwoPoints(){
    guestPts.textContent=guestCount;
    guestCount+=2;
}
function guestAddThreePoints(){
    guestPts.textContent=guestCount;
    guestCount+=3;
}