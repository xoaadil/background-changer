let  bnt=document.querySelectorAll("button");
let back=document.querySelector("#outer");

bnt.forEach((button)=>{
    button.addEventListener("click", function(){
        console.log(this.id);
        if(this.id=="reset"){
            back.style.backgroundColor="white";
        }
        else {back.style.backgroundColor=this.id;}
        
    })
})