/* eslint-disable import/no-extraneous-dependencies */
import './style.css';
// eslint-disable-next-line import/extensions
import 'font-awesome/css/font-awesome.min.css';
import { displayShows } from './modules/display.js';

window.addEventListener('DOMContentLoaded', async () => {
  const movieContainer = document.querySelector('.container-cards');
  const page = await displayShows();
  console.log('page :>> ', page);
  movieContainer.insertAdjacentHTML('beforeend', page);
});
// import image from './asset/img/14.png';
