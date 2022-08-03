import Header from "./components/header/Header";
import Post from "./components/post/Post";
import Posts from "./components/posts/Posts";
import Sidebar from "./components/sidebar/Sidebar";
import SinglePost from "./components/singlePost/SinglePost";
import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Write from "./pages/write/Write";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const {user} = useContext(Context) ;
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/register" element={user? <Homepage/> :<Register/>}/>
        <Route path="/login" element={user? <Homepage/> :<Login/>}/>
        <Route path="/write" element={user?<Write/>: <Register/>}/>
        <Route path="/settings" element={user?<Settings/>: <Register/>}/>
        <Route path="/post/:postId" element={<SinglePost/>}/>
         

      </Routes>
    </Router>
    
  );
}

export default App;
