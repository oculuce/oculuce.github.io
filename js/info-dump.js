let characterSelect = document.querySelector(".character-select")
let characterInfo = document.querySelector(".character-info")

let closeButton = document.querySelector(".close-button")

/* probably a better way to do this */
let characterName = document.querySelector(".character-name")
let characterTags = document.querySelector(".character-tags")
let characterDescription = document.querySelector(".character-description")

const getCharacters = () => {
    return [
        {
            "characterID": "sc4v",
            "displayName": "SC-4V (Essie)",
            "characterImage": "sluggy.png",
            "tags": ["wawa panini", "real tag yummy", "She/Her", "Debris Collector"],
            "description": ["10% robot, 90% tables and chairs and rocks and pebbles and gems and planks and debris and", "Primary foe of AIEE's Team Scream, as a natural consequence of her stealing everything nailed down or otherwise within AIEE."]
        },
        {
            "characterID": "sc4v2",
            "displayName": "SC-4V (Essie) Two",
            "characterImage": "sluggy.png",
            "tags": ["wawa panini", "real tag yummy", "Who the fuck"],
            "description": ["Who is this"]
        },
    ]
}

const showDescription = (character) => {
    characterName.innerHTML = character.displayName
    // characterTags.innerHTML = character.
    // characterDescription.innerHTML = character.
    characterSelect.classList.add('show-none')
    characterInfo.classList.add('show-flex')
}
const hideDescription = () => {
    characterSelect.classList.remove('show-none')
    characterInfo.classList.remove('show-flex')
}
closeButton.addEventListener("click", () => {
    hideDescription()
})

const renderCharacterButtons = () => {
    let characterList = getCharacters()
    characterList.forEach((character) => {
        /* let characterButton =  */
        characterSelect.insertAdjacentHTML('beforeend', `<div id="${character.characterID}" class="character-tag button-texture"><img src="../images/${character.characterImage}">${character.displayName}</div>`)
        document.querySelector(`#${character.characterID}`).addEventListener("click", () => {
            showDescription(character)
        })
    })
}

renderCharacterButtons()