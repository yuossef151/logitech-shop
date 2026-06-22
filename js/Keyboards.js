

let card = JSON.parse(localStorage.getItem("itm"))||[]




const mycardsarr = [
  {
    img:"/img2/Keyboards/keybord-16.png",
    title: "PRO X TKL RAPID",
    dicrebtion: "Wired Gaming Keyboard- Analog Switches",
    dlar:"$",
    dlardell:"$",
    slry: 159.99,
    del: 189.99,
    discount: "$30.00 OFF",
  },
  {
    img:"/img2/Keyboards/keybord-15.png",
    title: "G515 TKL",
    dicrebtion: "Wired Low Profile Gaming Keyboard",
    slry: 109.99,
    del: 119.99,
    discount: "$10.00 OFF",
        dlar:"$",
    dlardell:"$",
  },
  {
    img:"/img2/Keyboards/keybord-7.png",
    title: "G915 X LIGHTSPEED",
    dicrebtion: "Wireless Low Profile Gaming Keyboard",
    slry: 219.99,
    del: "",
    discount: "",
        dlar:"$",
    dlardell:"",
  },
  {
    img:"/img2/Keyboards/keybord-8.png",
    title: "G915 X LIGHTSPEED TKL",
    dicrebtion: "Wireless Low Profile Gaming Keyboard",
    slry: 229.99,
    del: "",
    discount: "",
        dlar:"$",
    dlardell:"",
  },
  {
    img:"/img2/Keyboards/keybord-9.png",
    title: "G915 X",
    dicrebtion: "Wired Low Profile Gaming Keyboard",
    slry: 199.99,
    del: "",
    discount: "",
        dlar:"$",
    dlardell:"",
  },
  {
    img:"/img2/Keyboards/keybord-6.png",
    title: "G515 LIGHTSPEED TKL",
    dicrebtion: "Wireless Low Profile Gaming Keyboard",
    slry: 149.99,
    del: 159.99,
    discount: "$10.00 OFF",
        dlar:"$",
    dlardell:"$",
  },
  {
    img:"/img2/Keyboards/keybord-13.png",
    title: "PRO X 60",
    dicrebtion: "Wireless 60% Gaming Keyboard- Optical Switches",
    slry: 149.99,
    del: "179.99",
    discount: "$30.00 OFF",
        dlar:"$",
    dlardell:"$",
  },
  {
    img:"/img2/Keyboards/keybord-3.png",
    title: "PRO X TKL",
    dicrebtion: "Wireless Gaming Keyboard- Mechanical Switches",
    slry: 199.99,
    del: "219.99",
    discount: "$20.00 OFF",
        dlar:"$",
    dlardell:"$",
  },
  {
    img:"/img2/Keyboards/keybord-8.png",
    title: "G915 TKL",
    dicrebtion: "Wireless Low Profile Gaming Keyboard",
    slry: 239.99,
    del: "",
    discount: "",
        dlar:"$",
    dlardell:"",
  },
  {
    img:"/img2/Keyboards/keybord-14.png",
    title: "G815",
    dicrebtion: "Wired Low Profile Gaming Keyboard",
    slry: 119.99,
    del: "",
    discount: "",
        dlar:"$",
    dlardell:"",
  },
  {
    img:"/img2/Keyboards/keybord-5.png",
    title: "G715",
    dicrebtion: "Wireless Gaming Keyboard and Palmrest- Mechanical Switches",
    slry: 189.99,
    del: "",
    discount: "",
        dlar:"$",
    dlardell:"",
  },
  {
    img:"/img2/Keyboards/keybord-1.png",
    title: "G213 Prodigy",
    dicrebtion: "RGB Gaming Keyboard",
    slry: 49.99,
    del: 59.99,
    discount: "16% OFF",
        dlar:"$",
    dlardell:"$",
  },
  {
    img:"/img2/Keyboards/keybord-2.png",
    title: "G915",
    dicrebtion: "Wireless Low Profile Gaming Keyboard",
    slry: 249.99,
    del: "",
    discount: "",
        dlar:"$",
    dlardell:"",
  },
  {
    img:"/img2/Keyboards/keybord-12.png",
    title: "G512",
    dicrebtion: "Wired Gaming Keyboard- Mechanical Switches",
    slry: 99.99,
    del: "",
    discount: "",
        dlar:"$",
    dlardell:"",
  },
  {
    img:"/img2/Keyboards/keybord-4.png",
    title: "PRO",
    dicrebtion: "Wired Gaming Keyboard- Mechanical Switches",
    slry: 109.99,
    del: 119.99,
    discount: "$10.00 OFF",
        dlar:"$",
    dlardell:"$",
  },
  {
    img:"/img2/Keyboards/keybord-11.png",
    title: "G713",
    dicrebtion: "Wired Gaming Keyboard and Palmrest- Mechanical Switches",
    slry: 169.99,
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
        <div class="card h-100 p-2">
            <button class="heart"> 
                <svg class="myheart" viewBox="0 0 24 24"><path d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"/></svg>
            </button>
            <img src="${el.img}" class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-column">
                <div class="card-text pb-4">
                    <h5 class="card-title">${el.title}</h5>
                    <p class="card-text">${el.dicrebtion}</p>
                </div>
                <div class="addtocard mt-auto flex-column">
                    <div class="slry mb-2">
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


function add(){
numcard.innerHTML =`
            <p class="num1">${card.length}</p>

`
      localStorage.setItem("itm", JSON.stringify(card));

}
add()
const cancelBtn2 = document.querySelector(".add")

function plsnum(num) {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Added to cart",
    showConfirmButton: false,
    timer: 900
  });

  let productData = mycardsarr[num];
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
  add(); // تأكدي أن دالة التحديث اسمها add() كما في كودك
}



const cardsContainer = document.querySelector(".mycards");

cardsContainer.addEventListener("click", function hart(e) {
  if (e.target.closest(".myheart")) {
    const heart = e.target.closest(".myheart");
    heart.classList.toggle("liked");
  }
});
// localStorage.clear();