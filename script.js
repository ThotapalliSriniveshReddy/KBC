// Game Data
const questions = [
    {
        id: 1,
        question: "What is the capital of India?",
        option_a: "Mumbai",
        option_b: "New Delhi",
        option_c: "Kolkata",
        option_d: "Chennai",
        correct_answer: "B",
        difficulty: 'easy',
        prize_level: 1
    },
    {
        id: 2,
        question: "How many days are there in a leap year?",
        option_a: "365",
        option_b: "366",
        option_c: "364",
        option_d: "367",
        correct_answer: "B",
        difficulty: 'easy',
        prize_level: 2
    },
    {
        id: 3,
        question: "Which is the largest planet in our solar system?",
        option_a: "Earth",
        option_b: "Saturn",
        option_c: "Jupiter",
        option_d: "Neptune",
        correct_answer: "C",
        difficulty: 'easy',
        prize_level: 3
    },
    {
        id: 4,
        question: "Who wrote the Indian National Anthem?",
        option_a: "Mahatma Gandhi",
        option_b: "Rabindranath Tagore",
        option_c: "Bankim Chandra Chatterjee",
        option_d: "Sarojini Naidu",
        correct_answer: "B",
        difficulty: 'easy',
        prize_level: 4
    },
    {
        id: 5,
        question: "Which gas is most abundant in Earth's atmosphere?",
        option_a: "Oxygen",
        option_b: "Carbon Dioxide",
        option_c: "Nitrogen",
        option_d: "Hydrogen",
        correct_answer: "C",
        difficulty: 'easy',
        prize_level: 5
    },
    {
        id: 6,
        question: "In which year did India gain independence?",
        option_a: "1945",
        option_b: "1947",
        option_c: "1948",
        option_d: "1950",
        correct_answer: "B",
        difficulty: 'medium',
        prize_level: 6
    },
    {
        id: 7,
        question: "What is the chemical symbol for Gold?",
        option_a: "Go",
        option_b: "Gd",
        option_c: "Au",
        option_d: "Ag",
        correct_answer: "C",
        difficulty: 'medium',
        prize_level: 7
    },
    {
        id: 8,
        question: "Which river is known as the 'Ganga of the South'?",
        option_a: "Krishna",
        option_b: "Godavari",
        option_c: "Kaveri",
        option_d: "Narmada",
        correct_answer: "B",
        difficulty: 'medium',
        prize_level: 8
    },
    {
        id: 9,
        question: "Who is known as the 'Iron Man of India'?",
        option_a: "Jawaharlal Nehru",
        option_b: "Mahatma Gandhi",
        option_c: "Sardar Vallabhbhai Patel",
        option_d: "Subhas Chandra Bose",
        correct_answer: "C",
        difficulty: 'medium',
        prize_level: 9
    },
    {
        id: 10,
        question: "Which is the smallest state in India by area?",
        option_a: "Sikkim",
        option_b: "Goa",
        option_c: "Tripura",
        option_d: "Manipur",
        correct_answer: "B",
        difficulty: 'medium',
        prize_level: 10
    },
    {
        id: 11,
        question: "What is the atomic number of Carbon?",
        option_a: "4",
        option_b: "6",
        option_c: "8",
        option_d: "12",
        correct_answer: "B",
        difficulty: 'hard',
        prize_level: 11
    },
    {
        id: 12,
        question: "Which Mughal emperor built the Red Fort in Delhi?",
        option_a: "Akbar",
        option_b: "Shah Jahan",
        option_c: "Aurangzeb",
        option_d: "Humayun",
        correct_answer: "B",
        difficulty: 'hard',
        prize_level: 12
    },
    {
        id: 13,
        question: "What is the speed of light in vacuum?",
        option_a: "3 × 10⁸ m/s",
        option_b: "3 × 10⁶ m/s",
        option_c: "3 × 10⁷ m/s",
        option_d: "3 × 10⁹ m/s",
        correct_answer: "A",
        difficulty: 'hard',
        prize_level: 13
    },
    {
        id: 14,
        question: "Which Indian scientist won the Nobel Prize in Physics in 1930?",
        option_a: "Homi Bhabha",
        option_b: "C.V. Raman",
        option_c: "Satyendra Nath Bose",
        option_d: "Meghnad Saha",
        correct_answer: "B",
        difficulty: 'hard',
        prize_level: 14
    },
    {
        id: 15,
        question: "What is the name of India's first indigenous aircraft carrier?",
        option_a: "INS Vikrant",
        option_b: "INS Vikramaditya",
        option_c: "INS Viraat",
        option_d: "INS Vishal",
        correct_answer: "A",
        difficulty: 'hard',
        prize_level: 15
    }
];

const prizeLevels = [
    { level: 1, amount: "₹1,000" },
    { level: 2, amount: "₹2,000" },
    { level: 3, amount: "₹3,000" },
    { level: 4, amount: "₹5,000" },
    { level: 5, amount: "₹10,000", milestone: true },
    { level: 6, amount: "₹20,000" },
    { level: 7, amount: "₹40,000" },
    { level: 8, amount: "₹80,000" },
    { level: 9, amount: "₹1,60,000" },
    { level: 10, amount: "₹3,20,000", milestone: true },
    { level: 11, amount: "₹6,40,000" },
    { level: 12, amount: "₹12,50,000" },
    { level: 13, amount: "₹25,00,000" },
    { level: 14, amount: "₹50,00,000" },
    { level: 15, amount: "₹1,00,00,000", milestone: true }
];

// Game State
let gameState = {
    currentQuestion: 1,
    score: 0,
    gameStatus: 'welcome',
    selectedAnswer: null,
    showResult: false,
    playerName: '',
    lifelines: {
        fiftyFifty: true,
        audiencePoll: true,
        phoneAFriend: true,
        askTheExpert: true
    },
    eliminatedOptions: [],
    timeLeft: 60,
    timerActive: false,
    timerInterval: null
};

// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const gameScreen = document.getElementById('gameScreen');
const gameOverScreen = document.getElementById('gameOverScreen');
const playerForm = document.getElementById('playerForm');
const playerNameInput = document.getElementById('playerName');
const gameSubtitle = document.getElementById('gameSubtitle');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const optionsGrid = document.getElementById('optionsGrid');
const submitButton = document.getElementById('submitButton');
const quitButton = document.getElementById('quitButton');
const timer = document.getElementById('timer');
const timerContainer = document.querySelector('.timer-container');
const prizeList = document.getElementById('prizeList');
const gameOverTitle = document.getElementById('gameOverTitle');
const finalScore = document.getElementById('finalScore');
const gameOverMessage = document.getElementById('gameOverMessage');
const playAgainButton = document.getElementById('playAgainButton');
const trophyIcon = document.getElementById('trophyIcon');

// Lifeline buttons
const fiftyFiftyBtn = document.getElementById('fiftyFifty');
const audiencePollBtn = document.getElementById('audiencePoll');
const phoneAFriendBtn = document.getElementById('phoneAFriend');
const askTheExpertBtn = document.getElementById('askTheExpert');

// Initialize Game
function initGame() {
    renderPrizeLadder();
    setupEventListeners();
}

// Event Listeners
function setupEventListeners() {
    playerForm.addEventListener('submit', handleStartGame);
    submitButton.addEventListener('click', handleSubmitAnswer);
    quitButton.addEventListener('click', handleQuitGame);
    playAgainButton.addEventListener('click', handleRestartGame);
    
    // Lifeline event listeners
    fiftyFiftyBtn.addEventListener('click', () => useLifeline('fiftyFifty'));
    audiencePollBtn.addEventListener('click', () => useLifeline('audiencePoll'));
    phoneAFriendBtn.addEventListener('click', () => useLifeline('phoneAFriend'));
    askTheExpertBtn.addEventListener('click', () => useLifeline('askTheExpert'));
}

// Start Game
function handleStartGame(e) {
    e.preventDefault();
    const name = playerNameInput.value.trim();
    if (name) {
        gameState.playerName = name;
        gameState.gameStatus = 'playing';
        gameState.currentQuestion = 1;
        gameState.score = 0;
        gameState.timeLeft = 60;
        gameState.timerActive = true;
        
        showScreen('game');
        gameSubtitle.textContent = `Welcome, ${name}!`;
        loadQuestion();
        startTimer();
    }
}

// Show Screen
function showScreen(screen) {
    welcomeScreen.style.display = 'none';
    gameScreen.style.display = 'none';
    gameOverScreen.style.display = 'none';
    
    switch(screen) {
        case 'welcome':
            welcomeScreen.style.display = 'flex';
            break;
        case 'game':
            gameScreen.style.display = 'flex';
            break;
        case 'gameOver':
            gameOverScreen.style.display = 'flex';
            break;
    }
}

// Load Question
function loadQuestion() {
    const question = questions[gameState.currentQuestion - 1];
    questionNumber.textContent = `Question ${gameState.currentQuestion} of 15`;
    questionText.textContent = question.question;
    
    gameState.selectedAnswer = null;
    gameState.eliminatedOptions = [];
    submitButton.disabled = true;
    
    renderOptions(question);
    updatePrizeLadder();
}

// Render Options
function renderOptions(question) {
    const options = [
        { key: 'A', text: question.option_a },
        { key: 'B', text: question.option_b },
        { key: 'C', text: question.option_c },
        { key: 'D', text: question.option_d }
    ];
    
    optionsGrid.innerHTML = '';
    
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.innerHTML = `
            <span class="option-label">${option.key}</span>
            <span>${option.text}</span>
        `;
        button.addEventListener('click', () => selectAnswer(option.key));
        optionsGrid.appendChild(button);
    });
}

// Select Answer
function selectAnswer(answer) {
    if (gameState.showResult || !gameState.timerActive) return;
    
    // Remove previous selection
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selection to clicked button
    event.target.closest('.option-button').classList.add('selected');
    
    gameState.selectedAnswer = answer;
    submitButton.disabled = false;
}

// Submit Answer
function handleSubmitAnswer() {
    if (!gameState.selectedAnswer || gameState.showResult || !gameState.timerActive) return;
    
    gameState.showResult = true;
    gameState.timerActive = false;
    stopTimer();
    
    const question = questions[gameState.currentQuestion - 1];
    const isCorrect = gameState.selectedAnswer === question.correct_answer;
    
    // Show correct/incorrect styling
    document.querySelectorAll('.option-button').forEach(btn => {
        const optionKey = btn.querySelector('.option-label').textContent;
        if (optionKey === question.correct_answer) {
            btn.classList.add('correct');
        } else if (optionKey === gameState.selectedAnswer && !isCorrect) {
            btn.classList.add('incorrect');
        }
        btn.disabled = true;
    });
    
    submitButton.disabled = true;
    quitButton.disabled = true;
    
    setTimeout(() => {
        if (isCorrect) {
            gameState.score++;
            if (gameState.score === 15) {
                // Won the game!
                endGame(true);
            } else {
                // Next question
                gameState.currentQuestion++;
                gameState.timeLeft = 60;
                gameState.timerActive = true;
                gameState.showResult = false;
                loadQuestion();
                startTimer();
                quitButton.disabled = false;
            }
        } else {
            // Wrong answer - game over
            endGame(false);
        }
    }, 2000);
}

// Timer Functions
function startTimer() {
    updateTimerDisplay();
    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        updateTimerDisplay();
        
        if (gameState.timeLeft <= 0) {
            gameState.timerActive = false;
            stopTimer();
            endGame(false);
        }
    }, 1000);
}

function stopTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
}

function updateTimerDisplay() {
    timer.textContent = `${gameState.timeLeft}s`;
    
    // Update timer color
    timerContainer.className = 'timer-container';
    if (gameState.timeLeft > 30) {
        timerContainer.classList.add('timer-green');
    } else if (gameState.timeLeft > 10) {
        timerContainer.classList.add('timer-yellow');
    } else {
        timerContainer.classList.add('timer-red');
    }
}

// Use Lifeline
function useLifeline(lifeline) {
    if (!gameState.lifelines[lifeline] || !gameState.timerActive) return;
    
    gameState.lifelines[lifeline] = false;
    const button = document.getElementById(lifeline);
    button.disabled = true;
    button.classList.add('used');
    
    const question = questions[gameState.currentQuestion - 1];
    
    switch(lifeline) {
        case 'fiftyFifty':
            const correctAnswer = question.correct_answer;
            const options = ['A', 'B', 'C', 'D'];
            const wrongOptions = options.filter(opt => opt !== correctAnswer);
            const optionsToEliminate = wrongOptions.slice(0, 2);
            
            gameState.eliminatedOptions = optionsToEliminate;
            
            document.querySelectorAll('.option-button').forEach(btn => {
                const optionKey = btn.querySelector('.option-label').textContent;
                if (optionsToEliminate.includes(optionKey)) {
                    btn.classList.add('eliminated');
                    btn.disabled = true;
                }
            });
            break;
            
        case 'audiencePoll':
            alert(`Audience Poll: 65% voted for option ${question.correct_answer}`);
            break;
            
        case 'phoneAFriend':
            alert(`Friend says: "I think the answer is option ${question.correct_answer}"`);
            break;
            
        case 'askTheExpert':
            alert(`Expert opinion: "The correct answer should be option ${question.correct_answer}"`);
            break;
    }
}

// Quit Game
function handleQuitGame() {
    if (gameState.showResult || !gameState.timerActive) return;
    
    gameState.timerActive = false;
    stopTimer();
    endGame(false);
}

// End Game
function endGame(isWinner) {
    gameState.gameStatus = isWinner ? 'won' : 'game-over';
    stopTimer();
    
    const prizeWon = gameState.score > 0 ? prizeLevels[gameState.score - 1]?.amount || '₹0' : '₹0';
    
    gameOverTitle.textContent = isWinner ? 'Congratulations! 🎉' : 'Game Over';
    finalScore.textContent = `You won: ${prizeWon}`;
    
    if (isWinner) {
        gameOverMessage.textContent = "Amazing! You've answered all questions correctly and won the jackpot! You are now a Crorepati!";
        trophyIcon.setAttribute('fill', '#ffd700');
    } else {
        if (gameState.score === 0) {
            gameOverMessage.textContent = "Better luck next time! Every expert was once a beginner.";
        } else {
            gameOverMessage.textContent = `Great effort! You answered ${gameState.score} question${gameState.score > 1 ? 's' : ''} correctly.`;
        }
        trophyIcon.setAttribute('fill', '#e0e0e0');
    }
    
    showScreen('gameOver');
}

// Restart Game
function handleRestartGame() {
    gameState = {
        currentQuestion: 1,
        score: 0,
        gameStatus: 'welcome',
        selectedAnswer: null,
        showResult: false,
        playerName: '',
        lifelines: {
            fiftyFifty: true,
            audiencePoll: true,
            phoneAFriend: true,
            askTheExpert: true
        },
        eliminatedOptions: [],
        timeLeft: 60,
        timerActive: false,
        timerInterval: null
    };
    
    // Reset lifeline buttons
    document.querySelectorAll('.lifeline-button').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('used');
    });
    
    playerNameInput.value = '';
    gameSubtitle.textContent = 'The Ultimate Quiz Challenge';
    showScreen('welcome');
}

// Render Prize Ladder
function renderPrizeLadder() {
    prizeList.innerHTML = '';
    
    prizeLevels.forEach(prize => {
        const div = document.createElement('div');
        div.className = 'prize-item';
        div.innerHTML = `
            <span class="prize-number">${prize.level}</span>
            <span class="prize-amount">${prize.amount}</span>
        `;
        prizeList.appendChild(div);
    });
}

// Update Prize Ladder
function updatePrizeLadder() {
    document.querySelectorAll('.prize-item').forEach((item, index) => {
        const level = index + 1;
        item.className = 'prize-item';
        
        if (level === gameState.currentQuestion) {
            item.classList.add('current');
        } else if (level < gameState.currentQuestion) {
            item.classList.add('completed');
        }
    });
}

// Initialize the game when page loads
document.addEventListener('DOMContentLoaded', initGame);