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
    const data = await response.text();
    return data;
  } catch (error) {
    return error;
  }
};

export const showLikes = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
