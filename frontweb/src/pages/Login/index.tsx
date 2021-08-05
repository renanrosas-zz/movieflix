import Button from "components/Button";
import { ReactComponent as AuthImage } from 'assets/images/desenho.svg';
import './styles.css';
import { useHistory, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "AuthContext";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { requestBackendLogin } from "util/requests";
import { saveAuthData } from "util/storage";
import { getTokenData } from "util/auth";

type FormData = {
    username: string;
    password: string;
};

type LocationState = {
    from: string;
};

const Login = () => {

    const location = useLocation<LocationState>();

    const { from } = location.state || { from: { pathname: '/' } };

    const { setAuthContextData } = useContext(AuthContext);

    const [hasError, setHasError] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const history = useHistory();

    const onSubmit = (formData: FormData) => {
        requestBackendLogin(formData)
            .then(response => {
                saveAuthData(response.data);
                setHasError(false);
                setAuthContextData({
                    authenticated: true,
                    tokenData: getTokenData()
                });
                history.replace(from);
            })
            .catch(error => {
                setHasError(true);
            });
    };

    return (
        <div className="main-container">
            <div className="banner-container">
                <h1>Avalie Filmes</h1>
                <p>Diga o que você achou do seu<br />filme favorito</p>
                <AuthImage />
            </div>
            <div className="base-card login-card">
                <h1>Login</h1>
                {hasError &&
                    <div className="alert alert-danger">
                        Ocorreu um erro de preenchimento
                    </div>
                }
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <input
                            {...register("username", {
                                required: 'Campo obrigatório',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Email inválido'
                                }
                            })}
                            type="text"
                            className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
                            placeholder="Email"
                            name="username" />
                        <div className="invalid-feedback d-block">{errors.username?.message}</div>
                    </div>
                    <div className="mb-4">
                        <input
                            {...register("password", {
                                required: 'Campo obrigatório'
                            })}
                            type="password"
                            className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
                            placeholder="Senha"
                            name="password" />
                        <div className="invalid-feedback d-block">{errors.password?.message}</div>
                    </div>
                    <div className="login-submit">
                        <Button text="Fazer Login" />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;