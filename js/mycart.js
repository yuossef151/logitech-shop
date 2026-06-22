let card = JSON.parse(localStorage.getItem("itm"))||[]
console.log(card);



const numcard = document.querySelector(".num")
function cardlenth(){
              localStorage.setItem("itm", JSON.stringify(card));
numcard.innerHTML =""
numcard.innerHTML =`
            <p class="num1">${card.length}</p>

`
console.log(card.length);

}
cardlenth();

const mycarts =document.querySelector(".mycarts-1")
function carts() {
    mycarts.innerHTML = "";
    card.forEach((el, endix) => {
mycarts.innerHTML += `
<div class="mycard1">
    <div class="myimg2">
        <img src="${el.img}" alt="">
    </div>
    
    <div class="cart-content"> <div class="card1">
            <h2 class="h6">${el.cardName}</h2>
            <p class="small text-muted">${el.desc}</p>
        </div>

        <div class="card2">
            <h5>${el.dalar}${(el.total * el.proQty).toFixed(2)}</h5>
            
            <div class="numofcart">
                <button onclick="dele(${endix})" class="mbtn">-</button>
                <span>${el.proQty}</span>
                <button onclick="add(${endix})" class="mbtn">+</button>
            </div>

            <button class="mbtn remove-text" onclick="delet(${endix})" style="color:red; font-size: 11px;">
                Remove
            </button>
        </div>
    </div>
</div>
`;
    });
}

carts();
// localStorage.clear();

// dele();

function add(myind) {
  card[myind].proQty++;
  localStorage.setItem("itm", JSON.stringify(card));
  carts();
  cardlenth(); // إضافة هذه السطر هنا
}

function dele(myindx) {
  if (card[myindx].proQty === 1) {
    delet(myindx);
  } else {
    card[myindx].proQty--;
    localStorage.setItem("itm", JSON.stringify(card));
    carts();
    cardlenth(); // إضافة هذه السطر هنا
  }
}


function dele(myindx) {
      if (card[myindx].proQty === 1) {
    delet(myindx);
  carts();
  cardlenth();

   }
   else{
    card[myindx].proQty--;
    console.log(card[myindx].proQty);
        //   console.log(card[myindx].proQty);

    
            localStorage.setItem("itm", JSON.stringify(card));

     carts();

   }

}
function delet(indx) {
    card.splice(indx , 1);
    //    localStorage.setItem("cards",JSON.stringify(card))||[];

    carts();
    cardlenth();

            localStorage.setItem("itm", JSON.stringify(card));

     
}

          localStorage.setItem("itm", JSON.stringify(card));
