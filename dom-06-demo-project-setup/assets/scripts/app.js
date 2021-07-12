const startAddMovieBtn = document.getElementById("add-movie");
const addMovieModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieBtn = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
};

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'display';
    } else {
        entryTextSection.style.display = 'none';
    }
}

const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove('visible');
}

const deleteMovie = movieId => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    closeMovieDeletionModal();
    updateUI();
    // listRoot.removeChild(listRoot.children[movieIndex]);
}

const deleteMovieHandler = movieId => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();
    const cancelDeletionBtn = deleteMovieModal.querySelector(".btn--passive");
    let confirmDeletionBtn = deleteMovieModal.querySelector(".btn--danger");

    confirmDeletionBtn.replaceWith(confirmDeletionBtn.cloneNode(true));

    confirmDeletionBtn = deleteMovieModal.querySelector(".btn--danger");

    // confirmDeletionBtn.removeEventListener('click', deleteMovie.bind(null, movieId)); // will not work :()
    cancelDeletionBtn.removeEventListener('click', closeMovieDeletionModal);

    cancelDeletionBtn.addEventListener('click', closeMovieDeletionModal);
    confirmDeletionBtn.addEventListener('click', deleteMovie.bind(null, movieId));
}

const renderNewMovieEl = (id, title, imgUrl, rating) => {
    const newMovieEl = document.createElement('li');
    newMovieEl.className = 'movie-element';
    newMovieEl.innerHTML = `
        <div class="movie-element__image">
            <img src="${imgUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;

    newMovieEl.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieEl);
}



const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
}

const showMovieModal = () => {
    addMovieModal.classList.add("visible");
    toggleBackdrop();
};

const clearMovieInputs = () => {
    for (const usrInput of userInputs) {
        usrInput.value = '';
    }
}

const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInputs();
};

const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearMovieInputs();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imgUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;
    if (
        titleValue.trim() === "" ||
        imgUrlValue.trim() === "" ||
        ratingValue.trim() === "" ||
        ratingValue < 1 ||
        ratingValue > 5
    ) {
        alert('Please enter valid values (rating between 1 and 5).');
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imgUrlValue,
        rating: ratingValue
    }
    movies.push(newMovie);
    closeMovieModal();
    toggleBackdrop();
    clearMovieInputs();
    renderNewMovieEl(newMovie.id, titleValue, imgUrlValue, ratingValue);
    updateUI();
};

startAddMovieBtn.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener("click", addMovieHandler);
