setInterval(()=>
{
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    
    dlist=['Sunaday','Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday']
    
    HourHandRotate= 30*h+m/2;
    MinHandRotate=6*m;
    SecHandRotate=6*s;

    hour_hand.style.transform = `rotate(${HourHandRotate}deg)`;
    min_hand.style.transform = `rotate(${MinHandRotate}deg)`;
    second_hand.style.transform =  `rotate(${SecHandRotate}deg)`;

    document.getElementById("digital-watch").innerHTML=dlist[d.getDay()]+":"+h+":"+m+":"+s;
},1000);