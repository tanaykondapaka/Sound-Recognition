document.getElementById("ml5").innerHTML=ml5.version
window.addEventListener('load',resize());function resize(){a= screen.width;if(a<=1024){

    document.getElementById("about").style.display="none";
       document.getElementById("version").style.display="none";
       document.getElementById("rotate").style.display="none";
   }
   if(a<=980){
    document.getElementById("about").style.display="none";
    document.getElementById("version").style.display="none";
    document.getElementById("rotate").style.display="none";
    
    document.getElementById("title2").style.margin="auto";
    document.getElementById("title2").style.textAlign="center"
}
if(a<=768){
    document.getElementById("title2").style.fontSize="50px"
   

}
if(a<=635){
    document.getElementById("title2").style.fontSize="100px"
    document.getElementById("center").style.width="100%"
    document.getElementById("menu").style.height="13%"
    document.getElementById("title").style.display="none";
    document.getElementById("title2").style.width="1000px";
    document.getElementById("title2").style.top="50px"
   
    document.getElementById("title2").style.wordBreak="keep-all"
}
if(a<=425){
    document.getElementById("title2").style.fontSize="130px"
    document.getElementById("title2").style.verticalAlign="center"   
}
if(a<=320){
    document.getElementById("title2").style.fontSize="130px"
    document.getElementById("title2").style.verticalAlign="center"
    document.getElementById("title2").style.borderTop = "25px solid transparent";   
}



}


var v1=5
var v2=3
var v3=8
var v4=10
var v5=10
var v6=8
var v7=13
var v8=15
var l = 0
var nl=0

var r=0;
function rotate(){
    if(r==0){
        l=1
        document.getElementById("mic").style.marginTop="-442.5px"
        document.getElementById("mic2").style.marginTop="-442.5px"
        document.getElementById("title2").style.height="100px"
        document.getElementById("rotate").style.transform="rotate(270deg)"
        document.getElementById("menu").style.height="100%"
        document.getElementById("menu").style.width="13%"
        document.getElementById("menu").style.display="block"
        document.getElementById("menu").style.textAlign="center"
        document.getElementById("title").style.width="190px"
        document.getElementById("title").style.paddingLeft="2.5px"  

v1=document.getElementById("title").style.paddingTop;
v2=document.getElementById("title2").style.paddingTop;
v3=document.getElementById("about").style.paddingTop;
v4=document.getElementById("version").style.paddingTop;
v5=document.getElementById("title").style.paddingTop;
v6=document.getElementById("title2").style.paddingTop;
v7=document.getElementById("about").style.paddingTop;
v8=document.getElementById("version").style.paddingTop;
console.log(v1,v2,v3,v4,v5,v6,v7,v8)

        document.getElementById("title2").style.margin="auto"
        document.getElementById("about").style.margin="auto"
        document.getElementById("version").style.margin="auto"
        document.getElementById("title2").style.display="inline-block"
        document.getElementById("title").style.marginTop="20px"
        document.getElementById("title2").style.marginTop="100px"
        document.getElementById("about").style.marginTop="100px"
        document.getElementById("version").style.marginTop="100px"
        document.getElementById("title2").style.width="100%"
        document.getElementById("title").style.paddingTop="5px"
        document.getElementById("title2").style.paddingTop="5px"
        document.getElementById("about").style.paddingTop="10px"
        document.getElementById("version").style.paddingTop="13px"
       
        

r=1
    }
        else if(r==1){
        l=0

        document.getElementById("mic").style.marginTop="200px"
        document.getElementById("mic2").style.marginTop="200px"

        var v1=5
        var v2=3
        var v3=8
        var v4=10
        var v5=10
        var v6=8
        var v7=13
        var v8=15

            document.getElementById("title").style.paddingTop="10px"
            document.getElementById("title2").style.paddingTop="8px"
            document.getElementById("about").style.paddingTop="15px"
            document.getElementById("version").style.paddingTop="18px"
            document.getElementById("title").style.paddingLeft="12px" 
            document.getElementById("rotate").style.marginLeft="10px"
            document.getElementById("title").style.marginTop="1px"
            document.getElementById("title2").style.marginTop="01px"
            document.getElementById("about").style.marginTop="1px"
            document.getElementById("version").style.marginTop="1px"
            document.getElementById("title2").style.marginLeft="280px"
            document.getElementById("version").style.marginLeft="30px"
            document.getElementById("about").style.marginLeft="350px"            
            document.getElementById("rotate").style.transform="rotate(0deg)"
            document.getElementById("menu").style.height="10%"
            document.getElementById("menu").style.width="100%"
            document.getElementById("menu").style.display="flex"
        r=0     
    }
}
function t1(){
    document.getElementById("title").style.paddingTop= v1+"px"
    document.getElementById("title").style.letterSpacing= l/2+"px"
    console.log(v1,v2,v3,v4,v5,v6,v7,v8)
}
function t2(){
    document.getElementById("title2").style.paddingTop=v2+"px"
    document.getElementById("title2").style.letterSpacing= (l*2)+"px"
    console.log(v1,v2,v3,v4,v5,v6,v7,v8)

}
function t3(){
    document.getElementById("about").style.paddingTop=v3+"px"
    document.getElementById("about").style.letterSpacing= (l*2)+"px"
    console.log(v1,v2,v3,v4,v5,v6,v7,v8)
}function t4(){
    document.getElementById("version").style.paddingTop=v4+"px"
    document.getElementById("version").style.letterSpacing= (l*2)+"px"
    console.log(v1,v2,v3,v4,v5,v6,v7,v8)
}

function l1(){
    document.getElementById("title").style.paddingTop=v5+"px"
    document.getElementById("title").style.letterSpacing= nl+"px"
    console.log(v1,v2,v3,v4,v5,v6,v7,v8)
}
function l2(){
    document.getElementById("title2").style.paddingTop=v6+"px"
    document.getElementById("title2").style.letterSpacing= nl+"px"
    console.log(v1,v2,v3,v4,v5,v6,v7,v8)
}function l3(){
    document.getElementById("about").style.paddingTop=v7+"px"
    document.getElementById("about").style.letterSpacing= nl+"px"
    console.log(v1,v2,v3,v4,v5,v6,v7,v8)
}function l4(){
    document.getElementById("version").style.paddingTop=v8+"px"
    document.getElementById("version").style.letterSpacing= nl+"px"
    console.log(v1,v2,v3,v4,v5,v6,v7,v8)
}
i=0
function hear(){
    if(i==0){
        i=1
        if(l=1){
          
            
            document.getElementById("mic2").style.bottom="240px"

            document.getElementById("mic2").style.animation = "abd 1s 1"; 

            setTimeout(function yy(){
                document.body.style.background="#FF4f58ff";
                document.getElementById("menu").style.visibility="hidden"
                document.getElementById("cr").style.visibility="hidden"
                document.getElementById("mic").style.backgroundColor="#FF4f58ff"
                document.getElementById("mic").src="giphy2.gif"
                document.getElementById("mic").style.transform = "scale(1.5,1.5)";
                print()
                
                },800)
        }
        else{
    document.getElementById("mic2").style.animationIterationCount = "0";
    
    document.getElementById("mic2").style.animation = "abd 1s 1";
    setTimeout(function yy(){
document.body.style.background="#FF4f58ff";
document.getElementById("menu").style.visibility="hidden"
document.getElementById("cr").style.visibility="hidden"
document.getElementById("mic").style.backgroundColor="#FF4f58ff"
document.getElementById("mic").src="giphy2.gif"
document.getElementById("mic").style.transform = "scale(1.5,1.5)";
print()

},800)
}
    }
}

//"Actual" Code...\/
code="https://teachablemachine.withgoogle.com/models/0v2ycwYmD/"
function print(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier(code+"model.json",ready)
    
    }
    function ready(){
        console.log("Model is Ready!")
        classifier.classify(gotResults)
        }
    function gotResults(result,error){
        if(error){
            console.log("error:"+error);
        }
        else{
            console.log(result)
        }
    }
    