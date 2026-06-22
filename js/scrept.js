let card = JSON.parse(localStorage.getItem("itm")) || [];

const numcard = document.querySelector(".num");
function myadd() {
  if (numcard) {
    numcard.innerHTML = `<p class="num1">${card.length}</p>`;
  }
  localStorage.setItem("itm", JSON.stringify(card));
}
myadd();

// 1️⃣ تهيئة السلايدر الأول (Promotions Slider)
// =================================================================
// 1️⃣ السلايدر الأول الرئيسي (Promotions Slider - 1 of 3)
// =================================================================
var swiperPromo = new Swiper(".swiper1", {
  speed: 600,
  spaceBetween: 30,
  parallax: true,
  pagination: {
    el: ".pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next2", // أسهمه الخاصة بيه فوق
    prevEl: ".prev2",
  },
  on: {
    slideChange: function () {
      const swebr = document.querySelector(".shop-NOW p");
      if (swebr) {
        swebr.innerHTML = `${this.activeIndex + 1} of 3`;
      }
    }
  }
});

// =================================================================
// 2️⃣ السلايدر الثاني (SHOP OUR SERIES - الكروت اللي تحت بعضها)
// =================================================================
var swiperSeries = new Swiper(".mySwipers", {
  slidesPerView: 3,
  spaceBetween: 25,
  direction: "horizontal",
  navigation: {
    nextEl: ".next-series", // تم تغيير الاسم هنا لمنع التداخل تماماً
    prevEl: ".prev-series",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 25
    }
  }
});

// =================================================================
// 3️⃣ السلايدر الثالث والاخير (.my-Swipers المذكور في كودك)
// =================================================================
// 3️⃣ تهيئة السلايدر الثالث (ADVANCED GAMING GEAR)
var swiperCategory = new Swiper(".my-Swipers", {
  slidesPerView: 3,
  spaceBetween: 30,
  direction: "horizontal",
  navigation: {
    nextEl: ".next-gear", // ربطه بالأسهم المخصصة له
    prevEl: ".prev-gear",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
// --- مصفوفات البيانات وحلقات التكرار الخاصة بك (تبدأ من هنا وتظل كما هي) ---

const slidArr = [
  {
    img:"img2/logitech/imgi_1_pro-series-card-new.jpg",
    tite: "PRO SERIES ",
    titletow: "Zero distractions. Nothing between you and the win.",
    href: "SHOP PRO SERIES",
    href2: "CHAMPIONS.html",
  },
  {
    img:"img2/logitech/imgi_2_sim-racing-card.jpg",
    tite: "SIM RACING",
    titletow: "Feel the thrill of the race with innovations in immersive realism.",
    href: "SHOP SIM SERIES ",
  },
  {
    img:"img2/logitech/imgi_3_astro-series-card.jpg",
    tite: "ASTRO SERIES",
    titletow: "Unparalleled realism, detail and style that gets you off the couch and into the game.",
    href: "SHOP ASTRO SERIES",
  },
  {
    img:"img2/logitech/imgi_4_g5-series-card.jpg",
    tite: "G5 SERIES",
    titletow: "Become a legend with the ultimate legendary gear.",
    href: "SHOP G5 SERIES",
  },
  {
    img:"img2/logitech/imgi_5_game-stream-create-card.jpg",
    tite: "GAME, STREAM & CREATE",
    titletow: "Your stream. Your setup. There’s no limit to the ways you can customize your Logitech G gaming and streaming studio.",
    href: "SHOP THE STUDIO",
  },
];

const slid = document.querySelector(".slids");
if (slid) {
  slidArr.map((el, indx) => {
    slid.innerHTML += `
    <div class="swiper-slide slid px-4">
    <a href="${el.href2 || '#'}">
        <div class="slid2">
          <img class="pb-3" src="${el.img}" alt="">
          <h4>${el.tite}</h4>
          <p class="py-3">${el.titletow}</p>
          <span>${el.href}</span> <div class="bord"></div>
        </div>
        <a/>
      </div>

    `;
  });
}

const slidsArr = [
  {
    img:"img2/logitech/imgi_6_gaming-mice.jpg",
    tite: "GAMING MICE",
  },
  {
    img:"img2/logitech/imgi_7_gaming-mousepad.jpg",
    tite: "GAMING MOUSEPADS",
  },
  {
    img:"img2/logitech/imgi_8_gaming-keyboard.jpg",
    tite: "GAMING KEYBOARDS",
  },
  {
    img:"img2/logitech/imgi_9_gaming-headsets-audio.jpg",
    tite: "GAMING HEADSETS & AUDIO",
  },
];

const slids = document.querySelector(".my-slids");
if (slids) {
  slidsArr.forEach((el, indx) => {
    slids.innerHTML += `
      <div class="swiper-slide gear-card">
        <a href="">
          <img src="${el.img}" alt="" />
          <div class="label">
            <h5>${el.tite}</h5>
          </div>
        </a>
      </div>
    `;
  });
}

const cardss = [
  { img:"img2/logitech/shop-1.png", title: "RACING WHEELS" },
  { img:"img2/logitech/shop-2.png", title: "SPACE, FLIGHT, FARM SIM GEAR" },
  { img:"img2/logitech/shop-3.png", title: "MICROPHONES" },
  { img:"img2/logitech/shop-4.png", title: "CAMERAS & LIGHTING" },
  { img:"img2/logitech/shop-5.png", title: "GAMING MOUSEPADS" },
  { img:"img2/logitech/shop-6.png", title: "GAMING HEADSETS & AUDIO" },
  { img:"img2/logitech/shop-1.png", title: "CLOUD GAMING" },
  { img:"img2/logitech/shop-7.png", title: "GAMEPADS & CONTROLLERS" },
  { img:"img2/logitech/shop-8.png", title: "SIM RACING SEATS" },
  { img:"img2/logitech/shop-9.png", title: "GAMING MICE" },
  { img:"img2/logitech/shop-10.png", title: "GAMING KEYBOARDS" },
  { img:"img2/logitech/shop-11.png", title: "GAMING ACCESSORIES" },
];

const mycards = document.querySelector(".mycards3");
if (mycards) {
  mycards.innerHTML = ""; // تنظيف الحاوية أولاً لمنع التكرار
  cardss.forEach((el, indx) => {
    mycards.innerHTML += `
      <div class="col-12 col-md-6 col-sm-6 col-xl-3 col-xxl-2">
        <div class="my-card">
          <a href="">
            <div class="img-container">
              <img src="${el.img}" alt="${el.title}">
            </div>
            <p>${el.title}</p>
          </a>
        </div>
      </div>
    `;
  });
}


const cards = [
  {
    img:"img2/logitech/imgi_22_play-for-the-breakthroughs-card-new.jpg",
    title: "PLAY FOR THE BREAKTHROUGHS",
    desc:"The thrill, the win, the culture. No matter why you play, Logitech G has the gear to help you hit your next breakthrough. And when you hit it - KEEP PLAYING."
  },
  {
    img:"img2/logitech/imgi_23_g-challenge-card.jpg",
    title: "G CHALLENGE",
    desc:"Start your engines! The Logitech McLaren G Challenge returns to Forza Motorsport this Summer on Xbox and PC! Set your fastest lap in person for your chance to win cash and prizes, including a VIP Travel Experience to the McLaren Technology Centre."
  },
  {
    img:"img2/logitech/imgi_24_ghub-basics-card.jpg",
    title: "G HUB BASICS",
    desc:"Set your DPI, make your first assignment and try out some cool LIGHTSYNC effects. Take a hands on tour of the basics of G HUB."
  },
];

const mycard2 = document.querySelector(".mycards4");
if (mycard2) {
  mycard2.innerHTML = ""; // تنظيف الحاوية لمنع التكرار
  cards.forEach((el, indx) => {
    mycard2.innerHTML += `
      <div class="col-12 col-md-4">
        <div class="my-cards2">
          <a href="">
            <div class="img-box">
              <img src="${el.img}" alt="${el.title}">
              <div class="brdrs">
                <div class="brdr1"></div>
                <div class="brdr2"></div>
              </div>
            </div>
            <div class="cardtitle">
              <h3>${el.title}</h3>
              <p>${el.desc}</p>
            </div>
          </a>
        </div>
      </div>
    `;
  });
}