
document.addEventListener('DOMContentLoaded', function() {

var nav=document.getElementById('nav');
    window.onscroll=function(){
    var scrollTop=window.scrollY;
        if(scroll>=scrollTop){
            nav.className="ml fixed";
        } 
        else{
           nav.className='ml';


            }
    }



    
})