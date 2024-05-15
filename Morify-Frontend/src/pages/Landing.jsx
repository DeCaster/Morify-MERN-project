import styled from "styled-components"
import Wrapper from '../assets/wrappers/LandingPage.js'
import main from '../assets/images/redlight.png'
import logo from '../assets/images/M.svg'
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='/dashboard'><img src={logo} alt="Morify" className="logo"></img></Link>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
          Welcome to the ultimate solution for managing your professional tasks efficiently. Our Job Tracking App is designed to streamline your workflow and increase productivity. 
          Stay organized with real-time updates and customizable job alerts!
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
}



export default Landing