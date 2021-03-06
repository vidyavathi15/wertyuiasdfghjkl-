import Cookies from "js-cookie";
import { Redirect, Link, useHistory, Route } from "react-router-dom";
import "./Home.css";
import { GiHamburgerMenu } from "react-icons/gi";
// import { BsFillBellFill } from "react-icons/bs";
import Sidebar from "../Sidebar/Sidebar";
import Popup from "reactjs-popup";
import Profile from "../Profile/Profile";
import Dashboard from "../Dashboard/Dashboard";
import AllZones from "../AllZones/AllZones";
import Attendance from "../Attendance/Attendance";
import Employees from "../Employees/Employees";

import Roles from "../Roles/Roles";
import AllCameras from "../AllCameras/AllCameras";

import MuiDrawer from "../MuiDrawer/MuiDrawer";
import Chart from "../Charts/Chart";

const Home = () => {
  const history = useHistory();
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }

  const logout = () => {
    Cookies.remove("jwt_token");
    history.replace("/login");
  };
  return (
    <div className="home-container">
      <nav className="navbar-header">
        <div className="nav-content">
          <div className="menu-container">
            <GiHamburgerMenu className="menu-icon" />
            <h1 className="glieder-scan">Glider scan</h1>
          </div>
          <div className="nav-profile-container">
            <MuiDrawer />
            <p className="admin-name">Hi Admin</p>
            <div className="pop-up-container">
              <Popup
                trigger={
                  <button className="profile-button">
                    <img
                      src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653557524/vinay_gbbdmp.png"
                      alt="vinay boyina logo"
                      className="profile-image"
                    />
                  </button>
                }
                position="bottom left"
              >
                <div>
                  <Link style={{ textDecoration: "none" }} to="/profile">
                    <button type="button" className="profile-btn">
                      profile
                    </button>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/login">
                    <button
                      type="button"
                      onClick={logout}
                      className="logout-button"
                    >
                      Logout
                    </button>
                  </Link>
                </div>
              </Popup>
            </div>
          </div>
        </div>
      </nav>
      <hr className="hr-line" />
      <div className="content">
        <Sidebar />
        <div>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/allzones">
            <AllZones />
          </Route>
          <Route path="/attendance">
            <Attendance />
          </Route>
          <Route path="/employees">
            <Employees />
          </Route>
          <Route path="/roles">
            <Roles />
          </Route>
          <Route path="/cameras">
            <AllCameras />
          </Route>
          <Route path="/total-customers">
            <Chart />
          </Route>
        </div>
      </div>
    </div>
  );
};
export default Home;
