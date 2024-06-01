import Wrapper from '../assets/wrappers/BigSidebar';
import NavLinks from './NavLinks'
import logo from '../assets/images/M.svg'
import { Link } from "react-router-dom"
import { useDashboardContext } from '../pages/DashboardLayout';

const BigSidebar = () => {
  const {showSidebar} = useDashboardContext()
  return (
    <Wrapper>
      <div className={showSidebar ? ' sidebar-container':'sidebar-container show-sidebar'}>
        <div className='content'>
          <header>
          <Link to='/'><img src={logo} alt="Morify" className="biglogo"></img></Link>
          <h3>Morify</h3>
          </header>
          <NavLinks isBigSidebar/>
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
