import './Header.css'
import { Link } from 'react-router-dom';
import logo from './RuffledRantsLogo.svg'
import historyIcon from './HistoryIcon.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo-container">
        <Link to='/'>
          <img src={logo} alt="Ruffled Rants Logo" className="logo" />
        </Link>
      </div>
      <div className="nav-link">
        <Link to='/history'>
          <div className="tooltip-card">
            <img src={historyIcon} alt="History Icon" className="history-icon" />
            <div className="tooltip">Go to History Page</div>
          </div>
        </Link>
        {/* <span className="tooltip">Go to History Page</span> */}
      </div>
    </div>
  )
}

export default Header;