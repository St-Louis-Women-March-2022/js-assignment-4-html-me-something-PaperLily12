const bulbasaurBall = document.getElementById("bulbasaur")
const charmanderBall = document.getElementById("charmander")
const squirtleBall = document.getElementById("squirtle")

const pokeDict = {
    bulbasaur: {
        element: bulbasaurBall,
        spritePath: "images/bulbasaur.png",
        cry: new Audio("sounds/bulbasaur.mp3")
    },
    charmander: {
        element: charmanderBall,
        spritePath: "images/charmander.png",
        cry: new Audio("sounds/charmander.mp3")
    },
    squirtle: {
        element: squirtleBall,
        spritePath: "images/squirtle.png",
        cry: new Audio("sounds/squirtle.mp3")
    }
}

function openBall(pokemon) {
    const dict = pokeDict[pokemon]
    dict.element.setAttribute("class", "pokemon")
    dict.element.src = dict.spritePath
    dict.cry.play()
}

function closeBall(pokemon) {
    const dict = pokeDict[pokemon]
    dict.element.setAttribute("class", "pokeball")
    dict.element.src = "images/pokeball.png"
}

bulbasaurBall.addEventListener("click", function () {
    if (bulbasaurBall.getAttribute("class") === "pokeball") {
        openBall("bulbasaur")
    } else {
        closeBall("bulbasaur")
    }
})

charmanderBall.addEventListener("click", function () {
    if (charmanderBall.getAttribute("class") === "pokeball") {
        openBall("charmander")
    } else {
        closeBall("charmander")
    }
})

squirtleBall.addEventListener("click", function () {
    if (squirtleBall.getAttribute("class") === "pokeball") {
        openBall("squirtle")
    } else {
        closeBall("squirtle")
    }
})