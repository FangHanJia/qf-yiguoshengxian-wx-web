import axios from 'axios'
import router from '../router/router.js'

const baseUrl = 'http://10.3.133.238:88/'
let filterUrl = (_url) => {
    if(_url && _url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}

export default {
    get(_url, _params = {}){
        return new Promise((resolve, reject) => {
            axios.get(filterUrl(_url), {params: _params}).then((res) => {
                resolve(res)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    post(_url, _params = {}){
        return new Promise((resolve, reject) => {
            // axios.post(filterUrl(_url), _params).then((res) => {
            //     resolve(res)
            // }).catch((error) => {
            //     reject(error)
            // })


            axios({
                url: filterUrl(_url),
                method: 'post',
                data: _params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'auth': window.localStorage.getItem('token')
                },
                transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }], 
            }).then(res => {
                if(!res.data.status && res.data.message == "unauth"){
                    router.push({name:'login'});   
                    return false;
                }               
                console.log(res)
                resolve(res.data)
            }).catch(error => {
                
                reject(error)
            })            
        })
    },
    upload(_params){
        $.ajax({
            url: filterUrl(_params.url),
            type: 'post',
            data: _params.data,
            contentType: false,
            processData: false,
            success: function(res){
                if(!res.status && res.message == 'unauth'){
                    window.location.href = 'login.html';
                } else {
                    _params.cb(res);
                }
                //hide loadding
            }
        })
    }
}