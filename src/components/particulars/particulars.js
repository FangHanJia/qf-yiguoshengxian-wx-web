document.addEventListener('DOMContentLoaded',function(){
                    
    // 传参
      var params = location.search;console.log( location.search)
      var params = decodeURI(params.slice(1));
      var  goods = {};
      params = params.split('&');
      params.forEach(function(item){
          var arr = item.split('=');
          // console.log(arr);
          goods[arr[0]] = arr[1];
      });

  
})