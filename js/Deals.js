let card = JSON.parse(localStorage.getItem("itm")) || [];

const numcard = document.querySelector(".num");

function myadd() {
  numcard.innerHTML = `
            <p class="num1">${card.length}</p>

`;
  localStorage.setItem("itm", JSON.stringify(card));
}
myadd();

const mycardsarr = [
  {
    img: "img2/Deals/imge-1.png",
    title: "Astro A10",
    dicrebtion: "Wired Gaming Headset",
    slry: "59.99",
    del: "69.99",
    discount: "14% OFF",
    dlar: "$",
    dlardell: "$",
  },
  {
    img: "img2/Deals/imge-2.png",
    title: "G903",
    dicrebtion: "LIGHTSPEED Wireless Gaming Mouse",
    slry: "119.99",
    del: "139.99",
    discount: "$20.00 OFF",
    dlar: "$",
    dlardell: "$",
  },
  {
    img: "img2/Deals/imge-3.png",
    title: "G915 X",
    dicrebtion: "Wired Low Profile Gaming Keyboard",
    slry: "179.99",
    del: "199.99",
    discount: "$20.00 OFF",
    dlar: "$",
    dlardell: "$",
  },
  {
    img: "img2/Deals/imge-4.png",
    title: "G432",
    dicrebtion: "Wired Gaming Headse",
    slry: "39.99",
    del: "79.99",
    discount: "50% OFF",
    dlar: "$",
    dlardell: "$",
  },
  {
    img: "img2/Deals/imge-5.png",
    title: "G502",
    dicrebtion: "Wired Gaming Mouse",
    slry: "39.99",
    del: "69.99",
    discount: "42% off",
    dlar: "$",
    dlardell: "$",
  },
  {
    img: "img2/Deals/imge-6.png",
    title: "PRO X 60",
    dicrebtion: "Wireless 60% Gaming Keyboard- Optical Switches",
    slry: "149.99",
    del: "179.99",
    discount: "$30.00 off",
    dlar: "$",
    dlardell: "$",
  },
  {
    img: "img2/Deals/imge-7.png",
    title: "PRO X TKL RAPID",
    dicrebtion: "Wired Gaming Keyboard- Analog Switches",
    slry: "159.99",
    del: "189.99",
    discount: "$30.00 off",
    dlar: "$",
    dlardell: "$",
  },
  {
    img: "img2/Deals/imge-8.png",
    title: "G920/G29",
    dicrebtion: "2.3Nm Racing System",
    slry: "249.99",
    del: "329.99",
    discount: "$80.00 off",
    dlar: "$",
    dlardell: "$",
  },
  {
    img: "img2/Deals/imge-9.png",
    title: "Driving Force Shifter",
    dicrebtion: "DE9 For G Series",
    slry: "44.99",
    del: "59.99",
    discount: "25% off",
    dlar: "$",
    dlardell: "$",
  },
];

const cardds = document.querySelector(".mycards");
mycardsarr.forEach((el, endx) => {
cardds.innerHTML += `
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card h-100 p-3">
      <button class="heart"><svg class="myheart" ...></svg></button>
      <img src="${el.img}" class="card-img-top" alt="...">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${el.title}</h5>
        <p class="card-text">${el.dicrebtion}</p>
        
        <div class="slry mb-3">
           <span class="h5">${el.dlar}${el.slry}</span>
           <span class="text-muted"><del>${el.dlardell}${el.del}</del></span>
           <span class="off d-block">${el.discount}</span>
        </div>
<button onclick="plsnum(${endx})" class="add mt-auto ">
    <span>Add to cart</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
</button>
      </div>
    </div>
  </div>
`;
});

function plsnum(num) {
    const productData = mycardsarr[num];
    
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added to cart",
        showConfirmButton: false,
        timer: 900,
    });

    // البحث عن المنتج
    let existingProduct = card.find((pro) => pro.cardName === productData.title);

    if (existingProduct) {
        existingProduct.proQty++;
    } else {
        card.push({
            cardName: productData.title,
            img: productData.img,
            desc: productData.dicrebtion,
            total: productData.slry,
            delet: productData.del,
            dalar: productData.dlar,
            dalardel: productData.dlardell,
            proQty: 1
        });
    }

    localStorage.setItem("itm", JSON.stringify(card));
    myadd();
}

const cardsContainer = document.querySelector(".mycards");

// أي كليك جوه الكونتينر
cardsContainer.addEventListener("click", function hart(e) {
  if (e.target.closest(".myheart")) {
    const heart = e.target.closest(".myheart");
    heart.classList.toggle("liked");
  }
});
