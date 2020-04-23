const BaseAPIfilesUrl = 'https://api.themoviedb.org/';
const API_KEY = '54ffed57deb5a7a8688be4de3007e578';


const getData = async (url, responseOptions = { shouldBeParsed: true }) => {
    return fetch(url)
        .then(res => responseOptions.shouldBeParsed ? res.json() : res);
};

export const getMovies = (page) => {
    return getData(`${BaseAPIfilesUrl}3/movie/now_playing/?api_key=${API_KEY}&page=${page}`)
};
