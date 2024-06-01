import { Form, redirect, Link,useNavigation } from 'react-router-dom';
import logo from '../assets/images/M.svg'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow } from "../comp"
import customFetch from '../utils/customFetch.js';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);//objeni aliyoruz

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Account created');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
};
const Register = () => {
  const navigation = useNavigation()
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Wrapper>
      <Form method='post' className="form">
      <Link to='/'><img src={logo} alt="Morify" className="logo"></img></Link>
        <h4>Register</h4>
        <FormRow type='text' name='name'/>
        <FormRow type='text' name='lastName' labelText='last name'/>
        <FormRow type='text' name='location'/>
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password'/>
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>{isSubmitting ? 'submitting...':'submit'}</button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Register