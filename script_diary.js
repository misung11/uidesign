document.addEventListener('DOMContentLoaded', (event) => {
    loadDiaries();
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

    
    diaryText.addEventListener('click', function() {
        document.getElementById('entryDate').value = diaryEntry.date;
        document.getElementById('entryTitle').value = diaryEntry.title;
        document.querySelector('#diaryEntry textarea').value = diaryEntry.content;
    });
}

