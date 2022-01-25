/* TODO: write a fetch request to an API url using .then() */

export const fetchMachines = () => {
  return fetch(`https://ponball.herokuapp.com/api/v1/machines`)
    .then((data) => data.json())
    .then((resp) => {
      console.log('then', resp);
    });
};

/* TODO: write a fetch request to an API url using async/await */
export const fetchMachinesAsync = async () => {
  const resp = await fetch(`https://ponball.herokuapp.com/api/v1/machines`);
  const data = await resp.json();
  console.log('async', data);
  return data;
};

export const fetchTitle = async (title) => {
  const params = new URLSearchParams();
  params.set('title', title);
  const resp = await fetch(
    `https://ponball.herokuapp.com/api/v1/machines?${params.toString()}`
  );
  const data = await resp.json();
  console.log('async-2', data);
  return data;
};

export const fetchMemesAsync = async () => {
  const resp = await fetch(`https://api.imgflip.com/get_memes`);
  const data = await resp.json();
  console.log('async-3', data.data.memes);
  return data;
};

export const fetchMemes = () => {
  return fetch(`https://api.imgflip.com/get_memes`)
    .then((data) => data.json())
    .then((resp) => {
      console.log('then-2', resp.data.memes);
    });
};

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */
