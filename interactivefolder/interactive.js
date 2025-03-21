function drawBackground(){  
    const canvas = document.getElementById("myCanvas"); 
    const ctx=canvas.getContext("2d");  
    const background= new Image(); 
    background.src="water.jpg"; 
    background.onload=function(){ 
        ctx.drawImage(background, 0,0, canvas.width,canvas.height);
    }

} 
function drawBackground2(){  
    const canvas = document.getElementById("myCanvas"); 
    const ctx=canvas.getContext("2d");  
    const background= new Image(); 
    background.src="sky.jpg"; 
    background.onload=function(){ 
        ctx.drawImage(background, 0,0, canvas.width,canvas.height);
    }

} 

function drawBackground3(){  
    const canvas = document.getElementById("myCanvas"); 
    const ctx=canvas.getContext("2d");  
    const background= new Image(); 
    background.src="rock.jpg"; 
    background.onload=function(){ 
        ctx.drawImage(background, 0,0, canvas.width,canvas.height);
    }

}  

/*do something about clear rectangle since it removes parts of the background*/
function click_function(){ 
    var checkbox=document.getElementById("lightbulb"); 
    const canvas = document.getElementById("myCanvas"); 
    const ctx=canvas.getContext("2d");  
    if(checkbox.checked==true){  
        const background= new Image(); 
        background.src="lightbulb.png"; 
        background.onload=function(){ 
            ctx.drawImage(background, 200,100, 100,100);
    }
    }else{ 
        ctx.clearRect(200,100, 100,100)
    }
} 

function click_function2(){ 
    var checkbox=document.getElementById("fish");  
    const canvas = document.getElementById("myCanvas"); 
    const ctx=canvas.getContext("2d");
    if(checkbox.checked==true){ 
        const background= new Image(); 
        background.src="fish.jpg"; 
        background.onload=function(){ 
            ctx.drawImage(background, 0,0, 100,100);
    }
    }else{ 
        ctx.clearRect(0,0, 100,100)
    }
} 

function click_function3(){ 
    var checkbox=document.getElementById("lava"); 
    const canvas = document.getElementById("myCanvas"); 
    const ctx=canvas.getContext("2d"); 
    if(checkbox.checked==true){ 
        const background= new Image(); 
        background.src="lava.jpg"; 
        background.onload=function(){ 
            ctx.drawImage(background, 500,500, 100,100);
        }  
    }else{ 
        ctx.clearRect(500,500, 100,100)  
    }
} 

function playSound(soundfile){ 
    var audio=new Audio(soundfile); 
    audio.play();
} 

var slider= document.getElementById("slider"); 
var output=document.getElementById("demo"); 
output.innerHTML=slider.ariaValueMax; 
slider.oninput=function(){ 
    output.innerHTML=this.value;
} 

const canvas = document.getElementById("myCanvas"); 
const ctx=canvas.getContext("2d");  
const stick= new Image(); 
stick.src="C:\Users\Jason\OneDrive\Desktop\website folder\ineractive canvas project\stick.png"; 
stick.onload=function(){ 
    ctx.drawImage(background, 0,0, canvas.width,canvas.height);
}


