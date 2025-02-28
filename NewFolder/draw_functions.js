const canvas = document.getElementById("myCanvas");
const ctx=canvas.getContext("2d"); 
const background= new Image(); 
background.src="background_photo.jpeg"; 
const u= new Image(); 
u.src="umbrella.png"; 
const u1=new Image(); 
u1.src="rain.png";
background.onload=function(){ 
    ctx.drawImage(background, 0,0, canvas.width,canvas.height);  
    u.onload=function(){  
        ctx.drawImage(u, 200,400, 400,100); 
        u1.onload=function(){ 
            ctx.drawImage(u1,75,50,800,400); 
            ctx.drawImage(u1,0,50,800,400); 
            ctx.drawImage(u1,85,0,800,300);
            ctx.font="25px Arial";  
            ctx.fillStyle="black"; 
            ctx.fillText("Rain(it does not look good)", 10, 80); 
            ctx.fillText("Jason Zhu",10,150);
        }  

        if(u1.complete){ 
            u1.onload(); 

        } 

    }  
    if(u.complete){ 
        u.onload(); 
    }
};  
if (background.complete){ 
    background.onload();
}



