import img from './assets/RM.png'
import img2 from './assets/RM2.png'
import Card from 'react-bootstrap/Card'
import { NavLink, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player'
import Button from 'react-bootstrap/Button';
import video from './videos/projectRMvideo.mp4'
import video2 from './videos/projectRVvideo2.mp4'



const RemediosVaroProject = () => {

    const navigate = useNavigate()

return (
    <>
        <Card className='cardProject' style={{ width: '100%' }}>
        <Card.Body className='cardBody'>
            <Card.Title className='projectsText projectTitleChanges'>
                <p>REMEDIOS</p>
                <p className='projectSubtitle projectSubtitleChanges'>VARO</p>
            </Card.Title>
            <Card.Text className='projectsYear proyectYearChanges'>2023</Card.Text>
        </Card.Body>
        <Card.Img className='mediaProject' src={img} />
        <Card.Body className='cardBody'>
            <Card.Text className='descriptionTitle'>
                <p>DISEÑO WEB</p>
                <p>MAQUETACIÓN WEB</p>
                <NavLink className='buttonGithubProject' to='https://github.com/gonzalo1043/remedios-varo-39385'>GITHUB</NavLink>
            </Card.Text>
            <Card.Text className='descriptionText'>
                <p className='descriptionTitleText'>(DESCRIPCIÓN)</p>
                <p>En este sitio, se podrá explorar la vida y obra de Remedios Varo, una destacada pintora surrealista del siglo XX. Fue creado utilizando HTML5, CSS3, SASS Y BOOTSTRAP. Diseñado con anterioridad en Figma.</p>
                <NavLink className='buttonVerProject' to='https://gonzalo1043.github.io/remedios-varo-39385/'>VER</NavLink>
            </Card.Text>
        </Card.Body>

        
        <Card.Img className='img2 mediaProject' src={img2} />
        <Card.Body className='cardBody'>
            <Card.Text className='textProject'>Utilizando HTML5, CSS3, he construido un espacio en línea que celebra la vida y obra de Remedios Varo de una manera visualmente atractiva y fácil de navegar.A través de diferentes secciones, podrás conocer más sobre la vida, el contexto histórico y las influencias de Remedios Varo en su arte. Cada sección ha sido diseñada para proporcionar información detallada y cautivadora, utilizando una combinación de texto e imágenes.</Card.Text>
        </Card.Body>

        <ReactPlayer
            url={video}
            className='react-player videoProject'
            controls
            width='100%'
            height='auto'
            /> 
        <Card.Body className='cardBody'>
            <Card.Text className='textProject'>Utilizado Bootstrap para agregar interactividad y funcionalidad al sitio web. Esto incluye elementos como galerías de imágenes interactivas y efectos de desplazamiento suave que permiten a los visitantes explorar las obras de Varo de manera dinámica.</Card.Text>
        </Card.Body>

        <ReactPlayer
            url={video2}
            className='react-player videoProject'
            controls
            width='100%'
            height='auto'
            /> 
        <Card.Body className='cardBody'>
            <Card.Text className='textProject'>Ademas para asegurar la compatibilidad con dispositivos móviles y lograr un diseño responsivo, he integrado Bootstrap y otros medios con CSS en el sitio web. Esto me ha permitido crear una estructura adaptable y optimizada para diferentes tamaños de pantalla</Card.Text>
        </Card.Body>
        </Card>

        <Card style={{ width: '100%' }} className='cardColor nextProjectCard' onClick={() => navigate('/Projects/TiendaDeVinilosProject')}>
        <Card.Body style={{ width: '100%' }} className='cardBody'>
            <Card.Title className='projectsText'>
                <p>SIGUIENTE</p> 
                <p className='projectSubtitle2'>PROYECTO</p> 
            </Card.Title>
            <Card.Text className='projectsYear'>
            2023
            </Card.Text>
        </Card.Body>
        </Card>

        
    
        <div>
        
        </div>
    </>
)

}

export default RemediosVaroProject