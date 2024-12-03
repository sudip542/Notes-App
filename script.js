const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
const notes=document.querySelectorAll(".input-box");

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes()
createBtn.addEventListener('click',()=>{
    let inputBox=document.createElement("p");
    let img =document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }
    else if(e.target.tagName === "P"){
        note=document.querySelectorAll(".input-box");
        note.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})