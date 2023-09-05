import {CreateShowsObject, fetchShows} from './fetchShows.js';

const showsContentContainer = document.querySelector('.shows-content-container');
const url = 'https://api.tvmaze.com/shows';
// eslint-disable-next-line import/prefer-default-export
export const displayShows = async () => {
  showsContentContainer.innerHTML = '';
  try {
      const shows = await fetchShows(url);
      const showsData = await shows.json();
      const createShowObj = showsData.map((shows) => {
          const showsTemplate = 
      })
  } catch (error) {

  }
};