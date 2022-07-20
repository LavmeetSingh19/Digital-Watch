setInterval(()=>{
d = new Date();
htime = d.getHours();
mtime = d.getMinutes();
stime = d.getSeconds();

hrotation = 30*htime + mtime/2;
mrotation = 6*mtime;
srotation = 6*stime;

hour_needle.style.transform =  `rotate(${hrotation}deg)`;
minute_needle.style.transform =  `rotate(${mrotation}deg)`;
seconds_needle.style.transform =  `rotate(${srotation}deg)`;

},);