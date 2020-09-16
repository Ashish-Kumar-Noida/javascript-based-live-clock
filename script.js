var m= document.getElementsByClassName("jumbotron");
m[0].style.background="rgb(255 255 255 / 55%)";



   

let a;
     let date;
     let time;
     setInterval(() => {
        var a=new Date();
        var date=a.toLocaleDateString();
        var time=a.getHours() +':'+a.getMinutes()+':'+a.getSeconds();
         document.getElementById('txt').innerHTML= time +" on "+date;
     }, 1000);


     
     function myFunction() {
//alert("I am an alert box!");
document.getElementById("learnmore").innerHTML = "This is a javascript based clock which shows \n time and refresh itself every second";
//document.getElementById("learnmore").style.padding=30px 30px;
document.getElementById("learnmore").style.padding = "30px 30px 30px 30px";
document.getElementById("learnmore").style.background="rgb(0 123 255 / 41%)";
document.getElementById("learnmore").style.color="white";
document.getElementById("learnmore").style.fontWeight="400";


    document.getElementsByTagName("head").i


}

function thisfunction(){

document.getElementById("learnmore").innerHTML = "Learn more";
//document.getElementById("learnmore").style.padding=30px 30px;
document.getElementById("learnmore").style.padding = "8px 16px";
document.getElementById("learnmore").style.background="#007bff";
document.getElementById("learnmore").style.color="white";
}
