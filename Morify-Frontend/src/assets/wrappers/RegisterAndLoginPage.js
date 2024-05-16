import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 90vh;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    width: auto;
    height: 50px;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    border-radius: 15px;
    max-width: 400px;
    border-top: 15px solid var(--primary-500);
  }
  h4 {
    font-size: 22px;
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;
export default Wrapper;
