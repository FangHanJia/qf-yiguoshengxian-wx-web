/* 
* @Author: Marte
* @Date:   2018-05-02 19:59:54
* @Last Modified by:   Marte
* @Last Modified time: 2018-05-02 21:47:31
*/
document.addEventListener('DOMContentLoaded', function() {

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 50,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
    

})