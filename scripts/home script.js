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
        SetSlider();        
        setBestSeller();
        sliderObj=setInterval(SetSlider,5000);
    }
}
xhr.send();
/*get only electronics and send the images to slider div*/
function SetSlider(){
    
    getIndexOfElectronics();
    if(flag>19)
        {
            flag=0;
            getIndexOfElectronics();

        }
    document.getElementById("slider-img").src=jsonObj[flag].image;
    document.getElementById("slider-link").href="https://www.google.com";
    document.getElementById("slider-img").alt="nior";
    flag++;
}
/*set flag to equal index of electronic product*/
function getIndexOfElectronics(){
    while(flag<20 &&jsonObj[flag].category!="electronics")
    {
        flag++; 
    }
}
/*get best seller data and print them on div best seller*/
function setBestSeller(){
    let counter=1;
        for(let i=0;i< jsonObj.length;i++){
            if(jsonObj[i].category=="men's clothing")
            {
                if(counter>3)
                {
                    break;
                }
                else
                {
                    document.getElementById("img"+counter).src=jsonObj[i].image;
                    document.getElementById("title"+counter).innerHTML=jsonObj[i].title;
                    document.getElementById("price"+counter).innerHTML="price: "+"$"+jsonObj[i].price;
                    counter++;
                }
            }
        }
}
/*get the previous image of the slider*/
function SetSliderBackwords(){
    flag=flag-2;
    getIndexOfElectronicsBackwords();
    if(flag<0)
        {
            flag=19;
            getIndexOfElectronicsBackwords();

        }
    document.getElementById("slider-img").src=jsonObj[flag].image;
    console.log(flag);
    document.getElementById("slider-link").href="https://www.google.com";
    document.getElementById("slider-img").alt="nior";
    flag++;
}
/*get the previous index of electronic product and set this value to the flag variable*/
function getIndexOfElectronicsBackwords(){
    while(flag>=0 &&jsonObj[flag].category!="electronics")
    {
        flag--; 
    }
}
/*get the next image and set the ordinary event of the slider*/
function changeImgLeft(){
    clearInterval(sliderObj);
    SetSlider();
    sliderObj=setInterval(SetSlider,5000);  
}
/*get the previous image and set the ordinary event of the slider*/
function changeImgRight(){
    clearInterval(sliderObj);
    SetSliderBackwords();
    sliderObj=setInterval(SetSlider,5000);
  
}


