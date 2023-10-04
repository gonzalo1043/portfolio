import Card from 'react-bootstrap/Card'
import classes from './Index.module.css'
import { BsArrowDownCircle } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom';
BsArrowUpCircle

const Projects = () => {

    const navigate = useNavigate()

    return (
        <>
        <div className='projectsDiv'>
            <Card style={{ width: '100%' }} className='cardColor' onClick={() => navigate('/Projects/RemediosVaroProject')}>
        <Card.Body style={{ width: '100%' }} className='cardBody'>
            <Card.Title className='projectsText'>
                <p className='projectSubSubtitle'>(Maquetación web)</p>
                <p>REMEDIOS</p>
                <p className='projectSubtitle'>VARO</p>
            </Card.Title>
            <Card.Text className='projectsYear'>
            2023
            </Card.Text>
        </Card.Body>
        </Card>

        <Card style={{ width: '100%' }} className='cardColor' onClick={() => navigate('/Projects/TiendaDeVinilosProject')}>
        <Card.Body style={{ width: '100%' }} className='cardBody'>
            <Card.Title className='projectsText'>
                <p className='projectSubSubtitle'>(React)</p>
                <p>TIENDA DE VINILOS</p> 
                <p className='projectSubtitle2'>E-COMMERCE</p> 
            </Card.Title>
            <Card.Text className='projectsYear'>
            2023
            </Card.Text>
        </Card.Body>
        </Card>
        </div>
        <div className='arrowsProjects'>
        <NavLink  to= '/' > <BsArrowUpCircle color="white" size={60}/>   </NavLink> 
        <NavLink to= '/personalInformation'  >  <BsArrowDownCircle color="white" size={60} />   </NavLink>
        </div>
        </>
    )
}

export default Projects


// className='iconArrowPI'
// className='iconArrowPrincipal'