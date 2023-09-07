import { fetchShows, fetchShowsDetails } from './fetchShows.js';
// import fetchComment from './fetchComment.js';

const popUpModal = document.querySelector('.popUp-modal');

const movieContainer = document.querySelector('.container-cards');
const url = 'https://api.tvmaze.com/shows';
// const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XLs816Sw5Ws6tzau8VMq/comments?item_id=item1';
// eslint-disable-next-line import/prefer-default-export

const displayPopUp = async (buttonId) => {
  try {
    const showsPopDetails = await fetchShowsDetails(url, buttonId);
    // console.log(showsPopDetails);
    const showPopObject = {
      title: showsPopDetails.name,
      image: showsPopDetails.image.medium,
      description: showsPopDetails.summary,
      genres: showsPopDetails.genres,
      language: showsPopDetails.language,
      rating: showsPopDetails.rating.average,
    };
    const popUpElement = `
          <div>
                    <img src="${showPopObject.image}" alt="" class="popUp-img">
                </div>
                <h3>${showPopObject.title}</h3>
                <p>${showPopObject.description}</p>;
                <p>${showPopObject.genres}</p>;
                <p>${showPopObject.language}</p>;
                <p>${showPopObject.rating}</p>
                <div class="close-button">&#10006;</div>
                 <div class="comment-container"></div>
                <form action="" class="comment-form">
                    <input type="text" name="text" id="input-text">
                    <textarea name="text" id="comment-text" cols="30" rows="10"></textarea>
                    <button type="submit" class="submit-button">Submit</button>
                </form>`;

    popUpModal.innerHTML = popUpElement;
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      popUpModal.style.display = 'none';
    });

    // console.log(popUpElement);
    return showPopObject;
  } catch (error) {
    return error;
  }
};

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
                        <h3 class="movie-title">${filterShow.title} </h3>
                        <div class="movie-comment">
                        <i class="fa fa-heart"></i> 
                        <button class="comment-button" data-index="${filterShow.id}">Comment</button>
                        <button class="comment-button1">  <i class="fa fa-comment" data-index1="${filterShow.id}"></i></button>
                    </div>
                    </div>
                  
                </div>`;
      return showElement;
    }).join('');
    movieContainer.insertAdjacentHTML('beforeend', createShowElement);
    const commentButton = document.querySelectorAll('.comment-button');
    // console.log(commentButton);
    commentButton.forEach((button) => {
      button.addEventListener('click', (e) => {
        // console.log('clicked');
        const buttonId = parseInt(e.target.dataset.index, 10);
        // console.log(buttonId);
        displayPopUp(buttonId);
        popUpModal.style.display = 'flex';
      });
    });
    const commentButton1 = document.querySelectorAll('.comment-button1');
    // console.log(commentButton1);
    commentButton1.forEach((button) => {
      button.addEventListener('click', (e) => {
        // console.log('clicked');
        const buttonId = parseInt(e.target.dataset.index1, 10);
        // console.log(buttonId);
        displayPopUp(buttonId);
        popUpModal.style.display = 'flex';
      });
    });

    return createShowElement;
  } catch (error) {
    return error;
  }
};