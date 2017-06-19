var slides = document.querySelectorAll('#slides .slide');
var allSlides = document.getElementById('slides');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,6000);
var playing = true;
var modalOpen = false;
var present = true;

//Controls
var pauseButton = document.getElementById('pause');
var backButton = document.getElementById('back');
var forwardButton = document.getElementById('forward');

//PDF Modal
var Sign = document.getElementById('pausePlayImg');
var adobeIcon = document.getElementById('adobe');
var adobeIconS = document.getElementById('adobeShorter');
var adobeIcon3 = document.getElementById('adobe3rd');
var modal = document.getElementById('modal');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');
var closeButton = document.getElementsByClassName("close")[0];
var closeButton2 = document.getElementsByClassName("close2")[0];
var closeButton3 = document.getElementsByClassName("close3")[0];

//Alert Modal
var alertModal = document.getElementById('alertModal');
var yesButton = document.getElementById('yes');
var noButton = document.getElementById('no');
var resumeSlideshow;
var alertQ;


function nextSlide(){
    if(playing){ 
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide,6000);
    } else{
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
    pauseSlideshow();
    };  
}
function previousSlide(){
    if(playing){ 
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide-1)%slides.length;
    slides[currentSlide].className = 'slide showing';
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide,6000);
    } else{
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide-1)%slides.length;
    slides[currentSlide].className = 'slide showing';
    pauseSlideshow();
};
}

//Start and Pause functions

function pauseSlideshow(){
    Sign.src = "play.png"
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
    Sign.src = "pause.png" 
    playing = true;
    slideInterval = setInterval(nextSlide,6000);
}
function closeAndPlaySlideshow(){
    alertModal.style.display = "none";
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modalOpen = false;
    clearInterval(slideInterval);
    playSlideshow();
}

//Clicks - start and pause

allSlides.onclick = function(){
    if(playing){ 
    pauseSlideshow();
    resumeSlideshow = setTimeout(closeAndPlaySlideshow,13000); 
    } else if(modalOpen){ 
    pauseSlideshow(); 
    } else{
    playSlideshow();
    }
};

pauseButton.onclick = function(){
    if(playing){ 
    pauseSlideshow();
    resumeSlideshow = setTimeout(closeAndPlaySlideshow,13000);
    } else{ 
    playSlideshow();
    }
};
forwardButton.onclick = function(){
    nextSlide();
};
backButton.onclick = function(){
    previousSlide();
};
adobeIcon.onclick = function(){
    modal.style.display = "block";
    modalOpen = true;
    alertQ = setTimeout(alertQuestion,10000);
    pauseSlideshow(); 
    clearInterval(slideInterval);
};
adobeIconS.onclick = function(){
    modal2.style.display = "block";
    modalOpen = true;
    alertQ = setTimeout(alertQuestion,10000);
    pauseSlideshow(); 
    clearInterval(slideInterval);
};
adobeIcon3.onclick = function(){
    modal3.style.display = "block";
    modalOpen = true;
    alertQ = setTimeout(alertQuestion,10000);
    pauseSlideshow(); 
    clearInterval(slideInterval);
};
// When the user clicks on (x), close the modal
closeButton.onclick = function() {
    modal.style.display = "none";
    modalOpen = false;
    clearTimeout(resumeSlideshow);
    clearTimeout(alertQ);
    clearInterval(slideInterval);
    console.log("cancle button 1 pressed");
};
// When the user clicks on (x), close the modal
closeButton2.onclick = function() {
    modal2.style.display = "none";
    modalOpen = false;
    clearTimeout(resumeSlideshow);
    clearTimeout(alertQ);
    clearInterval(slideInterval);
    console.log("cancle button 2 pressed");
};
// When the user clicks on (x), close the modal
closeButton3.onclick = function() {
    modal3.style.display = "none";
    modalOpen = false;
    clearTimeout(resumeSlideshow);
    clearTimeout(alertQ);
    clearInterval(slideInterval);
    console.log("cancle button 3 pressed");
};

yesButton.onclick = function(){
    alertModal.style.display = "none";
    clearTimeout(resumeSlideshow);
    alertQ = setTimeout(alertQuestion,10000);
    present = true
}
noButton.onclick = function(){
    alertModal.style.display = "none";
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modalOpen = false;
    clearTimeout(resumeSlideshow);
    clearInterval(slideInterval);
    playSlideshow();
}

function alertQuestion(){
    alertModal.style.display = "block";
    resumeSlideshow = setTimeout(closeAndPlaySlideshow,8000);
}

// When the user clicks anywhere outside of the modal, close the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modalOpen = false;
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,6000);
    };
};