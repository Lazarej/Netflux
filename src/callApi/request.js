
const API_KEY = 'b9d55f3b02332772a508f7b5ee25fa5f';

const requests = {
    getPopular: `movie/popular?api_key=${API_KEY}&language=FR&page=1`,
    getCategories:`genre/movie/list?api_key=${API_KEY}&language=FR`,
    getDiscover:`discover/movie?api_key=${API_KEY}&language=FR`
}

export default requests