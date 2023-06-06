// winnningStyle = [
//     [1,2,3],
//     [3,6,9],
//     [7,8,9],
//     [1,4,7],
//     [2,5,8],
//     [4,5,6],
//     [1,5,9],
//     [3,5,7],
// ]


let gamePlayer1 = "X";
let gamePlayer2 = "O";

let turn = gamePlayer1
player1 = document.querySelector("#labelbox1")
player2 = document.querySelector("#labelbox2")
const ALLBOXES = document.querySelectorAll(".boxdiv")



ALLBOXES.forEach(function (box) {
    // box.innerHTML= 
    // box.style.color ="blue"
    box.addEventListener("click" , boxclick , {once:true} )
    
})

function boxclick(e) {
  console.log(e)
  
 
  if (turn == gamePlayer1) {
    e.target.innerHTML=gamePlayer1
    turn=gamePlayer2
  } else {
    e.target.innerHTML=gamePlayer2
    turn=gamePlayer1
  } 
    let div1 = document.getElementById("1").innerText
    let div2 = document.getElementById("2").innerText
    let div3 = document.getElementById("3").innerText
    let div4 = document.getElementById("4").innerText
    let div5 = document.getElementById("5").innerText
    let div6 = document.getElementById("6").innerText
    let div7 = document.getElementById("7").innerText
    let div8 = document.getElementById("8").innerText
    let div9 = document.getElementById("9").innerText

     

   switch (true) {
    case (div1==div2 && div3==div2) :
            checkwin(div1)
        break;
     case (div3==div6 && div9==div6) :
           checkwin(div6)
        break;
     case (div7==div8 && div8==div9) :
         checkwin(div7)
        break;
    case (div1==div4 && div4==div7) :
         checkwin(div4)
        break;                
    case (div2==div5 && div5==div8) :
        checkwin(div5)
        break;
    case (div7==div8 && div8==div9) :
        checkwin(div8)
    break;
    case (div4==div5 && div5==div6) :
        checkwin(div4)
        break;
    case (div1==div5 && div5==div9) :
        checkwin(div1)
        break;
    case (div3==div5 && div5==div7) :
        checkwin(div3)
        break;
    default:
        break
   }
   let draw=false

 for (box of ALLBOXES) {
    console.log(box);
    if ((box.innerText==gamePlayer1) || (box.innerText == gamePlayer2)) {
        draw = true
    } else {
        draw = false
        break;
    }
    
 }


  if (draw == true) {
    reset()
  }

}
 function checkwin(e){
console.log(444);
    if(e==gamePlayer1){
        player1.innerHTML=parseInt(player1.innerHTML)+1
        // player1.innerHTML=Number( player1.innerHTML);
        //document.write("player1,u won")
        reset()
    }else if(e==gamePlayer2){
        player2.innerHTML=parseInt(player2.innerHTML)+1
        reset()
    }else{
        null
    }
    
 }


 function reset() {
 document.getElementById("1").innerText = "1"
 document.getElementById("2").innerText = "2"
 document.getElementById("3").innerText = "3"
 document.getElementById("4").innerText = "4"
 document.getElementById("5").innerText = "5"
 document.getElementById("6").innerText = "6"
 document.getElementById("7").innerText = "7"
 document.getElementById("8").innerText = "8"
 document.getElementById("9").innerText = "9"

 startAgain()


}

function startAgain() {

    
ALLBOXES.forEach(function (box) {
    // box.innerHTML= 
    // box.style.color ="blue"
    box.addEventListener("click" , boxclick , {once:true} )
     


})
    
}

function resetplayers() {
  document.getElementById("labelbox1").innerText = 0
  document.getElementById("labelbox2").innerText = 0

}

 
let button = document.getElementById("btn").onclick = function () {
    resetplayers()
}

 





// let gamePlayer1 = "x";
// let gamePlayer2 = "O";
// player1 = document.querySelector(".player1score").innerHTML= ""
// player2 = document.querySelector(".player2score").innerHTML= ""
// const ALLBOXES = document.querySelectorAll(".boxdiv")

// winnningStyle = [
//     [1,2,3],
//     [3,6,9],
//     [7,8,9],
//     [1,4,7],
//     [2,5,8],
//     [4,5,6],
//     [1,5,9],
//     [3,5,9],
// ]

// ALLBOXES.forEach(function (box) {
//     // box.innerHTML= 
//     // box.style.color ="blue"
//     box.addEventListener("click" , boxclick , {once:true} )
    
// })

// function boxclick(e) {
//   console.log(e)
//   e.target.innerHTML=gamePlayer1

// }








