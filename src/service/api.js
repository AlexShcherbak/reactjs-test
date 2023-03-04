const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const getUsers = async () => {
  const response = await fetch(`${BASE_URL}users`);

  return response.json();
};

const getUserPosts = async (id) => {
  const response = await fetch(`${BASE_URL}posts?userId=${id}`);

  return response.json();
};

const getUserAlbums = async (id) => {
  const response = await fetch(`${BASE_URL}albums?userId=${id}`);

  return response.json();
};

export { getUsers, getUserPosts, getUserAlbums };
