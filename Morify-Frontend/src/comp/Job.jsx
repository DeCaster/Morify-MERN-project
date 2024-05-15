import React from 'react';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import mockData from '../../../utils/mockData.json';

dayjs.extend(advancedFormat);

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  jobStatus,
}) => {
  const date = dayjs(createdAt).format('MMM Do, YYYY');
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${jobStatus}`}>{jobStatus}</div>
        </div>
        <footer className='actions'>
          <Link className='btn edit-btn' to='/error'>
            Edit
          </Link>
          <form method='post' action={`../delete-job/${_id}`}>
            {/* <button type='submit' className='btn delete-btn'>
              delete
            </button> */}
            <Link className='btn edit-btn' to='/error'>
            Delete
          </Link>
          </form>
        </footer>
      </div>
    </Wrapper>
  );
};

const JobList = () => {
  return (
    <div>
      {mockData.map((job) => (
        <Job key={job._id} {...job} />
      ))}
    </div>
  );
};

export default JobList;
