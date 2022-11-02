const game= document.getElementById('game')
const score = document.getElementById('score')

const gameCategories = [
    {
        genre: 'ECON',
        questions: [
            {
                question: 'What is profit?',
                answer: ['The reward an entrepreneur (business owner) earn for taking the RISK of producing.', 
                'The loan an entrepreneur (business owner) taking'],
                correct: 'The reward an entrepreneur (business owner) earn for taking the RISK of producing.',
                level: 'hard'
            }
        ]
    },
    {
        genre: 'History',
        questions: [
            {
                question: 'He might have said, "Let there be light bulbs.',
                answer: [' Thomas Edison', 'Tommy Shelby'],
                correct: 'Thomas Edison',
                level: 'easy'
            }
        ]
    },
    {
        genre: 'English',
        questions: [
            {
                question: 'What is the narrator?',
                answer: ['The main character in a novel.', ' This is the person in a novel who tells the story from a third-person perspective.'],
                correct: 'This is the person in a novel who tells the story from a third-person perspective.',
                level: 'medium'
            }
        ]
    },
    {
        genre: 'Science',
        questions: [
            {
                question: 'What is 0 degrees Celsius (32 degree Fahrenheit)?',
                answer: ['This is the boiling point of water.', 'This is the freezing point of water.'],
                correct: 'This is the freezing point of water.',
                level: 'hard'
            }
        ]
    },
    {
        genre: 'Geography',
        questions: [        {
            question: 'What is the Amazon?',
            answer: ['This river is the longest in the world..', 'This is the only country that is also a continent.'],
            correct: 'This river is the longest in the world.',
            level: 'medium'
        }]
    },
    {
        genre: 'Random',
        questions: [        {
            question: 'What number is the Roman numeral XVI?',
            answer: ['61.', '16'],
            correct: '16.',
            level: 'easy'
        }]
    },
]