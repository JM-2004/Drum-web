

for(var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    function handleClick(){
    
    var butt=this.innerHTML;
    handlePress(butt);
    animate(butt)
        switch (butt) {
            case "w":
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
                break;            
            case "s":
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                break;
        }
    }
}


document.addEventListener("keydown",function(event){handlePress(event.key);animate(event.key)});

document.addEventListener("keydown",handlePress());
    function handlePress(key){
        switch (key) {
            case "w":
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
                break;            
            case "s":
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                break;
        }
    }


    function animate(currentKey){
        var activeButton=document.querySelector("."+currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){activeButton.classList.remove("pressed");},100);
    }