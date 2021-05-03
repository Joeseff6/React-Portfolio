import NavBar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Outlet />
      </div>
    </>
  )
}

export default Main;