// export class ShowsObject {
//   constructor(id, title, imgUrl) {
//     this.id = id;
//     this.title = title;
//     this.imgUrl = imgUrl;
//   }
// }

const fetchShows = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchShows;
