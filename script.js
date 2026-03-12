let questions = [
  {
    question: "What does HTML stand for?",
    answers:[
      "Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Language"],
      correct: 0
  },
  {
    question: "What does CSS do?",
    answers: ["Styles Web pages","Creates databases","Controls servers"],
    correct: 0
  },
  {
    question:"What does js do?",
    answers: ["Adds logic", "Adds colors", "Adds images"],
    correct: 0
  }
  ];
  
  let currectQuestion = 0;
  let score = 0;
  
  const questionDisplay =
  document.getElementById("question");
  const answersDiv =
  document.getElementById("answers");
  const scoreDisplay =
  document.getElementById("score");
  const nextBtn =
  document.getElementById("next-btn");
  function showQuestion(){
    let q = questions[currectQuestion];
    questionDisplay.textContent = q.question;
    answersDiv.innerHTML = "";
    q.answers.forEach(function(answer, index){
      let button = 
      document.createElement("button");
      button.textContent = answer;
      button.onclick = function(){
        if(index === q.correct){
          score++;
          scoreDisplay.textContent = "score: " + score;
        }
        };
        answersDiv.appendChild(button);
    
    });
  }
  nextBtn.onclick = function(){
    currectQuestion++;
    if(currectQuestion < questions.length){
      showQuestion();
    }else{
      questionDisplay.textContent = "Quiz finished!";
      answersDiv.innerHTML = "";
      nextBtn.style.display = "none";
    }
  };
  showQuestion();