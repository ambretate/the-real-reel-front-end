import Header from '../Header/Header.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Footer from '../Footer/Footer.jsx';
import './Layout.css';

function Layout(props) {
  return (
    <div id='container-Layout'>
      <Header />
      <NavBar />
      <div id="body-Layout" >
          {props.children}
      </div>
      <Footer />
      
    </div>
  )
}

export default Layout;