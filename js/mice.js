
// let card = JSON.parse(localStorage.getItem("itm"))||[]
let card = JSON.parse(localStorage.getItem("itm")) || [];


const mycardsarr = [
  {
    img:"/img2/Mice/MICE-2.png",
    title: "G305 LIGHTSPEED",
    dicrebtion: "Wireless Gaming Mouse - Sayu/Thoma/Shikanoin Heizou Special Edition",
    slry: 39.99,
    del: "",
    discount: "",
        dlar:"$",
    dlardell:"",
  },
  {
    img:"/img2/Mice/MICE-3.png",
    title: "PRO X SUPERLIGHT 2 DEX",
    dicrebtion: "LIGHTSPEED Wireless Gaming Mouse",
    slry: 149.99,
    del: 179.99,
    discount: "$30.00 OFF",
        dlar:"$",
    dlardell:"$",
  },
  {
    img:"/img2/Mice/MICE-4.png",
    title: "G309 LIGHTSPEED - Genshin Impact Edition",
    dicrebtion: "Kamisato Ayaka Edition Wireless Gaming Mouse",
    slry: 79.99,
    del: "",
    discount: "",
        dlar:"$",
    dlardell:"",
  },
  {
    img:"/img2/Mice/MICE-5.png",
    title: "G502 X PLUS",
    dicrebtion: "LIGHTSPEED Wireless Gaming Mouse with LIGHTSYNC RGB",
    slry: 179.99,
    del: "",
    discount: "",
        dlar:"$",
    dlardell:"",
  },
  {
    img:"/img2/Mice/MICE-6.png",
    title: "PRO X SUPERLIGHT 2",
    dicrebtion: "LIGHTSPEED Wireless Gaming Mouse",
    slry: 139.99,
    del: 179.99,
    discount: "$40.00 OFF",
        dlar:"$",
    dlardell:"$",
  },
  {
    img:"/img2/Mice/MICE-7.png",
    title: "G502 X LIGHTSPEED",
    dicrebtion: "Wireless Gaming Mouse",
    slry: 159.99,
    del: "",
    discount: "",
            dlar:"$",
    dlardell:"",
    
  },
  {
    img:"/img2/Mice/MICE-8.png",
    title: "PRO X SUPERLIGHT",
    dicrebtion: "LIGHTSPEED Wireless Gaming Mouse",
    slry: 129.99,
    del: 149.99,
    discount: "$20.00 OFF",
            dlar:"$",
    dlardell:"$",
  },
  {
    img:"/img2/Mice/MICE-10.png",
    title: "G309 LIGHTSPEED Wireless Mouse",
    dicrebtion: "Wireless Gaming Mouse with LIGHTFORCE Switches",
    slry: 69.99,
    del: 89.99,
    discount: "22% OFF",
            dlar:"$",
    dlardell:"$",
  },
  {
    img:"/img2/Mice/MICE-11.png",
    title: "PRO 2 LIGHTSPEED",
    dicrebtion: "Ambidextrous LIGHTSPEED Wireless Gaming Mouse",
    slry: 119.99,
    del: 149.99,
    discount: "$30.00 OFF",
            dlar:"$",
    dlardell:"$",
  },
  {
    img:"/img2/Mice/MICE-12.png",
    title: "G705",
    dicrebtion: "LIGHTSPEED Wireless Gaming Mouse",
    slry: 99.99,
    del: "",
    discount: "",
            dlar:"$",
    dlardell:"",
  },
  {
    img:"/img2/Mice/MICE-13.png",
    title: "G305",
    dicrebtion: "LIGHTSPEED Wireless Gaming Mouse",
    slry: 39.99,
    del: 59.99,
    discount: "33% OFF",
            dlar:"$",
    dlardell:"$",
  },
  {
    img:"/img2/Mice/MICE-14.png",
    title: "G502",
    dicrebtion: "Wired Gaming Mouse",
    slry: 69.99,
    del: "",
    discount: "",
            dlar:"$",
    dlardell:"",
  },
  {
    img:"/img2/Mice/MICE-15.png",
    title: "G203",
    dicrebtion: "Wired Gaming Mouse",
    slry: 39.99,
    del: "",
    discount: "",
            dlar:"$",
    dlardell:"",
  },

];

const cardds = document.querySelector(".mycards");
mycardsarr.forEach((el, endx) => {
  cardds.innerHTML += `
    <div class="col-lg-4 col-md-6 col-12">
        <div class="card h-100 p-2">
            <button class="heart"> 
                <svg class="myheart" viewBox="0 0 24 24"><path d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"/></svg>
            </button>
            <img src="${el.img}" class="card-img-top" alt="..." />
            <div class="card-body">
                <div>
                    <h5 class="card-title">${el.title}</h5>
                    <p class="card-text">${el.dicrebtion}</p>
                </div>
                <div class="addtocard flex-column"> <div class="slry mb-2">
                        <span>${el.dlar}${el.slry}</span>
                        <span><del>${el.dlardell}${el.del}</del></span>
                        <span class="off">${el.discount}</span>
                    </div>
                    <button onclick="plsnum(${endx})" class="add">
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
    </div>
  `;
});


const numcard = document.querySelector(".num")
// let num2 = 0;
// if (num2 > 0){
    

// }
// const mycards = []

function add(){
numcard.innerHTML =`
            <p class="num1">${card.length}</p>

`
      localStorage.setItem("itm", JSON.stringify(card));

}
add()

function plsnum(num){
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 900
});
  const prodact = {
    img: mycardsarr[num].img,
    cardName: mycardsarr[num].title,
    proQty: 1,
        desc:mycardsarr[num].dicrebtion,

    total: mycardsarr[num].slry,
    delet: mycardsarr[num].del,
    dalar:mycardsarr[num].dlar,
    dalardel:mycardsarr[num].dlardell,
  };
      localStorage.setItem("itm", JSON.stringify(card))

  let brodacts = card.find((pro) => {
    return pro.cardName === mycardsarr[num].title;
  })
  if (brodacts) {
    brodacts.proQty++;
    localStorage.setItem("itm", JSON.stringify(card))
  } else {
    let prodacts = {
      ...mycardsarr[num],
      proQty: 1,
          desc:mycardsarr[num].dicrebtion,

      img: mycardsarr[num].img,
      total: mycardsarr[num].slry,
      delet: mycardsarr[num].del,
          dalar:mycardsarr[num].dlar,
    dalardel:mycardsarr[num].dlardell,
    };
    card.push(prodact);
    localStorage.setItem("itm", JSON.stringify(card));
    // card.push(mycardsarr[num])


    

        // numcard.classList.add("active");
      localStorage.setItem("itm", JSON.stringify(card));

// console.log(card);

}
add()

    console.log(card);
    console.log(num);
    // console.log(card[num].proQty);
}


const cardsContainer = document.querySelector(".mycards");


cardsContainer.addEventListener("click", function hart(e) {
  if (e.target.closest(".myheart")) {
    const heart = e.target.closest(".myheart");
    heart.classList.toggle("liked");
  }
});


// localStorage.clear();