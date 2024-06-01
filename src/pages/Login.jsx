import { Link } from "react-router-dom"
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import logo from '../assets/images/M.svg'
import { FormRow } from "../comp"
const Login = () => {
  return (
    <Wrapper>
      <form className="form">
      <Link to='/'><img src={logo} alt="Morify" className="logo"></img></Link>
      <h4>Login</h4>
      <FormRow type="email" name="email" defaultValue="randomgmail@gmail.com"/>
      <FormRow type="password" name="password" defaultValue="random123"/>
      <Link to='/dashboard'><button type="submit" className="btn btn-block">Login In</button></Link>
      <Link to='/dashboard'><button type="submit" className="btn btn-block">Discover more</button></Link>
      <p>Not a member yet?
          <Link to='/register' className="member-btn">Register</Link>
        </p>
      </form>

    </Wrapper>
  )
}

export default Login