import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
import StatItem from './Statitem';
const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: 'Tasks awaiting review',
      count: defaultStats?.pending || 25,
      icon: <FaSuitcaseRolling />,
      color: '#0bd2f5',
      bcg: '#e5f904',
    },
    {
      title: 'Booked conferences',
      count: defaultStats?.interview || 32,
      icon: <FaCalendarCheck />,
      color: '#f7c603',
      bcg: '#c4e6ec',
    },
    {
      title: 'Job offers declined',
      count: defaultStats?.declined || 10,
      icon: <FaBug />,
      color: '#ed2929',
      bcg: '#ffeeee',
    },
  ];
  return (
    <Wrapper>
      {stats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
