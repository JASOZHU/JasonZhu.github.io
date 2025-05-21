let currentBackground = null;
const movingImage = new Image();
let sliderPosition = 0;


movingImage.src = "stick.png";


function drawBackground() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const background = new Image();
    background.src = "water.jpg";
    background.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        currentBackground = background;
        drawMovingImage();
    }
}

function drawBackground2() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const background = new Image();
    background.src = "sky.jpg";
    background.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        currentBackground = background;
        drawMovingImage();
    }
}

function drawBackground3() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const background = new Image();
    background.src = "rock.jpg";
    background.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        currentBackground = background;
        drawMovingImage();
    }
}


function click_function() {
    const checkbox = document.getElementById("lightbulb");
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    if (checkbox.checked) {
        const image = new Image();
        image.src = "lightbulb.png";
        image.onload = function() {
            redrawCanvas();
            ctx.drawImage(image, 200, 100, 100, 100);
        }
    } else {
        redrawCanvas();
    }
}

function click_function2() {
    const checkbox = document.getElementById("fish");
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    if (checkbox.checked) {
        const image = new Image();
        image.src = "fish.jpg";
        image.onload = function() {
            redrawCanvas();
            ctx.drawImage(image, 0, 0, 100, 100);
        }
    } else {
        redrawCanvas();
    }
}

function click_function3() {
    const checkbox = document.getElementById("lava");
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    if (checkbox.checked) {
        const image = new Image();
        image.src = "lava.jpg";
        image.onload = function() {
            redrawCanvas();
            ctx.drawImage(image, 500, 500, 100, 100);
        }
    } else {
        redrawCanvas();
    }
}


function playSound(soundfile) {
    const audio = new Audio(soundfile);
    audio.play();
}


const slider = document.getElementById("slider");
const output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    sliderPosition = this.value;
    redrawCanvas();
}


function redrawCanvas() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    
    if (currentBackground && currentBackground.complete) {
        ctx.drawImage(currentBackground, 0, 0, canvas.width, canvas.height);
    }
    
    
    if (document.getElementById("lightbulb").checked) {
        const lightbulb = new Image();
        lightbulb.src = "lightbulb.png";
        lightbulb.onload = function() {
            ctx.drawImage(lightbulb, 200, 100, 100, 100);
        }
    }
    
    if (document.getElementById("fish").checked) {
        const fish = new Image();
        fish.src = "fish.jpg";
        fish.onload = function() {
            ctx.drawImage(fish, 0, 0, 100, 100);
        }
    }
    
    if (document.getElementById("lava").checked) {
        const lava = new Image();
        lava.src = "lava.jpg";
        lava.onload = function() {
            ctx.drawImage(lava, 500, 500, 100, 100);
        }
    }
    
    
    drawMovingImage();
}


function drawMovingImage() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    if (movingImage.complete) {
        
        const imgWidth = 100;
        const imgHeight = 100;
        const yPosition = 200; 
        
        ctx.drawImage(
            movingImage,
            sliderPosition,
            yPosition,
            imgWidth,
            imgHeight
        );
    }
}


window.onload = function() {
    drawBackground(); 
    movingImage.onload = function() {
        drawMovingImage();
    };
};
