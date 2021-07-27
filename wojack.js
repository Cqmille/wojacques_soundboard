var interval = 100;
var timer = 0;
var cycleLim =  15;
var randBlink;
var speakState = 0;
var duration=0;

setInterval(run, interval);

run(){
    var interval_time

    launch()
}

// function run(){

//     console.log(timer);

//     if (timer == 0){  
//         randBlink = Math.floor(Math.random() * cycleLim);
//         console.log("randblink : ",randBlink);
//     }

//     if(duration>0){
//         console.log("playin");
//         duration = duration;
//     }

//     timerUpdate(timer);
//     console.log(duration);

//     if(duration >0.1){
//         speak();
//         duration = duration - (interval/1000);
//         speakState = 1;
//     } else if (duration < 0.1 && duration != 0) {
//         duration = 0;
//         stopSpeak();
//     }

//     if (timer == randBlink|timer == randBlink+1){
//         console.log("blink!");
//         blink();
        
//     }
    
// }

// function timerUpdate(x){
//     //console.log("timer : ",x);
//     timer += 1;
//     if(timer>cycleLim){
//         timer = 0;
//     }
    
// }

// function speak(){
//     var doc = document.getElementById("logo");
//     var imgs = ['img/logo_normal.png', 'img/logo_speak_1.png', 'img/logo_speak_2.png', 'img/logo_speak_3.png'];
//     random = Math.floor(Math.random() * imgs.length);
//     logo.setAttribute("src", imgs[random]);

// }

// function stopSpeak(){
//     var doc = document.getElementById("logo");
//     var imgs = ['img/logo_normal.png','img/logo_normal.png', 'img/logo_speak_1.png', 'img/logo_speak_2.png', 'img/logo_speak_3.png'];
//     random = Math.floor(Math.random() * imgs.length);
//     logo.setAttribute("src", imgs[1]);

// }

// function blink() {
//     var doc = document.getElementById("logo");
//     var src = doc.getAttribute("src");
//     var i1 = "img/logo_normal.png";
//     var i2 = "img/logo_blink.png";

//     switch(src){
//         case i1 :
//             //console.log("i1");
//             doc.setAttribute("src", i2);
//             break;
//         case i2:
//             //console.log("i2");
//             doc.setAttribute("src", i1);
//             break;
//     }
// }

// function play(item) {
//     var audio = new Audio('mp3_files/' + item + '.mp3');
//     audio.addEventListener('loadedmetadata', function() {
//         console.log("Playing " + audio.src + ", for: " + audio.duration + "seconds.");
//         duration = 0.15 + audio.duration;
//         audio.play(); 
//     });

// }
