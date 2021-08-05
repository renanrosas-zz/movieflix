import PrivateRoute from 'components/PrivateRoute';
import { Link } from 'react-router-dom';
import './styles.css';

const Movies = () => {

    return (
        <PrivateRoute path="/">
            <div className="list-container">
                <h2>Tela listagem de filmes</h2>
                <Link to="/movies/1">Acessar /movies/1</Link><br />
                <Link to="/movies/2">Acessar /movies/2</Link>
            </div>
        </PrivateRoute>
    )
};

export default Movies;