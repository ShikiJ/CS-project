var slideIndex = 0; 
var slides = document.querySelectorAll('.slide');

function hide(){
    slides.forEach((slide)=>{
        slide.style.display="none";
    });
}

function show()
{
    hide();
    slideIndex++;
   // console.log(slideIndex);
    if(slideIndex > slides.length)
    {
        slideIndex =1;
            }
    else
    {
        slides[slideIndex-1].style.display ="block"; 
    }
    setTimeout(show, 3000);
}

show();
//setInterval(show,5500);
