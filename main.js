var el1 = document.getElementById('sound');
var style1 = window.getComputedStyle(el1, null).getPropertyValue('font-size');
var y = parseFloat(style1); 
var el2 = document.getElementById('title');
var style2 = window.getComputedStyle(el2, null).getPropertyValue('font-size');
var x = parseFloat(style2); 

var z=0
window.addEventListener("load",zoom());
function zoom(){
     console.log("hi",x,y)

    
    if(x<150){
        x=x+0.1;
        y=y+0.1;
        z=z+0.1
        if(z>50){
            document.getElementById("audio").play();
            document.body.style.backgroundImage="url('bg.png')"
            document.getElementById("sound").style.display="inline"
            document.getElementById("sound").style.color="black"
            setTimeout(start,5000)
            
            
        }
        document.getElementById("title").style.fontSize=x+"px";
        document.getElementById("sound").style.fontSize=y+"px";
        setTimeout(zoom,0.1);

    }
}
function start(){
    document.body.style.backgroundImage="none"
    document.body.style.backgroundColor="#fcfefc"
    document.getElementById("title2").style.display="none"
    
    document.getElementById("load").style.display="block"
    setTimeout(function(){
        window.location="index2.html"
    },5000)

}
