const canvas = document.getElementById('mycanvas');
const scoreBoard = document.getElementById('score');
let ctx = canvas.getContext('2d');
const body = document.querySelector('body');

// bricks
const brickHeight = 30;
const brickLength = 98;
const brickMargin = 30;
const brickRows = 5;
const brickCols = 4;
let brickArray = [];

for (i=0; i < brickCols; i++){
    brickArray[i] = [];
    for (j=0; j < brickRows; j++){
        brickArray[i][j] = {posX: 0, posY : 0, status : 1}
    }
}

//ball
const ballRadius = 8;
let ballPosX = (canvas.width / 2);
let ballPosY = canvas.height - ballRadius*2;
let ballDirX = 2;
let ballDirY = -2;

//board
let boardHeight = 13;
let boardWidth = 120;
let boardPosX = (canvas.width / 2) - (boardWidth / 2);
const boardPosY = canvas.height - boardHeight;

//board movement
let rightKeydown=false;
let leftKeydown=false;
const boardSpeed = 7;

//score
let points = 0;
/////////////////////////////////////

setInterval(updateCanvas, 10);


function updateCanvas(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawBricks();
    drawBoard();
    drawBall();
    ballMovement();
    brickCollision();

    if (leftKeydown === true && boardPosX > 0){
        boardPosX -= boardSpeed;
    }
    if (rightKeydown === true && boardPosX < canvas.width - boardWidth){
        boardPosX += boardSpeed;
    }
}

function drawBall(){
    ctx.beginPath();
      ctx.arc(ballPosX, ballPosY, ballRadius, 0, 2 * Math.PI);
      ctx.fillStyle = 'green';
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#003300';
      ctx.stroke();
      ctx.closePath();
}

function drawBricks(){
    for (i=0; i < brickCols; i++){
        for (j=0; j < brickRows; j++){
            if (brickArray[i][j].status == 1){
                ctx.beginPath();
                ctx.fillStyle = 'blue';
                let currBrickX = 20+ j*(brickLength + brickMargin)
                let currBrickY = 20 + i*(brickHeight + brickMargin)
                ctx.fillRect(currBrickX, currBrickY, brickLength, brickHeight);
                ctx.closePath();
                brickArray[i][j].posX = currBrickX;
                brickArray[i][j].posY = currBrickY;
            }
        }
    }
}

function drawBoard(){
    ctx.beginPath();
    ctx.fillStyle = '#777';
    ctx.fillRect(boardPosX, boardPosY, boardWidth, boardHeight);
    ctx.closePath();
}


document.addEventListener('keydown', keydownHandler);
document.addEventListener('keyup', keyupHandler);

function keydownHandler(e){
    if(e.keyCode === 39){
        rightKeydown = true;
    }
    else if (e.keyCode === 37){
        leftKeydown = true;
    }
}

function keyupHandler(e){
    if(e.keyCode === 39){
        rightKeydown = false;
    }
    else if (e.keyCode === 37){
        leftKeydown = false;
    }
}
    

function ballMovement(){
    //move
    ballPosX += ballDirX;
    ballPosY += ballDirY;
    //console.log(ballPosX + " " +ballPosY)
    //collisions with sides
    if (ballPosX - ballRadius <= 0 || ballPosX + ballRadius >= canvas.width){
        ballDirX *= -1;
    }
    //coll with top
    if (ballPosY - ballRadius <= 0 ){
        ballDirY *= -1;
    }
    if (ballPosY + ballRadius >= canvas.height){
        if (ballPosX >= boardPosX && ballPosX <= boardPosX + boardWidth){
            ballDirY *= -1;
        }
        else {
            document.location.reload();
            ballDirX = 0;
            ballDirY = 0;
            document.location.reload();
            alert('U lost noop!');
        }
    }
}

function brickCollision(){
    for (i=0; i < brickCols; i++){
        for (j=0; j < brickRows; j++){
            //brickArray[i][j] = {posX: 0, posY : 0, status : 1}
            let br = brickArray[i][j];
            if (br.status ==1){
                if (ballPosX  >= br.posX && ballPosX <= br.posX + brickLength 
                && ballPosY <= br.posY + brickHeight && ballPosY > br.posY){
                    if (Math.abs(ballPosX - br.posX)<=2 || Math.abs(ballPosX - (br.posX + brickLength))<=2){
                        ballDirX *= -1;
                    }
                    if (Math.abs(ballPosY - br.posY)<=2 || Math.abs(ballPosY - (br.posY + brickHeight))<=2){
                        ballDirY *= -1;
                    }
                    br.status = 0;
                    points ++;
                    scoreBoard.innerHTML = "Your score is: " + points.toString();
                    if (points == brickRows * brickCols){
                        body.innerHTML="";
                        body.classList.add('img');
                        alert('GG Noop!')
                    }
            }
        }
        }
    }
}