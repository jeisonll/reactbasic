import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from "../Home";

const App = () => (


    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/fg" element={<Home/>}/>
        </Routes>
    </BrowserRouter>

)
export default App;