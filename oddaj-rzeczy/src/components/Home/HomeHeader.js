import { Link } from 'react-router-dom';
import HomeNavigation from "./HomeNavigation";

const HomeHeader = () => {
    return (
        <>
            <div className='header'>
                <div className="buttons">
                    <Link className='button-login' to="/logowanie">Zaloguj się</Link>
                    <Link className='button-register' to="/rejestracja">Załóż konto</Link>
                </div>
                <div className="nav">
                    <HomeNavigation />
                </div>
            </div>
        </>
    )
}

export default HomeHeader;