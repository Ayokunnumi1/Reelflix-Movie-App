const updateLikesCount = (id) => {
  const likesCount = document.querySelector(`.likes-count[id="${id}"] > span`);
  const likesCountValue = parseInt(likesCount.textContent, 10);
  likesCount.textContent = `${likesCountValue + 1}`;
};

export default updateLikesCount;