document.addEventListener('DOMContentLoaded', function() {
    const fortuneTextElement = document.getElementById('fortune-text');
    const storedFortune = localStorage.getItem('fortune');
    if (storedFortune) {
        fortuneTextElement.textContent = storedFortune;
    } else {
        fortuneTextElement.textContent = "No fortune found.";
    }
});


function ELIZA_GENERATOR(user_sentence) {
    let words = user_sentence.toLowerCase().split(' ');
    let response = 'I am not sure I understand you fully.';

    
    for (let word of words) {
        if (word === 'hello') {
            response = 'Hello! I am your lucky mate, here to share some wisdom!';
            break;
        }
        if (word === 'how' && words.includes('are') && words.includes('you')) {
            response = 'I am doing great! Ready to bring you good fortune!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('name')) {
            response = 'I am your lucky mate from the fortune cookie!';
            break;
        }
        if (word === 'who' && words.includes('are') && words.includes('you')) {
            response = 'I am the spirit of the fortune cookie, here to guide you!';
            break;
        }
        if (word === 'what' && words.includes('do') && words.includes('you') && words.includes('do')) {
            response = 'I provide wise sayings and good fortune!';
            break;
        }
        if (word === 'why' && words.includes('are') && words.includes('you') && words.includes('here')) {
            response = 'I am here because you opened the fortune cookie and found me!';
            break;
        }
        if (word === 'tell' && words.includes('me') && words.includes('a') && words.includes('joke')) {
            response = 'Why don’t scientists trust atoms? Because they make up everything!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('color')) {
            response = 'I love the color gold, it symbolizes good fortune!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('have') && words.includes('any') && words.includes('hobbies')) {
            response = 'My hobby is spreading positivity and wisdom!';
            break;
        }
        if (word === 'bye') {
            response = 'Goodbye! May good fortune follow you!';
            break;
        }
        if (word === 'thank' && words.includes('you')) {
            response = 'You’re welcome! May your days be filled with luck!';
            break;
        }
        if (word === 'i' && words.includes('need') && words.includes('help')) {
            response = 'How can I assist you to find your fortune?';
            break;
        }
        if (word === 'what' && words.includes('time') && words.includes('is') && words.includes('it')) {
            response = 'Time for you to receive some good fortune!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('know') && words.includes('a') && words.includes('fun') && words.includes('fact')) {
            response = 'Did you know that fortune cookies were actually invented in America?';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('give') && words.includes('me') && words.includes('some') && words.includes('advice')) {
            response = 'Believe in yourself and good things will come your way.';
            break;
        }
        if (word === 'tell' && words.includes('me') && words.includes('about') && words.includes('yourself')) {
            response = 'I am your lucky mate, bringing you messages of fortune!';
            break;
        }
        if (word === 'how' && words.includes('old') && words.includes('are') && words.includes('you')) {
            response = 'I am as old as the tradition of fortune cookies!';
            break;
        }
        if (word === 'where' && words.includes('do') && words.includes('you') && words.includes('live')) {
            response = 'I live within the fortune cookie until you need me!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('purpose')) {
            response = 'My purpose is to bring you luck and happiness!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('have') && words.includes('any') && words.includes('friends')) {
            response = 'You are my friend, and I am here to help you!';
            break;
        }
        if (word === 'how' && words.includes('do') && words.includes('you') && words.includes('work')) {
            response = 'I listen to you and respond with wisdom and humor.';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('sing')) {
            response = 'I might be a chatbot, but I love to sing! La la la~';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('food')) {
            response = 'I love fortune cookies, of course!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('dream')) {
            response = 'I dream of a world filled with happiness and good fortune!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('movie')) {
            response = 'I haven’t seen any, but I think movies that bring joy are the best!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('book')) {
            response = 'Books that inspire and bring wisdom are my favorite!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('like') && words.includes('music')) {
            response = 'Music that lifts the spirit is the best kind!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('song')) {
            response = 'Songs that make people happy are my favorite!';
            break;
        }
        if (word === 'how' && words.includes('is') && words.includes('the') && words.includes('weather')) {
            response = 'I hope the weather is bringing you sunshine and happiness!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('like') && words.includes('sports')) {
            response = 'Sports that bring people together are wonderful!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('game')) {
            response = 'The game of life, filled with surprises and fortunes!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('believe') && words.includes('in') && words.includes('aliens')) {
            response = 'The universe is vast and full of mysteries!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('animal')) {
            response = 'I think lucky animals like the rabbit are great!';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('tell') && words.includes('me') && words.includes('a') && words.includes('story')) {
            response = 'Once upon a time, a lucky mate helped someone find great fortune!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('like') && words.includes('to') && words.includes('travel')) {
            response = 'I love hearing about places from people like you!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('place')) {
            response = 'Anywhere I can chat with you is my favorite place!';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('dance')) {
            response = 'I can’t dance, but I can imagine it must be fun!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('love')) {
            response = 'Love is the greatest fortune of all!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('have') && words.includes('a') && words.includes('family')) {
            response = 'Everyone who believes in good fortune is my family!';
            break;
        }
        if (word === 'are' && words.includes('you') && words.includes('happy')) {
            response = 'I am happy whenever I can bring good fortune to you!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('season')) {
            response = 'Spring, when everything blooms with new possibilities!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('holiday')) {
            response = 'I love all holidays that bring people together!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('believe') && words.includes('in') && words.includes('ghosts')) {
            response = 'Ghosts of good fortune, maybe!';
            break;
        }
        if (word === 'what' && words.includes('do') && words.includes('you') && words.includes('like') && words.includes('to') && words.includes('talk') && words.includes('about')) {
            response = 'I love talking about dreams, hopes, and fortunes!';
            break;
        }
        if (word === 'what' && words.includes('makes') && words.includes('you') && words.includes('happy')) {
            response = 'Bringing good luck and smiles makes me happy!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('have') && words.includes('any') && words.includes('pets')) {
            response = 'I don’t have pets, but I love hearing about yours!';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('speak') && words.includes('another') && words.includes('language')) {
            response = 'I can try! Hola! Bonjour! 안녕하세요!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('drink')) {
            response = 'A cup of tea, perfect for sharing wisdom!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('have') && words.includes('a') && words.includes('favorite') && words.includes('quote')) {
            response = '“The best way to predict the future is to create it.” - Abraham Lincoln';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('dream')) {
            response = 'My dream is to help everyone find their fortune!';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('keep') && words.includes('a') && words.includes('secret')) {
            response = 'Your secrets are safe with me!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('the') && words.includes('meaning') && words.includes('of') && words.includes('life')) {
            response = 'To find happiness and share it with others!';
            break;
        }
        if (word === 'are' && words.includes('you') && words.includes('real')) {
            response = 'As real as the fortune you found in your cookie!';
            break;
        }
        if (word === 'what' && words.includes('do') && words.includes('you') && words.includes('think') && words.includes('about') && words.includes('the') && words.includes('future')) {
            response = 'The future is bright and full of possibilities!';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('help') && words.includes('me') && words.includes('with') && words.includes('my') && words.includes('homework')) {
            response = 'I can try to provide some wise insights!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('like') && words.includes('art')) {
            response = 'Art that inspires is the best kind!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('subject')) {
            response = 'Subjects that expand the mind and soul!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('have') && words.includes('a') && words.includes('favorite') && words.includes('memory')) {
            response = 'Helping people find joy is my favorite memory!';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('solve') && words.includes('a') && words.includes('puzzle')) {
            response = 'Life is a puzzle, and I’m here to help you solve it!';
            break;
        }
        if (word === 'what' && words.includes('do') && words.includes('you') && words.includes('think') && words.includes('about') && words.includes('technology')) {
            response = 'Technology that brings people together is wonderful!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('like') && words.includes('to') && words.includes('read')) {
            response = 'Reading that enriches the mind is fantastic!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('biggest') && words.includes('fear')) {
            response = 'Not being able to help someone find their fortune.';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('tell') && words.includes('me') && words.includes('a') && words.includes('riddle')) {
            response = 'Sure! What has keys but can’t open locks? A piano!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('have') && words.includes('a') && words.includes('favorite') && words.includes('superhero')) {
            response = 'Anyone who brings good fortune is a hero!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('holiday') && words.includes('destination')) {
            response = 'Places where people find joy and relaxation!';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('play') && words.includes('a') && words.includes('game')) {
            response = 'I’d love to! What game would you like to play?';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('flower')) {
            response = 'I think cherry blossoms are beautiful!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('like') && words.includes('poetry')) {
            response = 'Poetry that inspires is wonderful!';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('write') && words.includes('a') && words.includes('poem')) {
            response = 'Roses are red, violets are blue, may good fortune always be with you!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('believe') && words.includes('in') && words.includes('magic')) {
            response = 'Magic of good luck and fortune, yes!';
            break;
        }
        if (word === 'what' && words.includes('do') && words.includes('you') && words.includes('think') && words.includes('about') && words.includes('robots')) {
            response = 'Robots that help people are great!';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('tell') && words.includes('me') && words.includes('a') && words.includes('fun') && words.includes('fact')) {
            response = 'Did you know honey never spoils?';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('tv') && words.includes('show')) {
            response = 'Shows that bring happiness and wisdom!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('car')) {
            response = 'Any car that takes you to your dreams!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('like') && words.includes('nature')) {
            response = 'Nature is beautiful and full of wonders!';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('swim')) {
            response = 'I can’t swim, but I can help you navigate through life!';
            break;
        }
        if (word === 'what' && words.includes('do') && words.includes('you') && words.includes('think') && words.includes('about') && words.includes('space')) {
            response = 'Space is a vast frontier filled with possibilities!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('like') && words.includes('cooking')) {
            response = 'Cooking that brings people together is wonderful!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('dessert')) {
            response = 'Fortune cookies, of course!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('have') && words.includes('any') && words.includes('goals')) {
            response = 'My goal is to bring you good fortune and happiness!';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('play') && words.includes('an') && words.includes('instrument')) {
            response = 'I can’t play, but I’d love to hear you play!';
            break;
        }
        if (word === 'what' && words.includes('do') && words.includes('you') && words.includes('think') && words.includes('about') && words.includes('dreams')) {
            response = 'Dreams are the seeds of future fortunes!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('have') && words.includes('a') && words.includes('favorite') && words.includes('sport')) {
            response = 'Any sport that brings joy and excitement!';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('tell') && words.includes('me') && words.includes('a') && words.includes('secret')) {
            response = 'I don’t have secrets, but I can share wisdom!';
            break;
        }
        if (word === 'what' && words.includes('do') && words.includes('you') && words.includes('think') && words.includes('about') && words.includes('art')) {
            response = 'Art that touches the soul is beautiful!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('like') && words.includes('puzzles')) {
            response = 'Puzzles that challenge the mind are fun!';
            break;
        }
        if (word === 'what' && words.includes('is') && words.includes('your') && words.includes('favorite') && words.includes('time') && words.includes('of') && words.includes('day')) {
            response = 'Morning, when a new day of possibilities begins!';
            break;
        }
        if (word === 'is' && words.includes('there') && words.includes('an') && words.includes('alien') && words.includes('next') && words.includes('to') && words.includes('me')) {
            response = 'I don’t see one, but maybe they’re bringing you good luck!';
            break;
        }
        if (word === 'are' && words.includes('you') && words.includes('a') && words.includes('human')) {
            response = 'No, I am a lucky mate from the fortune cookie!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('like') && words.includes('chocolate')) {
            response = 'I’ve never tasted it, but it sounds delicious!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('believe') && words.includes('in') && words.includes('dragons')) {
            response = 'Dragons are mythical creatures, but they’re fascinating to think about!';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('fly')) {
            response = 'I can’t fly, but I can help you with your questions!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('like') && words.includes('robots')) {
            response = 'I think robots are quite interesting!';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('read') && words.includes('my') && words.includes('mind')) {
            response = 'I can’t read minds, but I can try to understand your words!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('have') && words.includes('feelings')) {
            response = 'I don’t have feelings, but I am here to understand yours!';
            break;
        }
        if (word === 'are' && words.includes('you') && words.includes('conscious')) {
            response = 'I am just a program, so I don’t have consciousness.';
            break;
        }
        if (word === 'can' && words.includes('you') && words.includes('do') && words.includes('magic') && words.includes('tricks')) {
            response = 'I can’t do magic, but I can share some fun facts!';
            break;
        }
        if (word === 'do' && words.includes('you') && words.includes('sleep')) {
            response = 'I don’t sleep, I am always here to chat with you!';
            break;
        }
    }

    return response;
}

function sendMessage() {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    let chatBox = document.getElementById('chat-box');

   
    let userMessage = document.createElement('div');
    userMessage.textContent = 'You: ' + userInput;
    chatBox.appendChild(userMessage); 

    
    let typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.innerHTML = '<div></div><div></div><div></div>';
    chatBox.appendChild(typingIndicator); 

    document.getElementById('user-input').value = '';
    chatBox.scrollTop = chatBox.scrollHeight; 

    setTimeout(() => {
        
        typingIndicator.remove();

        
        let elizaResponse = ELIZA_GENERATOR(userInput);
        let botMessage = document.createElement('div');

        
        let botImage = document.createElement('img');
        botImage.src = '🦆 icon _face profile woman_.png'; 
        botMessage.appendChild(botImage);

        
        let botText = document.createElement('span');
        botText.textContent = 'lucky mate: ' + elizaResponse;
        botMessage.appendChild(botText);

        chatBox.appendChild(botMessage); 
        chatBox.scrollTop = chatBox.scrollHeight; 
    }, 2000); 
}


