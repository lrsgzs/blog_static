// 标题
document.title = website_title;

var doctitle = document.getElementById("title");
doctitle.innerHTML = website_title;


// 代表作
var sub_biaoqian = document.getElementById("topics");

for (var i = 0; i < topics.length; i++){
    // 创建链接
    var biaoqian = document.createElement("a");
    
    biaoqian.href = topics[i][0];
    biaoqian.innerHTML = topics[i][1] + "<br>";
    
    sub_biaoqian.appendChild(biaoqian);
    
    
    // 空白
    var biaoqian = document.createElement("mcyyds");
    
    biaoqian.innerHTML = "  "
    
    sub_biaoqian.appendChild(biaoqian);
}


// 消息
var sub_biaoqian = document.getElementById("news");

for (var i = 0; i < news.length; i++){
    // 显示消息
    var biaoqian = document.createElement("a");
    
    biaoqian.innerHTML = news[i] + "<br>";
    
    sub_biaoqian.appendChild(biaoqian);
    
    
    // 空白
    var biaoqian = document.createElement("mcyyds");
    
    biaoqian.innerHTML = "  "
    
    sub_biaoqian.appendChild(biaoqian);
}