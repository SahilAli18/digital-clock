function displayTime(){
    var dateTime =new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var AMPM = document.getElementById('AM/PM');
    if(hrs >= 12){
        AMPM.innerHTML = "PM";
    }
    else{
        AMPM.innerHTML = "AM";
    }
    
    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('second').innerHTML = sec;
}
setInterval("displayTime()", 10);