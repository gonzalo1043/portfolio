import { BsArrowDownCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";


const PrincipalPage = () => {


    return (
        <>
        <div className="titlePrincipal">
            <h1>FRONT-END</h1>
            <h2>DEVELOPER</h2>
        </div>
        <NavLink className='iconArrowPrincipal' to= '/Projects' > <BsArrowDownCircle color="white" size={60}/>   </NavLink> 
        </>

    )
    
}

export default PrincipalPage