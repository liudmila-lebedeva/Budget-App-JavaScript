//== select chart element ==

const chart = document.querySelector(".chart");

//== create the CANVAS element ==

const canvas = document.createElement("canvas");
canvas.width = 50;
canvas.height = 50;

//== appent CANVAS to the chart element ==
chart.appendChild(canvas);

//to draw on canvas = to get context of canvas
const ctx = canvas.getContext("2d");

//the line width
ctx.lineWidth = 8;

//radius 
const R = 20;

function drawCircle(color, ratio, anticlockwise) {
    ctx.strokeStyle = color;
    ctx.beginPath(); //The beginPath() method begins a path, or resets the current path.
    ctx.arc( canvas.width/2, canvas.height/2, R, 0, ratio * 2 * Math.PI, anticlockwise);//The arc() method creates an arc/curve (used to create circles, or parts of circles).
    ctx.stroke(); 
    //the stroke() method actually draws the path you have defined with all those methods. 
}

function updateChart(income, outcome) {
    ctx.clearRect (0, 0, canvas.width, canvas.height);  //clear canvas
    let ratio = income / (income + outcome);  //ratio = соотношение

    drawCircle("#fff", - ratio, true);
    drawCircle("#ff0000", 1 - ratio, false);
}


