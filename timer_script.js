var timeBegan = null; //did the clock start?
var timeStopped = null; // at what time was the timer stopped?
var stoppedDuration = 0 ; //how long the timer stopped?
var startInterval = null; //this is needed to sto the startInterval () method 
var flag = false; // to control the start/stop of the timer 

document.querySelector("#stop_start").addEventListener("click", () => {
    if (!flag){
        startTimer();
        flag = true ;
    }else{
        stopTimer();
        flag = false;
    }
})
document.querySelector("#reset").addEventListener("click", () => {
    resetTimer();

});
startTimer= ()=>{
    if(timeBegan ===null)
    timeBegan=  new Date();
    if(timeStopped !==null)
     stoppedDuration +=(new Date()-timeStopped);

     startInterval= setInterval(clockRunning,10);

}
stopTimer=()=>{
    timeStopped= new Date();
    clearInterval(startInterval);
}
clockRunning= ()=>{
    let currenttime = new Date();
    let timeElapsed =new Date(currenttime -timeBegan -stoppedDuration)

    let minutes= timeElapsed.getUTCMinutes();
    let seconds=timeElapsed.getUTCSeconds();
    let milliseconds=timeElapsed.getUTCMilliseconds();
    milliseconds=Math.floor(milliseconds/10);

    document.querySelector("#timer_display").textContent=(minutes=minutes<10? '0'+minutes:minutes)+":"+(seconds=seconds<10? '0'+seconds:seconds)+":"+(milliseconds=milliseconds<10? '0'+milliseconds:milliseconds);
}
resetTimer= ()=>{
    clearInterval(startInterval);
    timeBegan=null;
    timeStopped=null;
    stoppedDuration=0;
    document.querySelector("#timer_display").innerHTML="00:00:00";
    flag=false;


}