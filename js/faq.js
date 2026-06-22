let card = JSON.parse(localStorage.getItem("itm")) || [];



const numcard = document.querySelector(".num")

function myadd(){
numcard.innerHTML =`
            <p class="num1">${card.length}</p>

`
      localStorage.setItem("itm", JSON.stringify(card));

}
myadd()