let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".resetbtn")
let newgamebtn = document.querySelector("#newgamebtn")
let win = document.querySelector("#win")
let msg = document.querySelector(".msg")

let turn0 = true; //for start

const wincond = [
    [ 0, 1, 2 ],
    [ 0, 3, 6 ], 
    [ 1, 4, 7 ], 
    [ 0, 4, 8 ], 
    [ 2, 5, 8 ], 
    [ 2, 4, 6 ], 
    [ 3, 4, 5 ], 
    [ 6, 7, 8 ]
]
const btndisabled=()=>{
    for (const box of boxes) {
        box.disabled=true
    }}

const showwinner=(winner) =>{
    win.innerText=`Congratulation, Winner is ${winner}`
    msg.classList.remove("hide")
    btndisabled();
    
}

const reset = ()=>{
        for (const box of boxes) {
            box.innerText="";
            turn0=true;
            box.disabled=false;
            msg.classList.add("hide")            
        }
}

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
    if(turn0){
        box.innerText= "X"
    }
    else{
        box.innerText = "O"
    }
    turn0=!turn0;
    box.disabled=true;
    checkwinner();
    });
})
const checkwinner = ()=>{
    for (const cond of wincond) {
        let pos0 = boxes[cond[0]].innerText;
        let pos1 = boxes[cond[1]].innerText;
        let pos2 = boxes[cond[2]].innerText;
        
        if(pos0!="" && pos1!="" && pos2!=""){
            if(pos0==pos1 && pos1==pos2){
                console.log("winner : " + pos0)
                showwinner(pos0);


            }

        }
    }

}
resetbtn.addEventListener("click",reset)
newgamebtn.addEventListener("click",reset)