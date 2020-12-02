const canvas = document.getElementById('canvas');
const  ctx = canvas.getContext("2d");
var radius = canvas.height/2;
ctx.translate(radius, radius);
radius *= 0.9;

(function(){

})()


setInterval(() => {
    //console.log(radius)
    drawCircle(ctx,radius);
    drawNumbers(ctx,radius);
    drawTime(ctx,radius);
}, 1000);


function drawCircle(ctx,radius){
    //basic circle
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'White';
    ctx.fill();
    ctx.strokeStyle = 'White';
    ctx.stroke();

    //edge of circle
    var grd = ctx.createRadialGradient(0, 0, radius*0.95, 0, 0, radius*1.05);
    grd.addColorStop(0, "#555");
    grd.addColorStop(0.5, "white");
    grd.addColorStop(1, "#555");
    ctx.strokeStyle = grd;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();

    //center circle
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.05, 0, 2 * Math.PI);
    ctx.fillStyle = 'Black';
    ctx.fill();
    ctx.strokeStyle = 'Black';
    ctx.stroke();
}

function drawNumbers(ctx,radius){
    var angle = Math.PI/6;
    ctx.font = "40px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = 'middle';
    for (i=1; i<=12;i++){
        ctx.save();
        ctx.rotate(angle*i);
        ctx.translate(0,-radius*0.85);
        ctx.rotate(-angle*i);
        ctx.fillText(i, 0, 0);
        ctx.translate(0,radius*0.85);
        ctx.restore();
    }
}

function drawTime(ctx,radius){
    
    var currdate = new Date();
    var hrs = currdate.getHours()%12;
    var min = currdate.getMinutes();
    var sec = currdate.getSeconds();
    console.log(hrs + " " + min + " " +sec);
    var anghrs = (Math.PI/6)*hrs + Math.PI/6/30*min + Math.PI/6/60/30*sec;
    var angmin = (Math.PI/30)*min + Math.PI/60/30*sec;
    var angsec = (Math.PI/30*sec);
    //console.log(anghrs +" " +angmin +" " + angsec)
    //hrs
    drawArms(ctx,anghrs,20,radius * 0.6);
    //min
    drawArms(ctx,angmin,10,radius * 0.7);
    //sec
    drawArms(ctx,angsec,5,radius * 0.8);
}

function drawArms(ctx,ang,width,length){
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(ang);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-ang);
}

