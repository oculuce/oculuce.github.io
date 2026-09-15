let characterSelect = document.querySelector(".character-select")
let characterInfo = document.querySelector(".character-info")

let closeButton = document.querySelector(".close-button")

/* probably a better way to do this */
let characterIcon = document.querySelector(".character-icon")
let characterName = document.querySelector(".character-name")
let characterTags = document.querySelector(".character-tags")
let characterDescription = document.querySelector(".character-description")

let characterGallery = document.querySelector(".character-gallery")
let galleryImage = document.querySelector(".gallery-image")
let galleryFullImage = "/images/literal-nothing.png"
let nextImageButton = document.querySelector("#next")
let prevImageButton = document.querySelector("#prev")
let imageCount = document.querySelector("#image-count")

let imageArrayCurrent = 0
let imageArrayMax = 0

let currentCharacter

/* "images": [["wawa.png"], ["wawawa.png", "wawawa.webp"]] 
with first image being the 'full' image and second being the compressed image. If there's only one (still must be arrayed...) then it uses both! You're welcome, future me.*/
const getCharacters = () => {
    return [
        {
            "characterID": "luce",
            "displayName": "Luce",
            "characterImage": "icons/luce.png",
            "tags": ["Hi","Tealling"],
            "description": ["Some sort of artist... you could probably learn more in the <a href='../who-this'>[about]</a> section."],
            "images": [["art/june2026/lucepride.png","art/june2026/lucepride.webp"]]
        },
        {
            "characterID": "tawfin",
            "displayName": "Tawfin",
            "characterImage": "icons/tawfin.png",
            "tags": ["Ambulatory Warped Fungus"],
            "description": ["Tawfin is a warped fungus that gained sapience. She now menaces the world with her funny axe and other devices. Her only vital organ is the eye in her head, and in desperate cases she is able to walk on her face tendrils.","Uses twisting vines in her apparel, as well as wearing prismarine due to her fascination with a material that was seemingly made for an environment that is impossible in Minecraft Hell. Prismarine makes up her crop-top-armour-thing, bracelets, boots, and belt-thing.","She speaks like Octodad, but is able to say mushroom names perfectly between blubs and burbles.","Each time I play Minecraft is a new tawfin, so her exact biology and personality is... worbly. Merling!Tawfin must absorb water, or else the mini-conduit will stop functioning and lock up her prismarine bones. Trepidatious!Tawfin is very skittish, due to being in the modpack Trepidation. This Tawfin is really good at making weapons, that Tawfin went insane looking at funny books... in any case, most Tawfins are relatively chill.","A Tawfin becomes about 1000x braver when in her home dimension, even in the face of Minecraft Horror Mods.","Chef Tawfin has a food truck she drives everywhere. She has a green :MLEHHH: and a snowperson who are trying to avoid other :MLEHHH:s... neither are great at cooking, but they're very helpful for fending off hoards of unruly would-be customers.","A vast group of Tawfins connect worlds to eachother, leading to the creation of 'Tawflings' who are like a Tawfin, but without the experience gained from escaping the Nether by themselves. This group is responsible for Tawfins who come to a world with an explicit purpose, like investigating Minecraft Horror Mods with a big revolver and Ultrakill movement."]
        },
        {
            "characterID": "oculuce",
            "displayName": "Oculuce",
            "characterImage": "icons/oculuce.png",
            "tags": ["Hello","Eyething"],
            "description": ["Eyeball Luce. Formed after I tried to make an obesk signature and got something else."]
        },
        {
            "characterID": "lucelet",
            "displayName": "Lucelets",
            "characterImage": "icons/lucelet.png",
            "tags": ["Swarm","Literally anything"],
            "description": ["Assorted lucelings that come in a variety of hues. Don't worry about them running underfoot, they're good at dodging."]
        },
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
            "description": ["Not exactly real robots, most robots underground are mostly full of soul slop that lets things like stray arms shuffle around and attach more things to themselves... which is why most people either keep spare parts in proper storage in the event of temporary unwanted sentience, or at the very least disassembling anything that could get up and walk.", "There are a few robots out there that aren't full of Soul, which gives them a certain lack of presence useful for going unnoticed, even in the open."]
        },
        {
            "characterID": "sc4v",
            "displayName": "SC-4V",
            "characterImage": "icons/sc-4v.png",
            "tags": ["She/Her", "Debris Hoarder", "Droid", "also named Essie!"],
            "description": ["<em>missing furniture, broken doors, and the distinct feeling that someone knows that you're tresspassing</em>","20% droid, 80% tables and chairs and rocks and pebbles and gems and planks and debris and","A fan of picking things off of the ground and throwing them at other things.","Primary foe of AIEE's Team Scream, as a natural consequence of her stealing everything nailed down or otherwise within AIEE.", "The chest-safe is a personal hammerspace... but things don't always come out the same. If you put your ear to her chest, you might be able to hear skittering and squeaking... so you probably shouldn't give her anything edible for safekeeping.","👓: Essie used to be a grey ant with a cannon for an abdomen! As she got greener and more metal, the core of 'fire random garbage at foes' stuck around. The main thought process early on was 'ourgh lisa the timeless elton broll hit people with chair and throw bottle and bottle caps I like that'."],
            "images": [["essie-poster.png", "essie-poster.png"],["art/june2026/essieRef2026.png", "art/june2026/essieRef2026.webp"],["art/may2026/essie-door.png", "art/may2026/essie-door.webp"],["art/may2025/essie-reference-REAL.png", "art/may2025/essie-reference-REAL.webp"], ["art/mar2025/essie-doodles.png", "art/mar2025/essie-doodles.webp"],["art/nov2025/essie-ocean.png","art/nov2025/essie-ocean.webp"]]
        },
        {
            "characterID": "ieda",
            "displayName": "Ieda",
            "characterImage": "icons/ieda.png",
            "tags": ["She/They", "Botanical Menace", "Droid"],
            "description": ["Does it count as gardening if you mostly just plant seeds that grow horrifically fast in buildings for fun? Yes. Ieda is full of tubes that transport funny liquids that do things when combined together. This mostly involves speed-growing plants as well as making explosives that have a very short time between creation and detonation.", "Carries Avo around, because Avo is awesome. Avo's presence has substantially reduced incidents of seeds growing inside Ieda. She used the concept of 'Found Family' a bit literally with Essie after they saw her for the first time and saw that they both have green sphere heads. Essie is fine with this.", "👓: Essies big circle indent made me want to make a triangle and square indent. 80-Z0 is rotting in a ditch, but Ieda is thriving! I also wanted to make a solid-liquid parallel which is why Ieda makes explosives from Juice. She had a design where her limbs were bark but then I just made her plant stuff with her tube arms."],
            "images":[["art/aug2026/iedalets.png","art/aug2026/iedalets.png"],["art/june2026/iedaRef2026.png","art/june2026/iedaRef2026.png"],["art/june2025/ieda-ref.png","art/june2025/ieda-ref.webp"]]
        },
        {
            "characterID": "avo",
            "displayName": "Avo",   
            "characterImage": "icons/avo.png",
            "tags": ["Mirror Pronouns", "Weird Thing", "Fiend"],
            "description": ["Big ol' fiendling. Tastes like meat broth and severe burns.", "Almost constantly with Ieda, as her presence makes hunting wildlife much less perilous. Avo still goes off on her own, though.", "Feels extremely superior to Acaud due to being a lone fiendling and thriving 'all by themself'. Ieda's contribution to Avo's survival has been repeatedly pointed out by Acaud.","Trusts SC-4V, with Avo grabbing a spare knife or two from her every now and then."],
            "images":[["art/jan2026/avo-doodles.png","art/jan2026/avo-doodles.webp"],["art/aug2025/avoLaze.png","art/aug2025/avoLaze.webp"],["art/june2025/avo-ref.png","art/june2025/avo-ref.webp"]]
        },
        {
            "characterID": "zylvezter",
            "displayName": "Zylvezter",
            "characterImage": "icons/zylvezter.png",
            "tags": ["She/He", "Exanimate Excavator", "Cordysect"],
            "description": ["Super duper alive bug. His head fits perfectly into Essies concave face, therefore they are together.", "Has stolen and/or damaged the least amount of property from AIEE, as far as semi-regulars go.", "👓: her design has been mostly the same for the longest amount of time- a wasp that is full of fungus! the guts are different though- he is simply more alive than the standard bug despite appearances."]
        },
        {
            "characterID": "acaud",
            "displayName": "Acaud",
            "characterImage": "icons/acaud.png",
            "tags": ["They're/Her", "Weird Person", "Fiend Hive"],
            "description": ["Colony of fiendlings that do stuff together. They have a big anvil on a stick they smack things with, as well as smaller implements for split-off fiendlets to stab their enemies in the back with. They enjoy practicing 'improvised salvaging'", "Communicates regularly with COOK for culinary cooperation. Does not care for Avo gloating about thriving alone (and ignoring Acaud noting that Ieda feeds them a bunch of food...). Likes to bring MOOK on tours whenever MOOK has time to go on vacation up above.","Has a sort of... rivalry with a one of the City Crystals. A sharp claw punctures slime easily, and a heavy anvil shatters crystal easily. Certainly not as hateful (if at all) as what SC-4V and MOOK have between eachother, though.","👓: da two side eyes were me going 'hrmgh blush face but blush is eyes'"],
            "images":[["art/apr2026/aboveground-bozos.png","art/apr2026/aboveground-bozos.webp"],["art/feb2026/mook-vacation-testing.png","art/feb2026/mook-vacation-testing.webp"],["art/june2025/acaud-ref.png","art/june2025/acaud-ref.webp"]]
        },
        {
            "characterID": "aiee",
            "displayName": "AIEE",
            "characterImage": "icons/aiee.png",
            "tags": ["None", "Sentient Superstructure"],
            "description": ["Automatically Infinitely Expanding Edifice. A large structure going from the cavern floor and the cavern ceiling! You might even be able to breach the surface at the top... not that you should. You'll mostly find a vast swarm of manne-gerial and manne-chanical staff that fill the various offices and rooms in AIEE.","The lowest zones have welding-mask-wearing test-mannAIEEquinns that handle the molten rivers. The middle-offices have mannAIEEquins that do office work on computers that may or may not actually work. The higher ups used to handle expanding AIEE... but ever since the surface was breached, they're only seen rarely flying and crawling up above.","Please don't damage the building, as while you may find wall dents and the like to heal over time, carelessness will result in inexplicable occurences such as missing pens, the reshuffling of rooms to interrupt your pathways, or the expedient ejection of your body out of the building."],
            "images": [["art/aug2025/terraneanMap.png","art/aug2025/terraneanMap.webp"]]
        },
        {
            "characterID": "mook",
            "displayName": "MOOK",
            "characterImage": "icons/mook.png",
            "tags": ["She/???", "Groggy Groundskeeper", "Thermautomaton"],
            "description": ["MIDDLING OPTIMALLY OPERATING KEEPER. She mostly wanders AIEE and generally acts as passive encouragement to the fanAIEEtical mannAIEEquins that litter the halls. The only break from the routine usually comes from her noticing a few missing items here and there, then noticing rooms stripped of everything nailed down or otherwise, and then seeing SC-4V running away from her.","MOOK rarely is given vacation time, allowing her to enter a cannon at the top of AIEE to be shot at the Crystal City. She is not a very polite tourist.", "Her focused hatred for Essie generally makes her less murderous with literally everyone else- even Ieda isnt treated as harshly, even if MOOK still has to throw Ieda and her plants out every now and then.","Tie-friends with COOK. Respects the warnings LOOK gives for SC-4V."],
            "images": [["mook-poster.png"],["art/apr2026/aboveground-bozos.png","art/apr2026/aboveground-bozos.webp"],["art/feb2026/mook-vacation-testing.png","art/feb2026/mook-vacation-testing.webp"]]
        },
        {
            "characterID": "look",
            "displayName": "LOOK",
            "characterImage": "icons/look.png",
            "tags": ["She/It", "Staring Scope", "Droid"],
            "description": ["LOOMING OCULAR OBSERVING KEEPER. Big ol' slithering telescope who keeps an eye of the going-ons around AIEE. Occasionally warns its coworkers about approaching oddities.","Plays Go-Fish with Avo. Appreciates Ieda's planthouse from a distance."],
            "images":[["art/june2026/lookRef2026.png","art/june2026/lookRef2026.webp"],["art/oct2025/flesh-look.png","art/oct2025/flesh-look.webp"]]
        },
        {
            "characterID": "cook",
            "displayName": "COOK",
            "characterImage": "icons/cook.png",
            "tags": ["Her/She", "Staring Scope", "Thermautomaton"],
            "description": ["CULINARILY OPTIMAL ORDER KEEPER. She cooks food. She cannot eat food. Every known copy of Cooking Wawa was destroyed before she was made. MOOK and the mannAIEEquins workers can't really taste either. This vexes COOK, but she takes it in stride and just tries anything that <em>feels right</em>.", "Acaud pops into AIEE every now and then, and the combination of free... delicacies and an iron stomach(es) makes for pleasant get-togethers between the two.","While not as vicious as MOOK, COOK is still more than capable of dealing with SC-4V, generally leaving SC-4V with one option: apologizing for whatever thing she stole or broke."]
        },
        {
            "characterID": "hook",
            "displayName": "HOOK",
            "characterImage": "icons/hook.png",
            "tags": ["Sea/Arr", "Aquatic Adversary", "Droid"],
            "description": ["HARPOONING OAR-USING OUTER KEEPER. The least connected to AIEE, sea mostly just... does arr thing, to the detriment of anyone who dislikes being attacked by ambulatory sou'westers and raincoats. The little plushie hook inside of arr is mostly useless, but if you're friends you can try and win fish toys from arr.","If you see signs of soul crystal harvest and bare wardrobes near bodies of water, be careful of the aforementioned ambulatory nauticalwear."]
        },
        {
            "characterID": "ampersandy",
            "displayName": "&ampy",
            "characterImage": "icons/ampersandy.png",
            "tags": ["Any/All", "Sneaking Screen", "Robot"],
            "description": ["Ampersandy/Andy/Sandy, though in dire straits will pretend to be 'NOOK', a new employee of AIEE. Old robot from before the common robot was full of yummerly blue soul juice. Intended to manage a building, he mostly just slithers inside AIEE, poking at loose bits and pieces no one will miss while staying undetected. SC-4V trades valuable things with pup sometimes. Her lack of soul makes it easy to hide in plain sight- to anyone xey actively avoid, its nothing but a limp, blank screen.", "The secondary monitor is generally a flower, but can be swapped to a monocle, eye and other stuff. It's just a monitor..."]
        },
        {
            "characterID": "saline",
            "displayName": "S4L-1N3",
            "characterImage": "icons/saline.png",
            "tags": ["???/???", "Emergency Care", "Robot"],
            "description": ["This one is a bit peeved about not being able to have long walks on the beach anymore, since being on the surface would prove fatal nowadays. This one is peeved about a lot of things, really.", "👓: super long lasting design- her first form was one of my firstest ocs!! who was me but 'tech', which was just metal with green wire veins. Fire became Fernie, Ice became Flurrie, Normal became eyes became Oculuce, Light and Dark are... somewhere, and... I forgot the 7th, but they're still around, probably."]
        },
        {
            "characterID": "sc4v2",
            "displayName": "Essie",
            "characterImage": "icons/essie.gif",
            "tags": ["She/Her", "Limb Hoarder", "Undeadish"],
            "description": ["She keeps spare limbs under her turtleneck. Without them, it's just ribs and a spine! Which isn't exactly great at functioning as a proper torso... but it's not like Essie has to worry about like blood and stuff.", `The antennae hairband is just a hairband, but she likes it a lot.`, "👓: Take essie, replace metal with meat, but keep the storage space and spare limbs."],
            "images": [["art/nov2025/essie-egg.png","art/nov2025/essie-egg.webp"],["art/oct2025/essie-walk.png", "art/oct2025/essie-walk.webp"], ["art/sept2025/essieda.png", "art/sept2025/essieda.webp"], ["art/aug2025/assortedEssie.png", "art/aug2025/assortedEssie.webp"]]
        },
        {
            "characterID": "ieda2",
            "displayName": "Ieda (Metaln't)",
            "characterImage": "icons/ieda2.png",
            "tags": ["She/They", "Skin & Bark", "Undeadish"],
            "description": ["It's roots and bark instead of organs. I don't think this humanswap world is very human anymore.", "She doesn't have to worry about getting food for Avo as much, though she does have to wrangle her much more."],
            "images": [["art/sept2025/essieda.png", "art/sept2025/essieda.webp"],["art/sept2025/vastExhaustion.png","art/sept2025/vastExhaustion.webp"]]
        },
        {
            "characterID": "avo2",
            "displayName": "Avo (Metal)",
            "characterImage": "icons/avo2.png",
            "tags": ["Mirrored Pronouns", "Metal Menace", "Robot"],
            "description": ["Awakened construct that flies around and just does whatever. Her special ability is shooting death lasers.", "Lazes around with Ieda whenever theres nothing else to do, which is usually often."],
            "images":[["art/sept2025/vastExhaustion.png","art/sept2025/vastExhaustion.webp"]]
        },
        {
            "characterID": "tardesc",
            "displayName": "&#9432; Tar",
            "characterImage": "icons/tar.png",
            "tags": ["Cadaver Ambulators"],
            "description": ["Inky slime creatures that claim bodies for their own use. The process of rooting into the bones is somewhat intensive, making 'bodyswapping' very arduous."]
        },
        {
            "characterID": "mook2",
            "displayName": "Henry",
            "characterImage": "icons/henry.png",
            "tags": ["She/???", "Groundskeeper", "Skeleton"],
            "description": ["Used to be bones, then Rosie found her bones so now she can do her job easier... whatever she does around here. Often seen driving cars or moving bags."],
            "images":[["art/oct2025/roziehenry-crop.png","art/oct2025/roziehenry-crop.webp"]]
        },
        {
            "characterID": "rosie",
            "displayName": "Rosie",
            "characterImage": "icons/rosie.png",
            "tags": ["???/???", "Strange Shut-in", "Tar"],
            "description": ["Strange thing that enjoys not having to take care of chores... though Henry would like if he helped out now and then."],
            "images":[["art/oct2025/roziehenry-crop.png","art/oct2025/roziehenry-crop.webp"]]
        },
        {
            "characterID": "look2",
            "displayName": "Lonna",
            "characterImage": "icons/lonna.png",
            "tags": ["???/???", "Lanky Mechanic", "Tar"],
            "description": ["Normal person. Has the easiest time out of everyone replacing lightbulbs in lampposts, which is good since that's what she does.","As a tar-thing, Lonna has chosen a tall skeleton(found in a ditch somewhere), letting her reach high lights. Her body is wrapped with bandages to prevent tar dripping everywhere, though she prefers an exposed face in case she needs to eject from her spine in case of emergency. The skeleton is named Larry. They like to shout rude things at people. They let Lonna use them as structural support because they were bored of laying in a pit for years.","Her special ability is practicing unfastening bulbs and bolts on any repair-haters that accost her."],
            "images": [["art/june2026/lonnaRef2026.png", "art/june2026/lonnaRef2026.webp"],["art/oct2025/look-walk.png", "art/oct2025/look-walk.webp"],["art/oct2025/flesh-look.png","art/oct2025/flesh-look.webp"]]
        },
        {
            "characterID": "fernie",
            "displayName": "Fernie",
            "characterImage": "icons/fernie.png",
            "tags": ["She/Her","Incinerating Investigator"],
            "description": ["Theoretically does detective work, but mostly just wanders the streets looking for things to follow. She tries to keep a non-violent approach to things... but being made of fire and shooting fire out of metal rings and tubes makes the other approach easy. Her iris is a mouth if it wants to be."],
            "images": [["art/apr2026/aboveground-bozos.png", "art/apr2026/aboveground-bozos.webp"],["art/oct2025/fernie-feast.png", "art/oct2025/fernie-feast.webp"], ["art/oct2025/fernie-misc.png", "art/oct2025/fernie-misc.webp"]]
        },
        {
            "characterID": "flurrie",
            "displayName": "Flurrie",
            "characterImage": "icons/flurrie.png",
            "tags": ["They/Her"],
            "description": ["Olchys 'Flurrie' Beaumawn. The only person who has ever called her by their full name more than once is Fernie. Some manner of ice sheriff- day lets her be a ghost of steam, dawn and dusk is water bc water yay jafjdsfhaihej and night is Ice where she can just straight up punch people really hard."]
        },
        {
            "characterID": "guy",
            "displayName": "Guy",
            "characterImage": "icons/guy.png",
            "tags": ["Prime"],
            "description": ["whos this asshole.", "👓: It is just the MSPA face, mutated over years of drawing this thing on the back of test sheets. strongest oc. the staff shoots a laser that goes up forever and annihilates anything in its path except Guy, which means like 1% of any world Guy is in is just. lasered away. and thats if guy is perfectly still! Legends say Dude is still out there... ready to strike when Guy's guard is down..."],
            "images":[["guy.png"]]
        },
        {
            "characterID": "guy2",
            "displayName": "Guy Moon",
            "characterImage": "icons/guymoon.png",
            "tags": ["Lime"],
            "description": ["Guy is the moon. Cultlets and lunatics roam the world to achieve the sheer power contained within the staff of Guy, but the search has gone on for so long that the many stories of the staff have multiplied endlessly!", "Some say that the staff is within the center of Guy, while others claim it lies somewhere on the planet and was buried by Guy as a treasure before ascending! And of course some claim that Guy absorbed all of the staffs power, or even that the staff does not exist, but surely such a staff must exist! How else could the moon glow so bright?", "A lot of people don't care about it at all and just wish people would stop digging up their plants because one of the stalks are sort of shaped like a staff, or stealing lightbulbs for 'the potent lunar energies within'."],
            "images":[["art/oct2025/ocean-shore.png","art/oct2025/ocean-shore.webp"]]
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
    currentCharacter = character
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
    if (character.images) {
        imageArrayMax = character.images.length - 1;
        imageArrayCurrent = 0;

        galleryFullImage = `../images/${character.images[0][0]}`;
        if (currentCharacter.images[imageArrayCurrent][1]) {
            galleryImage.src = `../images/${currentCharacter.images[0][1]}`;
        } else {
            galleryImage.src = `../images/${currentCharacter.images[0][0]}`;
        }

        imageCount.innerHTML = `1/${imageArrayMax + 1}`
        characterGallery.classList.remove('show-none');
    }
    else { characterGallery.classList.add('show-none'); }

    characterSelect.classList.add('show-none')
    characterInfo.classList.add('show-flex')
}

/* consider fusing these maybe? or don't */
const nextImage = () => {
    if (imageArrayCurrent != imageArrayMax) {
        imageArrayCurrent++
    } else { imageArrayCurrent = 0 }
    imageCount.innerHTML = `${imageArrayCurrent + 1}/${imageArrayMax + 1}`
    galleryFullImage = `../images/${currentCharacter.images[imageArrayCurrent][0]}`;

    if (currentCharacter.images[imageArrayCurrent][1]) {
        galleryImage.src = `../images/${currentCharacter.images[imageArrayCurrent][1]}`;
    } else {
        galleryImage.src = `../images/${currentCharacter.images[imageArrayCurrent][0]}`;
    }
    console.log(galleryFullImage)
}
const prevImage = () => {
    if (imageArrayCurrent != 0) {
        imageArrayCurrent--
    } else { imageArrayCurrent = imageArrayMax }
    imageCount.innerHTML = `${imageArrayCurrent + 1}/${imageArrayMax + 1}`
    galleryFullImage = `../images/${currentCharacter.images[imageArrayCurrent][0]}`;

    if (currentCharacter.images[imageArrayCurrent][1]) {
        galleryImage.src = `../images/${currentCharacter.images[imageArrayCurrent][1]}`;
    } else {
        galleryImage.src = `../images/${currentCharacter.images[imageArrayCurrent][0]}`;
    }
}
const firstImage = () => {
    imageArrayCurrent = 0
    imageCount.innerHTML = `${imageArrayCurrent + 1}/${imageArrayMax + 1}`
    galleryFullImage = `../images/${currentCharacter.images[imageArrayCurrent][0]}`;

    if (currentCharacter.images[imageArrayCurrent][1]) {
        galleryImage.src = `../images/${currentCharacter.images[imageArrayCurrent][1]}`;
    } else {
        galleryImage.src = `../images/${currentCharacter.images[imageArrayCurrent][0]}`;
    }
}

nextImageButton.addEventListener("click", () => {
    nextImage()
})
prevImageButton.addEventListener("click", () => {
    prevImage()
})
imageCount.addEventListener("click", () => {
    firstImage()
})

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
        characterSelect.insertAdjacentHTML('beforeend', `<div id="${character.characterID}" class="character-button button-texture"><img src="../images/${character.characterImage}">${character.displayName}</div>`)
        document.querySelector(`#${character.characterID}`).addEventListener("click", () => {
            showDescription(character)
        })
    })
}

renderCharacterButtons()

/* gutted version of image-display.js... this is fine for now but like you know variable name blending.*/

let displayView = document.querySelector('.image-display')

let fullViewCloseButton = document.querySelector('.full-view-close-button')
let formatButton = document.querySelector('.format-button')
let displayContainer = document.querySelector('.display-container')

let displayImage = document.querySelector('.display-image')

galleryImage.addEventListener("click", () => {
    displayImage.src = galleryFullImage
    displayView.classList.add('show-block')
})

fullViewCloseButton.addEventListener("click", () => {
    displayView.classList.remove('show-block')
})
formatButton.addEventListener("click", () => {
    displayContainer.classList.toggle('full-image-view')
})