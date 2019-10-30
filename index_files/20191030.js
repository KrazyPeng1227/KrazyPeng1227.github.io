/**
 * Created by sf on 2018/8/3.
 */
var areaArr = []

var trackHost = 'https://segmentfault.com';
var viewApi = trackHost + '/ad/track/view'
var clickApi = trackHost + '/ad/track/click'

function ajax(opt) {
    opt = opt || {};//opt以数组方式存参，如果参数不存在就为空。
    opt.method = opt.method.toUpperCase() || 'POST';//转为大写失败，就转为POST
    opt.url = opt.url || '';//检查URL是否为空
    opt.async = opt.async || true;//是否异步
    opt.data = opt.data || null;//是否发送参数，如POST、GET发送参数
    opt.success = opt.success || function () {}; //成功后处理方式
    var xmlHttp = null;//定义1个空变量
    if (XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();//如果XMLHttpRequest存在就新建，IE大于9&&非IE有效
    }
    else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');//用于低版本IE
    }
    var params = [];//定义1个空数组
    for (var key in opt.data){
        params.push(key + '=' + opt.data[key]);//将opt里的data存到push里
    }
    var postData = params.join('&');//追加个& params
    if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);//开始请求
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');//发送头信息，与表单里的一样。
        xmlHttp.send(postData);//发送POST数据
    }
    else if (opt.method.toUpperCase() === 'GET') {
        xmlHttp.open(opt.method, opt.url, opt.async);//GET请求
        xmlHttp.send(null);//发送空数据
    }
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {//readyState有5个状态，可以百度一下看看都有什么。当请求完成，并且返回数据成功
            opt.success(xmlHttp.responseText);//返回成功的数据
        }
    };
}

var sTitle="";
window.SFGridAd = {};
SFGridAd.d = function(o) {
    sTitle = o.getAttribute('stitle');
    document.getElementById("gridMapHoverBox").style.display = "block"
}

SFGridAd.e = function(o) {
    sTitle = "";
    document.getElementById("gridMapHoverBox").style.display = "none"
}

SFGridAd.c = function(id) {

    var clickApi2 = clickApi + '?id=' + id

    ajax({url: clickApi2, method: 'GET'})
};

// 这里 data 需要注入
[{"id":"1750000020633409","user_id":"1030000005963844","box_ad_id":"0","started":"1570723200","ended":"1573142400","cycles":"4","status":"0","banner":"\/426\/360\/4263604219-5d9e890b75832","link":"http:\/\/www.h5ds.com?from=segmentfault","title":"\u514d\u8d39\u5f00\u6e90\u7684H5\u5236\u4f5c\u5de5\u5177","area_info":{"area":"A8:A8","height":"17","width":"17","left":"0","top":"119","pos":{"rowTop":8,"rowBottom":8,"columnLeft":1,"columnRight":1},"size":1},"created":"1570670207","modified":"1570670918"},{"id":"1750000020713725","user_id":"1030000020527145","box_ad_id":"0","started":"1571328000","ended":"1572537600","cycles":"2","status":"0","banner":"\/350\/788\/35078848-5da754827e8ad","link":"http:\/\/ipv4.me","title":"ADSL\u79d2\u53d8\u4e13\u7ebf\uff0c\u6b22\u8fce\u4e86\u89e3","area_info":{"area":"H3:L3","height":"17","width":"85","left":"119","top":"34","pos":{"rowTop":3,"rowBottom":3,"columnLeft":8,"columnRight":12},"size":5},"created":"1571246847","modified":"1571247277"},{"id":"1750000020785494","user_id":"1030000007747454","box_ad_id":"0","started":"1571932800","ended":"1572537600","cycles":"1","status":"0","banner":"\/333\/830\/3338301951-5db10b3157441","link":"https:\/\/www.openinstall.io","title":"Android \/ iOS \u4e00\u4e2a\u5305\u8d70\u5929\u4e0b\uff01","area_info":{"area":"D7:G7","height":"17","width":"68","left":"51","top":"102","pos":{"rowTop":7,"rowBottom":7,"columnLeft":4,"columnRight":7},"size":4},"created":"1571883542","modified":"1571883843"},{"id":"1750000020802926","user_id":"1030000020802904","box_ad_id":"0","started":"1572105600","ended":"1572710400","cycles":"1","status":"0","banner":"\/240\/274\/2402748088-5db3f867502df","link":"http:\/\/api.crap.cn\/","title":"\u5b8c\u5168\u514d\u8d39\u7684\u5f00\u6e90\u63a5\u53e3\u7ba1\u7406\u7cfb\u7edf\uff01","area_info":{"area":"A1:A1","height":"17","width":"17","left":"0","top":"0","pos":{"rowTop":1,"rowBottom":1,"columnLeft":1,"columnRight":1},"size":1},"created":"1572005950","modified":"1572075659"},{"id":"1750000020833142","user_id":"1030000003752154","box_ad_id":"0","started":"1572278400","ended":"1572883200","cycles":"1","status":"0","banner":"\/122\/322\/1223222635-5db6529adf332","link":"https:\/\/www.axihe.com\/api\/js-es\/api\/api.html","title":"ES6\u5df2\u7ecfOUT\u4e86\uff0c\u6211\u4eec\u90fd\u5f00\u59cb\u5b66 ECMAScript 2020 \u5566\uff01","area_info":{"area":"C3:C3","height":"17","width":"17","left":"34","top":"34","pos":{"rowTop":3,"rowBottom":3,"columnLeft":3,"columnRight":3},"size":1},"created":"1572229601","modified":"1572229871"}].forEach(function(item) {
    var html = '<area shape="rect" ' +
        'target="_blank" ' +
        'onmouseover="SFGridAd.d(this)" ' +
        'onmouseout="SFGridAd.e(this)" ' +
        'onclick="SFGridAd.c(' + item.id + ')" ' +
        'coords="' + item.area_info.left + ',' + item.area_info.top + ',' + ((+item.area_info.left)+(+item.area_info.width)) + ',' + ((+item.area_info.top)+(+item.area_info.height)) + '" ' +
        'href="' + item.link + '" ' +
        'stitle="' + item.title + '" />'

    areaArr.push(html)
})

document.getElementById('gridsMap').innerHTML = areaArr.join('')

document.getElementById('gridsMap').onmousemove = function(e) {
    var pos = getMousePos(e)

    document.getElementById("gridMapHoverBox").style.left = pos.x + 20 + 'px'
    document.getElementById("gridMapHoverBox").style.top = pos.y + 20 + 'px'

    document.getElementById("gridMapHoverBox").innerHTML = sTitle
}

// 增加 view 统计
setTimeout(function() {
    isShow = document.querySelector('img[src^="https://static.segmentfault.com/sponsor"]').clientHeight > 0
    if (isShow) ajax({url: viewApi, method: 'GET'})
}, 0)

function getMousePos(event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    return { 'x': x, 'y': y };
}
