import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import { ButtonContainer, MusicVideo, NotFoundContainer, NotFoundContent } from "./NotFoundStyles";


const NotFound = () => {

    let navigate = useNavigate();
    function handleClick() {
        navigate('/')
        window.scrollTo(0, 0);
    }
    
    return (
    <NotFoundContainer>
        <NotFoundContent style={{marginTop: "6rem"}}>
        <h1>Página no encontrada</h1>
        <p>La página que estás buscando no existe.</p>

        <MusicVideo>
            <h2>Mejor mirá este video</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-GQg25oP0S4?si=AdG2lL4TeI4AqfJd" title="YouTube video player" frameborder="0"></iframe> 
        </MusicVideo>

        <ButtonContainer>
        <Button
        radius="18"
        onClick={handleClick}
        >
            Volver
        </Button>   
        </ButtonContainer>

        </NotFoundContent>    
    </NotFoundContainer>  
    )
};

export default NotFound