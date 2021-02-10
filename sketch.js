var canvas;
var contestantCount, database, quiz, question, contestant;
var gameState = 0;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quizObject = new Quiz();
  quizObject.getState();
  quizObject.start();
}

function draw(){
  background("pink");
  if (contestantCount === 4) {
    quizObject.update(1);
  }

  if (gameState === 1) {
    quizObject.play();
  }
}
