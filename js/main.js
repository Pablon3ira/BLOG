const publicKey = '29b548f5b2218cacff8b0a355f67971e';
const privateKey = '8d99e3d1fa9acb3ab9f84a131647419f8278e89d';

const ts = new Date().getTime();
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

const apiUrl = `https://gateway.marvel.com/v1/public/series?apikey=${publicKey}&ts=${ts}&hash=${hash}`;

async function fetchTVShows() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayTVShows(data.data.results);
    } catch (error) {
        console.error('Error fetching the TV shows:', error);
    }
}

function displayTVShows(tvShows) {
    const container = document.getElementById('tv-shows-container');
    container.innerHTML = '';

    tvShows.forEach(show => {
        const card = document.createElement('div');
        card.className = 'card';

        const image = document.createElement('img');
        image.src = `${show.thumbnail.path}.${show.thumbnail.extension}`;
        card.appendChild(image);

        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';

        const title = document.createElement('h2');
        title.textContent = show.title;
        cardContent.appendChild(title);

        const description = document.createElement('p');
        description.textContent = show.description || 'No description available.';
        cardContent.appendChild(description);

        card.appendChild(cardContent);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', fetchTVShows);
