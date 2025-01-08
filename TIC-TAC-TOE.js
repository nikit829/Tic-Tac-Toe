let boxes=document.querySelectorAll(".box")
let newGamebtn=document.querySelector(".new-game")
let msgContainer=document.querySelector(".msg-container")
let winningMsg=document.querySelector(".msg-winner")
let drawCount=0

let turn=true;
const winningChance=[[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,4,8],
                    [2,4,6],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8]]

boxes.forEach((box)=>{
    box.addEventListener("click",(event)=>{
        drawCount++
        if(turn){
            box.innerText="X"
            box.innerHTML="<p style='color:red'>X</p>";
            turn = false
        }
        else{
            box.innerText="O"
            box.innerHTML="<p style='color:blue'>O</p>";
            turn = true
        }
        box.disabled=true
        checkWinner();
    })
    
});

const checkWinner = ()=>{
    for(let pattern of winningChance){
        let p1=boxes[pattern[0]].innerText
        let p2=boxes[pattern[1]].innerText
        let p3=boxes[pattern[2]].innerText

        if(p1 != "" && p2 != "" && p3 != ""){
            if(p1===p2 && p2===p3){
                showWinner(p1);
                disableBoxes();
                alert(`Congratulations, Winner is ${p1}`)
                return;
            }
        }
        if(drawCount===9){
            showDraw();
            disableBoxes();
        }
    }
    /* if(isBoardFull()){
        showDraw();
        disableBoxes();
    } */
}
/* const isBoardFull=()=>{
    for(let box of boxes){
        if(box.innerText==="")
        return false;
    }
    return true;
} */

const showDraw=()=>{
    winningMsg.innerText=`Match's Draw!`
    msgContainer.classList.remove("hide")
}

const showWinner=(winner)=>{
    winningMsg.innerText=`Congratulations, the winner is ${winner}`
    msgContainer.classList.remove("hide")
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

const newGame=()=>{
    for(let box of boxes){
        msgContainer.classList.add("hide")
        enableBoxes();
    }
}
newGamebtn.addEventListener("click",()=>{
    newGame();
})