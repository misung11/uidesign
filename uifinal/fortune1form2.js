document.addEventListener('DOMContentLoaded', () => {
    const fortuneCookie = document.getElementById('fortune-cookie');
    let clickCount = 0;

    fortuneCookie.addEventListener('click', () => {
        clickCount++;
        if (clickCount <= 3) {
            showBrokenPieces(clickCount);
        }
        if (clickCount === 3) {
            window.location.href = 'fortune2.html';
        }
    });

    function showBrokenPieces(count) {
        const cookieRect = fortuneCookie.getBoundingClientRect();
        const cookieCenterX = cookieRect.left + cookieRect.width / 2;
        const cookieCenterY = cookieRect.top + cookieRect.height / 2;
        
        for (let i = 0; i < 5; i++) {
            const piece = document.createElement('img');
            piece.src = `broken_piece_${count}.png`;
            piece.className = 'broken-piece';
            piece.style.left = `${cookieCenterX}px`;
            piece.style.top = `${cookieCenterY}px`;
            piece.style.transform = `rotate(${Math.random() * 360}deg)`;
            document.body.appendChild(piece);

            piece.style.display = 'block';
            animatePiece(piece);
        }

        fortuneCookie.classList.add('shake');
        setTimeout(() => {
            fortuneCookie.classList.remove('shake');
        }, 1500);
    }

    function animatePiece(piece) {
        const startX = parseInt(piece.style.left, 10);
        const startY = parseInt(piece.style.top, 10);
        const velocityX = (Math.random() - 0.5) * 10;
        const velocityY = Math.random() * -20 - 10;
        const gravity = 0.5;
        let posX = startX;
        let posY = startY;
        let velY = velocityY;

        function update() {
            posX += velocityX;
            posY += velY;
            velY += gravity;

            piece.style.left = `${posX}px`;
            piece.style.top = `${posY}px`;

            if (posY < window.innerHeight) {
                requestAnimationFrame(update);
            } else {
                piece.remove();
            }
        }

        update();
    }
});

