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
            "characterID": "robotdesc",
            "displayName": "&#9432; Automata",
            "characterImage": "icons/robot.png",
            "tags": ["Soulful Machinery"],
            "description": ["Not exactly real robots, most robots underground are mostly full of soul slop that lets things like stray arms shuffle around and attach more things to themselves... which is why most people either keep spare parts in proper storage in the event of temporary unwanted sentience, or at the very least disassembling anything that could get up and walk.","There are a few robots out there that aren't full of Soul, which lets them get away with things others might not be able to..."]
        },
        {
            "characterID": "sc4v",
            "displayName": "SC-4V",
            "characterImage": "icons/sc-4v.png",
            "tags": ["She/Her", "Debris Hoarder", "Droid", "also named Essie!"],
            "description": ["10% robot, 90% tables and chairs and rocks and pebbles and gems and planks and debris and", "Primary foe of AIEE's Team Scream, as a natural consequence of her stealing everything nailed down or otherwise within AIEE.", "Safe is a personal hammerspace... but things don't always come out the same. There is a whole other world of scrap and stolen baubles in there... so you probably shouldn't give her anything for safekeeping."]
        },
        {
            "characterID": "ieda",
            "displayName": "Ieda",
            "characterImage": "icons/sc-4v.png",
            "tags": ["She/They", "Botanical Menace", "Droid"],
            "description": ["Does it count as gardening if you mostly just plant seeds that grow horrifically fast in buildings for fun?", "Almost constantly with Avo, as her presence has substantially reduced incidents of seeds growing inside Ieda. She used the concept of 'Found Family' a bit literally with Essie after they saw her for the first time and noted that they both have green sphere heads. Essie is fine with this because she gives her explosives sometimes."]
        },
        {
            "characterID": "avo",
            "displayName": "Avo",
            "characterImage": "icons/sc-4v.png",
            "tags": ["Mirror Pronouns", "Weird Thing", "Greater Fiendling"],
            "description": ["Big ol' fiendling. Tastes like meat broth, but mostly like severe burns.", "Almost constantly with Ieda- her presence has substantially reduced the amount of biomatter Ieda has for her plants.", "Feels extremely superior to Acaud due to being a lone fiendling and thriving 'all by herself'. Ieda's contribution to Avo's survival has been repeatedly pointed out by Acaud."]
        },
        {
            "characterID": "zylvezter",
            "displayName": "Zylvester",
            "characterImage": "icons/sc-4v.png",
            "tags": ["She/He", "Exanimate Excavator", "Cordysect"],
            "description": ["Super duper alive bug. His head fits perfectly into Essies concave face, therefore they are together.", "Has stolen and/or damaged the least amount of property from AIEE, as far as semi-regulars go."]
        },
        {
            "characterID": "avaud",
            "displayName": "Zylvester",
            "characterImage": "icons/sc-4v.png",
            "tags": ["She/He", "Exanimate Excavator", "Cordysect"],
            "description": ["Super duper alive bug. His head fits perfectly into Essies concave face, therefore they are together.", "Has stolen and/or damaged the least amount of property from AIEE, as far as semi-regulars go."]
        },
        {
            "characterID": "mook",
            "displayName": "MOOK",
            "characterImage": "icons/mook.png",
            "tags": ["She/???", "Groggy Groundskeeper", "Thermautomaton"],
            "description": ["MURDEROUS OPTIMALLY OPERATING KEEPER. Mostly she wanders AIEE and tries to vaguely exude authority at the mannequins that litter the halls. The only break from the routine usually comes from her noticing a few missing items here and there, then noticing rooms stripped of everything nailed down or otherwise, and then seeing SC-4V which usually drives her into a focused rage.", "Her pinpoint hatred for Essie generally calms her down with literally everyone else- even seeing Ieda instead of Essie calms her down a bit, even if MOOK still has to kick her and her plants out every now and then.."]
        },
        {
            "characterID": "look",
            "displayName": "LOOK",
            "characterImage": "icons/mook.png",
            "tags": ["???/???", "Staring Scope", "Droid"],
            "description": ["LOOMING OCULAR OBSERVING KEEPER. Big ol' slithering telescope who keeps an eye of the going-ons around AIEE."]
        },
        {
            "characterID": "ampersandy",
            "displayName": "&ampy",
            "characterImage": "icons/mook.png",
            "tags": ["Any/All", "Real Robot"],
            "description": ["Ampersandy/Andy/Sandy. Old robot from before the common robot was full of yummerly blue soul juice. Intended to be a superstructure, he mostly just slithers inside AIEE, poking at bits while staying undetected. SC-4V trades valuable things with pup sometimes.", "The secondary monitor is generally a flower, but can be swapped to a monocle, eye and other stuff. It's just a monitor..."]
        },
        {
            "characterID": "sc4v2",
            "displayName": "Essie",
            "characterImage": "icons/essie.gif",
            "tags": ["She/Her", "Limb Hoarder", "Undeadish"],
            "description": ["She keeps spare limbs under her turtleneck. Without them, it's just ribs and a spine! Which isn't exactly great at functioning as a proper torso... but it's not like Essie has to worry about like blood and stuff.", `The antennae hairband is just a hairband, but she likes it a lot.`]
        },
        {
            "characterID": "ieda2",
            "displayName": "Ieda (Metaln't)",
            "characterImage": "icons/essie.png",
            "tags": ["She/They", "Skin & Bark", "Undeadish"],
            "description": ["It's roots and bark instead of organs. I don't think this humanswap world is very human anymore.", "She doesn't have to worry about getting food for Avo as much, though she does have to wrangle her much more."]
        },
        {
            "characterID": "avo2",
            "displayName": "Avo (Metal)",
            "characterImage": "icons/avo2.png",
            "tags": ["Mirrored Pronouns", "Metal Menace", "Robot"],
            "description": ["Awakened construct that flies around and just does whatever. Her special ability is shooting death lasers.", "Lazes around with Ieda whenever theres nothing else to do, which is usually often."]
        },
        {
            "characterID": "tardesc",
            "displayName": "&#9432; Tar",
            "characterImage": "icons/tar.png",
            "tags": ["Cadaver Ambulators"],
            "description": ["Inky slime creatures that claim bodies for their own use. The process of rooting into the bones is somewhat intensive so constant bodyswapping is rather difficult to do."]
        },
        {
            "characterID": "mook2",
            "displayName": "Henry",
            "characterImage": "icons/henry.png",
            "tags": ["She/???", "Groundskeeper", "Skeleton"],
            "description": ["Used to be bones, then Rosie found her bones and now she can do her job easier... whatever she does around here."]
        },
        {
            "characterID": "mook2",
            "displayName": "Rosie",
            "characterImage": "icons/rosie.png",
            "tags": ["???/???", "Strange Shut-in", "Tar"],
            "description": ["Strange thing that enjoys not having to take care of chores... though Henry would like if he helped out now and then."]
        },
        {
            "characterID": "look2",
            "displayName": "Lonna",
            "characterImage": "icons/lonna.png",
            "tags": ["???/???", "Lanky Mechanic", "Tar"],
            "description": ["Has the easiest time out of everyone replacing lightbulbs in lampposts."]
        }
        /* ,
        {
            "characterID": "glubby",
            "displayName": "Glubby",
            "characterImage": "sluggy.png",
            "tags": ["blub blub"],
            "description": ["glub glub"]
        } */
    ]
}

const showDescription = (character) => {
    characterName.innerHTML = character.displayName
    characterTags.innerHTML = null
    character.tags.forEach((tag) => {
        characterTags.insertAdjacentHTML('beforeend', `<div>${tag}</div>`)
    })
    characterDescription.innerHTML = null
    character.description.forEach((text) => {
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