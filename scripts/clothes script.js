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
 
setMenClothesProducts();
setWomenClothesProducts();    

}

function setMenClothesProducts(){
    var childDiv;
    var img;
    var link;
    var title;
    var price;
    for(flag;flag<20;flag++)
    {
        getIndexOfMenclothes();
        if(flag==20)
        {
            break;
        }
        childDiv=document.createElement("div");
        childDiv.setAttribute("style","padding: 3%; text-align: center; justify-content: center;");
        img= document.createElement("img");
        title=document.createElement("h4");
        price=document.createElement("h4");
        img.setAttribute("style","width: 50%; height: 50%;");
        link=jsonObj[flag].image;
        img.setAttribute("src",link);
        title.innerHTML=jsonObj[flag].title;
        price.innerHTML="price: "+"$"+jsonObj[flag].price;
        childDiv.appendChild(img);
        childDiv.appendChild(title);
        childDiv.appendChild(price);
        document.getElementById("men").appendChild(childDiv); 
    }
    flag=0;
}

function setWomenClothesProducts(){
    var childDiv;
    var img;
    var link;
    var title;
    var price;
    for(flag;flag<20;flag++)
    {
        getIndexOfWomenclothes();
        if(flag==20)
        {
            break;
        }
        childDiv=document.createElement("div");
        childDiv.setAttribute("style","padding: 3%; text-align: center; justify-content: center;");
        img= document.createElement("img");
        title=document.createElement("h4");
        price=document.createElement("h4");
        img.setAttribute("style","width: 50%; height: 50%;");
        link=jsonObj[flag].image;
        img.setAttribute("src",link);
        title.innerHTML=jsonObj[flag].title;
        price.innerHTML="price: "+"$"+jsonObj[flag].price;
        childDiv.appendChild(img);
        childDiv.appendChild(title);
        childDiv.appendChild(price);
        document.getElementById("women").appendChild(childDiv); 

    }
    flag=0;
}
/*set flag to equal index of electronic product*/
function getIndexOfMenclothes(){
    while(flag<20 &&jsonObj[flag].category!="men's clothing")
    {
        flag++; 
    }
}

function getIndexOfWomenclothes(){
    while(flag<20 &&jsonObj[flag].category!="women's clothing")
    {
        flag++; 
    }
}


