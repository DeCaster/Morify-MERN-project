import { useLoaderData } from 'react-router-dom';
import { ChartsContainer, StatsContainer } from '../comp';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';

export const loader = async()=>{
  try {
    const response = await customFetch.get('/jobs/stats')
    return response.data
  } catch (error) {
    return error
  }
}

const Stats = () => {
  const {defaultStats, monthlyApplications} = useLoaderData()
  
  return <>
  <StatsContainer defaultStats={defaultStats}/>
  {
     <ChartsContainer data={monthlyApplications}/>
  }

  </>
};

export default Stats