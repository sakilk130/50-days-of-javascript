let notes = JSON.parse(localStorage.getItem('notes')) ?? [];

const titleElement = document.querySelector('#title');
const descriptionElement = document.querySelector('#description');
const submitButton = document.querySelector('#submit');
const notesContainer = document.querySelector('.notes-container');
const deleteAllButton = document.querySelector('.delete-btn');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.dataset.role === 'add') {
    const title = titleElement.value;
    const description = descriptionElement.value;
    const note = {
      title,
      description,
    };
    if (!title || !description) return alert('Please fill in all fields');
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    titleElement.value = '';
    descriptionElement.value = '';
    renderNotes();
  }
});

function renderNotes() {
  notesContainer.innerHTML = '';
  notes.forEach((note, index) => {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.setAttribute('data-index', index);
    noteElement.innerHTML = `
            <p>Note ${index + 1}</p>
            <h3>${note.title}</h3>
            <p>${note.description}</p>
            <div class="note-footer">
                <button class="delete-btn" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
                <button class="edit-btn"  id="${index}" onclick="editNote(this.id)">Edit Note</button>
            </div>
        `;

    notesContainer.appendChild(noteElement);
  });
}

function deleteNote(index) {
  const confirmDelete = confirm('Are you sure you want to delete this note?');
  if (!confirmDelete) return;
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes();
}

function editNote(index) {
  submitButton.dataset.role = 'update';
  const note = notes[index];
  titleElement.value = note.title;
  descriptionElement.value = note.description;
  submitButton.innerHTML = 'Update Note';

  submitButton.addEventListener('click', (e) => {
    if (e.target.dataset.role === 'update') {
      const title = titleElement.value;
      const description = descriptionElement.value;
      const note = {
        title,
        description,
      };
      notes[index] = note;
      localStorage.setItem('notes', JSON.stringify(notes));
      titleElement.value = '';
      descriptionElement.value = '';
      renderNotes();
      submitButton.dataset.role = 'add';
      submitButton.innerHTML = 'Add Note';
    }
  });
}

deleteAllButton.addEventListener('click', () => {
  const confirmDelete = confirm('Are you sure you want to delete all notes?');
  if (!confirmDelete) return;
  localStorage.clear();
  notes = [];
  renderNotes();
});

renderNotes();
