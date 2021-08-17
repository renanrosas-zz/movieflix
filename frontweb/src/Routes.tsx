import PrivateRoute from "components/PrivateRoute";
import Login from "pages/Login";
import MovieDetails from "pages/MovieDetails";
import Movies from "pages/Movies";
import { Route, Router, Switch } from "react-router-dom";
import history from "util/history";
import Navbar from "./components/Navbar";

const Routes = () => (
    <Router history={history}>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Login />
            </Route>
            <Route path="/movies" exact>
                <Movies />
            </Route>
            <Route path="/movies/:movieId">
                <MovieDetails />
            </Route>
        </Switch>
    </Router>
);

export default Routes;