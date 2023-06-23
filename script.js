const messageArray = [
    "All our dreams can come true, if we have the courage to pursue them.",
    "The secret of getting ahead is getting started.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Do one thing every day that scares you.",
    "If we have the attitude that it's going to be a great day it usually is."
];

document.getElementById("generateButton").onclick = () => {
    let randomNumber = Math.floor(Math.random() * messageArray.length);
    document.getElementById("message").innerHTML = messageArray[randomNumber];
    //alert(messageArray[randomNumber]);
};