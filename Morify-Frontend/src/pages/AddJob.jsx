import { FormRow,FormRowSelect} from '../comp';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form, redirect,useNavigation } from 'react-router-dom';
import customFetch from '../utils/customFetch';

const AddJob = () => {
  const {user} = useOutletContext()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'adding job..'
  return (
    
    <Wrapper>
      <Form method='post'className='form'>
        <h4 className='form-title'>add job</h4>
        <div className="fomr-center">
          <FormRow type='text' name='position'/>
          <FormRow type='text' name='company'/>
          <FormRow type='text' labelText='job location' name='jobLocation' defaultValue={user.location}/>
          <FormRowSelect labelText='job status' name='jobSatatus' defaultValue={JOB_STATUS.PENDING} list={Object.values(JOB_STATUS)}/>
          <FormRowSelect labelText='job type' name='jobType' defaultValue={JOB_TYPE.FULL_TIME} list={Object.values(JOB_TYPE)}/>
          <button type='submit' className='btn btn-block form-btn'disabled={isSubmitting}>
            {isSubmitting?'isSubmitting':'add job'}
          </button>

        </div>
      </Form>
    </Wrapper>
  )
}

export default AddJob