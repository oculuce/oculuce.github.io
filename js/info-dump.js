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
            "characterID": "souldesc",
            "displayName": "&#9432; Soul",
            "characterImage": "icons/soulshard.png",
            "tags": ["Life and Life and Life"],
            "description": ["If you crack a living thing open, and you don't blink, and you have <em>really</em> good eyes, you might see a glowing blue wisp emerging from them! If you follow it, it'll either dissipate near a living creature or be absorbed straight into the moon. Unrelated, but if a chunk of moon rock absorbs too much soul, it can end up bursting! There isn't much moonlight nowadays.", "👓: The main inspiration was Juice from the Butterscotch Shenaningans suite of games. It used to just be Juice, but now its Juice(Soul)."]
        },
        {
            "characterID": "robotdesc",
            "displayName": "&#9432; Automata",
            "characterImage": "icons/robot.png",
            "tags": ["Soulful Machinery"],
            "description": ["Not exactly real robots, most robots underground are mostly full of soul slop that lets things like stray arms shuffle around and attach more things to themselves... which is why most people either keep spare parts in proper storage in the event of temporary unwanted sentience, or at the very least disassembling anything that could get up and walk.", "There are a few robots out there that aren't full of Soul, which lets them get away with things others might not be able to..."]
        },
        {
            "characterID": "sc4v",
            "displayName": "SC-4V",
            "characterImage": "icons/sc-4v.png",
            "tags": ["She/Her", "Debris Hoarder", "Droid", "also named Essie!"],
            "description": ["10% robot, 90% tables and chairs and rocks and pebbles and gems and planks and debris and", "Primary foe of AIEE's Team Scream, as a natural consequence of her stealing everything nailed down or otherwise within AIEE.", "Safe is a personal hammerspace... but things don't always come out the same. There is a whole other world of scrap and stolen baubles in there... so you probably shouldn't give her anything for safekeeping.", "👓: Essie used to be a grey ant with a cannon for an abdomen! As she got greener and more metal, the core of 'fire random garbage at foes' stuck around."]
        },
        {
            "characterID": "ieda",
            "displayName": "Ieda",
            "characterImage": "icons/ieda.png",
            "tags": ["She/They", "Botanical Menace", "Droid"],
            "description": ["Does it count as gardening if you mostly just plant seeds that grow horrifically fast in buildings for fun? Ieda is full of tubes that transport funny liquids that do things when combined together. This mostly involves speed-growing plants as well as making explosives that have a very short time between creation and detonation.", "Almost constantly with Avo, as her presence has substantially reduced incidents of seeds growing inside Ieda. She used the concept of 'Found Family' a bit literally with Essie after they saw her for the first time and noted that they both have green sphere heads. Essie is fine with this.", "👓: Essies big circle indent made me want to make a triangle and square indent. 80-Z0 is rotting in a ditch, but Ieda is thriving! I also wanted to make a solid-liquid parallel which is why Ieda makes explosives from Juice. She had a design where her limbs were bark but then I just made her plant stuff with her tube arms."]
        },
        {
            "characterID": "avo",
            "displayName": "Avo",
            "characterImage": "icons/avo.png",
            "tags": ["Mirror Pronouns", "Weird Thing", "Greater Fiendling"],
            "description": ["Big ol' fiendling. Tastes like meat broth, but mostly like severe burns.", "Almost constantly with Ieda- her presence has substantially reduced the amount of biomatter Ieda has for her plants.", "Feels extremely superior to Acaud due to being a lone fiendling and thriving 'all by herself'. Ieda's contribution to Avo's survival has been repeatedly pointed out by Acaud."]
        },
        {
            "characterID": "zylvezter",
            "displayName": "Zylvester",
            "characterImage": "icons/zylvezter.png",
            "tags": ["She/He", "Exanimate Excavator", "Cordysect"],
            "description": ["Super duper alive bug. His head fits perfectly into Essies concave face, therefore they are together.", "Has stolen and/or damaged the least amount of property from AIEE, as far as semi-regulars go.", "👓: her design has been mostly the same for the longest amount of time- a wasp that is full of fungus! the guts are different though- he is simply more alive than the standard bug despite appearances."]
        },
        {
            "characterID": "acaud",
            "displayName": "Acaud",
            "characterImage": "icons/acaud.png",
            "tags": ["She/He", "Exanimate Excavator", "Cordysect"],
            "description": ["Colony of fiendlings that do stuff together.", "Communicates regularly with COOK for culinary cooperation. Could be friends with Avo if they weren't ticked off by Avo gloating about thriving alone (and ignoring Acaud noting that Ieda feeds them a bunch of food...).", "👓: da two side eyes were me going 'hrmgh blush face but blush is eyes'"]
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
            "characterImage": "icons/look.png",
            "tags": ["She/It", "Staring Scope", "Droid"],
            "description": ["LOOMING OCULAR OBSERVING KEEPER. Big ol' slithering telescope who keeps an eye of the going-ons around AIEE."]
        },
        {
            "characterID": "cook",
            "displayName": "COOK",
            "characterImage": "icons/cook.png",
            "tags": ["Her/She", "Staring Scope", "Thermautomaton"],
            "description": ["CULINARILY OPTIMAL ORDER KEEPER. She cooks food. She cannot eat food. Every known copy of Cooking Wawa was destroyed before she was made. MOOK and the fake fakey fake mannequin workers don't eat either. This vexes COOK, but she takes it in stride and just tries anything that <em>feels right</em>.", "Acaud pops into AIEE every now and then, and the combination of free... delicacies and iron stomachs makes for pleasant get-togethers between the two."]
        },
        {
            "characterID": "hook",
            "displayName": "HOOK",
            "characterImage": "icons/hook.png",
            "tags": ["Sea/Arr", "Staring Scope", "Droid"],
            "description": ["HARPOONING OAR-USING OUTER KEEPER. The least connected to AIEE, sea mostly just... does her thing, to the detriment of anyone who dislikes being attacked by ambulatory sou'westers and raincoats. The little plushie hook inside of arr is mostly useless, but if you're friends you can try and win fish toys from arr."]
        },
        {
            "characterID": "ampersandy",
            "displayName": "&ampy",
            "characterImage": "icons/ampersandy.png",
            "tags": ["Any/All", "Sneaking Screen", "Soulless Robot"],
            "description": ["Ampersandy/Andy/Sandy. Old robot from before the common robot was full of yummerly blue soul juice. Intended to manage a building, he mostly just slithers inside AIEE, poking at loose bits and pieces no one will miss while staying undetected. SC-4V trades valuable things with pup sometimes. Her lack of soul makes it easy to hide in plain sight- to anyone xey actively avoid, its nothing but a limp, blank screen.", "The secondary monitor is generally a flower, but can be swapped to a monocle, eye and other stuff. It's just a monitor..."]
        },
        {
            "characterID": "saline",
            "displayName": "S4L-1N3",
            "characterImage": "icons/saline.png",
            "tags": ["???/???", "Emergency Care", "Soulless Robot"],
            "description": ["This one is a bit peeved about not being able to have long walks on the beach, even if the surface soulflow wouldn't crystallize onto them as quick as it would a living being.", "👓: super long lasting design- her first form was one of my firstest ocs!! who was me but 'tech', which was just metal with green wire veins. Fire became Fernie, Ice became Flurrie, Normal became eyes became Oculuce, Light and Dark are... somewhere, and... I forgot the 7th, but they're still around."]
        },
        {
            "characterID": "sc4v2",
            "displayName": "Essie",
            "characterImage": "icons/essie.gif",
            "tags": ["She/Her", "Limb Hoarder", "Undeadish"],
            "description": ["She keeps spare limbs under her turtleneck. Without them, it's just ribs and a spine! Which isn't exactly great at functioning as a proper torso... but it's not like Essie has to worry about like blood and stuff.", `The antennae hairband is just a hairband, but she likes it a lot.`, "👓: Take essie, replace metal with meat, but keep the storage space and spare limbs."]
        },
        {
            "characterID": "ieda2",
            "displayName": "Ieda (Metaln't)",
            "characterImage": "icons/ieda2.png",
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
            "characterID": "rosie",
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
        },
        {
            "characterID": "fernie",
            "displayName": "Fernie",
            "characterImage": "icons/fernie.png",
            "tags": ["blub blub"],
            "description": ["fire glubby, big eye, tries to keep a non-violent approach to things but being made of fire and shooting fire out of metal rings and tubes makes the other approach easy. pfpfpbfb"]
        },
        {
            "characterID": "flurrie",
            "displayName": "Flurrie",
            "characterImage": "icons/flurrie.png",
            "tags": ["blub blub"],
            "description": ["Olchys 'Flurrie' Beaumawn. The only person who has ever called her by their full name more than once is Fernie. Some manner of ice sheriff- day lets her be a bullet-immune ghost, dawn and dusk is water bc water yay jafjdsfhaihej and night is Ice where she can just straight up punch people really hard."]
        },
        {
            "characterID": "guy",
            "displayName": "Guy",
            "characterImage": "icons/guy.png",
            "tags": ["Prime"],
            "description": ["whos this asshole.", "👓: It is the MSPA face. strongest oc, drawn on the back of most of my school quizzes when I finished before time was up. the staff shoots a laser that goes up forever and annihilates anything in its path except Guy, which means like 1% of any world Guy is in is just. lasered away. and thats if guy is perfectly still! Legends say Dude is still out there... ready to strike when Guy's guard is down..."]
        },
        {
            "characterID": "guy2",
            "displayName": "Guy Moon",
            "characterImage": "icons/guymoon.png",
            "tags": ["Lime"],
            "description": ["in da material swap moon Guy is da moon. Vast swarms of cultlets roam the world to achieve the sheer power contained within the staff, but the search has gone on for so long that the many stories of the staff have multiplied endlessly!", "Some say that the staff is within the center of Guy, while others claim it lies somewhere on the planet and was buried by Guy as a treasure! And of course some claim that Guy absorbed all of the staffs power, and even that the staff does not exist, but surely such a staff must exist! How else could the moon glow so bright?", "A lot of people don't care about it at all and just wish the cultlets would stop digging up their plants because one of the stalks arch like a 'magic staff'."]
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