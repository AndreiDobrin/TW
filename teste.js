window.onload = function(){
    let images = ["slideshow1","slideshow2","slideshow3","slideshow4"]

    let i = 0;
    
    document.getElementById('left').addEventListener('click', () => showImage('left'))
    document.getElementById('right').addEventListener('click', () => showImage('right'))
    slideshowAnimation()

    function showImage(direction){
        console.log(direction);
        if(direction == 'left'){
            if(i == 0){
                document.getElementById(images[i]).style.animation = "slideshow_out 1s linear forwards";
                i = 3;
                document.getElementById(images[i]).style.animation = "slideshow_in 1s linear forwards";
            }
            else {
                document.getElementById(images[i]).style.animation = "slideshow_out 1s linear forwards";
                i -= 1;
                document.getElementById(images[i]).style.animation = "slideshow_in 1s linear forwards";
            }

        }
        else if(direction == 'right'){
            if(i == 3){
                document.getElementById(images[i]).style.animation = "slideshow_out 1s linear forwards";
                i = 0;
                document.getElementById(images[i]).style.animation = "slideshow_in 1s linear forwards";
            }
            else {
                document.getElementById(images[i]).style.animation = "slideshow_out 1s linear forwards";
                //document.getElementById(images[i]).style.animation-duration = "4s";
                i += 1;
                document.getElementById(images[i]).style.animation = "slideshow_in 1s linear forwards";
                //document.getElementById(images[i]).style.animation-duration = "4s";
            }   
        }
    }

    function slideshowAnimation(){
        for(i=0;i<4;i++){
            if(i == 0)
            {
                document.getElementById(images[i]).style.animation = "none";
                
                document.getElementById(images[i]).style.animation = "slideshow 20s linear forwards infinite"
                document.getElementById(images[i]).style.animationDelay = "0s"

            }
            
        }
}
}