import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useDashboardContext } from '../pages/DashboardLayout';
import { Link, NavLink } from "react-router-dom"
import logo from '../assets/images/M.svg'
import links from '../utils/links'
import NavLinks from './NavLinks';

const SmallSidebar = () => {

  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      
      <div className={showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
          <Link to='/'><img src={logo} alt="Morify" className="logo"></img></Link>
          </header>
          <NavLinks/>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
