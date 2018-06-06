// window.requestAnimFrame = (function(callback) {
//     return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
//     function(callback) {
//       window.setTimeout(callback, 1000 / 60);
//     };
//   })();

document.addEventListener('touchmove', function (e) {
    e.preventDefault()
})
var c = document.getElementsByTagName('canvas')[0],
    x = c.getContext('2d'),
    pr = window.devicePixelRatio || 1,
    w = window.innerWidth,
    h = window.innerHeight,
    f = 100,
    q,
    m = Math,
    r = 0,
    u = m.PI*2,
    v = m.cos,
    z = m.random
c.width = w*pr
c.height = h*pr
x.scale(pr, pr)
x.globalAlpha = 0.4;
var counter = 0;
q=[{x:0,y:h*.7+f},{x:0,y:h*.7-f}];
var time;
function i() {
    if (counter == 4){
    x.clearRect(0,0,w,h)
    counter = 0;
    }
    q=[{x:0,y:h*.7+f},{x:0,y:h*.7-f}]
    
    d(q[0], q[1]);  
    // temp=z()
    // x.globalAlpha = temp < 0.6 && temp > 0.2?temp : 0.6;
    counter++ ;

}

function d(i,j){ 
    x.beginPath()
    x.moveTo(i.x, i.y)
    x.lineTo(j.x, j.y)
    var k = j.x + (z()*2-0.25)*f,
        n = y(j.y)
    x.lineTo(k, n)
    x.closePath()
    r-=u/-50
    x.fillStyle = '#'+(v(r)*127+128<<16 | v(r+u/3)*127+128<<8 | v(r+u/3*2)*127+128).toString(16);
    x.fill()
    q[0] = q[1]
    q[1] = {x:k,y:n}
   time = window.setTimeout(function(){
        d(q[0],q[1]);
    },70);
}
function y(p){
    var t = p + (z()*2-1.1)*f
    return (t>h||t<0) ? y(p) : t
}
//document.onclick = tt;
//document.ontouchstart =tt;
function tt(){
    window.clearTimeout(time);
    i();
}
window.setInterval(tt,3000);
i();