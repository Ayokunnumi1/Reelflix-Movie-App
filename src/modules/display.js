
import { fetchShows, fetchShowsDetails } from './fetchShows.js';
import { fetchComment, postComment } from './fetchComment.js';
const popUpModal = document.querySelector('.popUp-modal');
const movieContainer = document.querySelector('.container-cards');
const url = 'https://api.tvmaze.com/shows';
const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TmorUv6CAxzfjMnV7ubN';
const displayPopUp = async (buttonId) => {
  try {
    const showsPopDetails = await fetchShowsDetails(url, buttonId);
    // console.log(showsPopDetails);
     const comments = await fetchComment(commentUrl, buttonId);
    // const commentLength = comments.length;
    const elements = comments.map((comment) => {
      const li = `<li class="p-class">
                <span>${comment.creation_date}</span>
                <span>${comment.username}</span>
                <span>${comment.comment}</span>
            </li>`;
      return li;
    });
    const showPopObject = {
      id: showsPopDetails.id,
      title: showsPopDetails.name,
      image: showsPopDetails.image.medium,
      description: showsPopDetails.summary,
      genres: showsPopDetails.genres,
      language: showsPopDetails.language,
      rating: showsPopDetails.rating.average,
    };
    // console.log(showPopObject);
    const popUpElement = `

    <button class="close-button"><i class="fa fa-close"></i></button>

    <h3 class="m-title">${showPopObject.title}</h3>

        <div class="imgdes">
        <img src="${showPopObject.image}" alt="" class="popUp-img">
        <p  class="para">${showPopObject.description}</p>
        </div>

        <div class="modal-content">
           
            <div class="descriptions">
            <p>${showPopObject.genres}</p>
            <p>${showPopObject.language}</p>
            <p>${showPopObject.rating}</p>
             </div>
       </div>
                <div class="commentcontainer">
                
            <div class="comment-container">
            <h2 class="popUp-h2-comment-title">Comments(2)</h2>
            <ul class="popUP-comment-content">
                ${elements.join('')}
            </ul>
        </div>
        </div>
              
      
        <form action="" class="comment-form">
            <input type="text" name="text" id="input-name" required placeholder="Your name">
            <textarea name="text" id="comment-text" cols="30" rows="10" required placeholder="Add a comment" ></textarea>
            <button type="submit" id="${showPopObject.id}" class="submit-button">Submit</button>
        </form>

    `;

    popUpModal.innerHTML = popUpElement;
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      popUpModal.style.display = 'none';
    });
    const submitButton = document.querySelector('.submit-button');
    const commentForm = document.querySelector('.comment-form');
    submitButton.addEventListener('click', async (e) => {
      e.preventDefault();
      const submitButtonId = e.target.id;
      const inputName = commentForm.querySelector('#input-name');
      const commentText = commentForm.querySelector('#comment-text');
    //  eslint-disable-next-line camelcase
      const item_id = submitButtonId;
      const username = inputName.value;
      const comment = commentText.value;
      const userInfo = { item_id, username, comment };
      try {
        const response = await postComment(commentUrl, userInfo);
        if (response === 'Created') {
          displayPopUp(submitButtonId);
          inputName.value = '';
          commentText.value = '';
        }
      } catch (error) {
        return error;
      }
      return userInfo;
    });
    return showPopObject;
  } catch (error) {
    return error;
  }
};
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
    const createShowElement = filteredShowObject.map((filterShow) => {
      const showElement = `<div class="movie-content-container">
                    <div class="movie-thumbnail">
                        <img src="${filterShow.image}" alt="" class="movie-shows" id="${filterShow.id}">
                        <div class="overlay"> <i class="fa fa-play"></i></div>
                    </div>
                    <div class="movie-content">
                        <h3 class="movie-title">${filterShow.title} </h3>
                        <div class="movie-comment">
                        <i class="fa fa-heart" id="heart-icon"></i>
                        <button class="comment-button" data-index="${filterShow.id}">Comment</button>
                        <button class="comment-button1">  <i class="fa fa-comment" data-index1="${filterShow.id}"></i></button>
                    </div>
                    </div>

                </div>`;
      return showElement;
    }).join('');


    const popupPosition = (button, popUpModal, e) => {
            const commentClick = button.getBoundingClientRect();
      
            const left = e.clientX - commentClick.left;
            const top = e.clientY - commentClick.top;
      
            popUpModal.style.left = `${left}px`;
            popUpModal.style.top = `${top}px`;
          };

          

    movieContainer.insertAdjacentHTML('beforeend', createShowElement);
    const commentButton = document.querySelectorAll('.comment-button');
    commentButton.forEach((button) => {
      button.addEventListener('click', (e) => {
        const buttonId = parseInt(e.target.dataset.index, 10);
        displayPopUp(buttonId);
        popupPosition(button, popUpModal, e);

        popUpModal.style.display = 'flex';
      });
    });
    const commentButton1 = document.querySelectorAll('.comment-button1');
    commentButton1.forEach((button) => {
      button.addEventListener('click', (e) => {
        const buttonId = parseInt(e.target.dataset.index1, 10);
        displayPopUp(buttonId);

        popupPosition(button, popUpModal, e);

        popUpModal.style.display = 'flex';
      });
    });


  const  toggleHeartColor=  (event) => {
      const heartIcon = event.currentTarget; 
      const currentColor = window.getComputedStyle(heartIcon).color;
    
      if (currentColor !== 'rgb(255, 255, 255)') {
        
        heartIcon.style.color = 'white';
      } else {
        
        heartIcon.style.color = 'red';
      }
    }
    
    document.querySelectorAll('.fa-heart').forEach((heartIcon) => {
      heartIcon.addEventListener('click', toggleHeartColor);
    });
    return createShowElement;
  } catch (error) {
    return error;
  }

  
};

