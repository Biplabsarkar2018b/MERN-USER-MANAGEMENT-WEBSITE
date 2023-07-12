
import {BrowserRouter, Route, Routes} from "react-router-dom"
import UserList from "./screens/UserList";
import UserData from "./screens/UserData";
import CreateUpdateUser from "./screens/CreateUpdateUser";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/user/:id" element={<UserData/>}/>
        <Route path="/edituser/:id?" element={<CreateUpdateUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
