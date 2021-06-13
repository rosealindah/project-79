var menu_array=["chicken tandoori pizza","veg sumpreme pizza","paneer tika pizza","deluxe veg pizza","veg extravaganza pizza","cheese pizza"]

function get_menu(){
menu_array.sort();
var html_data;
html_data="<ol class='menu_list'>";
for(var i=0;i<menu_array.length;i++){
    html_data=html_data+"<li>"+menu_array[i]+"</li>";
}
html_data=html_data+"</ol>";
document.getElementById("display_menu").innerHTML=html_data
}

function add_item(){
    var htmldata2;
    var item=document.getElementById("add_item").value ;
    menu_array.push(item);
    menu_array.sort();
    htmldata2="<section class='cards'>;"
    for(var j=0;j<menu_array.length;j++){
        htmldata2=htmldata2+'<div class="card"'+'<img src="images/pizza.png">'+menu_array[j]+'</div>';
    }
    htmldata2=htmldata2+"</section>";
    document.getElementById("display_addedmenu").innerHTML=htmldata2;
}
