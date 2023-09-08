import { fetchShows, fetchShowsDetails } from './fetchShows.js';
import { fetchComment, postComment } from './fetchComment.js';
import { addLikes, getLikes } from './fetchLikes.js';

const popUpModal = document.querySelector('.popUp-modal');
const movieContainer = document.querySelector('.container-cards');
const url = 'https://api.tvmaze.com/shows';
const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TmorUv6CAxzfjMnV7ubN';
const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TmorUv6CAxzfjMnV7ubN/likes';

const displayPopUp = async (buttonId) => {
  try {
    const showsPopDetails = await fetchShowsDetails(url, buttonId);
    // console.log(showsPopDetails);
    const comments = await fetchComment(commentUrl, buttonId);
    const commentLength = comments.length;
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

              <h2 class="popUp-h2-comment-title">Comments(2)</h2>
            <div class="comment-container">
          
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
    const popUpCountComment = document.querySelectorAll('.popUp-h2-comment-title');
    popUpCountComment.forEach((element) => {
      element.textContent = `Comments ${commentLength}`;
    });
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
// eslint-disable-next-line import/prefer-default-export
export const displayShows = async () => {
  movieContainer.innerHTML = '';
  try {
    const shows = await fetchShows(url);
    const res = await getLikes(likesUrl);
    // eslint-disable-next-line max-len
    const filteredShowObject = filterShowObject(shows, res);
    showMovies(filteredShowObject);

    } catch (error) {
    return error;
    }
    

}
  
    const filterShowObject = (movies, likes) => {
      return movies.map((show) => {
        const itemlike = likes.find((like) => like.item_id === show.id);
        
          return {
          id: show.id,
          image: show.image.medium,
          title: show.name,
          likes: itemlike.likes
        };
      });
    }

    const showMovies = (filteredShowObject) => {      


      filteredShowObject.map((filterShow) => {
      const showElement = `<div class="movie-content-container">
                    <div class="movie-thumbnail">
                        <img src="${filterShow.image}" alt="" class="movie-shows" id="${filterShow.id}">
                        <div class="overlay"> <i class="fa fa-play"></i></div>
                    </div>
                    <div class="movie-content">
                        <h3 class="movie-title">${filterShow.title} </h3>
                        <div class="movie-comment">
                        <div class="show-likes">
                        <i class="fa fa-heart" data-id="${filterShow.id}"></i>
                            <p class="show-likes-count">
                              <span class="likes-count liked" id=${filterShow.id}><span>${filterShow.likes}</span> like </span>
                          
                            </p>
              </div>
                       
                        <button class="comment-button" data-index="${filterShow.id}">Comment</button>
                        <button class="comment-button1">  <i class="fa fa-comment" data-index1="${filterShow.id}"></i></button>
                    </div>
                    </div>

                </div>`;
      return showElement;
    }).join('');
  }

    const popupPosition = (button, popUpModal, e) => {
      const commentClick = button.getBoundingClientRect();

      const left = e.clientX - commentClick.left;
      const top = e.clientY - commentClick.top;

      popUpModal.style.left = `${left}px`;
      popUpModal.style.top = `${top}px`;
    };

/';
    '
>    heartIcon.style.color = 'white';
      } else {
        heartIcon.style.color = 'red';
      }
    };

    document.querySelectorAll('.fa-heart').forEach((heartIcon) => {
      heartIcon.addEventListener('click', toggleHeartColor);
    });



    const likeButtons = document.querySelectorAll('.fa-heart');
    likeButtons.forEach((heartbutton) => {
      heartbutton.addEventListener('click', async (e) => {
        const heartbuttonId = parseInt(e.target.dataset.id, 10);
        const parent = e.currentTarget.parentElement;
        // console.log(parent);
        const countSpan = parent.querySelector('.likes-count');
        console.log(countSpan);
        
        


        let likesCount = res.json().likes;
        likesCount = countSpan.textContent ? parseInt(countSpan.textContent, 10) : 0;
        // console.log(likesCount);
        if (parent.classList.contains('liked')) {
          parent.classList.remove('liked');
          likesCount -= 1;
          countSpan.textContent = `${likesCount} like`;
        } else {
          parent.classList.add('liked');
          const response = await addLikes(likesUrl, heartbuttonId);
          if (response.status === 201) {
            likesCount += 1;
          }
          console.log( await response.text());
          countSpan.textContent = `${likesCount} like`;
        }
      });
    });
    return createShowElement;
  
};
