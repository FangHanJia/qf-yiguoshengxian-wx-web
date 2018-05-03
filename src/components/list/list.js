document.addEventListener('DOMContentLoaded',function(){
    var tab = document.querySelector('.tabb');
    var sale = tab.children[0];
    var newproduct = tab.children[1];
    var price = tab.children[2];
    // 顶端tab切换效果
    sale.onclick = function(){
        sale.className='aactive';
         newproduct.className='tab-item';
         price.className='tab-item'; 
    }
    newproduct.onclick = function(){
        sale.className='tab-item';
         newproduct.className='aactive';
         price.className='tab-item'; 
    }
    price.onclick = function(){
        sale.className='tab-item';
         newproduct.className='tab-item';
         price.className='aactive'; 
    }
    // 购物车飞入效果
    $(function(){
        $('.carts').shoping({
             endElement:".menu-a",
             iconCSS:"",
             iconImg:"src/components/img/cart.png",
             endFunction:function(element){
                 $("#num").html(parseInt($("#num").html())+1);
                //  console.log(element);
                 return false;
             }
         })
     });
        // //传参
        // var goodslist = document.querySelector('.goodslist')
        // console.log(goodslist)
        // goodslist.onclick = function(e){
        //     console.log(e.target)
        //     // if(e.target.tagName.toLowerCase() === 'p'){
        //         let id = e.target.parentNode.parentNode.dataset.id
        //         console.log(id)
        //         location.href="http://localhost:8080/#/particulars?id="+id;
        // //    } 

        // } 
     
})