import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {HomeLayout,Landing,Login,Register,DashboardLayout,Error,AddJob,AllJobs,Profile,Admin,Stats,EditJob} from "./pages"

import {loader as statsLoader} from './pages/Stats'
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { action as addJobAction } from './pages/AddJob';
import { loader as allJobLoader } from './pages/AllJobs';
import { loader as editJobLoader } from './pages/EditJob';
import { action as editJobAction } from './pages/EditJob';
import { action as deleteJobAction } from './pages/DeleteJob';
import { loader as adminLoader } from './pages/Admin';
import { action as profileAction } from './pages/Profile';


export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children: [
      {
        index:true,
        element:<Landing/>,
      },
      {
        path:'/register',
        element:<Register/>,
        action: registerAction,
      },
      {
        path:'/login',
        element:<Login/>,
        action: loginAction(queryClient),
      },
      {
        path:'/dashboard',
        element: <DashboardLayout queryClient={queryClient} />,
        loader: dashboardLoader(queryClient),
        children:[
          {
            index:true,
            element:<AddJob/>,
            action: addJobAction(queryClient),
          },
          {
            path:'stats',
            element:<Stats/>,
            loader: statsLoader,
          },
          {
            path:'alljobs',
            element:<AllJobs/>,
            loader:allJobLoader,

          },
          {
            path:'profile',
            element:<Profile/>,
            action:profileAction,
          },
          {
            path:'admin',
            element:<Admin/>,
            loader: adminLoader,
          },
          {
            path: 'edit-job/:id',
            element: <EditJob />,
            loader:editJobLoader,
            action:editJobAction(queryClient),
          },
          { path: 'delete-job/:id', 
          action: deleteJobAction(queryClient) 
        },
        ]
      },
    ]
  },
  
  
])
const App = () => {
  return <RouterProvider router={router}/>
}

export default App