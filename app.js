
const btpBtn = document.getElementById("btp-btn");
const btpCont = document.querySelector(".btp-container");
const closeMod = document.getElementById("close-modal");
const inp = document.querySelectorAll("input");
let input = "";
const radioBtns = document.querySelectorAll(".radio-btn");
const btpCards = document.querySelectorAll(".btp-card");
const pledgeEls = document.querySelectorAll(".pledge");


// opening & closing modal

btpBtn.addEventListener("click", ()=>{
    btpCont.classList.add("activated");    
});

closeMod.addEventListener("click", ()=>{
    btpCont.classList.remove("activated");
});

// selcting the card

const cardOne = document.getElementById("card1");
const cardTwo = document.getElementById("card2");


radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener("change", () => {
        clearSelect();
        selectNew(radioBtn);
        pledgeAdd(radioBtn);
    });
});

selectNew = radioBtn => {
    const radio = radioBtn.parentElement.parentElement;
    radio.classList.add("active");
    radioBtn.checked = true;
    setTimeout(() => {
        radioBtn.scrollIntoView();
    }, 500);
}

const clearSelect = () =>{
    btpCards.forEach(btpCard => {
        btpCard.classList.remove("active");
    })
    pledgeEls.forEach(pledgeEl =>{
        pledgeEl.classList.add("inactive");
        pledgeEl.classList.remove("active");
    })
}

const pledgeAdd = radioBtn =>{
    const radio = radioBtn.parentElement.parentElement;
    const pledgeEl = radio.querySelector(".pledge");
   
    pledgeEl.classList.remove("inactive")
    pledgeEl.classList.add("active")
}

// reward 

const rewardBtn1 = document.getElementById("reward1")
const rewardBtn2 = document.getElementById("reward2")
const pledgeOne = document.getElementById("pledge1")
const pledgeTwo = document.getElementById("pledge2")
const btpCard1 = document.getElementById("btp-card1")
const btpCard2 = document.getElementById("btp-card2")


rewardBtn1.addEventListener("click", ()=>{
    clearSelect();
    btpCont.classList.add("activated");
    cardOne.checked = true;
    pledgeOne.classList.remove("inactive")
    pledgeOne.classList.add("active")
    btpCard2.classList.remove("active")
    btpCard1.classList.add("active")
});
rewardBtn2.addEventListener("click", () =>{
    clearSelect();
    btpCont.classList.add("activated");
    cardTwo.checked = true;
    pledgeTwo.classList.remove("inactive")
    pledgeTwo.classList.add("active")
    btpCard1.classList.remove("active")
    btpCard2.classList.add("active")
});

// MOBILEEE 

const navTitle = document.querySelector(".title");
const navMenu = document.getElementById("menu-ham");
const navClose = document.getElementById("menu-close");
const dropDownOverlay = document.querySelector(".overlay");
const navUl = document.querySelector(".right-ul")

// opening drop down menu

navMenu.addEventListener("click", ()=>{
    navTitle.classList.add("active");
    navClose.classList.add("active");
    dropDownOverlay.classList.add("activated");
    navUl.classList.add("clicked");
    navMenu.classList.add("active");

})

// closing the drop down menu 

navClose.addEventListener("click", ()=>{
    navTitle.classList.remove("active");
    navClose.classList.remove("active");
    dropDownOverlay.classList.remove("activated");
    navUl.classList.remove("clicked");
    navMenu.classList.remove("active");
});

