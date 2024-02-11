const elFilmList = document.querySelector(".js-film-list");
const elFilmTemplate = document.querySelector(".js-film-template").content;
const itemFragment = new DocumentFragment();

function renderFilm(arr, node ){
  for (film of arr) {
    const itemFilm = elFilmTemplate.cloneNode(true);
    itemFilm.querySelector(".item-pic").src = film.poster;
    itemFilm.querySelector(".item-pic").alt = film.title;
    itemFilm.querySelector(".js-film-title").textContent = film.title;
    itemFilm.querySelector(".desc").textContent = film.overview;
    itemFilm.querySelector(".genre-item").textContent = film.genres.join(", ");

    itemFragment.appendChild(itemFilm);
  }
  node.appendChild(itemFragment);
}
renderFilm(films, elFilmList);
