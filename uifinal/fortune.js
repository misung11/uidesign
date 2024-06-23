console.clear();

let particles = [];
const colors = ["#FF5555", "#4200FF", "#61FF39", "#AE81B2", "#E373FF"]; // 더 비비드한 색으로 변경

function pop() {
    for (let i = 0; i < 150; i++) {
        const p = document.createElement('div');
        p.classList.add('particule');
        p.x = window.innerWidth * 0.5;
        p.y = window.innerHeight + (Math.random() * window.innerHeight * 0.3);
        p.vel = {
            x: (Math.random() - 0.5) * 10,
            y: Math.random() * -20 - 15
        };
        p.mass = Math.random() * 0.2 + 0.8;
        particles.push(p);
        p.style.transform = `translate(${p.x}px, ${p.y}px)`;
        const width = Math.random() * 15 + 5;
        const height = Math.random() * 15 + 5;
        p.style.width = width + 'px';
        p.style.height = height + 'px';
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(p);
    }
}

function render() {
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.style.transform = `translate3d(${p.x}px, ${p.y}px, 1px)`;

        p.x += p.vel.x;
        p.y += p.vel.y;

        p.vel.y += (0.5 * p.mass);
        if (p.y > (window.innerHeight * 2)) {
            p.remove();
            particles.splice(i, 1);
        }
    }
    requestAnimationFrame(render);
}

function showFortune() {
    const fortunes = [
        "Dance like nobody's watching.",
        "There's an alien next to you...",
        "Find the rubber duck.",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...","There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "There's an alien next to you...",
        "Talk to your plants.",
        "You have a secret talent.",
        "Check the fridge.",
        "Today is opposite day.",
        "Wear your lucky socks.",
        "Sing in the shower.",
        "Smile at strangers.",
        "A cat will follow you.",
        "You will eat cake.",
        "Beware of purple cows.",
        "Jump three times.",
        "Pretend to be a pirate.",
        "Hug a tree.",
        "Whistle a happy tune.",
        "Look for hidden messages.",
        "You will find a penny.",
        "Ask a silly question."
    ];

    const fortuneTextElement = document.getElementById('fortune-text');
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    fortuneTextElement.textContent = randomFortune;

    
    localStorage.setItem('fortune', randomFortune);

    pop();
    window.setTimeout(render, 700);
}

document.addEventListener('DOMContentLoaded', showFortune);

