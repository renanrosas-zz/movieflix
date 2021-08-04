import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated } from 'util/auth';
import { removeAuthData } from 'util/storage';
import './styles.css';
import history from 'util/history';
import { AuthContext } from 'AuthContext';

const Navbar = () => {

    const { authContextData, setAuthContextData } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated()) {
            setAuthContextData({
                authenticated: true,
                tokenData: getTokenData()
            });
        }
        else {
            setAuthContextData({
                authenticated: false
            });
        }
    }, [setAuthContextData]);

    const handleClickLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        removeAuthData();
        setAuthContextData({
            authenticated: false,
        });
        history.replace('/');
    }

    return (
        <nav className="bg-primary main-nav nav-logo-text">
            <div className="container-fluid">
                <Link to="/">
                    <h4>MovieFlix</h4>
                </Link>
            </div>
                {!authContextData.authenticated ? '' :
                    <div className="nav-login-logout">
                        <a href="#logout" onClick={handleClickLogoutClick}>SAIR</a>
                    </div>
                }
        </nav >
    )
};

export default Navbar;