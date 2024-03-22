import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div id='background-Footer'>
      <Link to={"https://github.com/ambretate/the-real-reel-front-end"}>
        <img
          className='github-footer'
          src='https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png'
          alt='github'
        />
      </Link>
      <p id='brand-Footer'>Real Reel 2024</p>
    </div>
  )
}

export default Footer