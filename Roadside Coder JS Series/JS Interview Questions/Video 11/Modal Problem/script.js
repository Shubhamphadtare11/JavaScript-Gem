const container = document.querySelector(".modalContainer");
const button = document.querySelector(".modalButton");

button.addEventListener("click",()=>{
    toggleModal(true);
})

function toggleModal(toggle){
    container.style.display=toggle?"flex":"none";
}

container.addEventListener("click",(e)=>{
    //console.log(e.target.className);

    if(e.target.className==="modalContainer")
    toggleModal(false);
})