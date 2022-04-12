export const getPets = async (type) => {
  let petType;
  if(type === 'cat') {
    petType = 'cat';
  } else if(type === 'dog') {
    petType = 'dog';
  } else if(type === 'rabbit') {
    petType = 'rabbit';
  } else if(type === 'bird') {
    petType = 'bird';
  } else {
    petType = 'animals';
  }

  const requestUrl = `https://chris-larham-1983.github.io/json_data/${petType}.json`;

  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  return json;
};

export const getPetDetails = async (id) => {
  const requestUrl = `https://chris-larham-1983.github.io/json_data/${id}.json`;
  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  return json;
};

export const getPetTypes = async () => {
  const requestUrl = `https://chris-larham-1983.github.io/json_data/types.json`;

  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  const json = await response.json();

  return json;
};
