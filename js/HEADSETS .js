
let card = JSON.parse(localStorage.getItem("itm"))||[]


const mycardsarr = [
  {
    img: "img2/HEADSETS/img-1.png",
    title: "G522 LIGHTSPEED",
    dicrebtion: "Wireless Gaming Headset with LIGHTSYNC RGB",
    slry: 159.99,
    del: "",
    discount: "",
            dlar:"$",
    dlardell:"",
    
  },
  {
    img: "img2/HEADSETS/img-2.png",
    title: "ASTRO A50 (Gen 5)",
    dicrebtion: "LIGHTSPEED Wireless Gaming Headset and Base Station with PLAYSYNC Audio",
    slry: 279.99,
    del: 299.99,
    discount: "$20.00 OFF",
            dlar:"$",
    dlardell:"$",
  },
  {
    img: "img2/HEADSETS/img-3.png",
    title: "ASTRO A50 X LIGHTSPEED",
    dicrebtion: "Wireless Gaming Headset and Base Station with PLAYSYNC",
    slry: 349.99,
    del: 399.99,
    discount: "$50.00 OFF",
            dlar:"$",
    dlardell:"$",
  },
  {
    img: "img2/HEADSETS/img-4.png",
    title: "PRO X 2",
    dicrebtion: "LIGHTSPEED Wireless 7.1 Gaming Headset with Bluetooth",
    slry: 229.99,
    del: 279.99,
    discount: "$50.00 OFF",
            dlar:"$",
    dlardell:"$",
  },
  {
    img: "img2/HEADSETS/img-5.png",
    title: "G733",
    dicrebtion: "LIGHTSPEED Wireless Gaming Headset with LIGHTSYNC RGB",
    slry: 119.99,
    del: 159.99,
    discount: "$40.00 OFF",
            dlar:"$",
    dlardell:"$",
  },
  {
    img: "img2/HEADSETS/img-6.png",
    title: "ASTRO A30 LIGHTSPEED",
    dicrebtion: "Wireless Gaming Headset",
    slry: 179.99,
    del: "",
    discount: "",
            dlar:"$",
    dlardell:"",
  },
  {
    img: "img2/HEADSETS/img-7.png",
    title: "G560",
    dicrebtion: "2.1 Gaming Speakers with LIGHTSYNC RGB",
    slry: 249.99,
    del: "",
    discount: "",
            dlar:"$",
    dlardell:"",
  },
  {
    img: "img2/HEADSETS/img-8.png",
    title: "PRO X SE",
    dicrebtion: "Wired Gaming Headset",
    slry: 119.99,
    del: "",
    discount: "",
            dlar:"$",
    dlardell:"",
  },
  {
    img: "img2/HEADSETS/img-9.png",
    title: "G735",
    dicrebtion: "LIGHTSPEED Wireless Gaming Headset with LIGHTSYNC RGB",
    slry: 179.99,
    del: 259.99,
    discount: "$80.00 OFF",
            dlar:"$",
    dlardell:"$",
  },
  {
    img: "img2/HEADSETS/img-10.png",
    title: "Astro A10",
    dicrebtion: "Wired Gaming Headset",
    slry: 49.99,
    del: 69.99,
    discount: "28% OFF",
            dlar:"$",
    dlardell:"$",
  },
  {
    img: "img2/HEADSETS/img-11.png",
    title: "PRO X WIRELESS",
    dicrebtion: "LIGHTSPEED Wireless 7.1 Gaming Headset",
    slry: 159.99,
    del: 179.99,
    discount: "$20.00 OFF",
            dlar:"$",
    dlardell:"$",
  },
  {
    img: "img2/HEADSETS/img-12.png",
    title: "PRO X",
    dicrebtion: "Wired 7.1 Gaming Headset",
    slry: 129.99,
    del: "",
    discount: "",
            dlar:"$",
    dlardell:"",
  },
  {
    img: "img2/HEADSETS/img-13.png",
    title: "ASTRO A20",
    dicrebtion: "Wireless Gaming Headset",
    slry: "139.99",
    del: "",
    discount: "",
            dlar:"$",
    dlardell:"",
  },
  {
    img: "img2/HEADSETS/img-14.png",
    title: "G335",
    dicrebtion: "Wired Gaming Headset",
    slry: "49.99",
    del: "69.99",
    discount: "28% OFF",
            dlar:"$",
    dlardell:"$",
  },
  {
    img: "img2/HEADSETS/img-15.png",
    title: "G435",
    dicrebtion: "LIGHTSPEED Wireless Gaming Headset",
    slry: "79.99",
    del: "",
    discount: "",
            dlar:"$",
    dlardell:"",
  },
  {
    img: "img2/HEADSETS/img-16.png",
    title: "G535",
    dicrebtion: "LIGHTSPEED Wireless Gaming Headset",
    slry: "119.99",
    del: "",
    discount: "",
            dlar:"$",
    dlardell:"",
  },

];

const cardds = document.querySelector(".mycards");
mycardsarr.forEach((el, endx) => {
  cardds.innerHTML += `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card h-100">
        <button class="heart"> 
          <svg class="myheart" viewBox="0 0 24 24"><path d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"/></svg>
        </button> 
        <img src="${el.img}" class="card-img-top" alt="..." />
        <div class="card-body d-flex flex-column">
          <div class="card-text pb-4">
            <h5 class="card-title">${el.title}</h5>
            <p class="card-text">${el.dicrebtion}</p>
          </div>
          <div class="mt-auto">
            <div class="slry mb-2">
              <span>${el.dlar}${el.slry}</span>
              <span class="ms-2"><del>${el.dlardell}${el.del}</del></span>
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

    localStorage.setItem("itm", JSON.stringify(card));

// const mycards = []

function add(){
numcard.innerHTML =`
            <p class="num1">${card.length}</p>

`
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
      img: mycardsarr[num].img,
      total: mycardsarr[num].slry,
      delet: mycardsarr[num].del,
          dalar:mycardsarr[num].dlar,
    dalardel:mycardsarr[num].dlardell,
        desc:mycardsarr[num].dicrebtion,

    };
    card.push(prodact);
    localStorage.setItem("itm", JSON.stringify(card));


    

      localStorage.setItem("itm", JSON.stringify(card));


}
add()

    console.log(card);
    console.log(num);
}



const cardsContainer = document.querySelector(".mycards");

cardsContainer.addEventListener("click", function hart(e) {
  if (e.target.closest(".myheart")) {
    const heart = e.target.closest(".myheart");
    heart.classList.toggle("liked");

  }
  
});
// localStorage.clear();
