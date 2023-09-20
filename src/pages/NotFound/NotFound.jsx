import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import { MusicVideo, NotFoundContainer, NotFoundText } from "./NotFoundStyles";


const NotFound = () => {

    let navigate = useNavigate();
    function handleClick() {
        navigate('/')
    }
    
    return (
        <NotFoundContainer>
        <NotFoundText>
            <h1>Página no encontrada</h1>
            <p>La página que estás buscando no existe</p>
            <h2>Mejor mirá este video</h2>
        </NotFoundText>
        <MusicVideo>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-GQg25oP0S4?si=AdG2lL4TeI4AqfJd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
        </MusicVideo>

        <Button
        radius="18"
        onClick={handleClick}
        >
            Volver
        </Button>
    </NotFoundContainer>  
    )
};

export default NotFound