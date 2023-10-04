import Card from 'react-bootstrap/Card'
import img from './assets/TiendaDeVinilos.png'
import img2 from './assets/VVVINYL2.png'
import img3 from './assets/VVVINYL3.png'
import img4 from './assets/VVVINYL4.png'
import img5 from './assets/VVVINYL5.png'
import video from './videos/VVVINYLVideo1.webm'
import video2 from './videos/VVVINYLVideo2.mp4'
import video3 from './videos/VVVINYLVideo3.webm'
import { NavLink } from 'react-router-dom'
import ReactPlayer from 'react-player'


const TiendaDeVinilosProject = () => {

    return (
        <>
        <Card className='cardProject' style={{ width: '100%' }}>
        <Card.Body className='cardBody'>
            <Card.Title className='projectsText projectTitleChanges'>
                <p>VV VINYL</p>
                <p className='projectSubtitle projectSubtitleChanges subtitleProject2'>ECOMMERCE</p>
            </Card.Title>
            <Card.Text className='projectsYear proyectYearChanges'>2023</Card.Text>
        </Card.Body>
        <Card.Img className='mediaProject' src={img} />
        <Card.Body className='cardBody'>
            <Card.Text className='descriptionTitle'>
                <p>REACT</p>
                <p>DESARROLLO WEB</p>
                <NavLink className='buttonGithubProject' to='https://github.com/gonzalo1043/ReactJs-Project-Coder'>GITHUB</NavLink>
            </Card.Text>
            <Card.Text className='descriptionText'>
                <p className='descriptionTitleText'>(DESCRIPCIÓN)</p>
                <p>VV VINYL es un proyecto que combina mi pasión por el desarrollo web y mi amor por la música. Se trata de una tienda en línea especializada en vinilos, diseñada y desarrollada con React.</p>
                <NavLink className='buttonVerProject' to='https://react-js-project-coder.vercel.app/'>VER</NavLink>
            </Card.Text>
        </Card.Body>

        <Card.Img className='img2 mediaProject' src={img2} />
        <Card.Body className='cardBody'>
            <Card.Text className='textProject'>
            El Catálogo es el corazón de este e-commerce. Contiene todos los vinilos disponibles, organizados de manera clara y fácil de navegar. Puedes explorar vinilos de diferentes géneros y artistas, y encontrarás información detallada sobre cada vinilo, incluyendo título, artista, precio y más.
            La información de los vinilos es obtenida mediante una colección creada en Firebase.
            </Card.Text>
        </Card.Body>

        <ReactPlayer
            url={video}
            className='react-player videoProject'
            controls
            width='100%'
            height='auto'
            /> 
        <Card.Body className='cardBody'>
            <Card.Text className='textProject'>Cuenta con la sección categoría que ayudarán a encontrar vinilos más fácilmente. Contiene categorías como "Pop" y "Rock", que permiten filtrar el catálogo para ver solo los vinilos de tu género favorito.</Card.Text>
        </Card.Body>

        <Card.Img className='img2 mediaProject' src={img3} />
        <Card.Body className='cardBody'>
            <Card.Text className='textProject'>
            El componente de "Nuevos Lanzamientos" te muestra los vinilos más recientes. Además se pueden ver estos vinilos en las distintas páginas del sitio con una notificación “Nuevos lanzamientos”, para que el usuario este al día con los vinilos mas recientes.
            </Card.Text>
        </Card.Body>

        <Card.Img className='img2 mediaProject' src={img4} />
        <Card.Body className='cardBody'>
            <Card.Text className='textProject'>
            Nuestra sección "Descuentos" muestra una selección de vinilos con un 10% de descuento. Al igual que con el caso de los nuevos lanzamientos, estos vinilos tambien se encuentran en las distintas secciones del sitio web.
            Para captar la atención del usuario, presentamos el precio original del vinilo en un tono gris, mientras que el precio con descuento se muestra en un tamaño más grande y resalta en un llamativo color amarillo.            
            </Card.Text>
        </Card.Body>

        <ReactPlayer
            url={video2}
            className='react-player videoProject'
            controls
            width='100%'
            height='auto'
            /> 
        <Card.Body className='cardBody'>
            <Card.Text className='textProject'>Una vez que el usuario haya seleccionado un vinilo, accederá al componente de detalles correspondiente. En esta sección, el usuario podrá visualizar la categoría del vinilo elegido y verificar la disponibilidad de copias en la tienda. Además, podrá seleccionar la cantidad de copias que desee agregar a su carrito de compras y acceder al mismo. </Card.Text>
        </Card.Body>

        <Card.Img className='img2 mediaProject' src={img5} />
        <Card.Body className='cardBody'>
            <Card.Text className='textProject'>
            En el carrito de compras, el usuario encontrará los vinilos que ha seleccionado junto con la cantidad correspondiente, así como el total de la compra. También tendrá la opción de eliminar cualquier vinilo de su carrito si lo desea. Una vez que el usuario esté satisfecho con la selección de vinilos en su carrito, podrá proceder a la sección de "Checkout".           
            </Card.Text>
        </Card.Body>

        <ReactPlayer
            url={video3}
            className='react-player videoProject'
            controls
            width='100%'
            height='auto'
            /> 
        <Card.Body className='cardBody'>
            <Card.Text className='textProject'>En la sección de "Checkout", el usuario deberá completar un formulario necesario para generar la orden de compra. Para evitar la ejecución de la orden sin un formulario completo, el botón "Generar Orden" se activará únicamente después de haber enviado el formulario completo. Cuando este botón se active, cambiará su color a amarillo, indicando que el usuario puede generar su orden de compra. Una vez que lo haga, recibirá una notificación que incluirá el número de su orden para su referencia y volvera a la página de inicio del sitio.  </Card.Text>
        </Card.Body>
        </Card>

        <Card style={{ width: '100%' }} className='cardColor nextProjectCard' onClick={() => navigate('/Projects/TiendaDeVinilosProject')}>
        <Card.Body style={{ width: '100%' }} className='cardBody'>
            <Card.Title className='projectsText'>
                <p>SIGUIENTE</p> 
                <p className='projectSubtitle2'>PROYECTO</p> 
            </Card.Title>
        </Card.Body>
        </Card>
        </>
    )
}

export default TiendaDeVinilosProject