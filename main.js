const movieList = document.getElementById("movieList");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const toggleMode = document.getElementById("toggleMode");

function renderMovies(data) {
  movieList.innerHTML = "";
  data.forEach(movie => {
    const card = document.createElement("a");
    card.href = `download.html?id=${movie.id}`;
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    `;
    movieList.appendChild(card);
  });
}

function filterMovies() {
  const searchText = searchInput.value.toLowerCase();
  const selectedGenre = genreFilter.value;

  const filtered = movies.filter(m => 
    m.title.toLowerCase().includes(searchText) &&
    (selectedGenre === "" || m.genre === selectedGenre)
  );

  renderMovies(filtered);
}

searchInput.addEventListener("input", filterMovies);
genreFilter.addEventListener("change", filterMovies);

toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleMode.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
});

renderMovies(movies);
