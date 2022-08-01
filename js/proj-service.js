'use strict'

var gProjs = [_createProject("Mines-Sweeper", "Mines-Sweeper", "Try not to die", "The good old game in a new version", "ca-gallery/img/portfolio/Mines-Sweeper.png", ["Matrixes", "keyboard events"]),
_createProject("ball-game", "ball-game", "collect all the balls", "be fast and sharp to survive", "ca-gallery/img/portfolio/ball-game.png", ["Matrixes", "keyboard events"]),
_createProject("pacMan", "pacMan", "eat all the food and Try not to die", "The good old game in a new version", "ca-gallery/img/portfolio/pacMan.png", ["Matrixes", "keyboard events"])
]

function _createProject(id, name, title, desc, url, labels) {
    return {
        id,
        name,
        title,
        desc,
        url,
        publishedAt: new Date(),
        labels,
    }
}

function getProjects() {
    return gProjs
}


