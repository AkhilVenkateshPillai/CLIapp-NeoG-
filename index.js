const rs = require('readline-sync')

// //-----------------------templating 

let playerName = rs.question('please enter your name: ');

let welcome = `\n ---- welcome ${playerName}`



// console.log(wishCheck(PlayerWish));


//-----------------------quizz gameplay function (version 1)


let hybridDataSet = [
  {'questions' : ['where akhil work: ','apple']},
  {'questions' : ['what akhil likes: ','burger']}]
let playerScore = 0;

const gamePlay = (hb,updatedScore) => {


  for(i=0;i<hb.length;i++){
    
    let queset = hb[i] ; 
     
     let playerAns = rs.question(queset.questions[0]);
  
     if(playerAns===queset.questions[0]){

        console.log('you are right :)');
        updatedScore += 1;
   
      }else {
        console.log('you are wrong :(');
        updatedScore -= 1;
        
      }

    
  }

  
 return console.log(`your current score is: ${updatedScore}`)

}

gamePlay(hybridDataSet,playerScore);

//------------------------------------------------------- quizz gameplay function (version 2)


let quest = ['test1','test2','test3']
let answ = ['an1','an2','an3']

const gamePlayTwo = (ans,ques,updatedScore) => {


  for(i=0;i<ques.length;i++){

    let playerAns = rs.question(ques[i]);

  
     if(playerAns===ans[i]){

        console.log('you are right :)');
        updatedScore += 1;
        
   
      }else {
        console.log('you are wrong :(');
        updatedScore -= 1;
        
      }
    
    
  }

  
 return console.log(`your current score is: ${updatedScore}`)

}

gamePlayTwo(answ,quest,playerScore)