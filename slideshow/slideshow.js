var myImages =["https://churaumi.okinawa/userfiles/images/download/pamphlet/image-04.jpg",
               "https://churaumi.okinawa/userfiles/images/download/pamphlet/image-05.jpg",
               "https://churaumi.okinawa/userfiles/images/download/pamphlet/image-06.jpg",
               "https://churaumi.okinawa/userfiles/images/download/pamphlet/image-07.jpg",
               "https://churaumi.okinawa/userfiles/images/download/pamphlet/image-08.jpg"];


var captionImages =["Shark Whale","Ray","Tropical Beach","Dolphine Show","Dolphines"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next