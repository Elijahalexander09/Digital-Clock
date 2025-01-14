setInterval(()=>{
    // get time indicator elements
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");

    //digits time indicator
    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");

    //dot time indicator
    let dotH = document.getElementById("h-dot")
    let dotM = document.getElementById("m-dot")
    let dotS = document.getElementById("s-dot")


    //get current time
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >=12 ? "PM" : "AM";

    //convert to 12 hour format
    if(h>12){
        h=h-12;
    }


    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    //set time and label
    hours.innerHTML = h + '<br/><span>Hours</span>'
    minutes.innerHTML = m + '<br/><span>Minutes</span>'
    seconds.innerHTML = s + '<br/><span>Seconds</span>'
    
    //set circular indicator
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    //set dot time position indicator
    dotH.style.transform = "rotate($(h*30) deg)";
    dotM.style.transform = "rotate($(m*6) deg)";
    dotS.style.transform = "rotate($(s*6) deg)";


},1000)