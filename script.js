function submitQuiz() {
    var score = 0;
    var answers = ['a', 'b', 'c', 'd'];
    var userAnswers = [];

    for (var i = 1; i <= answers.length; i++) {
        var selectedOption = document.querySelector('input[name="q' + i + '"]:checked');
        userAnswers.push(selectedOption ? selectedOption.value : '');
    }

    for (var i = 0; i < answers.length; i++) {
        if (userAnswers[i] === answers[i]) {
            score++;
        }
    }

    document.getElementById('score').innerText = 'Total Correct Answers: ' + score;
    document.getElementById('total-questions').innerText = 'Total Questions: ' + answers.length;
    
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
}
