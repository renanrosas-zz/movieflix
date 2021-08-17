import MovieCard from 'components/MovieCard';
import { Link } from 'react-router-dom';
import { Movie } from 'types/movie';
import './styles.css';

type UrlParams = {
    movieId: string;
};

const movie: Movie = {
    "id": 6,
    "title": "A Voz do Silêncio",
    "subTitle": "Koe no Katachi",
    "year": 2016,
    "imgUrl": "https://image.tmdb.org/t/p/w533_and_h300_bestv2/5lAMQMWpXMsirvtLLvW7cJgEPkU.jpg",
    "synopsis": "Nishimiya Shouko é uma estudante com deficiência auditiva. Durante o ensino fundamental, após se transferir para uma nova escola, Shouko passa a ser alvo de bullying e em pouco tempo precisa se transferir. O que ela não esperava é que alguns anos depois, Ishida Shouya, um dos valentões que tanto a fez sofrer no passado surgisse de novo em sua vida com um novo propósito.",
    "genre": {
        "id": 3,
        "name": "Drama"
    }
}

const Movies = () => {

    return (
        <div className="col-sm-12 col-md-6 movie-list-container">
            <Link to="/movies/1">
                <MovieCard movie={movie} />
            </Link>
        </div>
    )
};

export default Movies;