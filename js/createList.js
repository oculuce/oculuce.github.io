// hi alrighty the idea is to uhhhmm right to make a js that 
//takes objects or whatever and creates a list. this is Yay for me because then- well the real reason is so i can do some J! S! but also it makes adding
//bozos less tedious. probably...

const getDescriptions = () => {
    // vermilliwrong, caramalt, blueberrish
    return [
        {
            "characterID": 1,
            "colourScheme": "",
            "location":"depths",
            "name": "SC-4V",
            "image": "../images/sluggy.png",
            "bio": ["Skittish Survivor", "They/She", "alternatively Essie :}"],
            "description": "The storage of a shipping container stuffed into a robot with the temperament of a particularly wary rabbit.</p><p>They are a big hoarding fan, though they do still use the baubles and items they collect... mostly by throwing her current least favourite rock at foes, but they can be occasionally seen using other objects as well. This usually includes parts from other robots, either salvaged from refuse or collected from robots who are too busy being dead to pay attention to their surroundings."
        },
        {
            "characterID": 2,
            "colourScheme": "caramalt",
            "location":"depths",
            "name": "Zylvezter",
            "image": "../images/sluggy.png",
            "bio": ["Exanimate Excavator", "He/She"],
            "description": "Recent cordysect convert using his newfound vitality to get into otherwise fatal fights. The pickaxe she wields is primarily used to excuse herself as an excavator."
        },
        {
            "characterID": 3,
            "colourScheme": "",
            "location":"",
            "name": "scug",
            "image": "../images/sluggy.png",
            "bio": ["wawa2", "wawa THREE", "What!!!", `bye`],
            "description": "wawa worllldd sequel"
        }
    ]
}

const renderDescriptions = () => {
    let descriptionArea = document.querySelector("#characterList")
    let characterList = getDescriptions()
    console.log(characterList)
    characterList.forEach((character) => {
        let charID = character.characterID
        descriptionArea.innerHTML += `
        <article>
            <div class="biobar ${character.colourScheme}" id="${charID}"><img src="${character.image}"><li>${character.name}</li></div>
            <p>${character.description}
            </p>
        </article>`

        appendBio(character, charID)

    })
}
async function appendBio(character, charID) {
    character.bio.forEach((bioChunk) => {
        let test = document.getElementById(`${charID}`)
        test.innerHTML += `<li>${bioChunk}</li>`
    })
}


renderDescriptions()