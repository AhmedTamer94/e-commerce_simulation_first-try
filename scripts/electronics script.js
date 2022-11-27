var flag=0;
var jsonObj;
var sliderObj;
var xhr= new XMLHttpRequest();
xhr.open("get","https://fakestoreapi.com/products",true);
/*get data from the server and set every 5 second display other image in the slider from electronics category*/
xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){
        jsonObj=xhr.responseText;
        jsonObj=JSON.parse(jsonObj);
        SetProducts();        
    }
}
xhr.send();
/*get only electronics and send the images to slider div*/
function SetProducts(){
    var childDiv;
    var img;
    var link;
    var title;
    var price;
    for(flag;flag<20;flag++)
    {
        getIndexOfElectronics();
        if(flag==20)
        {
            break;
        }
        childDiv=document.createElement("div");
        childDiv.setAttribute("style","padding: 3%; text-align: center; justify-content: center;");
        img= document.createElement("img");
        title=document.createElement("h4");
        price=document.createElement("h4");
        link=jsonObj[flag].image;
        img.setAttribute("src",link);
        title.innerHTML=jsonObj[flag].title;
        price.innerHTML="price: "+"$"+jsonObj[flag].price;
        childDiv.appendChild(img);
        childDiv.appendChild(title);
        childDiv.appendChild(price);
        document.getElementById("products-grid").appendChild(childDiv); 
    }

}
/*set flag to equal index of electronic product*/
function getIndexOfElectronics(){
    while(flag<20 &&jsonObj[flag].category!="electronics")
    {
        flag++; 
    }
}



