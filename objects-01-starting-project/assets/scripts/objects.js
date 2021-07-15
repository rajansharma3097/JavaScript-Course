const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const movies = [];

const renderMovies = (filter = "") => {
    const movieList = document.getElementById("movie-list");
    if (movies.length === 0) {
        movieList.classList.remove("visible");
    } else {
        movieList.classList.add("visible");
    }
    movieList.innerHTML = "";

    const filteredMovies = !filter
        ? movies
        : movies.filter((movie) => movie.info.title.includes(filter));

    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement("li");
        const { info } = movie;
        let { getformattedTitle } = movie;
        // getformattedTitle = getformattedTitle.bind(movie);
        let text = getformattedTitle.call(movie) + " - ";
        for (const key in info) {
            if (key != "title" && key != "_title") {
                text = text + `${key}: ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};

const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraVaue = document.getElementById("extra-value").value;

    if (
        // title.trim() === "" ||
        extraName.trim() === "" ||
        extraVaue.trim() === ""
    ) {
        return;
    }

    const newMovie = {
        info: {
            set title(val) {
                if (val === '') {
                    this._title = "DEFAULT";
                    return;
                }
                this._title = val;
            },
            get title() {
                return this._title;
            },
            [extraName]: extraVaue,
        },
        id: Math.random().toString(),
        getformattedTitle() {
            return this.info.title.toUpperCase();
        }
    };

    movies.info.title = title;

    movies.push(newMovie);
    console.log(movies);
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById("filter-title").value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
