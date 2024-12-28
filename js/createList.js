// hi alrighty the idea is to uhhhmm right to make a js that 
//takes objects or whatever and creates a list. this is Yay for me because then- well the real reason is so i can do some J! S! but also it makes adding
//bozos less tedious. probably...
function sanitize(string) {
    // is this necessary...? Why not
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match)=>(map[match]));
  }



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
            "description": ["10% robot. 90% rocks and trinkets and scrap and spare limbs <sub>and</sub>","They are a big hoarding fan, though they do still use the baubles and items they collect... but usually only when just running away isn't an option. Collects robot limbs, either salvaged from refuse or stolen from robots who are too busy being dead to care.","Slowly becoming more and more of a prick as I put them in situations. She <em>is</em> stealing anything not nailed down from the building MOOK and co. live in."]
        },
        {
            "characterID": 2,
            "colourScheme": "caramalt",
            "location":"depths",
            "name": "Zylvezter",
            "image": "../images/sluggy.png",
            "bio": ["Exanimate Excavator", "He/She"],
            "description": ["Recent cordysect convert using his newfound vitality to get into otherwise fatal fights. The pickaxe she wields is mostly used to fake being an excavator whenever someone asks why he's in restricted areas."]
        },
        {
            "characterID": 3,
            "colourScheme": "",
            "location":"depths",
            "name": "Ieda",
            "image": "../images/sluggy.png",
            "bio": ["Botanical ???", "She/They"],
            "description": ["Horticultural menace. Full of plants, explosive either in growth or in actual destructive power."]
        },
        {
            "characterID": 4,
            "colourScheme": "",
            "location":"depths",
            "name": "Avo",
            "image": "../images/sluggy.png",
            "bio": ["??? ???", "Copies Iedas pronouns (She/They)"],
            "description": ["A fiendthing that accidentally fell into the depths after wandering off from her hive for a moment. Her partnership with Ieda and the resulting vast amount of Free Meal allowed them to grow larger than a standard fiend would be able to. She could mitose into a proper fiend hive at any time, but being a (relatively) Big Creature is more fun for them."]
        },
        {
            "characterID": 5,
            "colourScheme": "",
            "location":"depths",
            "name": "Advanced Incredible Exuberant Edifice",
            "image": "../images/sluggy.png",
            "bio": ["No Pronouns"],
            "description": ["Big disorganized building with a hobby of trying to find answers without asking any questions. An 'Annie Indigo Edwardson Esquire' acts as an intermediary between AIEE and other people, primarily sending commands to MOOKs, though it is unclear whether or not this intermediary is a separate entity or just the building."]
        },
        {
            "characterID": 6,
            "colourScheme": "",
            "location":"depths",
            "name": "MOOK",
            "image": "../images/sluggy.png",
            "bio": ["Exhausted Exterminator","If you're part of the building bozos, any pronouns fine."],
            "description": ["Relentess hunter created by AIEE, now relegated to teaching new MOOKs to fill its old role. It's not going as quick as he would like.","Misses the old days (all 2 of them) when she was allowed to destroy people for fun."]
        },
        {
            "characterID": 7,
            "colourScheme": "",
            "location":"depths",
            "name": "MOOK",
            "image": "../images/sluggy.png",
            "bio": ["??? ???"],
            "description": ["Similar to MOOK, minus the work ethic or bloodlust or anything that would shape their temperament to be anything like MOOK.","You can tell the difference between the prime MOOK and the others by whether or not they're running at you with murderous intent."]
        },
        {
            "colourScheme": "",
            "location":"misc",
            "name": "Guy",
            "image": "../images/sluggy.png",
            "bio": ["???"],
            "description": ["Who is this asshole.","You could find them"]
        }
    ]
}

const renderDescriptions = () => {
    let descriptionArea = document.querySelector("#characterList")
    let characterList = getDescriptions()
    let charID = 1
    characterList.forEach((character) => {
        // let charID = character.characterID
        
        let colourScheme = sanitize(character.colourScheme)
        let image = sanitize(character.image)
        let name = sanitize(character.name)
        let description = character.description
        
        descriptionArea.insertAdjacentHTML('beforeend',`
        <article class="${colourScheme}" id="${charID}">
            <div class="biobar"><img src="${image}"><li>${name}</li></div>
            <div class="description">
            </div>
        </article>`)
            
        appendInfo(character, charID, descriptionArea)
        
        charID++
    })
}
async function appendInfo(character, charID, descriptionArea) {
    character.bio.forEach((bioChunk) => {
        let bioBar = document.getElementById(`${charID}`).querySelector(".biobar")
        bioBar.innerHTML += `<li>${sanitize(bioChunk)}</li>`
    })
    character.description.forEach((bioChunk) => {
        let description = document.getElementById(`${charID}`).querySelector(".description")
        description.innerHTML += `<p>${bioChunk}</p>`
    })
}


renderDescriptions()