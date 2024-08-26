import { BrowserRouter as Router ,Route,Routes } from "react-router-dom"
import Home from "./Home"
import AddItem from "./AddItem"
import UpdateItem from "./UpdateItem"
import DeleteItem from "./DeleteItem"
function Navigation() {
  return (
    <div>
          <Router>
                <Routes>
                     <Route path="/" element={<Home/>}/>
                     <Route path="/add-item" element={<AddItem/>}/>   
                     <Route path="/update-item" element={<UpdateItem/>}/>
                     <Route path="/delete-item" element={<DeleteItem/>}/>

                </Routes>
          </Router>
    </div>
  )
}

export default Navigation