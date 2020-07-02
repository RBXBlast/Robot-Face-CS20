// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Rectangle Behind Head for Ears
ctx.fillStyle = "rgb(100, 100, 100)";
ctx.fillRect(80, 260, 460, 80);

// Filled Triangles for Hair
fillTriangle(180, 80, 140, 100, 220, 100);
fillTriangle(340, 80, 300, 100, 380, 100);

// Outlined Triangles for Hair
strokeTriangle(260, 80, 220, 100, 300, 100);
strokeTriangle(420, 80, 380, 100, 460, 100);

// Filled Triangle for Neck
fillTriangle(300, 200, 220, 600, 380, 600);

// Rectangle Head
ctx.fillStyle = "rgb(180, 180, 180)";
ctx.fillRect(100, 100, 400, 400);

// Filled Circle for Left and Right Eye Socket
ctx.fillStyle = "rgb(235, 235, 235)";
fillCircle(200, 250, 50, 0, 2 * Math.PI);
fillCircle(400, 250, 50, 0, 2 * Math.PI);

// Rectangle for Mouth
ctx.fillRect(200, 350, 200, 60);

// Horizontal Line for Teeth
ctx.strokeStyle = "rgb(180, 180, 180)";
horizontalLine(200, 380, 400, 380);

// All Vertical Line for Teeth
verticalLine(250, 350, 250, 410);
verticalLine(300, 350, 300, 410);
verticalLine(350, 350, 350, 410);

// Filled Circle for Left and Right Eye
ctx.fillStyle = "rgb(100, 100, 100)";
fillCircle(200, 250, 30, 0, 2 * Math.PI);
fillCircle(400, 250, 10, 0, 2 * Math.PI);

// Outlined Circle for Left and Right Eye Socket
ctx.strokeStyle = "rgb(100, 100, 100)";
strokeCircle(200, 250, 50, 0, 2 * Math.PI);
strokeCircle(400, 250, 50, 0, 2 * Math.PI);

// Line for Left and Right Eyebrow
ctx.lineWidth = 2;
horizontalLine(150, 180, 250, 180);
horizontalLine(350, 160, 450, 180);

// Outlined Triangle for Nose
strokeTriangle(300, 280, 320, 320, 280, 320);

//DRAW FUNCTIONS
function fillTriangle(x1, y1, x2, y2, x3, y3){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fill();
}

function strokeTriangle(x1, y1, x2, y2, x3, y3){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath()
    ctx.stroke();
}

function fillCircle(x1, y1, x2, y2, r1){
    ctx.beginPath();
    ctx.arc(x1, y1, x2, y2, r1 * Math.PI);
    ctx.fill();
}

function strokeCircle(x1, y1,x2, y2, r1){
    ctx.beginPath();
    ctx.arc(x1, y1, x2, y2, r1 * Math.PI);
    ctx.stroke();
}

function horizontalLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function verticalLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}