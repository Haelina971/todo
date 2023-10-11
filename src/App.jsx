import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './styles.css';
import { Route, Routes } from 'react-router-dom';
import ToDos from './Components/Pages/ToDos';
import Layout from './Components/Pages/Layout';
import SignUp from './Components/Pages/SignUp';
import LogIn from './Components/Pages/LogIn';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

const App = () => {
  //Use Routes to render different pages
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/pages/home" element={<Home />}></Route>
          <Route path="/pages/signup" element={<SignUp />}></Route>
          <Route path="/pages/login" element={<LogIn />}></Route>
          <Route path="/pages/about" element={<About />}></Route>
          <Route path="/todolist" element={<ToDos />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
