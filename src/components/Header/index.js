import Logo from '../../Assets/img/logo.jpg';
import { Link } from 'react-router-dom';
const Header =()=>{
    return(
        <>
        <div className="headerwraper">
            <div className="Top-Strip bg-purple">
                <div className="Container">
                    <p className="mb-0 mt-0 text-center">Free shipping on all orders over $50</p>
                </div>
            </div>
        </div>
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="logowrapper col-sm-2">
                            <Link to={'/'}>
                                <img src={Logo} alt='Logo'/>
                            </Link>
                    </div>

                </div>


            </div>

        </div>

        </>
    )
}

export default Header;