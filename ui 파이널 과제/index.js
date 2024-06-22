document.addEventListener('DOMContentLoaded', function() {
    var loginBtn = document.getElementById('loginBtn');
    var popup = document.getElementById('loginPopup');
    var closeBtn = document.querySelector('.popup-content .close');

    loginBtn.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    // Image hover effect
    var images = document.querySelectorAll('.box');
    images.forEach(function(image) {
        image.addEventListener('mouseover', function() {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease';
        });
        image.addEventListener('mouseout', function() {
            image.style.transform = 'scale(1)';
        });
        image.addEventListener('click', function() {
            image.classList.add('shake');
            setTimeout(function() {
                image.classList.remove('shake');
            }, 500);
        });
    });
});

