"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const btnExpand = document.querySelectorAll('.expand-button');
    btnExpand.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = button.parentNode;
            const description = card.querySelector('.description');
            description.classList.toggle('expand');
            button.textContent = description.classList.contains('expand') ? 'Expand...' : 'Recolh...';
        });
    });
});
class Card {
    constructor(id, title, imageUrl, body) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.body = body;
    }
}
class ProjectState {
    constructor() {
        this.anchorCards = document.querySelectorAll('a');
        this.imageCards = document.querySelectorAll('.img-card');
        this.titleCards = document.querySelectorAll('.title-card');
        this.descriptionCards = document.querySelectorAll('.description');
        this.imageCardsDetails = document.querySelector('.img-card-detail');
        this.titleCardsDetails = document.querySelector('.title-card-detail');
        this.descriptionCardsDetails = document.querySelector('.description-detail');
        this.cards = [];
        this.card1 = {
            id: 0,
            title: "",
            imageUrl: "",
            body: ""
        };
        this.card2 = {
            id: 0,
            title: "",
            imageUrl: "",
            body: ""
        };
        this.card3 = {
            id: 0,
            title: "",
            imageUrl: "",
            body: ""
        };
        this.card4 = {
            id: 0,
            title: "",
            imageUrl: "",
            body: ""
        };
        this.card5 = {
            id: 0,
            title: "",
            imageUrl: "",
            body: ""
        };
        this.card6 = {
            id: 0,
            title: "",
            imageUrl: "",
            body: ""
        };
        this.cards = this.buildingPosts();
        if (window.location.href === 'http://localhost:5500/')
            this.addPosts();
        else
            this.renderContentDetail();
    }
    buildingPosts() {
        this.card1 = new Card(1, 'Valorant', 'https://a.espncdn.com/photo/2020/0601/r704230_3_1296x729_16-9.png', 'Valorant is a free-to- play multiplayer first-person shooter video game developed and published by Riot Games . It is the first game of its kind developed by the company, being first announced under the codename Project A in October 2019, at an event celebrating 10 years of League of Legends.' +
            'It was released on June 2, 2020 for Microsoft Windows.');
        this.card2 = new Card(2, 'Call of Duty', 'https://images2.alphacoders.com/597/thumb-1920-597965.jpg', 'Call of Duty: Black Ops II is a first-person shooter , developed by Treyarch and published by Activision ( Square Enix in Japan ). Black Ops II was one of the most anticipated games of 2012. It was officially released on November 13, 2012 for Microsoft Windows , PlayStation 3 and Xbox 360 platforms.' +
            'And on November 18 for theWii U. The first release too place inNorth America, on November 30, 2012 then inEuropeon December 20, 2012 and inJapan, on the same date.');
        this.card3 = new Card(3, 'Minecraft', 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f', 'Minecraft is asurvival sandbox video game created by Swedish developer Markus "Notch" Persson and later developed and published by Mojang Studios , whose intellectual property was acquired by Microsoft in 2014.' +
            'Initially released in May 2009 as an in-development project, its release full release took place in November 2011 for Microsoft Windows , macOS , Linux , and select mobile devices , and was later re-released for a wide variety of platforms. And thebest-selling video game of all time , selling over 238 million copies across all platforms as of April 2021, with over 140 million monthly active players.');
        this.card4 = new Card(4, 'Spider-Man', 'https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S1_2560x1440-73702d11161b29a0b7c40a8b489b1808', 'Marvels Spider-Man is anaction -adventure video game developed by Insomniac Games and published by Sony Interactive Entertainment . It is based on the characters, mythology, and other media adaptations of the Marvel Comics comic book superhero Spider -Man , ' +
            'and was released exclusively for the PlayStation 4 on September 7, 2018. In the story, the superhuman criminal Mister Negative organizes a plan to get revenge on Mayor Norman Osborn and take control of New Yorks criminal underworld . Spider-Man must protect the city as Mister Negative threatens to release a deadly virus across the area, while being forced to deal with his personal problems as Peter Parker.');
        this.card5 = new Card(5, 'God of War', 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png', 'God of War Ragnarök is anaction -adventure video game developed by Santa Monica Studio and published by Sony Interactive Entertainment . It was released on November 9, 2022 for PlayStation 4 and PlayStation 5 . It is the ninth title in the God of War series , the ninth chronologically, and the sequel to God of War (2018). Loosely based on Norse mythology , the game is set in ancient Scandinavia and features protagonists Kratos and his son Atreus. Serving as the end of the series' +
            'Norse era, the game kicks off Ragnarök., a series of events that brings about the end of time and depicts the death of some of the Norse gods , which was foretold in the previous game after Kratos killed the Æsir god Baldur');
        this.card6 = new Card(6, 'League of Legends', 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LOL_2560x1440-98749e0d718e82d27a084941939bc9d3', 'League of Legends (abbreviated as LoL and commonly referred to as League ) is amultiplayer online battle arena (MOBA) video game developed and published by Riot Games.' +
            'It was released in October 2009 for Microsoft Windows and March 2013 for macOS . Inspired by Defense of the Ancients ( DotA ), a modification of Warcraft III , the founders of Riot sought to develop a standalone game in the same genre. Since its launch, the title has been free to play.and monetized through character customization, which is obtainable through a virtual currency purchasable with real money.');
        return [this.card1, this.card2, this.card3, this.card4, this.card5, this.card6];
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
        for (const key in this.cards) {
            if (this.cards[key].id === +id) {
                this.imageCardsDetails.src = this.cards[key].imageUrl;
                this.titleCardsDetails.textContent = this.cards[key].title;
                this.descriptionCardsDetails.textContent = this.cards[key].body;
            }
        }
    }
}
const p = new ProjectState();
//# sourceMappingURL=data.js.map