import Wrapper from '../assets/wrappers/Navbar';
import {FaAlignLeft} from 'react-icons/fa'
import logo from '../assets/images/M.svg'
import { Link } from "react-router-dom"
import { useDashboardContext } from '../pages/DashboardLayout';
import LogoutContainer from './LogoutContainer';
import { ThemeToggle } from '.';
const Navbar = () => {
    const {toggleSidebar} = useDashboardContext()
 
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar} >
            <FaAlignLeft/>
        </button>
        <div>
        <Link to='/'><img src={logo} alt="Morify" className="logo"></img></Link>
        <h4 className='logo-text'>dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle/>
          <LogoutContainer/>
          </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
