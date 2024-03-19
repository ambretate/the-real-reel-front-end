import logo from '../../assets/images/TRR-LOGO-1.png';
import './Header.css';

function Header() {
  return (
    <div id="background-Header">
        
        <div id="logoContainer-Header">

            <img id="logo-Header" src={logo} alt="the real reel logo, an old style film camera pointing to the right, stylized in solid black and white" />
            
        </div>

        <div id="container-Header">
            <button id="signInButton-Header">Login/Logout</button>

        </div>
    </div>
  )
}

export default Header