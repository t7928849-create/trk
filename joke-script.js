const getJokeButton = document.getElementById('getJokeButton');
const clearButton = document.getElementById('clearButton');
const jokeText = document.getElementById('jokeText');

const JOKE_API = 'https://official-joke-api.appspot.com/random_joke';

async function getJoke() {
    try {
        getJokeButton.disabled = true;
        getJokeButton.textContent = 'Loading...';
        const response = await fetch(JOKE_API);
        const data = await response.json();
        jokeText.textContent = `${data.setup}\n\n${data.punchline}`;
        getJokeButton.disabled = false;
        getJokeButton.textContent = 'Get a Joke';
    } catch (error) {
        jokeText.textContent = 'Oops! Could not fetch a joke. Please try again!';
        console.error('Error fetching joke:', error);
        getJokeButton.disabled = false;
        getJokeButton.textContent = 'Get a Joke';
    }
}

function clearJoke() {
    jokeText.textContent = 'Click the button to get a joke!';
}

getJokeButton.addEventListener('click', getJoke);
clearButton.addEventListener('click', clearJoke);
window.addEventListener('load', getJoke);