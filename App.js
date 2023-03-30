import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Routers from './components/Router/Router';
import MiniDrawer from './components/Sidebar/Sidebar';
import ClippedDrawer from './components/Sidebar/Sidebar';
import Editprofile from './components/Profile/EditProfile';
import IUDashboard from './components/Dashboard/IUDashboard';
import Notification from './components/Notification/Notification';
import SwipeableEdgeDrawer from './components/Notification/Notification';
import Dashboard from './components/Dashboard/Dashboardedit';
import Viewprofile from './components/Profile/Viewprofile';
import Postjob from './components/Post/Postjob';
import MyAccount from './components/MyAccount/MyAccount';
import Myjob from './components/Myjob/Myjob';
import Dashboardadmin from './components/Dashboard/Admin/Dashboardadmin';
import PostFeed from './components/Dashboard/Admin/PostFeed';





function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Navbar/> */}
      {/* <Sidebar/> */}
      {/* <MiniDrawer/> */}
      {/* <ClippedDrawer/> */}
      <Routers/>
      {/* <Dashboard/> */}
      {/* <Viewprofile/> */}
      {/* <Postjob/> */}
      {/* <PostFeed/> */}
  

      {/* <IUDashboard/> */}
      {/* <Notification/> */}
      {/* <Editprofile/> */}
      {/* <MyAccount/> */}
      {/* <Myjob/> */}
      {/* <Dashboardadmin/> */}
      
      
      
    </div>
  );
}

export default App;
