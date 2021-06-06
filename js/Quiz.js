class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    //write code to change the background color here
     background("cyan");

    //write code to show a heading for showing the result of Quiz
    textSize(20);
    text("RESULT OF THE GAME", 425, 30);

    //call getContestantInfo( ) here
    if(allContestants !== undefined){
      fill("purple");
      textSize(20);
      text("*NOTE: CONTESTANTS WHO ANSWERED CORRECT ARE HIGHLIHTED IN REEN COLOUR!", 130, 230);
    }

    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
      fill("green")
    else
      fill("red");
    }
    
  }
  
 display(){
   play.display();
 }




}
