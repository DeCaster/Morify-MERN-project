import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import customFetch from './utils/customFetch.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

async function init() {
  try {
    const resp = await customFetch.get('/test');
    console.log(resp);
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <App />
      <ToastContainer position="top-center" />
    </>
  );
}

init(); // Call the async function to execute the code
