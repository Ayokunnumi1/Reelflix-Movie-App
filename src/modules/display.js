import fetchShows from './fetchShows.js';

const movieContainer = document.querySelector('.container-cards');
const url = 'https://api.tvmaze.com/shows';
// eslint-disable-next-line import/prefer-default-export
export const displayShows = async () => {
  movieContainer.innerHTML = '';
  try {
    const shows = await fetchShows(url);
    // eslint-disable-next-line max-len
    const filteredShowObject = shows.map((show) => {
      const showObj = {
        id: show.id,
        image: show.image.medium,
        title: show.name,
      };
      return showObj;
    });
    // console.log(filteredShowObject);
    const createShowElement = filteredShowObject.map((filterShow) => {
      const showElement = `<div class="movie-content-container">
    
                    <div class="movie-thumbnail">
                        <img src="${filterShow.image}" alt="" class="movie-shows" id="${filterShow.id}">
                        <div class="overlay"> <i class="fa fa-play"></i></div>
                    </div>
                    <div class="movie-content">
                        <h3 class="movie-title">${filterShow.title} <i class="fa fa-heart"></i> </h3>
                        <button class="comment-button">Comment</button>
                    </div>
                  
                </div>`;
      return showElement;
    }).join('');
    movieContainer.insertAdjacentHTML('beforeend', createShowElement);
    return createShowElement;
  } catch (error) {
    return error;
  }
};