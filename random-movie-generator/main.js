const decades = [1980, 1990, 2000]
const genres = ['Horror', 'Comedy', 'Rom-Com']
const countries = ['American', 'Japanese', 'Korean']

const getRandom = (array) => {
    const position = Math.floor((Math.random() * array.length))
    return array[position];
}

const decade = getRandom(decades);
const genre = getRandom(genres);
const country = getRandom(countries);

const randomMovie = () => {
    console.log(`Choose a ${country} ${genre} from the ${decade}'s.`)
}

randomMovie();
