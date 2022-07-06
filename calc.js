let btn = document.querySelectorAll("button");
let un = document.querySelector(".top");
let deux = document.querySelector(".bottom");

for (i = 0; i < btn.length; i++){
btn[i].addEventListener('click', function(){
    if(this.innerText === "C"){
        deux.innerText = "";
        un.innerText = "";
    }else if (this.innerText === "DEL"){
        deux.innerText = deux.innerText.slice(0, -1)
    }
    else if (this.innerText === "="){
        try {
            un.innerText = deux.innerText
            deux.innerText = eval(deux.innerText)
        } catch (error) {
            un.innerText = "Error!"
        }
    }else {
        deux.innerText += this.innerHTML
    }
})
}