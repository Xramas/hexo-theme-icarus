// 创建XMLHttpRequest对象
var xhr = new XMLHttpRequest();

// 发送GET请求
xhr.open('GET', 'https://api.ipify.org?format=json', true);

// 监听请求完成事件
xhr.onload = function() {
  if (xhr.status === 200) {
    // 解析响应的JSON数据
    var response = JSON.parse(xhr.responseText);
    
    // 获取IP地址
    var ipAddress = response.ip;
    
    // 在网页上显示IP地址
    var ipElement = document.getElementById('ip-address');
    ipElement.textContent = ipAddress;
  }
};

// 发送请求
xhr.send();
