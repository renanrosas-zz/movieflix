import Button from "components/Button";
import { useForm } from "react-hook-form";
import history from "util/history";
import { requestBackendReview } from "util/requests";
import './styles.css';

type Props = {
    movieId: string;
    refresh: (changed: boolean) => void
};

type FormData = {
    text: string;
    movieId: string;
}

const MovieReview = ({ movieId, refresh } : Props) => {

    const { register, handleSubmit, formState: {errors}, setValue } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {
        formData.movieId = movieId;
        requestBackendReview(formData)
            .then(() => {
                history.push(`/movies/${movieId}`);
                refresh(true);
            }).finally(() => {
                setValue("text", "");
                refresh(false)
            })
    };


    return (
        <div className="base-card card-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("text", {
                    required:"Campo obrigatório"
                })}
                type="text"
                className="form-control base-input"
                placeholder="Deixe sua avaliação aqui"
                name="text"/>
                <div className="invalid-feedback d-block">{errors.text?.message}</div> 
                <Button text="Salvar avaliação" />
            </form>
        </div>
    );
};

export default MovieReview;