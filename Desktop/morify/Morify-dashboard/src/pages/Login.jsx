import { Link, Form, redirect, useNavigation,useActionData,useNavigate} from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage.js'
import logo from '../assets/images/M.svg'
import { FormRow } from "../comp"
import customFetch from '../utils/customFetch.js';
import { toast } from 'react-toastify';

export const action = (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const errors = {msg: ''};
    if(data.password.length < 3){
      errors.msg = 'password is to short'
      return errors
    }
    try {
      await customFetch.post('/auth/login', data);
      queryClient.invalidateQueries();
      toast.success('Entry permitted');
      return redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };
const Login = () => {

  const navigate = useNavigate()
  const navigation = useNavigation()
  const errors = useActionData()
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting'

  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'random123',
    };
    try {
      await customFetch.post('/auth/login', data);
      toast.success('Welcome TestUser!!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error
    }
  };
  
  return (
    <Wrapper>
      <Form method='post' className="form">
      <Link to='/'><img src={logo} alt="Morify" className="logo"></img></Link>
      <h4>Login</h4>
      {errors?.msg && <p style={{color:'red'}}>{errors.msg}</p>} 
      <FormRow type="email" name="email" />
      <FormRow type="password" name="password"/>
      <button type="submit" className="btn btn-block" disabled={isSubmitting}>{isSubmitting ? 'submitting...':'submit'}</button>
      <button type="submit" className="btn btn-block" onClick={loginDemoUser}>Discover more</button>
      <p>Not a member yet?
          <Link to='/register' className="member-btn">Register</Link>
        </p>
      </Form>

    </Wrapper>
  )
}

export default Login