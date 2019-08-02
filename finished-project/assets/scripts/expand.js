function expand(img){
    var expandimg = document.querySelector('#largeview');
  //  var imgtxt = document.querySelector('#imgtxt');
    expandimg.src=img.src; 
    // we will take the img name to imoprt an static file of txt to fit into the description 
    expandimg.parentElement.style.display = "block"; 
}

const smallimg = document.querySelector('.display');

smallimg.addEventListener('click',(e)=>{
    console.log(e.target.className);
    e.preventDefault();
    if(e.target.className !="smallimg")
    {console.log("clicked some blank space");}
    else {
        expand(e.target); 
    }
});