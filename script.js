let screen=document.getElementById("screen");
let button=document.querySelectorAll("button");
let screenValue="";
for(item of button){
    item.addEventListener("click",function(e){
        buttonText=e.target.innerText;
        console.log("Button text is",buttonText);
        if(buttonText=="C"){
          screenValue="";
          screen.value=screenValue;
        }
        else if(buttonText=="="){
            screen.value=eval(screenValue);
        }
        else{
            screenValue=screenValue+buttonText;
            screen.value=screenValue;
        }
    })
}