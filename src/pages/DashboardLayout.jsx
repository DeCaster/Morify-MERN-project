import { Outlet } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSidebar, Navbar, SmallSideBar } from "../comp"
import { createContext, useContext, useState } from "react"
import { checkDefaultTheme } from "../App.jsx"
const DashboardContext = createContext()


const DashboardLayout = ({checkDefaultTheme}) => {
  // temp
  const user = {name:'john'}
  const [showSidebar,setShowSidebar] = useState(false)
  const [isDarkTheme,setIsDarkTheme] = useState(checkDefaultTheme)

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const logoutUser = async()=>{
    console.log('Logout User');
  }
  return (
    <DashboardContext.Provider value={{user,showSidebar,isDarkTheme,toggleDarkTheme,logoutUser,toggleSidebar}}>
      <Wrapper>
      <main className="dashboard">
        <SmallSideBar/>
        <BigSidebar/>
        <div>
          <Navbar/>
          <div className="dashboard-page">
            <Outlet context={{user}}/>
          </div>
        </div>
      </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}
export const useDashboardContext = ()=> useContext(DashboardContext)

export default DashboardLayout