window.onload = function(){




    console.log('helo');

    let images = ["slideshow1","slideshow2","slideshow3","slideshow4"]

    let i = 0;
    let ok = 1;
    document.getElementById('slideshou_left').addEventListener('click', () => showImage('left'))
    document.getElementById('slideshou_right').addEventListener('click', () => showImage('right'))
    function first_slide(){
        console.log("hihihi")
        document.getElementById(images[i]).style.animation = 'none';
        document.getElementById(images[i]).style.animation = "slideshow 20s linear forwards infinite";
    }
    function resumeSlideshow(){
        ok=0
        console.log("chat");
        
        k = 0
        while(k < 4){
            if(k == 0){
                document.getElementById(images[i]).style.animation = 'none';
                document.getElementById(images[i]).offsetHeight;
                document.getElementById(images[i]).style.animation = "slideshow_out 5s linear forwards";
                setTimeout(first_slide, 20000)
            }
            document.getElementById(images[i]).style.animation = 'none';
            document.getElementById(images[i]).offsetHeight;
            
            if(k == 1){
                document.getElementById(images[i]).style.animationDelay = "5s";
                document.getElementById(images[i]).style.animation = "slideshow 20s linear forwards infinite";
            }
            else if(k == 2){
                document.getElementById(images[i]).style.animationDelay = "10s";
                document.getElementById(images[i]).style.animation = "slideshow 20s linear forwards infinite";
            }
            else if(k == 3){
                document.getElementById(images[i]).style.animationDelay = "15s";
                document.getElementById(images[i]).style.animation = "slideshow 20s linear forwards infinite";
            }
            if(i == 3){
                i = 0;
            }
            else{
                i += 1;
            }
            k += 1
        }
        
        ok=1
    }
    

    function showImage(direction){
        console.log(direction);
        //document.getElementById(images).style.animation = "slideshow_in 1s linear forwards";
        if(direction == 'left'){
            if(i == 0){
                document.getElementById(images[i]).style.animation = 'none';
                document.getElementById(images[i]).offsetHeight;
                document.getElementById(images[i]).style.animation = "slideshow_out 1s linear forwards";
                i = 3;
                document.getElementById(images[i]).style.animation = 'none';
                document.getElementById(images[i]).offsetHeight;
                document.getElementById(images[i]).style.animation = "slideshow_in 1s linear forwards";
            }
            else {
                document.getElementById(images[i]).style.animation = 'none';
                document.getElementById(images[i]).offsetHeight;
                document.getElementById(images[i]).style.animation = "slideshow_out 1s linear forwards";
                i -= 1;
                document.getElementById(images[i]).style.animation = 'none';
                document.getElementById(images[i]).offsetHeight;
                document.getElementById(images[i]).style.animation = "slideshow_in 1s linear forwards";
            }
    
        }
        else if(direction == 'right'){
            if(i == 3){
                document.getElementById(images[i]).style.animation = 'none';
                document.getElementById(images[i]).offsetHeight;
                document.getElementById(images[i]).style.animation = "slideshow_out 1s linear forwards";
                i = 0;
                document.getElementById(images[i]).style.animation = 'none';
                document.getElementById(images[i]).offsetHeight;
                document.getElementById(images[i]).style.animation = "slideshow_in 1s linear forwards";
            }
            else {
                document.getElementById(images[i]).style.animation = 'none';
                document.getElementById(images[i]).offsetHeight;
                document.getElementById(images[i]).style.animation = "slideshow_out 1s linear forwards";
                //document.getElementById(images[i]).style.animation-duration = "4s";
                i += 1;
                document.getElementById(images[i]).style.animation = 'none';
                document.getElementById(images[i]).offsetHeight;
                document.getElementById(images[i]).style.animation = "slideshow_in 1s linear forwards";
                //document.getElementById(images[i]).style.animation-duration = "4s";
            }   
        }
        console.log(ok)
}

const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('errorMessage');

function validateEmail(email) {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}


emailInput.addEventListener('input', function() {
    const email = this.value;
    
    if (email === '') {
        // If empty, reset styles
        this.classList.remove('valid', 'invalid');
        errorMessage.classList.remove('show');
    } else if (validateEmail(email)) {
        // Valid email
        this.classList.remove('invalid');
        this.classList.add('valid');
        errorMessage.classList.remove('show');
    } else {
        // Invalid email
        this.classList.remove('valid');
        this.classList.add('invalid');
        errorMessage.classList.add('show');
    }
});
document.getElementById('email-submit').addEventListener('click', () => {
    if(errorMessage.classList.contains('show') && this.classList.contains('valid'))
        console.log('1')
    else{
        console.log('0')
    }
})

    document.getElementById("loginbtn").addEventListener('click', () => {
        window.location.href = "login.html";
    })
}


