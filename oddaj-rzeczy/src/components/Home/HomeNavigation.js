import { Link } from 'react-scroll';
import { NavLink } from "react-router-dom";


const HomeNavigation = () => {

    const options = {
        activeClass: "active",
        spy: true,
        smooth: true,
        offset: 50,
        duration: 500
    };

    return (
        <nav>
            <NavLink to="/" {...options}>Start</NavLink>
            <Link to="homeSteps" {...options}>O co chodzi?</Link>
            <Link to="homeAbout" {...options}>O nas</Link>
            <Link to="whoWeHelp" {...options}>Fundacje i organizacje</Link>
            <Link to="homeContact" {...options}>Kontakt</Link>
        </nav >
    )
}

export default HomeNavigation;