const categories = [
    "Digestive Organs",
    "Mechanical Digestion",
    "Chemical Digestion",
    "Absorption",
    "Fun and Songs"
];

const questions = [
    // Digestive Organs
    {
        question: "This muscular organ mixes food with acid and enzymes to form chyme",
        answer: "What is the stomach?",
        options: ["What is the esophagus?", "What is the stomach?", "What is the pancreas?", "What is the large intestine?"],
        value: 100,
        category: "Digestive Organs"
    },
    {
        question: "Most nutrient absorption occurs in this longest part of the digestive tract",
        answer: "What is the small intestine?",
        options: ["What is the small intestine?", "What is the large intestine?", "What is the rectum?", "What is the esophagus?"],
        value: 200,
        category: "Digestive Organs"
    },
    {
        question: "This accessory organ produces bile for fat emulsification",
        answer: "What is the liver?",
        options: ["What is the liver?", "What is the spleen?", "What is the appendix?", "What is the kidney?"],
        value: 300,
        category: "Digestive Organs"
    },
    {
        question: "This short section connects the small intestine to the large intestine",
        answer: "What is the cecum?",
        options: ["What is the sigmoid colon?", "What is the duodenum?", "What is the cecum?", "What is the pylorus?"],
        value: 400,
        category: "Digestive Organs"
    },
    {
        question: "This sphincter controls movement of chyme from the stomach into the duodenum",
        answer: "What is the pyloric sphincter?",
        options: ["What is the lower esophageal sphincter?", "What is the pyloric sphincter?", "What is the ileocecal valve?", "What is the anal sphincter?"],
        value: 500,
        category: "Digestive Organs"
    },

    // Mechanical Digestion
    {
        question: "Chewing food in the mouth is called this process",
        answer: "What is mastication?",
        options: ["What is peristalsis?", "What is mastication?", "What is segmentation?", "What is emulsification?"],
        value: 100,
        category: "Mechanical Digestion"
    },
    {
        question: "Wave-like smooth muscle contractions that push food forward are called",
        answer: "What is peristalsis?",
        options: ["What is filtration?", "What is diffusion?", "What is peristalsis?", "What is secretion?"],
        value: 200,
        category: "Mechanical Digestion"
    },
    {
        question: "In the small intestine, this mixing motion repeatedly churns chyme with enzymes",
        answer: "What is segmentation?",
        options: ["What is segmentation?", "What is swallowing?", "What is mastication?", "What is reflux?"],
        value: 300,
        category: "Mechanical Digestion"
    },
    {
        question: "This act moves a food bolus from mouth through the pharynx and esophagus",
        answer: "What is swallowing (deglutition)?",
        options: ["What is swallowing (deglutition)?", "What is mastication?", "What is defecation?", "What is secretion?"],
        value: 400,
        category: "Mechanical Digestion"
    },
    {
        question: "Bile helps mechanical digestion of fats mainly by this process",
        answer: "What is emulsification?",
        options: ["What is hydrolysis?", "What is denaturation?", "What is emulsification?", "What is oxidation?"],
        value: 500,
        category: "Mechanical Digestion"
    },

    // Chemical Digestion
    {
        question: "Salivary amylase begins digestion of this macromolecule",
        answer: "What are carbohydrates (starches)?",
        options: ["What are proteins?", "What are lipids?", "What are carbohydrates (starches)?", "What are nucleic acids?"],
        value: 100,
        category: "Chemical Digestion"
    },
    {
        question: "This stomach enzyme starts protein digestion by breaking peptide bonds",
        answer: "What is pepsin?",
        options: ["What is lipase?", "What is maltase?", "What is trypsin?", "What is pepsin?"],
        value: 200,
        category: "Chemical Digestion"
    },
    {
        question: "Pancreatic bicarbonate in the duodenum mainly serves to do this",
        answer: "What is neutralize gastric acid?",
        options: ["What is digest proteins?", "What is emulsify fats?", "What is neutralize gastric acid?", "What is stimulate bile release?"],
        value: 300,
        category: "Chemical Digestion"
    },
    {
        question: "Trypsin, chymotrypsin, and carboxypeptidase are enzymes that digest",
        answer: "What are proteins?",
        options: ["What are proteins?", "What are carbohydrates?", "What are triglycerides?", "What is lactose?"],
        value: 400,
        category: "Chemical Digestion"
    },
    {
        question: "This brush-border enzyme converts lactose into absorbable monosaccharides",
        answer: "What is lactase?",
        options: ["What is pepsin?", "What is amylase?", "What is lactase?", "What is elastase?"],
        value: 500,
        category: "Chemical Digestion"
    },

    // Absorption
    {
        question: "Finger-like projections that increase intestinal surface area are called",
        answer: "What are villi?",
        options: ["What are alveoli?", "What are villi?", "What are nephrons?", "What are papillae?"],
        value: 100,
        category: "Absorption"
    },
    {
        question: "Most water and electrolyte reabsorption occurs in this part of the large intestine",
        answer: "What is the colon?",
        options: ["What is the rectum?", "What is the appendix?", "What is the colon?", "What is the cecum only?"],
        value: 200,
        category: "Absorption"
    },
    {
        question: "Fat digestion products are packaged into these particles before entering lymphatic lacteals",
        answer: "What are chylomicrons?",
        options: ["What are micelles?", "What are chylomicrons?", "What are bile salts?", "What are globulins?"],
        value: 300,
        category: "Absorption"
    },
    {
        question: "Most monosaccharides and amino acids absorbed from the gut first travel through this vessel",
        answer: "What is the hepatic portal vein?",
        options: ["What is the aorta?", "What is the thoracic duct?", "What is the hepatic portal vein?", "What is the vena cava?"],
        value: 400,
        category: "Absorption"
    },
    {
        question: "This membrane transport mechanism moves glucose into enterocytes with sodium in the small intestine",
        answer: "What is secondary active transport (SGLT1 co-transport)?",
        options: ["What is osmosis?", "What is simple diffusion?", "What is secondary active transport (SGLT1 co-transport)?", "What is endocytosis?"],
        value: 500,
        category: "Absorption"
    },

    // Fun and Songs
    {
        question: "This Disney movie features the song 'Let It Go'",
        answer: "What is Frozen?",
        options: ["What is Moana?", "What is Tangled?", "What is Frozen?", "What is Encanto?"],
        value: 100,
        category: "Fun and Songs"
    },
    {
        question: "This singer is known for the hit song 'Shake It Off'",
        answer: "Who is Taylor Swift?",
        options: ["Who is Adele?", "Who is Billie Eilish?", "Who is Taylor Swift?", "Who is Rihanna?"],
        value: 200,
        category: "Fun and Songs"
    },
    {
        question: "This song by Pharrell Williams is known for its one-word positive title",
        answer: "What is Happy?",
        options: ["What is Lucky?", "What is Smile?", "What is Happy?", "What is Joy?"],
        value: 300,
        category: "Fun and Songs"
    },
    {
        question: "This K-pop group released the global hit 'Dynamite'",
        answer: "Who is BTS?",
        options: ["Who is BLACKPINK?", "Who is EXO?", "Who is BTS?", "Who is SEVENTEEN?"],
        value: 400,
        category: "Fun and Songs"
    },
    {
        question: "This classic song starts with the lyric 'Is this the real life? Is this just fantasy?'",
        answer: "What is Bohemian Rhapsody?",
        options: ["What is Hotel California?", "What is Don't Stop Believin'?", "What is Stairway to Heaven?", "What is Bohemian Rhapsody?"],
        value: 500,
        category: "Fun and Songs"
    }
];

const finalJeopardy = {
    question: "This artist is called the 'Queen of Pop' and sang 'Like a Prayer'",
    answer: "Who is Madonna?",
    category: "Fun and Songs"
};

let score = 0;
const gameBoard = document.getElementById('gameBoard');
const modal = document.getElementById('questionModal');
const questionText = document.getElementById('questionText');
const answerOptions = document.getElementById('answerOptions');
const closeModal = document.getElementById('closeModal');
const scoreDisplay = document.getElementById('score');
const finalJeopardyButton = document.createElement('button');
finalJeopardyButton.textContent = 'Final Jeopardy';
finalJeopardyButton.className = 'final-jeopardy-button';
finalJeopardyButton.style.display = 'none';
finalJeopardyButton.style.position = 'fixed';
finalJeopardyButton.style.bottom = '20px';
finalJeopardyButton.style.right = '20px';
finalJeopardyButton.style.padding = '15px 30px';
finalJeopardyButton.style.fontSize = '20px';
finalJeopardyButton.style.backgroundColor = '#060CE9';
finalJeopardyButton.style.color = 'white';
finalJeopardyButton.style.border = 'none';
finalJeopardyButton.style.borderRadius = '5px';
finalJeopardyButton.style.cursor = 'pointer';
finalJeopardyButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
finalJeopardyButton.style.zIndex = '1000';
document.body.appendChild(finalJeopardyButton);

// Add a function to show Final Jeopardy button immediately
function showFinalJeopardyButton() {
    finalJeopardyButton.style.display = 'block';
    finalJeopardyButton.style.animation = 'pulse 2s infinite';
}

// Add CSS animation for the button
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    .final-jeopardy-button:hover {
        background-color: #0408B0;
        transform: scale(1.05);
    }
`;
document.head.appendChild(style);

// Initialize the game board
function initializeBoard() {
    // Add categories
    categories.forEach(category => {
        const categoryCell = document.createElement('div');
        categoryCell.className = 'category';
        categoryCell.textContent = category;
        gameBoard.appendChild(categoryCell);
    });

    // Add question cells
    for (let points = 100; points <= 500; points += 100) {
        categories.forEach(category => {
            const questionCell = document.createElement('div');
            questionCell.className = 'question-cell';
            const questionData = questions.find(q => q.value === points && q.category === category);
            questionCell.textContent = '$' + points;
            questionCell.addEventListener('click', () => showQuestion(category, points, questionCell));
            gameBoard.appendChild(questionCell);
        });
    }

    // Show Final Jeopardy button immediately
    showFinalJeopardyButton();
}

function showFinalJeopardy() {
    questionText.textContent = finalJeopardy.question;
    answerOptions.innerHTML = '';
    
    // Create a single answer input
    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.placeholder = 'Type your answer...';
    answerInput.style.width = '80%';
    answerInput.style.padding = '10px';
    answerInput.style.margin = '10px 0';
    answerInput.style.fontSize = '16px';
    answerInput.style.border = '2px solid #060CE9';
    answerInput.style.borderRadius = '5px';
    
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Answer';
    submitButton.style.padding = '10px 20px';
    submitButton.style.margin = '10px 0';
    submitButton.style.backgroundColor = '#060CE9';
    submitButton.style.color = 'white';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '5px';
    submitButton.style.cursor = 'pointer';
    
    submitButton.addEventListener('click', () => {
        const userAnswer = answerInput.value.trim();
        const correctAnswer = finalJeopardy.answer.trim();
        
        // Add clicked class to the button
        submitButton.classList.add('clicked');
        
        // Check answer after a short delay to show the color change
        setTimeout(() => {
            // Show the correct answer
            const answerDisplay = document.createElement('div');
            answerDisplay.textContent = `Correct Answer: ${correctAnswer}`;
            answerDisplay.style.margin = '10px 0';
            answerDisplay.style.padding = '10px';
            answerDisplay.style.backgroundColor = 'rgba(6, 12, 233, 0.1)';
            answerDisplay.style.borderRadius = '5px';
            answerDisplay.style.fontWeight = 'bold';
            
            answerOptions.appendChild(answerDisplay);
            
            // Disable input and button
            answerInput.disabled = true;
            submitButton.disabled = true;
            
            // Check if answer is correct (case-insensitive)
            const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
            handleAnswer(isCorrect, score, null);
        }, 500);
    });
    
    answerOptions.appendChild(answerInput);
    answerOptions.appendChild(submitButton);

    modal.style.display = 'block';
    finalJeopardyButton.style.display = 'none';
}

// Add event listener for Final Jeopardy button
finalJeopardyButton.addEventListener('click', showFinalJeopardy);

function showQuestion(category, points, cell) {
    if (cell.classList.contains('answered')) return;

    const questionData = questions.find(q => q.value === points && q.category === category);
    questionText.textContent = questionData.question;
    answerOptions.innerHTML = '';
    const shuffledOptions = [...questionData.options];

    // Randomize answer order so the correct choice is not always in the same spot.
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    // Create answer buttons
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', (e) => {
            // Add clicked class to the button
            e.target.classList.add('clicked');
            
            // Check answer after a short delay to show the color change
            setTimeout(() => {
                // Find and highlight the correct answer
                const buttons = answerOptions.getElementsByTagName('button');
                Array.from(buttons).forEach(btn => {
                    if (btn.textContent === questionData.answer) {
                        btn.style.border = '3px solid blue';
                        btn.style.borderRadius = '50%';
                    }
                    btn.disabled = true;
                });
                
                handleAnswer(option === questionData.answer, points, cell);
            }, 500);
        });
        answerOptions.appendChild(button);
    });

    modal.style.display = 'block';
}

function handleAnswer(correct, points, cell) {
    // Create points indicator element
    const pointsIndicator = document.createElement('div');
    pointsIndicator.style.position = 'absolute';
    pointsIndicator.style.top = '50%';
    pointsIndicator.style.left = '50%';
    pointsIndicator.style.transform = 'translate(-50%, -50%)';
    pointsIndicator.style.fontSize = '24px';
    pointsIndicator.style.fontWeight = 'bold';
    pointsIndicator.style.padding = '10px';
    pointsIndicator.style.borderRadius = '5px';
    pointsIndicator.style.zIndex = '1000';
    
    if (correct) {
        if (cell === null) {
            // Final Jeopardy - double the score
            score *= 2;
            pointsIndicator.textContent = `Score Doubled!`;
        } else {
            score += points;
            pointsIndicator.textContent = `+${points}`;
        }
        pointsIndicator.style.color = 'green';
        pointsIndicator.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
    } else {
        if (cell === null) {
            // Final Jeopardy - halve the score
            score = Math.floor(score / 2);
            pointsIndicator.textContent = `Final Score: ${score}`;
        } else {
            score -= points;
            pointsIndicator.textContent = `-${points}`;
        }
        pointsIndicator.style.color = 'red';
        pointsIndicator.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
    }
    
    // Add the indicator to the modal
    modal.appendChild(pointsIndicator);
    
    scoreDisplay.textContent = score;
    if (cell) {
        cell.classList.add('answered');
    }
    
    // Show the close button after answering
    closeModal.style.display = 'block';
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        // Reset the close button
        closeModal.style.display = 'none';
        // Remove the points indicator when closing the modal
        pointsIndicator.remove();
    });
}

// Initialize the game when the page loads
window.onload = initializeBoard;

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('questionModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}