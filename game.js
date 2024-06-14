var buttonColours = ["red","blue","green","yellow"];
var randomChosenColor;
var gamePattern = [];
var gameStarted = 0;
var level = 0;

function nextSequence(){
    userClickedPattern = [];
    gameStarted = 1;
    ++level;
    $("h1").text("Level "+level);
    var randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber);
    randomChosenColor = buttonColours[randomNumber];
    // console.log(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);

}
$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    // alert(userChosenColor);
    console.log(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
   
    
});

$(document).keypress(function(){

    if(gameStarted==0){
        nextSequence();
    }
    
});


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}
function checkAnswer(currentLevel){
if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
    
    if(userClickedPattern.length == gamePattern.length){

        setTimeout(function(){
            
        
            nextSequence();
        },1000);
        console.log(gamePattern);
    console.log(userClickedPattern);
    }
}else{

    var audio2= new Audio("./sounds/wrong.mp3");
    audio2.play();
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    },200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
}
}
function startOver(){
    gameStarted=0;
    level =0;
    gamePattern = [];

}