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
            "description": "Skittish storage container of a robot.</p><p>They are a big hoarding fan, though they do still use the baubles and items they collect... mostly by throwing her current least favourite rock at foes, but they can be occasionally seen using other objects as well. This usually includes parts from other robots, either salvaged from refuse or collected from robots who are too busy being dead to pay attention to their surroundings."
        },
        {
            "characterID": 2,
            "colourScheme": "caramalt",
            "location":"depths",
            "name": "Zylvezter",
            "image": "../images/sluggy.png",
            "bio": ["Exanimate Excavator", "He/She"],
            "description": "Recent cordysect convert using his newfound vitality to get into otherwise fatal fights. The pickaxe she wields is mostly used to fake being an excavator whenever someone asks why he's in restricted areas."
        },
        {
            "characterID": 3,
            "colourScheme": "",
            "location":"depths",
            "name": "Ieda",
            "image": "../images/sluggy.png",
            "bio": ["Horticultural ???", "She/They"],
            "description": "Menace to society. Friend of cordysects. Full of plants."
        },
        {
            "characterID": 4,
            "colourScheme": "",
            "location":"depths",
            "name": "Avo",
            "image": "../images/sluggy.png",
            "bio": ["??? ???", "She/They"],
            "description": "A droplet that accidentally fell into the depths after wandering off from her hive for a moment."
        },
        {
            "characterID": 5,
            "colourScheme": "",
            "location":"depths",
            "name": "Advanced Incredible Endemic Edifice",
            "image": "../images/sluggy.png",
            "bio": [],
            "description": "Big disorganized building with a hobby of trying to find answers without asking any questions."
        },
        {
            "characterID": 6,
            "colourScheme": "",
            "location":"depths",
            "name": "MOOK",
            "image": "../images/sluggy.png",
            "bio": ["wawa2", "wawa THREE", "What!!!", `bye`],
            "description": "Relentess hunter sentenced to wrangling their clones to do their job. Still a threat to any would-be scavengers, as theres nothing stopping them from cashing in a sick-day in the middle of teaching."
        },
        {
            "characterID": 7,
            "colourScheme": "",
            "location":"depths",
            "name": "MOOK",
            "image": "../images/sluggy.png",
            "bio": ["wawa2", "wawa THREE", "What!!!", `bye`],
            "description": "Similar to MOOK, minus the work ethic or bloodlust or anything that would make MOOK teaching them any easier."
        }
    ]
}

const renderDescriptions = () => {
    let descriptionArea = document.querySelector("#characterList")
    let characterList = getDescriptions()
    console.log(characterList)
    characterList.forEach((character) => {
        let charID = character.characterID
        descriptionArea.waitdontdothat HOLD ON += `
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