import { useLoaderData } from "react-router-dom"
import Wrapper from "../assets/wrappers/StatsContainer"
import { Statitem } from "../comp"
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Admin = () => {
  const {users, jobs} = useLoaderData;
  return (
    <Wrapper>
      <Statitem
        title='current users'
        count='25'
        color='#e95e49'
        bcg='#fcefc7'
        icon={<FaSuitcaseRolling />}
      />
      <Statitem
        title='total jobs'
        count='4'
        color='#64cb92'
        bcg='#e0e8f9'
        icon={<FaCalendarCheck />}
      />
      
    </Wrapper>
  )
}

export default Admin