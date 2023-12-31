"use strict";
class Card {
    constructor(id, title, imageUrl, body) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.body = body;
    }
}
class CardComment {
    constructor(id, postId, email, body) {
        this.id = id;
        this.postId = postId;
        this.email = email;
        this.body = body;
    }
}
class ProjectState {
    constructor() {
        this.anchorCards = document.querySelectorAll('.anchorPost');
        this.imageCards = document.querySelectorAll('.img-card');
        this.titleCards = document.querySelectorAll('.title-card');
        this.descriptionCards = document.querySelectorAll('.description');
        this.imageCardsDetails = document.querySelector('.img-card-detail');
        this.titleCardsDetails = document.querySelector('.title-card-detail');
        this.descriptionCardsDetails = document.querySelector('.description-detail');
        this.userCardsDetails = document.querySelectorAll('.user');
        this.userEmailCardsDetails = document.querySelectorAll('.user-email');
        this.paragraphCardsDetails = document.querySelectorAll('.paragraph-detail');
        this.cards = [];
        this.comments = [];
        this.cards = this.buildingPosts();
        this.comments = this.buildingComments();
        console.log(this.anchorCards.length);
        if (this.anchorCards.length > 0)
            this.addPosts();
        this.renderContentDetail();
    }
    buildingPosts() {
        const card1 = new Card(1, 'Valorant', 'assets/valorant.png', 'Valorant is a free-to- play multiplayer first-person shooter video game developed and published by Riot Games . It is the first game of its kind developed by the company, being first announced under the codename Project A in October 2019, at an event celebrating 10 years of League of Legends.' +
            'It was released on June 2, 2020 for Microsoft Windows.');
        const card2 = new Card(2, 'Call of Duty', 'assets/callOfDuty.jpg', 'Call of Duty: Black Ops II is a first-person shooter , developed by Treyarch and published by Activision ( Square Enix in Japan ). Black Ops II was one of the most anticipated games of 2012. It was officially released on November 13, 2012 for Microsoft Windows , PlayStation 3 and Xbox 360 platforms.' +
            'And on November 18 for theWii U. The first release too place inNorth America, on November 30, 2012 then inEuropeon December 20, 2012 and inJapan, on the same date.');
        const card3 = new Card(3, 'Minecraft', 'assets/mine.avif', 'Minecraft is asurvival sandbox video game created by Swedish developer Markus "Notch" Persson and later developed and published by Mojang Studios , whose intellectual property was acquired by Microsoft in 2014.' +
            'Initially released in May 2009 as an in-development project, its release full release took place in November 2011 for Microsoft Windows , macOS , Linux , and select mobile devices , and was later re-released for a wide variety of platforms. And thebest-selling video game of all time , selling over 238 million copies across all platforms as of April 2021, with over 140 million monthly active players.');
        const card4 = new Card(4, 'Spider-Man', 'assets/spiderMan.jpg', 'Marvels Spider-Man is anaction -adventure video game developed by Insomniac Games and published by Sony Interactive Entertainment . It is based on the characters, mythology, and other media adaptations of the Marvel Comics comic book superhero Spider -Man , ' +
            'and was released exclusively for the PlayStation 4 on September 7, 2018. In the story, the superhuman criminal Mister Negative organizes a plan to get revenge on Mayor Norman Osborn and take control of New Yorks criminal underworld . Spider-Man must protect the city as Mister Negative threatens to release a deadly virus across the area, while being forced to deal with his personal problems as Peter Parker.');
        const card5 = new Card(5, 'God of War', 'assets/godOfWar.webp', 'God of War Ragnarök is anaction -adventure video game developed by Santa Monica Studio and published by Sony Interactive Entertainment . It was released on November 9, 2022 for PlayStation 4 and PlayStation 5 . It is the ninth title in the God of War series , the ninth chronologically, and the sequel to God of War (2018). Loosely based on Norse mythology , the game is set in ancient Scandinavia and features protagonists Kratos and his son Atreus. Serving as the end of the series' +
            'Norse era, the game kicks off Ragnarök., a series of events that brings about the end of time and depicts the death of some of the Norse gods , which was foretold in the previous game after Kratos killed the Æsir god Baldur');
        const card6 = new Card(6, 'League of Legends', 'assets/lol.jpg', 'League of Legends (abbreviated as LoL and commonly referred to as League ) is amultiplayer online battle arena (MOBA) video game developed and published by Riot Games.' +
            'It was released in October 2009 for Microsoft Windows and March 2013 for macOS . Inspired by Defense of the Ancients ( DotA ), a modification of Warcraft III , the founders of Riot sought to develop a standalone game in the same genre. Since its launch, the title has been free to play.and monetized through character customization, which is obtainable through a virtual currency purchasable with real money.');
        return [card1, card2, card3, card4, card5, card6];
    }
    buildingComments() {
        const comment1_valorant = new CardComment(1, 1, 'john.doe@example.com', 'Valorant is a fast-paced and strategic shooter that keeps players on the edge of their seats with its intense ' +
            'gameplay and unique character abilities.');
        const comment2_valorant = new CardComment(2, 1, 'jane.smith@example.com', 'I love the competitive nature of Valorant, as it requires teamwork, communication, and precise aim to come out ' +
            'on top. It s a thrilling experience that rewards skilled play.');
        const comment3_valorant = new CardComment(3, 1, 'alexander.brown@example.com', 'Valorants diverse roster of agents adds an exciting layer of depth to the game, allowing players to find their ' +
            'own playstyle and contribute to their team s success in different ways. It s a refreshing take on the FPS genre.');
        const comment1_callOfDuty = new CardComment(4, 2, 'emily.wilson@example.com', 'Call of Duty: Black Ops II offers an immersive and gripping campaign that takes players through a thrilling storyline ' +
            'set in the near-future. The branching narrative choices keep you engaged and eager to see how the story unfolds.');
        const comment2_callOfDuty = new CardComment(5, 2, 'david.johnson@example.com', 'The multiplayer in Black Ops II is addictive and fast-paced, with a wide variety of maps and game modes to keep you ' +
            'entertained for hours. The customization options and the introduction of the Pick 10 system add depth and strategy to the gameplay.');
        const comment3_callOfDuty = new CardComment(6, 2, 'sarah.thomas@example.com', 'Zombies mode in Black Ops II is a blast to play with friends. The cooperative gameplay, intense survival challenges, ' +
            'and the inclusion of the TranZit mode, which allows you to explore a larger open world, make it a standout feature of the game. It s a must-play for fans of the undead.');
        const comment1_mine = new CardComment(7, 3, 'michael.jackson@example.com', 'Minecraft is a creative sandbox game that offers endless possibilities. From building intricate structures to exploring vast ' +
            'procedurally generated worlds, it sparks the imagination and provides a relaxing and immersive experience.');
        const comment2_mine = new CardComment(8, 3, 'sophia.williams@example.com', 'The beauty of Minecraft lies in its simplicity and freedom. Whether you prefer to embark on epic adventures, engage in resource ' +
            'gathering and survival, or showcase your creativity through building impressive structures, the game caters to all play styles and lets you create your own virtual world.');
        const comment3_mine = new CardComment(9, 3, 'liam.jones@example.com', 'Minecraft s multiplayer mode brings people together, allowing friends to collaborate on projects, compete in minigames, or simply ' +
            'hang out and have fun. It fosters a sense of community and provides a platform for endless shared experiences and memories.');
        const comment1_spiderMan = new CardComment(10, 4, 'olivia.davis@example.com', 'Spider-Man delivers an exhilarating open-world experience, with fluid web-swinging mechanics, intense combat sequences, ' +
            'and a captivating storyline that keeps you hooked from start to finish.');
        const comment2_spiderMan = new CardComment(11, 4, 'noah.miller@example.com', 'The attention to detail in Spider-Man is astounding, from the beautifully recreated New York City to the intricate animations ' +
            'and web-slinging physics. It truly makes you feel like you re stepping into the shoes of the iconic superhero.');
        const comment3_spiderMan = new CardComment(12, 4, 'ava.anderson@example.com', 'Spider-Man combines the best elements of action, exploration, and storytelling, creating a game that appeals to both fans of the ' +
            'franchise and newcomers alike. With its compelling characters, thrilling missions, and a wealth of side activities, it offers hours of immersive and enjoyable gameplay.');
        const comment1_godOfWar = new CardComment(13, 5, 'ethan.thompson@example.com', 'God of War Ragnarok promises an epic continuation of Kratos journey, with stunning visuals, intense combat, and a Norse ' +
            'mythology-inspired storyline that is sure to leave players on the edge of their seats.');
        const comment2_godOfWar = new CardComment(14, 5, 'isabella.martin@example.com', 'The next installment in the God of War series, Ragnarok, looks incredibly promising. With its immersive world, deep character ' +
            'development, and brutal yet satisfying combat, it s shaping up to be a must-play game for fans of the franchise.');
        const comment3_godOfWar = new CardComment(15, 5, 'logan.wilson@example.com', 'God of War Ragnarok has generated a lot of anticipation, and for good reason. The previous game set a high standard, and this ' +
            'upcoming installment is expected to deliver another unforgettable adventure with its blend of mythology, emotional storytelling, and visceral gameplay.');
        const comment1_lol = new CardComment(16, 6, 'ethan.thompson@example.com', 'League of Legends is a highly competitive and strategic multiplayer online battle arena (MOBA) game that offers a vast roster of ' +
            'diverse champions, intense team-based gameplay, and a thriving esports scene.');
        const comment2_lol = new CardComment(17, 6, 'isabella.martin@example.com', 'The depth and complexity of League of Legends make it a game that keeps players coming back for more. With its ever-evolving meta, ' +
            'constant updates, and the need for strong teamwork and communication, it provides a challenging and rewarding experience.');
        const comment3_lol = new CardComment(18, 6, 'logan.wilson@example.com', 'League of Legends has a passionate and dedicated community that spans the globe. The game s emphasis on teamwork, coordination, and ' +
            'skillful execution makes each match a unique and exciting experience, fostering both friendly competition and lasting friendships.');
        return [
            comment1_valorant, comment2_valorant, comment3_valorant,
            comment1_callOfDuty, comment2_callOfDuty, comment3_callOfDuty,
            comment1_mine, comment2_mine, comment3_mine,
            comment1_spiderMan, comment2_spiderMan, comment3_spiderMan,
            comment1_godOfWar, comment2_godOfWar, comment3_godOfWar,
            comment1_lol, comment2_lol, comment3_lol
        ];
    }
    addPosts() {
        for (let i = 0; i < this.cards.length; i++) {
            this.anchorCards[i].id = this.cards[i].id.toString();
            this.anchorCards[i].href = `post_detail.html#${i + 1}`;
            this.imageCards[i].src = this.cards[i].imageUrl;
            this.titleCards[i].textContent = this.cards[i].title;
            this.descriptionCards[i].textContent = this.cards[i].body;
        }
    }
    renderContentDetail() {
        const url = new URL(window.location.href);
        const id = url.hash.substring(1);
        this.cards.forEach((card) => {
            if (card.id === +id) {
                this.imageCardsDetails.src = card.imageUrl;
                this.titleCardsDetails.textContent = card.title;
                this.descriptionCardsDetails.textContent = card.body;
            }
        });
        let indexComment = 0;
        this.comments.forEach((comment) => {
            if (comment.postId === +id) {
                this.userCardsDetails[indexComment].textContent = comment.email.split(".")[0] + ': ';
                this.userEmailCardsDetails[indexComment].textContent = comment.email + ': ';
                this.paragraphCardsDetails[indexComment].textContent = comment.body;
                indexComment++;
            }
        });
    }
}
const p = new ProjectState();
//# sourceMappingURL=data.js.map