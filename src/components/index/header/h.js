
document.addEventListener('DOMContentLoaded', function() {

var box=document.getElementById('box');
    window.onscroll=function(){
    var scroll=window.scrollY;
        if(scroll>0){
            box.className="tou fixed";
        } else{
            box.className='tou';


            }
    }



    
})