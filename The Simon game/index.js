
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedpattern=[];
var level=0;
var started=false;
$(document).keypress(function() {
  if (!started){
    $("#level-title").text("Level "+level);
    nextSequence();
    started=true;
  }
});
$(".btn").click(function(){
  var userChosenColor= $(this).attr("id");
 // level++;
 userClickedpattern.push(userChosenColor);
  $("#level-title").text("Level "+level);

  
  playsound(userChosenColor);
  animatepress(userChosenColor);
  chechAnswer(userClickedpattern.length-1);

  
  //console.log(userClickedpattern);
});
function chechAnswer(currentLevel){
  if(gamePattern[currentLevel]==userClickedpattern[currentLevel]){
   // console.log("success");
    if(userClickedpattern.length==gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }
  else{
    //console.log("wrong");
   playsound("wrong");
    $("body").addClass("game-over");
    
    $("#level-title").text("Gameover press any key to restart");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
      startOver();
    
  }


}
function startOver(){
  level=0;
  gamePattern=[];
 // userClickedpattern=[];
  started=false;
}
function nextSequence() {
  userClickedpattern=[];
  level++;

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomChosenColour);


 
  // var audio = new Audio("sounds/"+ randomChosenColour +".mp3");
  // audio.play();
}

//nextSequence();
function playsound(name){
 
    var audio= new Audio("sounds/"+name+".mp3");
    audio.play();
  
}
function animatepress(currentColor){
$("#"+ currentColor).addClass("pressed");
setTimeout(function(){
  $("#"+currentColor).removeClass("pressed");
},100);
}