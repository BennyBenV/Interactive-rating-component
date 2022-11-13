let submit = document.getElementById("button");
let main2 = document.getElementById("main2");
let main1 = document.getElementById("main");
let selected = document.getElementById("selected"); 
let rates = document.querySelectorAll(".note");
let rateAgain = document.getElementById("button2");

rates.forEach((rating) => {
    rating.addEventListener("click", () => {
        selected.innerHTML = "You selected "+ rating.innerHTML +  " out of 5";
    } )
})



submit.addEventListener("click", () => {
    main1.style.display = "none";
    main2.style.display = "flex";

})

rateAgain.addEventListener("click", () => {
    main2.style.display = "none";
    main1.style.display = "flex";
})