import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className="logo-container">
        <Link to='/'>
          RUFFLED RANTS
        {/* <img src={logo} alt="Ruffled Rants Logo" className="logo" /> */}
        </Link>
      </div>
      <div className="nav-link">
        <Link to='/history'>History</Link>
      </div>
    </div>
  )
}

export default Header;