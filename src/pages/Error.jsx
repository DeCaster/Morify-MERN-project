import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from '../assets/images/error-page-image.png'

const Error = () => {
  const error = useRouteError()

  if(error.status === 404){
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found"/ >
        <h3>Oops! There is some issues!!</h3>
        <p>Aradığınız sayfa bulunamadı. Lütfen geri dönün veya ana sayfaya gidin.</p>
        <Link to='/'>back home</Link>
        </div>
        
      </Wrapper>
    );
  }
};

export default Error;
