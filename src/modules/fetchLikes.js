export const addLikes = async (likesUrl, id) => {
  try {
    const postRequestConfig = {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    };
    const response = await fetch(likesUrl, postRequestConfig);
    return response;
  } catch (error) {
    return error;
  }
};

export const getLikes = async (likesUrl) => {
  try {
    const response = await fetch(likesUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
