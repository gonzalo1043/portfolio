import { NavLink } from 'react-router-dom'
import photo from './assets/IMG_0120BYN.jpeg'
import { BsArrowUpCircle } from "react-icons/bs";

const PersonalInformation = () => {

    return (
        <>
        
        <div className='personalInformationDiv'>
            <img className='photo' src={photo} alt="" />
            <p className='personalInformationText'>(SOBRE MI)</p>
            <p className='personalInformationText2'>Soy un desarrollador front-end con experiencia en la creación de interfaces de usuario utilizando React, HTML, CSS y JavaScript.
                Actualmente, estoy inmerso en un curso de desarrollo backend como parte de mis estudios en desarrollo full-stack. 
                Mi objetivo es combinar mis habilidades front-end con un sólido conocimiento del backend para crear aplicaciones web completas.
                Además, mi experiencia en diseño gráfico me ha brindado una perspectiva única para crear diseños visualmente atractivos.
            </p>
            <NavLink className='iconArrowPI' to= '/Projects' > <BsArrowUpCircle color="white" size={60}/>   </NavLink> 
        </div>
        </>
    )
}

export default PersonalInformation