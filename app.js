let count=0;
texts=document.querySelector(".texxt");
btns=document.querySelectorAll(".btt");
btns.forEach(function(b){
    b.addEventListener("click",function(act){
       actions=(act.currentTarget.classList) ;
       if(actions.contains("inc")){
           count++;
       }
       else if(actions.contains("dec")){
           count--;
       }
       else{
           count=0;
       }
       if(count>0){
           texts.style.color="green";
       }
       if(count<0){
        texts.style.color="red";
       }
       if(count===0){
        texts.style.color="black";
       }
       texts.textContent=count;
    });

});



