
let card = JSON.parse(localStorage.getItem("itm")) || [];

const numcard = document.querySelector(".num");

function myadd() {
  numcard.innerHTML = `
            <p class="num1">${card.length}</p>

`;
  localStorage.setItem("itm", JSON.stringify(card));
}
myadd();

const Arr = [
  {
    img: "img2/test/mice-1.png",
    title: "PRO X SUPERLIGHT 2 DEX",
  },
  {
    img: "img2/test/mice-2.png",
    title: "PRO X SUPERLIGHT 2",
  },
  {
    img: "img2/test/mice-3.png",
    title: "PRO 2 LIGHTSPEED",
  },
  {
    img: "img2/test/mice-4.png",
    title: "PRO X 2",
  },
  {
    img: "img2/test/mice-5.png",
    title: "PRO X TKL Rapid",
  },
];
const mycards = document.querySelector(".myrow-2");
function cards() {
  Arr.forEach((el) => {
    mycards.innerHTML += `
            <a href="">
                    <div class="card2">
                            <div class="mycardimg">
                                <img src="${el.img}" alt="">
                            </div>
                                <p>${el.title}</p>
                    </div>
            </a>
                            
    `;
  });
}
cards();
// img: "img2/test/",

const slid = document.querySelector(".slids");
const slidArr = [
  {
    isSpecial: true,
    img: "img2/test/imgi_6_pro-series-lp-highlight2.jpg",
    tite: "THE MOST ADVANCED SENSOR IN GAMING",
    titletow: "This is the HERO 2 sensor, engineered to redefine what’s possible...",
    linkText: "MEET HERO 2"
  },
  {
    img: "img2/test/imgi_7_pro-series-lp-highlight3.jpg",
    tite: "DESIGNED WITH PROS",
    titletow:
      "Built on grip telemetry and fatigue mapping from the absolute elite, every shell is pressure-tested and iterated for instinctive control over thousands of hours of gameplay. When players shape history, they shape our gear.",
  },
  {
    img: "img2/test/imgi_8_pro-series-lp-highlight4.jpg",
    tite: "TRUSTED BY CHAMPIONS",
    titletow:
      "From scrims to finals, PRO Series has carried titles, broken records, and set new standards. Trusted by the world’s best because it’s built to be.",
  },
  {
    img: "img2/test/imgi_9_pro-series-lp-highlight5.jpg",
    tite: "PRECISION ENGINEERED PERFORMANCE",
    titletow:
      "From LIGHTFORCE switches to the most advanced sensor in gaming, HERO 2, every component is validated in Logitech G’s industry-leading latency suite.",
  },
];

function slids() {
  slid.innerHTML = ""; // تنظيف الـ wrapper أولاً
  
  slidArr.forEach((el) => {
    // إذا كان السليد "خاصاً"، استخدمي تنسيقاً مختلفاً قليلاً أو نفس التنسيق
    slid.innerHTML += `
      <div class="swiper-slide slid">
        <div class="slid2">
          <img class="pb-3" src="${el.img}" alt="">
          <h4>${el.tite}</h4>
          <p>${el.titletow}</p>
          ${el.isSpecial ? `<a href="#"><span>${el.linkText}</span> <div class="bord"></div></a>` : ""}
        </div>
      </div>
    `;
  });
}
slids();

const mycard = document.querySelector(".mycards");

const mycards2 = [
  {
    img: "img2/test/imgi_10_pro-series-lp-media-card1.jpg",
    tite: "CHAMPIONSHIPS WON IN 2024",
    titletow:
      "61.5% of all 2024 League of Legends Championships were won with PRO Series.",
  },
  {
    img: "img2/test/imgi_11_pro-series-lp-media-card2.jpg",
    tite: "ESPORTS PLAYERS",
    titletow:
      "Logitech G has partnered with over 300 athletes and 44 teams globally.",
  },
  {
    img: "img2/test/imgi_12_pro-series-lp-media-card3.jpg",
    tite: "MOST USED MOUSE BRAND IN ESPORTS IN 2024",
    titletow:
      "Logitech G is trusted by teams across 25 countriesin elite competitions.",
  },
];
function cardspro() {
  mycard.innerHTML = ""; // تنظيف قبل الإضافة
  mycards2.forEach((el) => {
    mycard.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4 pb-4">
        <div class="mycard">
          <div class="myimgs">
            <img src="${el.img}" alt="">
          </div>
          <div class="pt-3">
            <h5 class="w-75 pb-2">${el.tite}</h5>
            <span>${el.titletow}</span>
          </div>
        </div>
      </div>
    `;
  });
}
cardspro();

// -------------------------------------------//
const mycard2 = document.querySelector(".mycards-2");

const mycards3 = [
  {
    img: "img2/test/imgi_16_pro-series-lp-holding-wooden-mouse.jpg",
    tite: "INSIDE LOOK | PRO X SUPERLIGHT 2",
    titletow: "Inside look",
    descrebtion:
      "Designed in collaboration with the best players in esports, the PRO Series is engineered to win. Learn more from our Logitech G team and esports pros as we give a deep dive into the PRO X Superlight 2.",
  },
  {
    img: "img2/test/imgi_17_pro-series-lp-person-with-headset.jpg",
    tite: "WHAT MAKES A CHAMPION? G2 GOZEN MEETS LERO LAB",
    titletow: "Inside look",
    descrebtion:
      "What sets pro esports players apart? G2 GOZEN travels to Ireland to team up with LERO, exploring the unique differences between women and men pro players.",
  },
  {
    img: "img2/test/imgi_18_pro-series-lp-holding-mice-with-kb.jpg",
    tite: "INSIDE LOOK | PRO X TKL RAPID",
    titletow: "Inside look",
    descrebtion:
      "Discover how pros helped develop the RAPID version of PRO X TKL—designed for clean movement and faster input. Hear from G2 and NAVI players on how it performs under pressure, and why every millisecond counts.",
  },
];
function mycards5() {
  mycard2.innerHTML = ""; // تنظيف
  mycards3.forEach((el) => {
    mycard2.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="mycard">
          <div class="myimgs">
            <img src="${el.img}" alt="">
          </div>
          <div class="pt-3">
            <h4 class="pb-2">${el.tite}</h4>
            <h6 class="pb-2 text-primary">${el.titletow}</h6>
            <span>${el.descrebtion}</span>
          </div>
        </div>
      </div>
    `;
  });
}

mycards5();
// -------------------------------------------//
const mycard3 = document.querySelector(".mycards-3");

const mycards4 = [
  {
    img: "img2/test/imgi_19_pro-series-lp-mice-standard.jpg",
    tite: "MICE",
    titletow: "PRO SERIES",
  },
  {
    img: "img2/test/imgi_20_pro-series-lp-keyboard-standard.jpg",
    tite: "KEYBOARDS",
    titletow: "PRO SERIES",
  },
  {
    img: "img2/test/imgi_21_pro-series-lp-headset-standard.jpg",
    tite: "HEADSETS",
    titletow: "PRO SERIES",
  },
];
function mycards6() {
  mycard3.innerHTML = ""; // تنظيف
  mycards4.forEach((el) => {
    mycard3.innerHTML += `
      <div class="col-12 col-md-4 mb-4">
        <a href="#" class="text-decoration-none">
          <div class="mycard2">
            <img src="${el.img}" alt="">
            <div class="PC ps-3 pb-2">
              <h4 class="pb-1">${el.tite}</h4>
              <h6 class="text-muted">${el.titletow}</h6>
            </div>
          </div>
        </a>
      </div>
    `;
  });
}
mycards6();

const slid2 = document.querySelector(".slids-1");
const slidArr2 = [
  {
    img: "img2/test/imgi_22_pro-series-lp-pro-pack1.jpg",
    tite: "B1T’S GEAR",
    img1: "img2/test/imgi_23_pro-x-superlight-2-mice-top-angle-pink-gallery-1-new.png",
    titeimg1: "PRO X SUPERLIGHT 2",
    slry1: "$139.99",
    del1: "$179.99",
    img2: "img2/test/imgi_24_pro-x-tkl-rapid-black-gallery-1-us.png",
    titeimg2: "PRO X TKL RAPID",
    slry2: "$159.99",
    del2: "$189.99",
    img3: "img2/test/imgi_25_gallery-1-pro-x-2-lightspeed-gaming-headset-black.png",
    titeimg3: "PRO X 2",
    slry3: "$229.99",
    del3: "$279.99",
  },
  {
    img: "img2/test/imgi_26_pro-series-lp-pro-pack2.jpg",
    tite: "DEV1CE'S GEAR",
    img1: "img2/test/imgi_23_pro-x-superlight-2-mice-top-angle-pink-gallery-1-new.png",
    titeimg1: "PRO X SUPERLIGHT 2",
    slry1: "$139.99",
    del1: "$179.99",
    img2: "img2/test/imgi_24_pro-x-tkl-rapid-black-gallery-1-us.png",
    titeimg2: "PRO X TKL RAPID",
    slry2: "$159.99",
    del2: "$189.99",
    img3: "img2/test/imgi_25_gallery-1-pro-x-2-lightspeed-gaming-headset-black.png",
    titeimg3: "PRO X 2",
    slry3: "$229.99",
    del3: "$279.99",
  },
  {
    img: "img2/test/imgi_27_pro-series-lp-pro-pack3.jpg",
    tite: "VALYN'S GEAR",
    img1: "img2/test/imgi_23_pro-x-superlight-2-mice-top-angle-pink-gallery-1-new.png",
    titeimg1: "PRO X SUPERLIGHT 2",
    slry1: "$139.99",
    del1: "$179.99",
    img2: "img2/test/imgi_24_pro-x-tkl-rapid-black-gallery-1-us.png",
    titeimg2: "PRO X TKL RAPID",
    slry2: "$159.99",
    del2: "$189.99",
    img3: "img2/test/imgi_25_gallery-1-pro-x-2-lightspeed-gaming-headset-black.png",
    titeimg3: "PRO X 2",
    slry3: "$229.99",
    del3: "$279.99",
  },
  {
    img: "img2/test/imgi_28_pro-series-lp-pro-pack4.jpg",
    tite: "CAPS' GEAR",
    img1: "img2/test/imgi_23_pro-x-superlight-2-mice-top-angle-pink-gallery-1-new.png",
    titeimg1: "PRO X SUPERLIGHT 2",
    slry1: "$139.99",
    del1: "$179.99",
    img2: "img2/test/imgi_29_pro-clicky-gallery-1.png",
    titeimg2: "PRO",
    slry2: "$109.99",
    del2: "$119.99",
    img3: "img2/test/imgi_25_gallery-1-pro-x-2-lightspeed-gaming-headset-black.png",
    titeimg3: "PRO X 2",
    slry3: "$229.99",
    del3: "$279.99",
  },
];

function slids2() {
  slidArr2.forEach((el, indx) => {
    slid2.innerHTML += `
        <div class="swiper-slide slid " >
                      <div class="slid2">
  <div class="myimg-5">
    <img src="${el.img}" alt="">
    <button class="btn btn-primary">SHOP THE SOLUTION</button>
  </div>
  <div class="svg py-3">
    <a href=""><h3>${el.tite}</h3></a>
    <span class="bordr-2 ">i</span>
  </div>
  <div class="mycards-9">
  <div class="mycards-5">
    <div>
      <img src="${el.img1}" alt="">
      <p>${el.titeimg1}</p>
    </div>
    <div>
      <span>${el.slry1}</span>
      <span><del>${el.del1}</del></span>
    </div>
  </div>
  <div class="mycards-5">
    <div>
      <img src="${el.img2}" alt="">
      <p>${el.titeimg2}</p>
    </div>
    <div>
      <span>${el.slry2}</span>
      <span><del>${el.del2}</del></span>
    </div>
  </div>
  <div class="mycards-5">
    <div>
      <img src="${el.img3}" alt="">
      <p>${el.titeimg3}</p>
    </div>
    <div>
      <span>${el.slry3}</span>
      <span><del>${el.del3}</del></span>
    </div>
  </div>
  </div>
          </div>

        </div>
      `;
  });
}
slids2();





document.addEventListener("DOMContentLoaded", function () {
  slids();
    slids2();
  // دالة لتحديد اتجاه السلايدر
  function getDirection() {
    // return window.innerWidth <= 760 ? "vertical" : "horizontal";
  }

  // السلايدر الأول (Shop Our Series)
var swiper1 = new Swiper(".mySwipers", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".clr1",
        prevEl: ".clr",
    },
    breakpoints: {
        320: { slidesPerView: 1 }, // موبايل: سليدة واحدة
        768: { slidesPerView: 2 }, // تابلت: سليدتين
        1024: { slidesPerView: 3 } // لابتوب: 3 سليدات
    }
});

  // السلايدر الثاني (Gear Packs)
var swiper2 = new Swiper(".my-Swipers", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next", // تأكدي أن هذه الكلاسات موجودة في الـ HTML
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: { slidesPerView: 1, slidesPerGroup: 1 },    // موبايل: سليدة واحدة
        768: { slidesPerView: 2, slidesPerGroup: 2 },  // تابلت: سليدتين
        1024: { slidesPerView: 2.5, slidesPerGroup: 2 } // لابتوب: كما أردتِ
    }
});
});
