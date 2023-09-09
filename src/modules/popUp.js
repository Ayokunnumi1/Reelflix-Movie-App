import { fetchShowsDetails } from './fetchShows.js';
import { fetchComment, postComment } from './fetchComment.js';

const popUpModal = document.querySelector('.popUp-modal');

const url = 'https://api.tvmaze.com/shows';
const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TmorUv6CAxzfjMnV7ubN';

// Function to create a comment list HTML from an array of comments
const createCommentList = (comments) => comments.map((comment) => `
      <li class="p-class">
        <span>${comment.creation_date}</span>
        <span>${comment.username}</span>
        <span>${comment.comment}</span>
      </li>
    `).join('');

// Function to create the pop-up modal HTML

export function calculateCommentLength(comments) {
  return comments.length;
}
const createPopUpModal = (showDetails, comments) => {
  const commentLength = calculateCommentLength(comments);
  const commentList = createCommentList(comments);

  return `
    <button class="close-button"><i class="fa fa-close"></i></button>
    <h3 class="m-title">${showDetails.title}</h3>
    <div class="imgdes">
      <img src="${showDetails.image}" alt="" class="popUp-img">
      <p class="para">${showDetails.description}</p>
    </div>
    <div class="modal-content">
      <div class="descriptions">
        <p>${showDetails.genres}</p>
        <p>${showDetails.language}</p>
        <p>${showDetails.rating}</p>
      </div>
    </div>
    <div class="commentcontainer">
      <h2 class="popUp-h2-comment-title">Comments(${commentLength})</h2>
      <div class="comment-container">
        <ul class="popUP-comment-content">
          ${commentList}
        </ul>
      </div>
    </div>
    <form action="" class="comment-form">
      <input type="text" name="text" id="input-name" required placeholder="Your name">
      <textarea name="text" id="comment-text" cols="30" rows="10" required placeholder="Add a comment"></textarea>
      <button type="submit" id="${showDetails.id}" class="submit-button">Submit</button>
    </form>
  `;
};

// Function to handle the pop-up display
const displayPopUp = async (buttonId) => {
  try {
    const showsPopDetails = await fetchShowsDetails(url, buttonId);
    const comments = await fetchComment(commentUrl, buttonId);

    const showPopObject = {
      id: showsPopDetails.id,
      title: showsPopDetails.name,
      image: showsPopDetails.image.medium,
      description: showsPopDetails.summary,
      genres: showsPopDetails.genres,
      language: showsPopDetails.language,
      rating: showsPopDetails.rating.average,
    };

    const popUpElement = createPopUpModal(showPopObject, comments);

    popUpModal.innerHTML = popUpElement;

    // Event listener for the close button
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      popUpModal.style.display = 'none';
    });

    // Event listener for comment submission
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
        return response;
      } catch (error) {
        return error;
      }
    });

    return showPopObject;
  } catch (error) {
    return error;
  }
};

const popupPosition = (button, popUpModal, e) => {
  const commentClick = button.getBoundingClientRect();

  const left = e.clientX - commentClick.left;
  const top = e.clientY - commentClick.top;

  popUpModal.style.left = `${left}px`;
  popUpModal.style.top = `${top}px`;
};

const addEventToCommentButton = () => {
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
};
export default addEventToCommentButton;