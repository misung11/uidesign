document.addEventListener('DOMContentLoaded', (event) => {
    loadDiaries();
    setDefaultDiary();
});

document.getElementById('uploadBtn').addEventListener('click', function() {
    const entryDate = document.getElementById('entryDate').value;
    const entryTitle = document.getElementById('entryTitle').value;
    const entryContent = document.querySelector('#diaryEntry textarea').value;

    if (entryDate && entryTitle && entryContent) {
        const diaryEntry = {
            date: entryDate,
            title: entryTitle,
            content: entryContent
        };

        saveDiary(diaryEntry);
        addDiaryToList(diaryEntry);

        // Clear the input fields
        document.getElementById('entryDate').value = '';
        document.getElementById('entryTitle').value = '';
        document.querySelector('#diaryEntry textarea').value = '';
    } else {
        alert('Please fill out all fields before uploading.');
    }
});

document.getElementById('searchBar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const diaryItems = document.querySelectorAll('.diaryItem');

    diaryItems.forEach(item => {
        const date = item.querySelector('div strong').innerText.toLowerCase();
        const title = item.querySelector('div').innerText.toLowerCase();
        if (date.includes(searchTerm) || title.includes(searchTerm)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

function saveDiary(diaryEntry) {
    let diaries = JSON.parse(localStorage.getItem('diaries')) || [];
    diaries.push(diaryEntry);
    localStorage.setItem('diaries', JSON.stringify(diaries));
}

function loadDiaries() {
    const diaries = JSON.parse(localStorage.getItem('diaries')) || [];
    diaries.forEach(diaryEntry => {
        addDiaryToList(diaryEntry);
    });
}

function addDiaryToList(diaryEntry) {
    const diaryList = document.getElementById('diaryList');
    const diaryItem = document.createElement('div');
    diaryItem.classList.add('diaryItem');

    const diaryText = document.createElement('div');
    diaryText.innerHTML = `<strong>${diaryEntry.date}</strong>: ${diaryEntry.title}`;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to delete this entry?')) {
            const diaries = JSON.parse(localStorage.getItem('diaries')) || [];
            const updatedDiaries = diaries.filter(entry => entry.date !== diaryEntry.date || entry.title !== diaryEntry.title);
            localStorage.setItem('diaries', JSON.stringify(updatedDiaries));
            diaryItem.remove();
        }
    });

    diaryItem.appendChild(diaryText);
    diaryItem.appendChild(deleteBtn);
    diaryList.appendChild(diaryItem);

    // Add click event to display the diary entry
    diaryText.addEventListener('click', function() {
        document.getElementById('entryDate').value = diaryEntry.date;
        document.getElementById('entryTitle').value = diaryEntry.title;
        document.querySelector('#diaryEntry textarea').value = diaryEntry.content;
    });
}

function setDefaultDiary() {
    const defaultDiary = {
        date: "2023-04-13",
        title: "Appreciate <the eyes that respond>",
        content: `I realized that I could depict the world with pure forms and pure colors, and I realized the value of abstraction.\n\nViktor Bajarely is a Hungarian artist who became a master of op art after participating in an exhibition called The Reactive Eye. Op art is abstract art that plays with visual illusions using geometric shapes or color tensions, called "art of the retina" or "perceptual abstraction," and developed from the experimental tradition of the German Bauhaus and Russian structuralism. The Seoul Arts Center held the exhibition "The Reactive Eye" until April 21 to celebrate the 34th anniversary of the establishment of diplomatic relations between Korea and Hungary, and I saw it on April 13.\n\nIn fact, since we live in an era where images can be easily created with computers, I wasn't surprised when I entered the exhibition and saw the works. In particular, op art is a genre that has become so commonplace that I had to make it as a performance assessment in high school art class, and I wondered if I could write a good one-page review of the exhibition. But after seeing Bazzarelli's precise compositional planning and the process of creating his work, I changed my mind. He was creating his works through meticulous planning in an era when computers were not available. Even as a modern viewer, I'm amazed at the machine-made detail, but how fresh must it have felt to people back then? If I were living in that era, I think I would naturally be drawn into the visual illusion that the work creates.\n\nI think that detail and visual


