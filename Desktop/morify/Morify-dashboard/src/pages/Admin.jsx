import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/StatsContainer';
import { toast } from 'react-toastify';
import { Statitem } from '../comp';

export const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    toast.error('You are not authorized to view this page');
    return redirect('/dashboard');
  }
};
const Admin = () => {
  const {users, jobs} = useLoaderData();
  return (
    <Wrapper>
      <Statitem
        title='current users'
        count={users}
        color='#e95e49'
        bcg='#fcefc7'
        icon={<FaSuitcaseRolling />}
      />
      <Statitem
        title='total jobs'
        count={jobs}
        color='#64cb92'
        bcg='#e0e8f9'
        icon={<FaCalendarCheck />}
      />
      
    </Wrapper>
  )
}

export default Admin