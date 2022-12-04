let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

let r = 40;
let x = 50;
let y = 50;
let vx = 1;

function animate(){
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    c.beginPath();
    c.arc(x,y,r,0,2*Math.PI);
    c.fillStyle = "red";
    c.fill();
    x += vx;
    requestAnimationFrame(animate);
}
animate();


// let ball = document.querySelector("#ball");
// let offset = 10;


// function animate(){
//     ball.style.left = offset + "px";
//     offset += 1;
//     requestAnimationFrame(animate);
// }

// animate();


// setInterval(() => {
//     ball.style.left = offset + "px";
//     offset += 1;
// }, 10);



// for(i=0; i < 200; i++){
//     x = Math.random() * window.innerWidth;
//     y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x,y,50,0,2*Math.PI);
//     c.stroke();
// }

// c.clearRect(0,0,window.innerWidth,window.innerHeight);


// c.translate(100,100);
// c.font = "30px verdna";
// c.fillText("Hello world!", 100,55);

// c.fillStyle = "#27ae60";
// c.fillRect(100,0,100,100);

// c.fillStyle = "#3498db";
// c.fillRect(300,100,100,100);

// c.fillStyle = "#27aed0";
// c.fillRect(500,0,100,100);

// c.beginPath();
// c.lineTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.closePath();
// c.stroke();

