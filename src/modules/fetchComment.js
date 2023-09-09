export const fetchComment = async (commentUrl, id) => {
  try {
    const response = await fetch(`${commentUrl}/comments?item_id=${id}`);
    if (response.status === 400) {
      return [];
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
export const postComment = async (commentUrl, obj) => {
  try {
    const postRequestConfig = {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'content-type': 'application/json',
      },
    };
    const response = await fetch(`${commentUrl}/comments`, postRequestConfig);
    const data = await response.text();
    return data;
  } catch (error) {
    return error;
  }
};