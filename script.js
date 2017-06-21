var slides = document.querySelectorAll('#slides .slide');
var allSlides = document.getElementById('slides');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,6000);
var playing = true;
var modalOpen = false;
var present = true;
var share = [];

//Controls
var pauseButton = document.getElementById('pause');
var backButton = document.getElementById('back');
var forwardButton = document.getElementById('forward');
var shareButton = document.getElementById('share');
var from = document.getElementById('from');
var to = document.getElementById('to');


// shareButton.addEventListener("click", function(){
//      share.push(currentSlide);
// });

// function sendMail(){
//     if (share == 0){
//         var body = ...
//         var fileName = "Slide0.png"
//     } else if (share == 1){
//         var body = ...
//         var fileName = "Slide1.png"
//     } else if (share == 2){
//         var body = ...
//         var fileName = "Slide2.png"
//     } else if (share == 3){
//         var body = ...
//         var fileName = "Slide3.png"
//     } else if (share == 4){
//         var body = ...
//         var fileName = "Slide4.png"
//     } else if (share == 5){
//         var body = ...
//         var fileName = "Slide5.png"
//     } else if (share == 6){
//         var body = ...
//         var fileName = "Slide6.png"
//     } else if (share == 7){
//         var body = ...
//         var fileName = "Slide7.png"
//     } else if (share == 8){
//         var body = ...
//         var fileName = "Slide8.png"
//     } else{
//         console.log("Something Went Wrong...")
//     }
//     window.location.href = "mailto:kghumaan@umail.iu.edu?subject=FromKV request&body="+body;
// }
// var toEmailString = JSON.stringify(to);

// var obj = JSON.parse('{
//   "Message": {
//     "Subject": "Check this out!",
//     "Body": {
//       "ContentType": "Text",
//       "Content": "Think you might find this interesting - Sent from Ares Kiosk!"
//     },
//     "ToRecipients": [
//       {
//         "EmailAddress": {
//           "Address": toEmailString,
//         }
//       }
//     ],
//     "Attachments": [
//       {
//         "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
//         "Name": fileName,
//         "ContentBytes": "bWFjIGFuZCBjaGVlc2UgdG9kYXk="
//       }
//     ]
//   }}');
// var len = shares.length;

// for (i = 0; i < len; i++) {
//     var photo = slides[i];
//     // do something with the photo
//     var x = photo / 9
//     if (x > 1){

//     }
// } 



//PDF Modal
var Sign = document.getElementById('pausePlayImg');
var modal = document.getElementById('modal');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');

//Alert Modal
var alertModal = document.getElementById('alertModal');
var yesButton = document.getElementById('yes');
var noButton = document.getElementById('no');
var resumeSlideshow;
var alertQ;

//Share Modal
var shareModal = document.getElementById('shareModal');
var closeShare = document.getElementById('closeShare');

function nextSlide(){
    if(playing){ 
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide,6000);
    console.log(currentSlide);
    } else{
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
    pauseSlideshow();
    };  
}
function previousSlide(){
    if(currentSlide == 0){
        if(playing){ 
            slides[currentSlide].className = 'slide';
            currentSlide = 8;
            slides[currentSlide].className = 'slide showing';
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide,6000);
            console.log(currentSlide);
            } else{
            slides[currentSlide].className = 'slide';
            currentSlide = 8;
            slides[currentSlide].className = 'slide showing';
            pauseSlideshow();
        };
    } else{
        if(playing){ 
            slides[currentSlide].className = 'slide';
            currentSlide = (currentSlide-1)%slides.length;
            slides[currentSlide].className = 'slide showing';
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide,6000);
            console.log(currentSlide);
            } else{
            slides[currentSlide].className = 'slide';
            currentSlide = (currentSlide-1)%slides.length;
            slides[currentSlide].className = 'slide showing';
            pauseSlideshow();
        };
    };    
};

//Start and Pause functions

function pauseSlideshow(){
    Sign.src = "Images/play.png"
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
    Sign.src = "Images/pause.png" 
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

//Clicks - start, pause, forward, backwards, and share!

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
shareButton.onclick = function(){
    shareModal.style.display = "block";
    alertQ = setTimeout(alertQuestion,10000);
    pauseSlideshow();
    clearInterval(slideInterval);
};

//When Adobe Icons get pressed

function firstModal(){
    modal.style.display = "block";
}
function secondModal(){
    modal2.style.display = "block";
}
function thirdModal(){
    modal3.style.display = "block";
}
function modalGetsOpen(){
    modalOpen = true;
    alertQ = setTimeout(alertQuestion,10000);
    pauseSlideshow(); 
    clearInterval(slideInterval);
}

//Alert Answers
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
closeShare.onclick = function(){
    shareModal.style.display = "none";
    clearTimeout(resumeSlideshow);
    clearTimeout(alertQ);
    clearInterval(slideInterval);
    playSlideshow();
}



function alertQuestion(){
    alertModal.style.display = "block";
    resumeSlideshow = setTimeout(closeAndPlaySlideshow,8000);
}
function closeAdobeModals(){
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modalOpen = false;
    clearTimeout(resumeSlideshow);
    clearTimeout(alertQ);
    clearInterval(slideInterval);
    console.log("cancle button pressed");
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