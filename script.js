const mainContainer = document.querySelector(".screen1")
const thanksContainer = document.querySelector(".screen2")
const submitButton = document.getElementById("img1")
const rateAgain = document.getElementById("btnReset")


submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    window.location.reload(true)
})



const texts = [
    "Take chances, try, fight, show yourself how incapable you are.",
    "There are people, just like you, who are like a cloud. We look and see an animal.",
    "The merit of defeat is all yours, be proud.",
    "It's just a bad phase, it's going to get worse soon.",
    "When life knocks you down, take the chance and take a nap.",
    "It was never bad luck, it was always incompetence!",
    "The problem is not on Monday, it's in your life.",
    "You can't change your past, but you can ruin your future.",
    "It may be that your purpose in life is to serve as a warning to others."
]

const text = Math.floor(Math.random() * texts.length);
const span = document.getElementById("span")
span.textContent = texts[text]


