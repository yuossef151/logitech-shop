let card = JSON.parse(localStorage.getItem("itm")) || [];

const numcard = document.querySelector(".num");

function myadd() {
  numcard.innerHTML = `
            <p class="num1">${card.length}</p>

`;
  localStorage.setItem("itm", JSON.stringify(card));
}
myadd();

const slid2 = document.querySelector(".slids-1");
const slidArr2 = [
  {
    img: "img2/test/all.png",   
    tite: "All Deals",   
    href: "Deals.html",             
  },
  {
    img: "img2/test/shop-1.png",
    tite: "Gaming Mice",
    href: "/mice.html",
  },
  {
    img: "img2/test/shop-2.png",
    tite: "Gaming Mousepads",
    href: "",
  },
  {
    img: "img2/test/shop-3.png",
    tite: "Gaming Keyboards",
    href: "/Keyboards.html",
  },
  {
    img: "img2/test/shop-4.png",
    tite: "Gaming Headsets & Audio",
    href: "/HEADSETS.html",
  },
  {
    img: "img2/test/shop-5.png",
    tite: "Racing Wheels",
    href: "",
  },
  {
    img: "img2/test/shop-6.png",
    tite: "Microphones",
    href: "",
  },
  {
    img: "img2/test/shop-7.png",
    tite: "Simulation",
    href: "",
  },
  {
    img: "img2/test/shop-8.png",
    tite: "Cameras & Lighting",
  },
  {
    img: "img2/test/shop-9.png",
    tite: "Refurbished Products",
  },
];

function slids2() {
if (slid2) {
    slidArr2.forEach((el) => {
        slid2.innerHTML += `
            <div class="swiper-slide slid myslids-1">
                <a href="${el.href || '#'}">
                    <div class="myimg-5">
                        <div class="my-img">
                            <img src="${el.img}" alt="${el.tite}">
                        </div>
                        <h5>${el.tite}</h5>
                    </div>
                </a>
            </div>
        `;
    });
}
}
slids2();
const slid3 = document.querySelector(".slids-2");
const slidArr3 = [
  {
    img: "img2/test/imgi_11_gaming-shop-g522-lightspeed-card.jpg",
    tite: "G5 SERIES",
    title2: "G522 LIGHTSPEED",
    descrebtion:
      "G522 LIGHTSPEED is designed for the future legends of PC gaming—featuring our best-ever microphone and premium lighting, sound, and lightweight comfort.",
    slry: "$159.99",
    del: "",
  },
  {
    img: "img2/test/imgi_12_gaming-shop-powerplay-2-card.jpg",
    tite: "POWERPLAY 2",
    title2: "POWERPLAY 2",
    descrebtion:
      "The ultimate wireless gaming mouse charging system, keeping your compatible mouse charged at all times. Charges while playing, sets up easily, and is future-ready.",
    slry: "$199.99",
    del: "",
  },
  {
    img:"img2/test/imgi_13_gaming-shop-pro-x-tkl-rapid-card.jpg",
        tite: "PRO SERIES",
    title2: "PRO X TKL RAPID",
    descrebtion:
      "Elevate your game with magnetic-analog linear switches for lightning-fast response and precision. Enjoy customizable actuation, vibrant LIGHTSYNC RGB lighting, and a durable design.",
    slry: "$159.99",
    del: "$189.99",
  },
  {
    img:"img2/test/imgi_14_gaming-shop-pro-x-tkl-rapid-card-1.jpg",
    tite: "PRO SERIES",
    title2: "PRO X SUPERLIGHT 2 DEX",
    descrebtion:
      "Meet the 60 g asymmetrical mouse featuring advanced HERO 2 sensor, robust LIGHTSPEED wireless, and LIGHTFORCE switches while delivering up to 95 hours of battery life.",
    slry: "$149.99",
    del: "$179.99",
  },
];

function slids3() {
if (slid3) {
    slidArr3.forEach((el) => {
        slid3.innerHTML += `
            <div class="swiper-slide">
                <div class="my-cards2">
                    <div class="img-container">
                        <a href="#">
                            <img src="${el.img}" alt="${el.title2}">
                            <div class="brdrs">
                                <div class="brdr1"></div>
                                <div class="brdr2"></div>
                            </div>
                        </a>
                    </div>
                    <div class="cardtitle">
                        <h6>${el.tite}</h6>
                        <h3>${el.title2}</h3>
                        <p>${el.descrebtion}</p>
                        <div class="price-box">
                            <span>${el.slry}</span>
                            ${el.del ? `<span><del>${el.del}</del></span>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}
}
slids3();
const slid4 = document.querySelector(".slids-3");
const slidArr4 = [
  {
    img:"img2/test/imgi_15_gaming-pro-series-card.jpg",
    tite: "PRO SERIES",
    descrebtion:
      "PRO Series is designed to win championships. It’s trusted by the world’s best players for the highest levels of competition—giving pros the focus and precision they need to dominate their game.",
  },
  {
    img:"img2/test/imgi_16_gaming-sim-racing-series.jpg",
    tite: "SIM RACING",
    descrebtion:
      "Through design, engineering and a love of driving games, Logitech G takes racing simulation to another level.",
  },
  {
    img:"img2/test/imgi_17_gaming-astro-series-card.jpg",
    tite: "ASTRO SERIES",
    descrebtion:
      "The Astro Series premium console gaming headsets from Logitech G bring unparalleled realism, detail and style that gets you off the couch and into the game.",
  },
  {
    img:"img2/test/img-shop-1.jpg",
    tite: "G5 SERIES",
    descrebtion:
      "Whether you’re conquering RPG worlds, shaving speedrun milliseconds, or just playing around with friends, G5 Series is the set of legendary items aiding you in your quest.",
  },
  {
    img:"img2/test/imgi_19_gaming-game-stream-create-series-card.jpg",
    tite: "GAME, CREATE AND STREAM",
    descrebtion:
      "Whether you’re hitting record for the first time or your chat is being raided by the thousands, pro-grade filming, lighting, and voice are the keys to engaging and growing your audience. Let’s take your stream to new heights.",
  },
];

function slids4() {
if (slid4) {
    slidArr4.forEach((el) => {
        slid4.innerHTML += `
            <div class="swiper-slide">
                <div class="my-cards2">
                    <div class="img-container">
                        <a href="#">
                            <img src="${el.img}" alt="${el.tite}">
                            <div class="brdrs">
                                <div class="brdr1"></div>
                                <div class="brdr2"></div>
                            </div>
                        </a>
                    </div>
                    <div class="cardtitle">
                        <h3>${el.tite}</h3>
                        <p>${el.descrebtion}</p>
                    </div>
                </div>
            </div>
        `;
    });
}
}
slids4();
