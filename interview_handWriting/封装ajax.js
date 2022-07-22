/*
封装ajax请求

包括： 请求方式、请求地址、请求参数、请求参数类型、请求返回

主要步骤：
------
1. 实例化XMLHttpRequest对象
2. 初始化参数内容
3. 发送请求
4. 接收请求

*/

// 拼接用函数
const getParams = (data) => {
    let res = [];
    for(let key in data) {
        res.push(`${key}=${data[key]}`);
    }
    return res.join('&');
};

const myAjax = (options) => {
    // 1. 实例化XMLHttpRequest对象
    const xhr = new XMLHttpRequest();
    // 2. 初始化参数内容
    options = options || {};
    options.type = (options.type || 'GET').toUpperCase();
    options.dataType = options.dataType || 'json';
    const params = options.data;
    // 3. 发送请求
    if(options.type === 'GET') {
        xhr.open('GET', options.url + '?' + getParams(params), true);
        xhr.send(null);
    } else if(options.type === 'POST') {
        xhr.open('POST', options.url, true);
        xhr.send(params);
    }
    // 4. 接收请求
    xhr.onreadystatechange = () => {
        // xhr中共5个状态，4为请求完毕
        if(xhr.readyState === 4) {
            if(xhr.status >= 200 && xhr.status < 300) {
                options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.fail('参数错误' + xhr.status);
            }
        }
    }
};



myAjax({
    type: 'get',
    dataType: 'json',
    data: {
        number: 10
    },
    url: 'http://ip:port',
    // 回调函数
    success: (text, xml) => {
        console.log(JSON.parse(text));
    },
    fail: (status) => {
        console.log(status);
    }
})