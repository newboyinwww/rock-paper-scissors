let myScore = 0;
let computerScore = 0;
let gameOver = false;

function play(myChoice) {

    if (gameOver) {
        return;
    }

    const choices = ['가위', '바위', '보'];

    const computerChoice =
        choices[Math.floor(Math.random() * 3)];

    let result = '';

    if (myChoice === computerChoice) {

        result = '🤝 무승부!';

    } else if (
        (myChoice === '가위' && computerChoice === '보') ||
        (myChoice === '바위' && computerChoice === '가위') ||
        (myChoice === '보' && computerChoice === '바위')
    ) {

        result = '🎉 내가 이겼다!';
        myScore++;

    } else {

        result = '😭 컴퓨터 승리!';
        computerScore++;
    }

    document.getElementById('result').innerHTML =
        `나: ${myChoice} VS 컴퓨터: ${computerChoice}<br><br>${result}`;

    updateScore();

    if (myScore === 2) {

        gameOver = true;

        document.getElementById('result').innerHTML +=
            '<br><br>🏆 내가 최종 승리!';
    }

    else if (computerScore === 2) {

        gameOver = true;

        document.getElementById('result').innerHTML +=
            '<br><br>💀 컴퓨터 최종 승리!';
    }
}


function updateScore() {

    let myRounds = '⚪ ⚪';
    let computerRounds = '⚪ ⚪';

    if (myScore >= 1) {
        myRounds = '🔵 ⚪';
    }

    if (myScore >= 2) {
        myRounds = '🔵 🔵';
    }

    if (computerScore >= 1) {
        computerRounds = '🔴 ⚪';
    }

    if (computerScore >= 2) {
        computerRounds = '🔴 🔴';
    }

    document.getElementById('myRounds').innerHTML = myRounds;
    document.getElementById('computerRounds').innerHTML = computerRounds;
}


// 🔄 재도전 버튼
function resetGame() {

    myScore = 0;
    computerScore = 0;
    gameOver = false;

    document.getElementById('result').innerHTML =
        '무엇을 낼까요?';

    updateScore();
}