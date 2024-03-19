import Header from "../Header/Header.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Layout.css";

function Layout(props) {
  return (
    <div>
      <div id="container-Layout">
        <Header />
        <NavBar />
        <div id="body-Layout">{props.children}</div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
