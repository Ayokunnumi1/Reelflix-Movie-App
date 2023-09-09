import { fetchShows } from './fetchShows.js';
import { getLikes, addLikes } from './fetchLikes.js';
import updateLikesCount from './updateLikes.js';
import calculateTotalMovies from './TotalMovies.js';
import addEventToCommentButton from './popUp.js';

const url = 'https://api.tvmaze.com/shows';
const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TmorUv6CAxzfjMnV7ubN/likes';

// Function to process show data by merging it with likes
const processShowData = (movies, likes) => movies.map((show) => {
  const itemlike = likes.find((like) => like.item_id === show.id);
  const likesCount = itemlike?.likes || 0;

  return {
    id: show.id,
    image: show.image.medium,
    title: show.name,
    likes: likesCount,
  };
});

// Function to generate HTML elements for shows
const movieElements = (show) => {
  const movieContentContainer = document.createElement('div');
  movieContentContainer.classList.add('movie-content-container');
  movieContentContainer.innerHTML = `      
        <div class="movie-thumbnail">
          <img src="${show.image}" alt="" class="movie-shows" id="${show.id}">
          <div class="overlay"> <i class="fa fa-play"></i></div>
        </div>
        <div class="movie-content">
          <h3 class="movie-title">${show.title} </h3>
          <div class="movie-comment">
            <div class="show-likes">
              <i class="fa fa-heart" data-id="${show.id}"></i>
              <p class="show-likes-count">
                <span class="likes-count liked" id="${show.id}"><span>${show.likes}</span> like </span>
              </p>
            </div>
            <button class="comment-button" data-index="${show.id}">Comment</button>
            <button class="comment-button1">  <i class="fa fa-comment" data-index1="${show.id}"></i></button>
          </div>
        </div>
    `;
  return movieContentContainer;
};

const renderMovies = (movies) => {
  const movieContainer = document.querySelector('.container-cards');
  movieContainer.innerHTML = '';
  movies.forEach((movie) => {
    const movieElement = movieElements(movie);
    movieContainer.appendChild(movieElement);
  });
};

// Function to handle like button click
const handleLikeButtonClick = async (heartbutton) => {
  const heartbuttonId = parseInt(heartbutton.dataset.id, 10);
  const response = await addLikes(likesUrl, heartbuttonId);
  if (response.status === 201) {
    updateLikesCount(heartbuttonId);
  }
};

const addEventToLikeButtons = () => {
  const likeButtons = document.querySelectorAll('.fa-heart');
  likeButtons.forEach((heartbutton) => {
    heartbutton.addEventListener('click', (e) => {
      handleLikeButtonClick(e.currentTarget);
    });
  });
};

// Initialize the application
const initializeApp = async () => {
  const movies = await fetchShows(url);
  const likes = await getLikes(likesUrl);
  const filteredShowObject = processShowData(movies, likes);
  const movieLength = calculateTotalMovies(filteredShowObject);
  const totalMovies = document.querySelector('.total-movies');
  totalMovies.textContent = ` All movies (${movieLength})`;
  renderMovies(filteredShowObject);
  addEventToLikeButtons();
  addEventToCommentButton();
};
export default initializeApp;