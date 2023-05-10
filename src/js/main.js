const url = 'https://jsonplaceholder.typicode.com/todos';

function delay(ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
}

// function fetchTodos() {
//     console.log('Start fetchTodos');

//     return delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json());
// }

// fetchTodos()
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

async function fetchTodos() {
  console.log('Start fetchTodos async');

  try {
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();

    if (!data.length) {
      throw new Error();
    }

    return data;
  } catch (error) {
    console.log('Smth went wrong');
  }
}

fetchTodos().then(res => console.log(res));
