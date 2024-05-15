import { Link } from "react-router-dom"
import logo from '../assets/images/M.svg'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow } from "../comp"
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
      <Link to='/'><img src={logo} alt="Morify" className="logo"></img></Link>
        <h4>Register</h4>
        <FormRow type='text' name='name' defaultValue="Murad"/>
        <FormRow type='text' name='lastName' labelText='last name' defaultValue="Eyvazli" />
        <FormRow type='text' name='location' defaultValue="Isparta"/>
        <FormRow type='email' name='email' defaultValue="randomgmail@gmail.com"/>
        <FormRow type='password' name='password' defaultValue="random123"/>
        <Link to='/dashboard'><button type="submit" className="btn btn-block">Register In</button></Link>
        <p>Already a member?
          <Link to='/login' className="member-btn">Login</Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register