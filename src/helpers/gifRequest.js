export const gifRequest = async (category) => {
  const requestUrl = `https://api.giphy.com/v1/gifs/search?api_key=yTLejY6f7Rs73XJ0dUULuhHc0Btngi7z&q=${category}&limit=10`;

  const response = await fetch(requestUrl);
  const { data } = await response.json();

  const gifs = data.map((image) => ({
    id: image.id,
    title: image.title,
    url: image?.images?.downsized_medium?.url,
  }));

  return gifs;
};
