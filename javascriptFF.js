const text = document.querySelector(".fancy");
const strText = text.textcontent;
const splitText = strText.split ("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++){
    text.innerhtml += "<span>" + splitText[i] + "<span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll ('span') [char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clerInterval(timer);
    timer = null;
}