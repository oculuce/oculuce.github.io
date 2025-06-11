let characterSelect = document.querySelector(".character-select")
let characterInfo = document.querySelector(".character-info")

let closeButton = document.querySelector(".close-button")

/* probably a better way to do this */
let characterIcon = document.querySelector(".character-icon")
let characterName = document.querySelector(".character-name")
let characterTags = document.querySelector(".character-tags")
let characterDescription = document.querySelector(".character-description")

const getCharacters = () => {
    return [
        {
            "characterID": "sc4v",
            "displayName": "SC-4V (Essie)",
            "characterImage": "sluggy.png",
            "tags": ["She/Her", "Debris Hoarder", "Droid"],
            "description": ["10% robot, 90% tables and chairs and rocks and pebbles and gems and planks and debris and", "Primary foe of AIEE's Team Scream, as a natural consequence of her stealing everything nailed down or otherwise within AIEE.","Safe is a personal hammerspace... but things don't always come out the same. There is a whole other world of scrap and stolen baubles in there... so you probably shouldn't give her anything for safekeeping."]
        },
        {
            "characterID": "ieda",
            "displayName": "Ieda",
            "characterImage": "sluggy.png",
            "tags": ["She/They", "Botanical Menace", "Droid"],
            "description": ["Does it count as gardening if you mostly just plant seeds that grow horrifically fast in buildings for fun?","Almost constantly with Avo- her presence has substantially reduced incidents of seeds growing inside Ieda.","Has associated with Essie as siblings due to visual similarities. Essie does not know her."]
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
    characterTags.innerHTML = null
    character.tags.forEach((tag)=>{
        characterTags.insertAdjacentHTML('beforeend', `<div>${tag}</div>`)
    })
    characterDescription.innerHTML = null
    character.description.forEach((text)=>{
        characterDescription.insertAdjacentHTML('beforeend', `<p>${text}</p>`)
    })
    characterIcon.src = `../images/${character.characterImage}`

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