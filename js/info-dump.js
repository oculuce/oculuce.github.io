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
            "characterID": "sc4v2",
            "displayName": "Flesh Essie",
            "characterImage": "sluggy.png",
            "tags": ["She/Her", "Limb Hoarder", "Undeadish"],
            "description": ["She keeps spare limbs under her turtleneck. Without them, it's just ribs and a spine! Which isn't exactly great at functioning as a proper torso... but it's not like Essie has to worry about like blood and stuff.",`The antennae hairband is just a hairband, but she likes it a lot.`]
        },
        {
            "characterID": "ieda",
            "displayName": "Ieda",
            "characterImage": "sluggy.png",
            "tags": ["She/They", "Botanical Menace", "Droid"],
            "description": ["Does it count as gardening if you mostly just plant seeds that grow horrifically fast in buildings for fun?","Almost constantly with Avo- her presence has substantially reduced incidents of seeds growing inside Ieda.","Has associated with Essie as siblings due to visual similarities. Essie is fine with this."]
        },
        {
            "characterID": "avo",
            "displayName": "Avo",
            "characterImage": "sluggy.png",
            "tags": ["Mirror Pronouns", "Weird Thing", "Greater Fiendling"],
            "description": ["Big ol' fiendling. Tastes like meat broth, but mostly like severe burns.","Almost constantly with Ieda- her presence has substantially reduced the amount of biomatter Ieda has for her crops.","Feels extremely superior to Acaud due to being a lone fiendling, thriving all by herself'. Ieda's contribution to Avo's survival has been repeatedly pointed out by Acaud."]
        },
        {
            "characterID": "zylvezter",
            "displayName": "Zylvester",
            "characterImage": "sluggy.png",
            "tags": ["She/He", "Exanimate Excavator", "Cordysect"],
            "description": ["Super duper alive bug. His head fits perfectly into Essies concave face, therefore they are together.", "Has stolen and/or damaged the least amount of property from AIEE, as far as semi-regulars go."]
        },
        {
            "characterID": "ampersandy",
            "displayName": "&ampy",
            "characterImage": "sluggy.png",
            "tags": ["Any/All", "Real Robot"],
            "description": ["Ampersandy/Andy/Sandy. Old robot from before the common robot was full of yummerly blue soul juice. Intended to be a superstructure, he mostly just slithers inside AIEE, poking at bits while staying undetected. SC-4V trades valuable things with pup sometimes.","The secondary monitor is generally a flower, but can be swapped to a monocle, eye and other stuff. It's just a monitor..."]
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