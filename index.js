var readlineSync = require('readline-sync');
const chalk = require('chalk')

console.log(chalk.bgBlueBright("Cricket Quiz"))
console.log("\n Read instruction befor attempting quiz");
console.log("\n 1]There are Total 5 questions"  + "\n 2]For every correct answer, you will get + 1 in score "   + "\n 3]There is no negative marking" + "\n" + "\n ");


var userName = readlineSync.question(chalk.cyan("\n Enter your name? "));
console.log(chalk.yellow( "\n" + "Hello\t" + userName +"\tLet's start the quiz" + "\n"))



var questions = [{
  question: "\n 1]Which batsman is referred to as 'God of Cricket' in India? \na]Virat Kohli \nb]sachin Tendulkar \nc]Shoaib Malik \nd]Nana Patekar \nYour answer- ",
  answer:"b"
},
{
  question: "\n2]Who is the present Indian team captain? \na]Virat Kohli \nb]sachin Tendulkar \nc]Shoaib Malik \nd]Nana Patekar \nYour answer: ",
  answer:"a"
},
{
  question: "\n3]Which of these is not a cricketer? \na]Virat Kohli \nb]sachin Tendulkar \nc]Shoaib Malik \nd]Nana Patekar \nYour answer: ",
  answer:"d"
},
  {
  question:"\n4]Which of these is a pakistani cricketer? \na]Virat Kohli \nb]sachin Tendulkar \nc]Shoaib Malik \nd]Nana Patekar \nYour answer: ",
  answer:"c"
},
{
  question: "\n5]Which batsman is referred to as 'Captain Cool ' in India? \na]Virat Kohli \nb]sachin Tendulkar \nc]Shoaib Malik \nd]Ms Dhoni \nYour answer: ",
  answer:"d"
},
{
  question: "\n6]Which batsman has above 50 aveage in all three formats of international cricket? \na]Virat Kohli \nb]sachin Tendulkar \nc]Shoaib Malik \nd]Nana Patekar \nYour answer: ",
  answer:"a"
}

  

]
let score = 0;
function play(question, answer){
 var userAnswer = readlineSync.question(question);


  if(userAnswer === answer){
    console.log(chalk.greenBright("Right!, You got a point"))
    score= score+1
    console.log("Current Score :",score);

    console.log("\n")
    console.log("-----------------------------")

  }
  else{
    console.log(chalk.redBright("wrong"))
    console.log(chalk.yellowBright("correct answer is "+answer))

        console.log("Current Score :",score);
           console.log("\n")
         console.log("-----------------------------")
  }

}

for(var i =0; i<questions.length;i++){
  var currentquestion = questions[i];
  play(currentquestion.question,currentquestion.answer);
}





console.log(chalk.bgYellow("Your final score: " ,score));
var flag = 0;
var highScore = [
  {name:"manu", score:5}, 
  {name:"Sunidhi", score:6}, 
  {name:"rahul", score:5}
  ];

for(var i=0;i<highScore.length;i++){
  if(score >= highScore[i].score){
    console.log(chalk.greenBright('\n'+'Congratulations! '+userName+' You are topscorer'));
    flag = 1;
    console.log(chalk.greenBright("Thank you for participating"))
    break;
  }
}
if(flag===0){
  console.log(chalk.greenBright("Try Again for getting high score"));
}

for(var i = 0; i<highScore.length; i++){
  console.log( "These are the Topscores: ")
   console.log(`${highScore[i].name} => ${highScore[i].score}` )
}