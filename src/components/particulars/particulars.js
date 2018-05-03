document.addEventListener('DOMContentLoaded',function(){
                      // 利用数据库传参
                      var params = location.search;
                      var params = decodeURI(params.slice(1));
                      var  goods = {};
                      params = params.split('&');
                      params.forEach(function(item){
                          var arr = item.split('=');
                          // console.log(arr);
                          goods[arr[0]] = arr[1];
                      });
                      // console.log(params)
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
})