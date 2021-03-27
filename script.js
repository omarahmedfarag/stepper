(function(){
    let stepper=0;
    var prev= document.querySelector(".prev")
    var next= document.querySelector(".next")
    var progress= document.querySelector(".progress-inner")
    var steps= document.querySelector(".stepper-counter")
    loadProgress();
    next.addEventListener("click",()=>{
        prev.disabled = false;
        if(stepper<3)
        {
            stepper++;
            if(stepper==3)
                next.disabled=true
            steps.children[stepper].classList.add("boder");
            progress.style.width=(stepper*33.3)+'%'
        }
    })
    prev.addEventListener("click",()=>{
        next.disabled=false;
        if(stepper>0)
        {
            stepper--;
            if(stepper==0)
                prev.disabled=true;
            steps.children[stepper+1].classList.remove("boder");
            progress.style.width=(stepper*33.3)+'%'
        }
    })
    function loadProgress()
    {
        if(stepper==0)
        {
            prev.disabled=true
        }
        if(stepper==3)
        {
            next.disabled=true;
        }
        steps.children[stepper].classList.add("boder");
        progress.style.width=(stepper*33.3)+'%'
    }
})()
