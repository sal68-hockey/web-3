window.addEventListener('load', () => {
  const intro = document.getElementById('intro');

  intro.addEventListener('animationend', () => {
    intro.classList.add('hidden');
    document.body.style.overflow = 'auto';

    // Show sticky note after intro
    const note = document.createElement('div');
    note.innerHTML = "<strong>Tip:</strong> Explore Student Life and Alumni sections!";
    note.className = "sticky-note";
    document.body.appendChild(note);

    // Remove note on click
    note.addEventListener('click', () => {
      note.remove();
    });
  });

  document.body.style.overflow = 'hidden';
});
window.addEventListener('load', () => {
  const intro = document.getElementById('intro');

  intro.addEventListener('animationend', () => {
    intro.classList.add('hidden');
    document.body.style.overflow = 'auto';

    const note = document.createElement('div');
    note.innerHTML = "<strong>Tip:</strong> Explore Student Life and Alumni sections!";
    note.className = "sticky-note";
    document.body.appendChild(note);

    note.addEventListener('click', () => {
      note.remove();
    });
  });

  document.body.style.overflow = 'hidden';
});
