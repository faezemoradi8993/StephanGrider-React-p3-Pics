import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID x9ZUv-ZzYnBx4il0KlRVGrRiObhhLNYyAkaPfklu7Lw '
    }

});

